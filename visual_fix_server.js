const http = require('http');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { exec } = require('child_process');

const PORT = 3005;
const DIRS_TO_SCAN = [
    'd:/Div mangal/ganpatijii/Antique-Solapur-Ganeshji-Catalogue/images',
    'd:/Div mangal/ganpatijii/Eco-Friendly-Ganeshji-Catalogue/images'
];

let allImages = [];

function scanForFiles(currentDir) {
    if (!fs.existsSync(currentDir)) return;
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanForFiles(fullPath);
        } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
            allImages.push(fullPath);
        }
    }
}
for (let d of DIRS_TO_SCAN) scanForFiles(d);

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
            <head>
                <title>Visual Image Fixer</title>
                <style>
                    body { font-family: sans-serif; background: #222; color: #fff; padding: 20px; }
                    .grid { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
                    .card { background: #333; padding: 10px; border-radius: 8px; text-align: center; }
                    .card img { max-width: 250px; max-height: 250px; display: block; margin: 0 auto 10px auto; }
                    button { padding: 10px 20px; font-size: 16px; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 4px; }
                    .nav { text-align: center; margin-top: 30px; margin-bottom: 30px; }
                </style>
            </head>
            <body>
                <h1 style="text-align: center">Fix Images (Page <span id="page-num"></span>)</h1>
                <div class="nav">
                    <button id="btn-next" onclick="nextPage()">Next Page</button>
                    <div id="status" style="margin-top: 10px; color: #4f4;"></div>
                </div>
                <div class="grid" id="grid"></div>
                <script>
                    const images = ${JSON.stringify(allImages.map(p => p.replace(/\\\\/g, '/')))};
                    let currentPage = 0;
                    const perPage = 30;

                    function renderPage() {
                        document.getElementById('page-num').innerText = currentPage + 1;
                        const grid = document.getElementById('grid');
                        grid.innerHTML = '';
                        
                        const start = currentPage * perPage;
                        const end = Math.min(start + perPage, images.length);
                        const slice = images.slice(start, end);
                        
                        if (slice.length === 0) {
                            grid.innerHTML = '<h2>All images checked!</h2>';
                            return;
                        }
                        
                        slice.forEach((img, i) => {
                            const id = start + i;
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = \`
                                <img src="/image?id=\${id}&t=\${Date.now()}" id="img-\${id}">
                                <button onclick="rotate(\${id})">Rotate 90° CW</button>
                            \`;
                            grid.appendChild(card);
                        });
                    }

                    async function rotate(id) {
                        const btn = event.target;
                        btn.innerText = "Rotating...";
                        btn.disabled = true;
                        
                        const res = await fetch('/api/rotate?id=' + id);
                        if (res.ok) {
                            document.getElementById('img-' + id).src = '/image?id=' + id + '&t=' + Date.now();
                            btn.innerText = "Rotate 90° CW";
                            btn.disabled = false;
                        } else {
                            btn.innerText = "Error";
                        }
                    }

                    function nextPage() {
                        if ((currentPage + 1) * perPage >= images.length) {
                            document.getElementById('status').innerText = "DONE! You have reached the end.";
                            return;
                        }
                        currentPage++;
                        renderPage();
                        window.scrollTo(0,0);
                    }

                    renderPage();
                </script>
            </body>
            </html>
        `);
    } else if (req.url.startsWith('/image?id=')) {
        const id = parseInt(new URL(req.url, 'http://localhost').searchParams.get('id'));
        if (id >= 0 && id < allImages.length) {
            const ext = path.extname(allImages[id]).toLowerCase();
            res.writeHead(200, { 'Content-Type': ext === '.png' ? 'image/png' : 'image/jpeg' });
            fs.createReadStream(allImages[id]).pipe(res);
        } else {
            res.writeHead(404);
            res.end();
        }
    } else if (req.url.startsWith('/api/rotate?id=')) {
        const id = parseInt(new URL(req.url, 'http://localhost').searchParams.get('id'));
        if (id >= 0 && id < allImages.length) {
            const p = allImages[id];
            try {
                const buf = fs.readFileSync(p);
                const rotated = await sharp(buf).rotate(90).jpeg({ quality: 85 }).toBuffer();
                fs.writeFileSync(p, rotated);
                res.writeHead(200);
                res.end('OK');
            } catch (e) {
                res.writeHead(500);
                res.end(e.message);
            }
        } else {
            res.writeHead(404);
            res.end();
        }
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Visual tool running on http://localhost:${PORT}`);
});
