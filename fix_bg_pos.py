with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('background-position: center;', 'background-position: top center;')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
