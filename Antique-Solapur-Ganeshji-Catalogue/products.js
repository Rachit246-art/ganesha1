// Array of all products with exact data for individual editing
const products = [
    {
        "id": "laddu-gopal",
        "title": "Laddu Gopal",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS01/IMG_6057.JPG",
        "code": "DMMS01",
        "size": "1.0ft (12inches x 12inches)",
        "images": [
            "images/S01-S40/DMMS01/IMG_6057.JPG",
            "images/S01-S40/DMMS01/IMG_6058.JPG"
        ]
    },
    {
        "id": "laddu-gopal-2",
        "title": "Laddu Gopal",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS02/IMG_6063.JPG",
        "code": "DMMS02",
        "size": "1.0ft (12inches x 12inches)",
        "images": [
            "images/S01-S40/DMMS02/IMG_6063.JPG",
            "images/S01-S40/DMMS02/IMG_6064.JPG"
        ]
    },
    {
        "id": "laddu-gopal-3",
        "title": "Laddu Gopal",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS03/IMG_6069.JPG",
        "code": "DMMS03",
        "size": "1.0ft (12inches x 12inches)",
        "images": [
            "images/S01-S40/DMMS03/IMG_6069.JPG",
            "images/S01-S40/DMMS03/IMG_6070.JPG"
        ]
    },
    {
        "id": "laddu-gopal-4",
        "title": "Laddu Gopal",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS01A/IMG_6293.JPG",
        "code": "DMMS01A",
        "size": "1.0ft (12inches x 12inches)",
        "images": [
            "images/S01-S40/DMMS01A/IMG_6293.JPG",
            "images/S01-S40/DMMS01A/IMG_6294.JPG"
        ]
    },
    {
        "id": "damru-ganapati",
        "title": "Damru Ganapati",
        "price": "₹2,600",
        "originalPrice": "₹3,400",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS04/IMG_6080.JPG",
        "code": "DMMS04",
        "size": "1.1ft (9inches x 13inches)",
        "images": [
            "images/S01-S40/DMMS04/IMG_6080.JPG",
            "images/S01-S40/DMMS04/IMG_6081.JPG"
        ]
    },
    {
        "id": "damru-ganapati-2",
        "title": "Damru Ganapati",
        "price": "₹2,600",
        "originalPrice": "₹3,400",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS05/IMG_6074.JPG",
        "code": "DMMS05",
        "size": "1.1ft (9inches x 13inches)",
        "images": [
            "images/S01-S40/DMMS05/IMG_6074.JPG",
            "images/S01-S40/DMMS05/IMG_6075.JPG"
        ]
    },
    {
        "id": "damru-ganapati-3",
        "title": "Damru Ganapati",
        "price": "₹2,600",
        "originalPrice": "₹3,400",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS06/IMG_6086.JPG",
        "code": "DMMS06",
        "size": "1.1ft (9inches x 13inches)",
        "images": [
            "images/S01-S40/DMMS06/IMG_6086.JPG",
            "images/S01-S40/DMMS06/IMG_6087.JPG"
        ]
    },
    {
        "id": "damru-ganapati-4",
        "title": "Damru Ganapati",
        "price": "₹2,600",
        "originalPrice": "₹3,400",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS07/IMG_6080.JPG",
        "code": "DMMS07",
        "size": "1.1ft (9inches x 13inches)",
        "images": [
            "images/S01-S40/DMMS07/IMG_6080.JPG",
            "images/S01-S40/DMMS07/IMG_6081.JPG"
        ]
    },
    {
        "id": "mangal-vinayak",
        "title": "Mangal Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS08/IMG_6092.JPG",
        "code": "DMMS08",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS08/IMG_6092.JPG",
            "images/S01-S40/DMMS08/IMG_6093.JPG"
        ]
    },
    {
        "id": "mangal-vinayak-2",
        "title": "Mangal Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS09/IMG_6100.JPG",
        "code": "DMMS09",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS09/IMG_6100.JPG",
            "images/S01-S40/DMMS09/IMG_6101.JPG"
        ]
    },
    {
        "id": "mangal-vinayak-3",
        "title": "Mangal Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS10/IMG_6106.JPG",
        "code": "DMMS10",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS10/IMG_6106.JPG",
            "images/S01-S40/DMMS10/IMG_6107.JPG"
        ]
    },
    {
        "id": "mangal-vinayak-4",
        "title": "Mangal Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS11/IMG_6112.JPG",
        "code": "DMMS11",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS11/IMG_6112.JPG",
            "images/S01-S40/DMMS11/IMG_6113.JPG"
        ]
    },
    {
        "id": "jhula-krishna",
        "title": "Jhula Krishna",
        "price": "₹3,500",
        "originalPrice": "₹4,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS12/IMG_6118.JPG",
        "code": "DMMS12",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS12/IMG_6118.JPG",
            "images/S01-S40/DMMS12/IMG_6119.JPG"
        ]
    },
    {
        "id": "jhula-krishna-2",
        "title": "Jhula Krishna",
        "price": "₹3,500",
        "originalPrice": "₹4,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS13/IMG_6130.JPG",
        "code": "DMMS13",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS13/IMG_6130.JPG",
            "images/S01-S40/DMMS13/IMG_6131.JPG"
        ]
    },
    {
        "id": "jhula-krishna-3",
        "title": "Jhula Krishna",
        "price": "₹3,500",
        "originalPrice": "₹4,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS14/IMG_6136.JPG",
        "code": "DMMS14",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS14/IMG_6136.JPG",
            "images/S01-S40/DMMS14/IMG_6137.JPG"
        ]
    },
    {
        "id": "jhula-krishna-4",
        "title": "Jhula Krishna",
        "price": "₹3,500",
        "originalPrice": "₹4,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS15/IMG_6150.JPG",
        "code": "DMMS15",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS15/IMG_6150.JPG",
            "images/S01-S40/DMMS15/IMG_6151.JPG"
        ]
    },
    {
        "id": "pramoda",
        "title": "Pramoda",
        "price": "₹1,700",
        "originalPrice": "₹2,200",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS16/IMG_6158.JPG",
        "code": "DMMS16",
        "size": "1.3ft (10inches x 16inches)",
        "images": [
            "images/S01-S40/DMMS16/IMG_6158.JPG",
            "images/S01-S40/DMMS16/IMG_6159.JPG"
        ]
    },
    {
        "id": "saubhagya-ganapati",
        "title": "Saubhagya Ganapati",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS17/IMG_6162.JPG",
        "code": "DMMS17",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS17/IMG_6162.JPG",
            "images/S01-S40/DMMS17/IMG_6163.JPG"
        ]
    },
    {
        "id": "saubhagya-ganapati-2",
        "title": "Saubhagya Ganapati",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS18/IMG_6168.JPG",
        "code": "DMMS18",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS18/IMG_6168.JPG",
            "images/S01-S40/DMMS18/IMG_6169.JPG"
        ]
    },
    {
        "id": "saubhagya-ganapati-3",
        "title": "Saubhagya Ganapati",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS19/IMG_6177.JPG",
        "code": "DMMS19",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS19/IMG_6177.JPG",
            "images/S01-S40/DMMS19/IMG_6180.JPG"
        ]
    },
    {
        "id": "saubhagya-ganapati-4",
        "title": "Saubhagya Ganapati",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS20/IMG_6188.JPG",
        "code": "DMMS20",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS20/IMG_6188.JPG",
            "images/S01-S40/DMMS20/IMG_6189.JPG"
        ]
    },
    {
        "id": "raj-tilak-ganapati-3",
        "title": "Raj Tilak Ganapati",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS23/IMG_6207.JPG",
        "code": "DMMS23",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS23/IMG_6207.JPG",
            "images/S01-S40/DMMS23/IMG_6208.JPG"
        ]
    },
    {
        "id": "ekadanta",
        "title": "Ekadanta",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS25/IMG_6213.JPG",
        "code": "DMMS25",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS25/IMG_6213.JPG",
            "images/S01-S40/DMMS25/IMG_6214.JPG"
        ]
    },
    {
        "id": "ekadanta-2",
        "title": "Ekadanta",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS26/IMG_6222.JPG",
        "code": "DMMS26",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS26/IMG_6222.JPG",
            "images/S01-S40/DMMS26/IMG_6223.JPG"
        ]
    },
    {
        "id": "ekadanta-3",
        "title": "Ekadanta",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS27/IMG_6226.JPG",
        "code": "DMMS27",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS27/IMG_6226.JPG",
            "images/S01-S40/DMMS27/IMG_6227.JPG"
        ]
    },
    {
        "id": "ekadanta-4",
        "title": "Ekadanta",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS28/IMG_6234.JPG",
        "code": "DMMS28",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS28/IMG_6234.JPG",
            "images/S01-S40/DMMS28/IMG_6235.JPG"
        ]
    },
    {
        "id": "mini-dagdusheth-2",
        "title": "Mini Dagdusheth",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS30/IMG_6247.JPG",
        "code": "DMMS30",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS30/IMG_6247.JPG",
            "images/S01-S40/DMMS30/IMG_6248.JPG"
        ]
    },
    {
        "id": "mini-dagdusheth-3",
        "title": "Mini Dagdusheth",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS31/IMG_6256.JPG",
        "code": "DMMS31",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS31/IMG_6256.JPG",
            "images/S01-S40/DMMS31/IMG_6257.JPG"
        ]
    },
    {
        "id": "mini-dagdusheth-4",
        "title": "Mini Dagdusheth",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS32/IMG_6260.JPG",
        "code": "DMMS32",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS32/IMG_6260.JPG",
            "images/S01-S40/DMMS32/IMG_6261.JPG"
        ]
    },
    {
        "id": "shakti-peeth-ganpathi",
        "title": "Shakti Peeth Ganpathi",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS33/IMG_6268.JPG",
        "code": "DMMS33",
        "size": "1.3ft (12inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS33/IMG_6268.JPG",
            "images/S01-S40/DMMS33/IMG_6269.JPG"
        ]
    },
    {
        "id": "shakti-peeth-ganpathi-3",
        "title": "Shakti Peeth Ganpathi",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS35/IMG_6280.JPG",
        "code": "DMMS35",
        "size": "1.3ft (12inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS35/IMG_6280.JPG",
            "images/S01-S40/DMMS35/IMG_6281.JPG"
        ]
    },
    {
        "id": "shakti-peeth-ganpathi-4",
        "title": "Shakti Peeth Ganpathi",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS36/IMG_6284.JPG",
        "code": "DMMS36",
        "size": "1.3ft (12inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS36/IMG_6284.JPG",
            "images/S01-S40/DMMS36/IMG_6285.JPG"
        ]
    },
    {
        "id": "garuda-vishnu",
        "title": "Garuda Vishnu",
        "price": "₹3,000",
        "originalPrice": "₹3,900",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS37/IMG_6297.JPG",
        "code": "DMMS37",
        "size": "1.3ft (13inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS37/IMG_6297.JPG",
            "images/S01-S40/DMMS37/IMG_6298.JPG"
        ]
    },
    {
        "id": "garuda-vishnu-2",
        "title": "Garuda Vishnu",
        "price": "₹3,000",
        "originalPrice": "₹3,900",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS38/IMG_6305.JPG",
        "code": "DMMS38",
        "size": "1.3ft (13inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS38/IMG_6305.JPG",
            "images/S01-S40/DMMS38/IMG_6306.JPG"
        ]
    },
    {
        "id": "garuda-vishnu-3",
        "title": "Garuda Vishnu",
        "price": "₹3,000",
        "originalPrice": "₹3,900",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS39/IMG_6309.JPG",
        "code": "DMMS39",
        "size": "1.3ft (13inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS39/IMG_6309.JPG",
            "images/S01-S40/DMMS39/IMG_6310.JPG"
        ]
    },
    {
        "id": "garuda-vishnu-4",
        "title": "Garuda Vishnu",
        "price": "₹3,000",
        "originalPrice": "₹3,900",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS40/IMG_6317.JPG",
        "code": "DMMS40",
        "size": "1.3ft (13inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS40/IMG_6317.JPG",
            "images/S01-S40/DMMS40/IMG_6318.JPG"
        ]
    },
    {
        "id": "ram-lalla-ganesh",
        "title": "Ram Lalla Ganesh",
        "price": "₹3,500",
        "originalPrice": "₹4,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS41/IMG_6321.JPG",
        "code": "DMMS41",
        "size": "1.1ft (12inches x 13inches)",
        "images": [
            "images/S41-S70/DMMS41/IMG_6321.JPG",
            "images/S41-S70/DMMS41/IMG_6322.JPG"
        ]
    },
    {
        "id": "ram-lalla-ganesh-2",
        "title": "Ram Lalla Ganesh",
        "price": "₹3,500",
        "originalPrice": "₹4,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS42/IMG_6330.JPG",
        "code": "DMMS42",
        "size": "1.1ft (12inches x 13inches)",
        "images": [
            "images/S41-S70/DMMS42/IMG_6330.JPG",
            "images/S41-S70/DMMS42/IMG_6331.JPG"
        ]
    },
    {
        "id": "baal-rudra-ganapati",
        "title": "Baal Rudra Ganapati",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS43/IMG_6336.JPG",
        "code": "DMMS43",
        "size": "1.3ft (10inches x 15inches)",
        "images": [
            "images/S41-S70/DMMS43/IMG_6336.JPG",
            "images/S41-S70/DMMS43/IMG_6337.JPG"
        ]
    },
    {
        "id": "baal-rudra-ganapati-2",
        "title": "Baal Rudra Ganapati",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS44/IMG_6340.JPG",
        "code": "DMMS44",
        "size": "1.3ft (10inches x 15inches)",
        "images": [
            "images/S41-S70/DMMS44/IMG_6340.JPG",
            "images/S41-S70/DMMS44/IMG_6341.JPG"
        ]
    },
    {
        "id": "baal-rudra-ganapati-3",
        "title": "Baal Rudra Ganapati",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS45/IMG_6350.JPG",
        "code": "DMMS45",
        "size": "1.3ft (10inches x 15inches)",
        "images": [
            "images/S41-S70/DMMS45/IMG_6350.JPG",
            "images/S41-S70/DMMS45/IMG_6351.JPG"
        ]
    },
    {
        "id": "sumukha",
        "title": "Sumukha",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS46/IMG_6354.JPG",
        "code": "DMMS46",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S41-S70/DMMS46/IMG_6354.JPG",
            "images/S41-S70/DMMS46/IMG_6355.JPG"
        ]
    },
    {
        "id": "sumukha-3",
        "title": "Sumukha",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS48/IMG_6378.JPG",
        "code": "DMMS48",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S41-S70/DMMS48/IMG_6378.JPG",
            "images/S41-S70/DMMS48/IMG_6379.JPG"
        ]
    },
    {
        "id": "sumukha-4",
        "title": "Sumukha",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS49/IMG_6361.JPG",
        "code": "DMMS49",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S41-S70/DMMS49/IMG_6361.JPG",
            "images/S41-S70/DMMS49/IMG_6362.JPG"
        ]
    },
    {
        "id": "shubh-labh-vinayak",
        "title": "Shubh-Labh Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS50/IMG_6391.JPG",
        "code": "DMMS50",
        "size": "1.0ft (10inches x 12inches)",
        "images": [
            "images/S41-S70/DMMS50/IMG_6391.JPG",
            "images/S41-S70/DMMS50/IMG_6392.JPG"
        ]
    },
    {
        "id": "shubh-labh-vinayak-3",
        "title": "Shubh-Labh Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS52/IMG_6403.JPG",
        "code": "DMMS52",
        "size": "1.0ft (10inches x 12inches)",
        "images": [
            "images/S41-S70/DMMS52/IMG_6403.JPG",
            "images/S41-S70/DMMS52/IMG_6404.JPG"
        ]
    },
    {
        "id": "shubh-labh-vinayak-4",
        "title": "Shubh-Labh Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS53/IMG_6411.JPG",
        "code": "DMMS53",
        "size": "1.0ft (10inches x 12inches)",
        "images": [
            "images/S41-S70/DMMS53/IMG_6411.JPG",
            "images/S41-S70/DMMS53/IMG_6412.JPG"
        ]
    },
    {
        "id": "mooshikavahana",
        "title": "Mooshikavahana",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS54/IMG_6415.JPG",
        "code": "DMMS54",
        "size": "1.1ft (10inches x 13inches)",
        "images": [
            "images/S41-S70/DMMS54/IMG_6415.JPG",
            "images/S41-S70/DMMS54/IMG_6416.JPG"
        ]
    },
    {
        "id": "mooshikavahana-2",
        "title": "Mooshikavahana",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS55/IMG_6423.JPG",
        "code": "DMMS55",
        "size": "1.1ft (10inches x 13inches)",
        "images": [
            "images/S41-S70/DMMS55/IMG_6423.JPG",
            "images/S41-S70/DMMS55/IMG_6424.JPG"
        ]
    },
    {
        "id": "mooshikavahana-3",
        "title": "Mooshikavahana",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS56/IMG_6427.JPG",
        "code": "DMMS56",
        "size": "1.1ft (10inches x 13inches)",
        "images": [
            "images/S41-S70/DMMS56/IMG_6427.JPG",
            "images/S41-S70/DMMS56/IMG_6428.JPG"
        ]
    },
    {
        "id": "mooshikavahana-4",
        "title": "Mooshikavahana",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS57/IMG_6434.JPG",
        "code": "DMMS57",
        "size": "1.1ft (10inches x 13inches)",
        "images": [
            "images/S41-S70/DMMS57/IMG_6434.JPG",
            "images/S41-S70/DMMS57/IMG_6435.JPG"
        ]
    },
    {
        "id": "mooshikavahana-5",
        "title": "Mooshikavahana",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS58/IMG_6434.JPG",
        "code": "DMMS58",
        "size": "1.1ft (10inches x 13inches)",
        "images": [
            "images/S41-S70/DMMS58/IMG_6434.JPG",
            "images/S41-S70/DMMS58/IMG_6435.JPG"
        ]
    },
    {
        "id": "muddhu-ganpathi",
        "title": "Muddhu Ganpathi",
        "price": "₹1,800",
        "originalPrice": "₹2,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS59/IMG_6441.JPG",
        "code": "DMMS59",
        "size": "0.9ft (9inches x 11inches)",
        "images": [
            "images/S41-S70/DMMS59/IMG_6441.JPG",
            "images/S41-S70/DMMS59/IMG_6442.JPG"
        ]
    },
    {
        "id": "surya-prabha-ganpathi-2",
        "title": "Surya Prabha Ganpathi",
        "price": "₹2,600",
        "originalPrice": "₹3,400",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS61/IMG_6456.JPG",
        "code": "DMMS61",
        "size": "1.2ft (10inches x 14inches)",
        "images": [
            "images/S41-S70/DMMS61/IMG_6456.JPG",
            "images/S41-S70/DMMS61/IMG_6457.JPG"
        ]
    },
    {
        "id": "surya-prabha-ganpathi-3",
        "title": "Surya Prabha Ganpathi",
        "price": "₹2,600",
        "originalPrice": "₹3,400",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS62D/IMG_6456.JPG",
        "code": "DMMS62D",
        "size": "1.2ft (10inches x 14inches)",
        "images": [
            "images/S41-S70/DMMS62D/IMG_6456.JPG",
            "images/S41-S70/DMMS62D/IMG_6457.JPG"
        ]
    },
    {
        "id": "lambodara-4",
        "title": "Lambodara",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS63/IMG_6460.JPG",
        "code": "DMMS63",
        "size": "1.2ft (10inches x 14inches)",
        "images": [
            "images/S41-S70/DMMS63/IMG_6460.JPG",
            "images/S41-S70/DMMS63/IMG_6461.JPG"
        ]
    },
    {
        "id": "lambodara-5",
        "title": "Lambodara",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS64/IMG_6469.JPG",
        "code": "DMMS64",
        "size": "1.2ft (10inches x 14inches)",
        "images": [
            "images/S41-S70/DMMS64/IMG_6469.JPG",
            "images/S41-S70/DMMS64/IMG_6470.JPG"
        ]
    },
    {
        "id": "lambodara-6",
        "title": "Lambodara",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS65/IMG_6473.JPG",
        "code": "DMMS65",
        "size": "1.2ft (10inches x 14inches)",
        "images": [
            "images/S41-S70/DMMS65/IMG_6473.JPG",
            "images/S41-S70/DMMS65/IMG_6474.JPG"
        ]
    },
    {
        "id": "lambodara-7",
        "title": "Lambodara",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS66/IMG_6460.JPG",
        "code": "DMMS66",
        "size": "1.2ft (10inches x 14inches)",
        "images": [
            "images/S41-S70/DMMS66/IMG_6460.JPG",
            "images/S41-S70/DMMS66/IMG_6461.JPG"
        ]
    },
    {
        "id": "prasanna-ganpathi-3",
        "title": "Prasanna Ganpathi",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS69/IMG_6494.JPG",
        "code": "DMMS69",
        "size": "1.3ft (11inches x 15inches)",
        "images": [
            "images/S41-S70/DMMS69/IMG_6494.JPG",
            "images/S41-S70/DMMS69/IMG_6495.JPG"
        ]
    },
    {
        "id": "prasanna-ganpathi-4",
        "title": "Prasanna Ganpathi",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS70/IMG_6481.JPG",
        "code": "DMMS70",
        "size": "1.3ft (11inches x 15inches)",
        "images": [
            "images/S41-S70/DMMS70/IMG_6481.JPG",
            "images/S41-S70/DMMS70/IMG_6482.JPG"
        ]
    },
    {
        "id": "balaji-ganesha",
        "title": "Balaji Ganesha",
        "price": "₹10,400",
        "originalPrice": "₹13,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM001/IMG_5286.JPG",
        "code": "DMM01",
        "size": "2.3ft (18inches x 27inches)",
        "images": [
            "images/1-40/DMM001/IMG_5286.JPG",
            "images/1-40/DMM001/IMG_5293.JPG"
        ]
    },
    {
        "id": "balaji-ganesha-2",
        "title": "Balaji Ganesha",
        "price": "₹10,400",
        "originalPrice": "₹13,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM002/IMG_5684.JPG",
        "code": "DMM02",
        "size": "2.3ft (18inches x 27inches)",
        "images": [
            "images/1-40/DMM002/IMG_5684.JPG",
            "images/1-40/DMM002/IMG_5685.JPG"
        ]
    },
    {
        "id": "abhayahastha-gajamukha",
        "title": "Abhayahastha Gajamukha",
        "price": "₹8,600",
        "originalPrice": "₹11,200",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM004/IMG_5421.JPG",
        "code": "DMM04",
        "size": "1.7ft (18inches x 20inches)",
        "images": [
            "images/1-40/DMM004/IMG_5421.JPG",
            "images/1-40/DMM004/IMG_5434.JPG"
        ]
    },
    {
        "id": "abhayahastha-gajamukha-2",
        "title": "Abhayahastha Gajamukha",
        "price": "₹8,600",
        "originalPrice": "₹11,200",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM005/IMG_5712.JPG",
        "code": "DMM05",
        "size": "1.7ft (18inches x 20inches)",
        "images": [
            "images/1-40/DMM005/IMG_5712.JPG",
            "images/1-40/DMM005/IMG_5713.JPG"
        ]
    },
    {
        "id": "abhayahastha-gajamukha-3",
        "title": "Abhayahastha Gajamukha",
        "price": "₹8,600",
        "originalPrice": "₹11,200",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM006/IMG_5723.JPG",
        "code": "DMM06",
        "size": "1.7ft (18inches x 20inches)",
        "images": [
            "images/1-40/DMM006/IMG_5723.JPG",
            "images/1-40/DMM006/IMG_5725.JPG"
        ]
    },
    {
        "id": "basuri-kannaya",
        "title": "Basuri Kannaya",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM007/IMG_5735.JPG",
        "code": "DMM07",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/1-40/DMM007/IMG_5735.JPG",
            "images/1-40/DMM007/IMG_5736.JPG"
        ]
    },
    {
        "id": "basuri-kannaya-2",
        "title": "Basuri Kannaya",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM008/IMG_5748.JPG",
        "code": "DMM08",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/1-40/DMM008/IMG_5748.JPG",
            "images/1-40/DMM008/IMG_5751.JPG"
        ]
    },
    {
        "id": "basuri-kannaya-3",
        "title": "Basuri Kannaya",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM009/IMG_5760.JPG",
        "code": "DMM09",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/1-40/DMM009/IMG_5760.JPG",
            "images/1-40/DMM009/IMG_5761.JPG"
        ]
    },
    {
        "id": "sri-ajoba-ganpathi",
        "title": "Sri Ajoba Ganpathi",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM010/IMG_5777.JPG",
        "code": "DMM10",
        "size": "1.7ft (18inches x 20inches)",
        "images": [
            "images/1-40/DMM010/IMG_5777.JPG",
            "images/1-40/DMM010/IMG_5778.JPG"
        ]
    },
    {
        "id": "neelkanth-nandhivahan",
        "title": "Neelkanth Nandhivahan",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM013/IMG_5813.JPG",
        "code": "DMM13",
        "size": "1.9ft (20inches x 23inches)",
        "images": [
            "images/1-40/DMM013/IMG_5813.JPG",
            "images/1-40/DMM013/IMG_5814.JPG"
        ]
    },
    {
        "id": "neelkanth-nandhivahan-3",
        "title": "Neelkanth Nandhivahan",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM015/IMG_5827.JPG",
        "code": "DMM15",
        "size": "1.9ft (20inches x 23inches)",
        "images": [
            "images/1-40/DMM015/IMG_5827.JPG",
            "images/1-40/DMM015/IMG_5828.JPG"
        ]
    },
    {
        "id": "skanda-ganapati",
        "title": "Skanda Ganapati",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM016/IMG_5833.JPG",
        "code": "DMM16",
        "size": "1.5ft (18inches x 18inches)",
        "images": [
            "images/1-40/DMM016/IMG_5833.JPG",
            "images/1-40/DMM016/IMG_5834.JPG"
        ]
    },
    {
        "id": "skanda-ganapati-2",
        "title": "Skanda Ganapati",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM017/IMG_5841.JPG",
        "code": "DMM17",
        "size": "1.5ft (18inches x 18inches)",
        "images": [
            "images/1-40/DMM017/IMG_5841.JPG",
            "images/1-40/DMM017/IMG_5843.JPG"
        ]
    },
    {
        "id": "skanda-ganapati-3",
        "title": "Skanda Ganapati",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM018/IMG_5848.JPG",
        "code": "DMM18",
        "size": "1.5ft (18inches x 18inches)",
        "images": [
            "images/1-40/DMM018/IMG_5848.JPG",
            "images/1-40/DMM018/IMG_5849.JPG"
        ]
    },
    {
        "id": "gajamukha",
        "title": "Gajamukha",
        "price": "₹6,300",
        "originalPrice": "₹8,200",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM019/IMG_5856.JPG",
        "code": "DMM19",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/1-40/DMM019/IMG_5856.JPG",
            "images/1-40/DMM019/IMG_5857.JPG"
        ]
    },
    {
        "id": "gajamukha-2",
        "title": "Gajamukha",
        "price": "₹6,300",
        "originalPrice": "₹8,200",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM020/IMG_5862.JPG",
        "code": "DMM20",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/1-40/DMM020/IMG_5862.JPG",
            "images/1-40/DMM020/IMG_5863.JPG"
        ]
    },
    {
        "id": "gajamukha-3",
        "title": "Gajamukha",
        "price": "₹6,300",
        "originalPrice": "₹8,200",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM021/IMG_5869.JPG",
        "code": "DMM21",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/1-40/DMM021/IMG_5869.JPG",
            "images/1-40/DMM021/IMG_5870.JPG"
        ]
    },
    {
        "id": "maha-darbar-ganpathi-3",
        "title": "Maha Darbar Ganpathi",
        "price": "₹12,900",
        "originalPrice": "₹16,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM027/IMG_5923.JPG",
        "code": "DMM27",
        "size": "2.5ft (22inches x 30inches)",
        "images": [
            "images/1-40/DMM027/IMG_5923.JPG",
            "images/1-40/DMM027/IMG_5924.JPG"
        ]
    },
    {
        "id": "sri-rama-ganpathi",
        "title": "Sri Rama Ganpathi",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM28/IMG_6554.JPG",
        "code": "DMM28",
        "size": "1.8ft (17inches x 21inches)",
        "images": [
            "images/1-40/DMM28/IMG_6554.JPG",
            "images/1-40/DMM28/IMG_6563.JPG"
        ]
    },
    {
        "id": "sri-rama-ganpathi-2",
        "title": "Sri Rama Ganpathi",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM29/IMG_6579.JPG",
        "code": "DMM29",
        "size": "1.8ft (17inches x 21inches)",
        "images": [
            "images/1-40/DMM29/IMG_6579.JPG",
            "images/1-40/DMM29/IMG_6580.JPG"
        ]
    },
    {
        "id": "sri-rama-ganpathi-3",
        "title": "Sri Rama Ganpathi",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM30D/IMG_6554.JPG",
        "code": "DMM30D",
        "size": "1.8ft (17inches x 21inches)",
        "images": [
            "images/1-40/DMM30D/IMG_6554.JPG",
            "images/1-40/DMM30D/IMG_6563.JPG"
        ]
    },
    {
        "id": "chandra-peetasana-ganesha",
        "title": "Chandra Peetasana Ganesha",
        "price": "₹5,800",
        "originalPrice": "₹7,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM31/IMG_6603.JPG",
        "code": "DMM31",
        "size": "1.6ft (15inches x 19inches)",
        "images": [
            "images/1-40/DMM31/IMG_6603.JPG",
            "images/1-40/DMM31/IMG_6604.JPG"
        ]
    },
    {
        "id": "chandra-peetasana-ganesha-2",
        "title": "Chandra Peetasana Ganesha",
        "price": "₹5,800",
        "originalPrice": "₹7,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM32/IMG_6612.JPG",
        "code": "DMM32",
        "size": "1.6ft (15inches x 19inches)",
        "images": [
            "images/1-40/DMM32/IMG_6612.JPG",
            "images/1-40/DMM32/IMG_6613.JPG"
        ]
    },
    {
        "id": "chandra-peetasana-ganesha-3",
        "title": "Chandra Peetasana Ganesha",
        "price": "₹5,800",
        "originalPrice": "₹7,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM33/IMG_6629.JPG",
        "code": "DMM33",
        "size": "1.6ft (15inches x 19inches)",
        "images": [
            "images/1-40/DMM33/IMG_6629.JPG",
            "images/1-40/DMM33/IMG_6631.JPG"
        ]
    },
    {
        "id": "dagdusheth",
        "title": "Dagdusheth",
        "price": "₹5,800",
        "originalPrice": "₹7,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM34/IMG_6634.JPG",
        "code": "DMM34",
        "size": "1.6ft (18inches x 19inches)",
        "images": [
            "images/1-40/DMM34/IMG_6634.JPG",
            "images/1-40/DMM34/IMG_6635.JPG"
        ]
    },
    {
        "id": "dagdusheth-2",
        "title": "Dagdusheth",
        "price": "₹5,800",
        "originalPrice": "₹7,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM35/IMG_6648.JPG",
        "code": "DMM35",
        "size": "1.6ft (18inches x 19inches)",
        "images": [
            "images/1-40/DMM35/IMG_6648.JPG",
            "images/1-40/DMM35/IMG_6649.JPG"
        ]
    },
    {
        "id": "dagdusheth-3",
        "title": "Dagdusheth",
        "price": "₹5,800",
        "originalPrice": "₹7,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM36/IMG_6655.JPG",
        "code": "DMM36",
        "size": "1.6ft (18inches x 19inches)",
        "images": [
            "images/1-40/DMM36/IMG_6655.JPG",
            "images/1-40/DMM36/IMG_6656.JPG"
        ]
    },
    {
        "id": "nauka-ganpathi",
        "title": "Nauka Ganpathi",
        "price": "₹3,700",
        "originalPrice": "₹4,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM37/IMG_6661.JPG",
        "code": "DMM37",
        "size": "1.3ft (13inches x 15inches)",
        "images": [
            "images/1-40/DMM37/IMG_6661.JPG",
            "images/1-40/DMM37/IMG_6662.JPG"
        ]
    },
    {
        "id": "nauka-ganpathi-2",
        "title": "Nauka Ganpathi",
        "price": "₹3,700",
        "originalPrice": "₹4,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM38/IMG_6672.JPG",
        "code": "DMM38",
        "size": "1.3ft (13inches x 15inches)",
        "images": [
            "images/1-40/DMM38/IMG_6672.JPG",
            "images/1-40/DMM38/IMG_6673.JPG"
        ]
    },
    {
        "id": "nauka-ganpathi-3",
        "title": "Nauka Ganpathi",
        "price": "₹3,700",
        "originalPrice": "₹4,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM39/IMG_6677.JPG",
        "code": "DMM39",
        "size": "1.3ft (13inches x 15inches)",
        "images": [
            "images/1-40/DMM39/IMG_6676.JPG",
            "images/1-40/DMM39/IMG_6677.JPG"
        ]
    },
    {
        "id": "moddak-priya-ganpathi",
        "title": "Moddak Priya Ganpathi",
        "price": "₹4,600",
        "originalPrice": "₹6,000",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM40/IMG_6684.JPG",
        "code": "DMM40",
        "size": "1.5ft (18inches x 18inches)",
        "images": [
            "images/1-40/DMM40/IMG_6684.JPG",
            "images/1-40/DMM40/IMG_6685.JPG"
        ]
    },
    {
        "id": "vidya-ganpathiji",
        "title": "Vidya Ganpathiji",
        "price": "₹4,300",
        "originalPrice": "₹5,600",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM41/IMG_6688.JPG",
        "code": "DMM41",
        "size": "1.5ft (15inches x 18inches)",
        "images": [
            "images/41-80/DMM41/IMG_6688.JPG",
            "images/41-80/DMM41/IMG_6690.JPG"
        ]
    },
    {
        "id": "vidya-ganpathiji-2",
        "title": "Vidya Ganpathiji",
        "price": "₹4,300",
        "originalPrice": "₹5,600",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM42/IMG_6698.JPG",
        "code": "DMM42",
        "size": "1.5ft (15inches x 18inches)",
        "images": [
            "images/41-80/DMM42/IMG_6698.JPG",
            "images/41-80/DMM42/IMG_6699.JPG"
        ]
    },
    {
        "id": "vidya-ganpathiji-3",
        "title": "Vidya Ganpathiji",
        "price": "₹4,300",
        "originalPrice": "₹5,600",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM43/IMG_6702.JPG",
        "code": "DMM43",
        "size": "1.5ft (15inches x 18inches)",
        "images": [
            "images/41-80/DMM43/IMG_6702.JPG",
            "images/41-80/DMM43/IMG_6703.JPG"
        ]
    },
    {
        "id": "sahukar-ganpathi",
        "title": "Sahukar Ganpathi",
        "price": "₹4,000",
        "originalPrice": "₹5,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM44/IMG_6710.JPG",
        "code": "DMM44",
        "size": "1.5ft (15inches x 18inches)",
        "images": [
            "images/41-80/DMM44/IMG_6710.JPG",
            "images/41-80/DMM44/IMG_6711.JPG"
        ]
    },
    {
        "id": "lambodara",
        "title": "Lambodara",
        "price": "₹4,300",
        "originalPrice": "₹5,600",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM45/IMG_6714.JPG",
        "code": "DMM45",
        "size": "1.8ft (19inches x 21inches)",
        "images": [
            "images/41-80/DMM45/IMG_6714.JPG",
            "images/41-80/DMM45/IMG_6715.JPG"
        ]
    },
    {
        "id": "lambodara-2",
        "title": "Lambodara",
        "price": "₹4,300",
        "originalPrice": "₹5,600",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM46/IMG_6721.JPG",
        "code": "DMM46",
        "size": "1.8ft (19inches x 21inches)",
        "images": [
            "images/41-80/DMM46/IMG_6721.JPG",
            "images/41-80/DMM46/IMG_6722.JPG"
        ]
    },
    {
        "id": "lambodara-3",
        "title": "Lambodara",
        "price": "₹4,300",
        "originalPrice": "₹5,600",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM47/IMG_6728.JPG",
        "code": "DMM47",
        "size": "1.8ft (19inches x 21inches)",
        "images": [
            "images/41-80/DMM47/IMG_6728.JPG",
            "images/41-80/DMM47/IMG_6729.JPG"
        ]
    },
    {
        "id": "vigneshwara",
        "title": "Vigneshwara",
        "price": "₹6,300",
        "originalPrice": "₹8,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM48/IMG_6785.JPG",
        "code": "DMM48",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/41-80/DMM48/IMG_6785.JPG",
            "images/41-80/DMM48/IMG_6786.JPG"
        ]
    },
    {
        "id": "vigneshwara-2",
        "title": "Vigneshwara",
        "price": "₹6,300",
        "originalPrice": "₹8,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM49/IMG_6793.JPG",
        "code": "DMM49",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/41-80/DMM49/IMG_6793.JPG",
            "images/41-80/DMM49/IMG_6794.JPG"
        ]
    },
    {
        "id": "vigneshwara-3",
        "title": "Vigneshwara",
        "price": "₹6,300",
        "originalPrice": "₹8,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM50/IMG_6800.JPG",
        "code": "DMM50",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/41-80/DMM50/IMG_6800.JPG",
            "images/41-80/DMM50/IMG_6801.JPG"
        ]
    },
    {
        "id": "bhalachandra",
        "title": "Bhalachandra",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM54/IMG_6831.JPG",
        "code": "DMM54",
        "size": "1.7ft (15inches x 20inches)",
        "images": [
            "images/41-80/DMM54/IMG_6831.JPG",
            "images/41-80/DMM54/IMG_6832.JPG"
        ]
    },
    {
        "id": "bhalachandra-3",
        "title": "Bhalachandra",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM56/IMG_6846.JPG",
        "code": "DMM56",
        "size": "1.7ft (15inches x 20inches)",
        "images": [
            "images/41-80/DMM56/IMG_6846.JPG",
            "images/41-80/DMM56/IMG_6847.JPG"
        ]
    },
    {
        "id": "mumbai-cha-raja",
        "title": "Mumbai Cha Raja",
        "price": "₹4,000",
        "originalPrice": "₹5,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM57/IMG_6854.JPG",
        "code": "DMM57",
        "size": "1.5ft (13inches x 18inches)",
        "images": [
            "images/41-80/DMM57/IMG_6854.JPG",
            "images/41-80/DMM57/IMG_6855.JPG"
        ]
    },
    {
        "id": "ganadhyaksha-dmm60",
        "title": "Ganadhyaksha",
        "price": "₹6,500",
        "originalPrice": "₹8,500",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM60/IMG_6877.JPG",
        "code": "DMM60",
        "size": "1.8ft (17inches x 21inches)",
        "images": [
            "images/41-80/DMM60/IMG_6877.JPG",
            "images/41-80/DMM60/IMG_6878.JPG"
        ]
    },
    {
        "id": "chinchpokli-chintamani",
        "title": "Chinchpokli Chintamani",
        "price": "₹10,400",
        "originalPrice": "₹13,500",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM61/IMG_6883.JPG",
        "code": "DMM61",
        "size": "2.3ft (18inches x 27inches)",
        "images": [
            "images/41-80/DMM61/IMG_6883.JPG",
            "images/41-80/DMM61/IMG_6885.JPG"
        ]
    },
    {
        "id": "chinchpokli-chintamani-3",
        "title": "Chinchpokli Chintamani",
        "price": "₹10,400",
        "originalPrice": "₹13,500",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM63/IMG_6918.JPG",
        "code": "DMM63",
        "size": "2.3ft (18inches x 27inches)",
        "images": [
            "images/41-80/DMM63/IMG_6918.JPG",
            "images/41-80/DMM63/IMG_6919.JPG"
        ]
    },
    {
        "id": "buddhipriya",
        "title": "Buddhipriya",
        "price": "₹4,600",
        "originalPrice": "₹6,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM64/IMG_6932.JPG",
        "code": "DMM64",
        "size": "1.8ft (15inches x 21inches)",
        "images": [
            "images/41-80/DMM64/IMG_6932.JPG",
            "images/41-80/DMM64/IMG_6933.JPG"
        ]
    },
    {
        "id": "buddhipriya-3",
        "title": "Buddhipriya",
        "price": "₹4,600",
        "originalPrice": "₹6,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM66/IMG_6948.JPG",
        "code": "DMM66",
        "size": "1.8ft (15inches x 21inches)",
        "images": [
            "images/41-80/DMM66/IMG_6948.JPG",
            "images/41-80/DMM66/IMG_6949.JPG"
        ]
    },
    {
        "id": "dongri-cha-raja",
        "title": "Dongri Cha Raja",
        "price": "₹10,900",
        "originalPrice": "₹14,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM70/IMG_6976.JPG",
        "code": "DMM70",
        "size": "2.5ft (23inches x 30inches)",
        "images": [
            "images/41-80/DMM70/IMG_6976.JPG",
            "images/41-80/DMM70/IMG_6978.JPG"
        ]
    },
    {
        "id": "dongri-cha-raja-2",
        "title": "Dongri Cha Raja",
        "price": "₹10,900",
        "originalPrice": "₹14,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM71/IMG_6982.JPG",
        "code": "DMM71",
        "size": "2.5ft (23inches x 30inches)",
        "images": [
            "images/41-80/DMM71/IMG_6982.JPG",
            "images/41-80/DMM71/IMG_6991.JPG"
        ]
    },
    {
        "id": "dongri-cha-raja-3",
        "title": "Dongri Cha Raja",
        "price": "₹10,900",
        "originalPrice": "₹14,200",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM72/IMG_7195.JPG",
        "code": "DMM72",
        "size": "2.5ft (23inches x 30inches)",
        "images": [
            "images/41-80/DMM72/IMG_7195.JPG",
            "images/41-80/DMM72/IMG_7201.JPG"
        ]
    },
    {
        "id": "dhoomravarna-2",
        "title": "Dhoomravarna",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM74/IMG_7012.JPG",
        "code": "DMM74",
        "size": "1.9ft (23inches x 23inches)",
        "images": [
            "images/41-80/DMM74/IMG_7012.JPG",
            "images/41-80/DMM74/IMG_7013.JPG"
        ]
    },
    {
        "id": "dhoomravarna-3",
        "title": "Dhoomravarna",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM75/IMG_7016.JPG",
        "code": "DMM75",
        "size": "1.9ft (23inches x 23inches)",
        "images": [
            "images/41-80/DMM75/IMG_7016.JPG",
            "images/41-80/DMM75/IMG_7017.JPG"
        ]
    },
    {
        "id": "siddhivinayaka",
        "title": "Siddhivinayaka",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM76/IMG_7030.JPG",
        "code": "DMM76",
        "size": "1.8ft (20inches x 22inches)",
        "images": [
            "images/41-80/DMM76/IMG_7030.JPG",
            "images/41-80/DMM76/IMG_7031.JPG"
        ]
    },
    {
        "id": "siddhivinayaka-2",
        "title": "Siddhivinayaka",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM77/IMG_7023.JPG",
        "code": "DMM77",
        "size": "1.8ft (20inches x 22inches)",
        "images": [
            "images/41-80/DMM77/IMG_7023.JPG",
            "images/41-80/DMM77/IMG_7024.JPG"
        ]
    },
    {
        "id": "kamala-priya",
        "title": "Kamala Priya",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM79/IMG_7056.JPG",
        "code": "DMM79",
        "size": "2.0ft (23inches x 24inches)",
        "images": [
            "images/41-80/DMM79/IMG_7055.JPG",
            "images/41-80/DMM79/IMG_7056.JPG"
        ]
    },
    {
        "id": "lalbaugcha-raja",
        "title": "Lalbaugcha Raja",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM81/IMG_7071.JPG",
        "code": "DMM81",
        "size": "2.1ft (20inches x 25inches)",
        "images": [
            "images/81-93/DMM81/IMG_7071.JPG",
            "images/81-93/DMM81/IMG_7072.JPG"
        ]
    },
    {
        "id": "ganadhyaksha-2",
        "title": "Ganadhyaksha",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM82/IMG_7084.JPG",
        "code": "DMM82",
        "size": "2.3ft (20inches x 27inches)",
        "images": [
            "images/81-93/DMM82/IMG_7084.JPG",
            "images/81-93/DMM82/IMG_7085.JPG"
        ]
    },
    {
        "id": "veer-simhasan",
        "title": "Veer Simhasan",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM83/IMG_7095.JPG",
        "code": "DMM83",
        "size": "2.1ft (22inches x 25inches)",
        "images": [
            "images/81-93/DMM83/IMG_7095.JPG",
            "images/81-93/DMM83/IMG_7096.JPG"
        ]
    },
    {
        "id": "maha-kaal",
        "title": "Maha Kaal",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM84/IMG_7108.JPG",
        "code": "DMM84",
        "size": "2.3ft (20inches x 27inches)",
        "images": [
            "images/81-93/DMM84/IMG_7108.JPG",
            "images/81-93/DMM84/IMG_7109.JPG"
        ]
    },
    {
        "id": "pushparaj",
        "title": "Pushparaj",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM85/IMG_7135.JPG",
        "code": "DMM85",
        "size": "2.1ft (25inches x 25inches)",
        "images": [
            "images/81-93/DMM85/IMG_7135.JPG",
            "images/81-93/DMM85/IMG_7136.JPG"
        ]
    },
    {
        "id": "kapila",
        "title": "Kapila",
        "price": "₹15,500",
        "originalPrice": "₹20,200",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM88/IMG_7169.JPG",
        "code": "DMM88",
        "size": "2.6ft (23inches x 31inches)",
        "images": [
            "images/81-93/DMM88/IMG_7169.JPG",
            "images/81-93/DMM88/IMG_7170.JPG"
        ]
    },
    {
        "id": "bada-saheb",
        "title": "Bada Saheb",
        "price": "₹17,300",
        "originalPrice": "₹22,500",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM89/IMG_7191.JPG",
        "code": "DMM89",
        "size": "2.7ft (24inches x 32inches)",
        "images": [
            "images/81-93/DMM89/IMG_7191.JPG",
            "images/81-93/DMM89/IMG_7192.JPG"
        ]
    },
    {
        "id": "makhan-chor-ganeshji-2",
        "title": "Makhan Chor Ganeshji",
        "price": "₹4,700",
        "originalPrice": "₹6,100",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM91/IMG_7214.JPG",
        "code": "DMM91",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/81-93/DMM91/IMG_7214.JPG",
            "images/81-93/DMM91/IMG_7215.JPG"
        ]
    },
    {
        "id": "makhan-chor-ganeshji-3",
        "title": "Makhan Chor Ganeshji",
        "price": "₹4,700",
        "originalPrice": "₹6,100",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM92/IMG_7218.JPG",
        "code": "DMM92",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/81-93/DMM92/IMG_7218.JPG",
            "images/81-93/DMM92/IMG_7219.JPG"
        ]
    },
    {
        "id": "suryasana-ganpathi",
        "title": "Suryasana Ganpathi",
        "price": "₹1,800",
        "originalPrice": "₹2,300",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM93/IMG_7225.JPG",
        "code": "DMM93",
        "size": "1.1ft (11inches x 13inches)",
        "images": [
            "images/81-93/DMM93/IMG_7225.JPG",
            "images/81-93/DMM93/IMG_7226.JPG"
        ]
    },
    {
        "id": "div-mangal-cha-raja",
        "title": "Div Mangal Cha Raja",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM87/IMG_7164.JPG",
        "code": "DMM87",
        "size": "2.1ft (22inches x 25inches)",
        "images": [
            "images/81-93/DMM87/IMG_7164.JPG",
            "images/81-93/DMM87/IMG_7165.JPG"
        ]
    }
];

// Hidden products (kept in codebase but removed from main website)
const hidden_products = [
    {
        "id": "raj-tilak-ganapati",
        "title": "Raj Tilak Ganapati",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS21/IMG_6192.JPG",
        "code": "DMMS21",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS21/IMG_6192.JPG",
            "images/S01-S40/DMMS21/IMG_6193.JPG"
        ]
    },
    {
        "id": "raj-tilak-ganapati-2",
        "title": "Raj Tilak Ganapati",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS22/IMG_6203.JPG",
        "code": "DMMS22",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS22/IMG_6203.JPG",
            "images/S01-S40/DMMS22/IMG_6204.JPG"
        ]
    },
    {
        "id": "raj-tilak-ganapati-4",
        "title": "Raj Tilak Ganapati",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS24/IMG_6192.JPG",
        "code": "DMMS24",
        "size": "1.2ft (9inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS24/IMG_6192.JPG",
            "images/S01-S40/DMMS24/IMG_6193.JPG"
        ]
    },
    {
        "id": "mini-dagdusheth",
        "title": "Mini Dagdusheth",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS29/IMG_6239.JPG",
        "code": "DMMS29",
        "size": "1.2ft (12inches x 14inches)",
        "images": [
            "images/S01-S40/DMMS29/IMG_6239.JPG",
            "images/S01-S40/DMMS29/IMG_6240.JPG"
        ]
    },
    {
        "id": "shakti-peeth-ganpathi-2",
        "title": "Shakti Peeth Ganpathi",
        "price": "₹2,300",
        "originalPrice": "₹3,000",
        "discount": "Eligible for home delivery",
        "image": "images/S01-S40/DMMS34/IMG_6272.JPG",
        "code": "DMMS34",
        "size": "1.3ft (12inches x 15inches)",
        "images": [
            "images/S01-S40/DMMS34/IMG_6272.JPG",
            "images/S01-S40/DMMS34/IMG_6273.JPG"
        ]
    },
    {
        "id": "sumukha-2",
        "title": "Sumukha",
        "price": "₹2,800",
        "originalPrice": "₹3,600",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS47/IMG_6365.JPG",
        "code": "DMMS47",
        "size": "1.3ft (12inches x 16inches)",
        "images": [
            "images/S41-S70/DMMS47/IMG_6365.JPG",
            "images/S41-S70/DMMS47/IMG_6366.JPG"
        ]
    },
    {
        "id": "shubh-labh-vinayak-2",
        "title": "Shubh-Labh Vinayak",
        "price": "₹2,900",
        "originalPrice": "₹3,800",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS51/IMG_6399.JPG",
        "code": "DMMS51",
        "size": "1.0ft (10inches x 12inches)",
        "images": [
            "images/S41-S70/DMMS51/IMG_6399.JPG",
            "images/S41-S70/DMMS51/IMG_6400.JPG"
        ]
    },
    {
        "id": "surya-prabha-ganpathi",
        "title": "Surya Prabha Ganpathi",
        "price": "₹2,600",
        "originalPrice": "₹3,400",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS60/IMG_6448.JPG",
        "code": "DMMS60",
        "size": "1.2ft (10inches x 14inches)",
        "images": [
            "images/S41-S70/DMMS60/IMG_6448.JPG",
            "images/S41-S70/DMMS60/IMG_6449.JPG"
        ]
    },
    {
        "id": "prasanna-ganpathi",
        "title": "Prasanna Ganpathi",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS67/IMG_6481.JPG",
        "code": "DMMS67",
        "size": "1.3ft (11inches x 15inches)",
        "images": [
            "images/S41-S70/DMMS67/IMG_6481.JPG",
            "images/S41-S70/DMMS67/IMG_6482.JPG"
        ]
    },
    {
        "id": "prasanna-ganpathi-2",
        "title": "Prasanna Ganpathi",
        "price": "₹2,500",
        "originalPrice": "₹3,300",
        "discount": "Eligible for home delivery",
        "image": "images/S41-S70/DMMS68/IMG_6485.JPG",
        "code": "DMMS68",
        "size": "1.3ft (11inches x 15inches)",
        "images": [
            "images/S41-S70/DMMS68/IMG_6485.JPG",
            "images/S41-S70/DMMS68/IMG_6487.JPG"
        ]
    },
    {
        "id": "balaji-ganesha-3",
        "title": "Balaji Ganesha",
        "price": "₹10,400",
        "originalPrice": "₹13,500",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM003/IMG_5696.JPG",
        "code": "DMM03",
        "size": "2.3ft (18inches x 27inches)",
        "images": [
            "images/1-40/DMM003/IMG_5696.JPG",
            "images/1-40/DMM003/IMG_5697.JPG"
        ]
    },
    {
        "id": "sri-ajoba-ganpathi-2",
        "title": "Sri Ajoba Ganpathi",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM011/IMG_5770.JPG",
        "code": "DMM11",
        "size": "1.7ft (18inches x 20inches)",
        "images": [
            "images/1-40/DMM011/IMG_5770.JPG",
            "images/1-40/DMM011/IMG_5771.JPG"
        ]
    },
    {
        "id": "sri-ajoba-ganpathi-3",
        "title": "Sri Ajoba Ganpathi",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM012/IMG_5785.JPG",
        "code": "DMM12",
        "size": "1.7ft (18inches x 20inches)",
        "images": [
            "images/1-40/DMM012/IMG_5785.JPG",
            "images/1-40/DMM012/IMG_5786.JPG"
        ]
    },
    {
        "id": "neelkanth-nandhivahan-2",
        "title": "Neelkanth Nandhivahan",
        "price": "₹7,800",
        "originalPrice": "₹10,100",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM014/IMG_5820.JPG",
        "code": "DMM14",
        "size": "1.9ft (20inches x 23inches)",
        "images": [
            "images/1-40/DMM014/IMG_5820.JPG",
            "images/1-40/DMM014/IMG_5821.JPG"
        ]
    },
    {
        "id": "ashta-petasana",
        "title": "Ashta Petasana",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM022/IMG_5877.JPG",
        "code": "DMM22",
        "size": "1.8ft (18inches x 22inches)",
        "images": [
            "images/1-40/DMM022/IMG_5877.JPG",
            "images/1-40/DMM022/IMG_5878.JPG"
        ]
    },
    {
        "id": "ashta-petasana-2",
        "title": "Ashta Petasana",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM023/IMG_5885.JPG",
        "code": "DMM23",
        "size": "1.8ft (18inches x 22inches)",
        "images": [
            "images/1-40/DMM023/IMG_5885.JPG",
            "images/1-40/DMM023/IMG_5886.JPG"
        ]
    },
    {
        "id": "ashta-petasana-3",
        "title": "Ashta Petasana",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM024/IMG_5877.JPG",
        "code": "DMM24",
        "size": "1.8ft (18inches x 22inches)",
        "images": [
            "images/1-40/DMM024/IMG_5877.JPG",
            "images/1-40/DMM024/IMG_5878.JPG"
        ]
    },
    {
        "id": "maha-darbar-ganpathi",
        "title": "Maha Darbar Ganpathi",
        "price": "₹12,900",
        "originalPrice": "₹16,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM025/IMG_5890.JPG",
        "code": "DMM25",
        "size": "2.5ft (22inches x 30inches)",
        "images": [
            "images/1-40/DMM025/IMG_5890.JPG",
            "images/1-40/DMM025/IMG_5893.JPG"
        ]
    },
    {
        "id": "maha-darbar-ganpathi-2",
        "title": "Maha Darbar Ganpathi",
        "price": "₹12,900",
        "originalPrice": "₹16,800",
        "discount": "Eligible for home delivery",
        "image": "images/1-40/DMM026/IMG_5914.JPG",
        "code": "DMM26",
        "size": "2.5ft (22inches x 30inches)",
        "images": [
            "images/1-40/DMM026/IMG_5914.JPG",
            "images/1-40/DMM026/IMG_5916.JPG"
        ]
    },
    {
        "id": "maha-darbar-ganeshji",
        "title": "Maha Darbar Ganeshji",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM51/IMG_6804.JPG",
        "code": "DMM51",
        "size": "1.8ft (15inches x 21inches)",
        "images": [
            "images/41-80/DMM51/IMG_6804.JPG",
            "images/41-80/DMM51/IMG_6805.JPG"
        ]
    },
    {
        "id": "maha-darbar-ganeshji-2",
        "title": "Maha Darbar Ganeshji",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM52/IMG_6818.JPG",
        "code": "DMM52",
        "size": "1.8ft (15inches x 21inches)",
        "images": [
            "images/41-80/DMM52/IMG_6818.JPG",
            "images/41-80/DMM52/IMG_6819.JPG"
        ]
    },
    {
        "id": "maha-darbar-ganeshji-3",
        "title": "Maha Darbar Ganeshji",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM53/IMG_6822.JPG",
        "code": "DMM53",
        "size": "1.8ft (15inches x 21inches)",
        "images": [
            "images/41-80/DMM53/IMG_6822.JPG",
            "images/41-80/DMM53/IMG_6823.JPG"
        ]
    },
    {
        "id": "bhalachandra-2",
        "title": "Bhalachandra",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM55/IMG_6839.JPG",
        "code": "DMM55",
        "size": "1.7ft (15inches x 20inches)",
        "images": [
            "images/41-80/DMM55/IMG_6839.JPG",
            "images/41-80/DMM55/IMG_6840.JPG"
        ]
    },
    {
        "id": "ganadhyaksha",
        "title": "Ganadhyaksha",
        "price": "₹6,500",
        "originalPrice": "₹8,500",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM58/IMG_6859.JPG",
        "code": "DMM58",
        "size": "1.8ft (17inches x 21inches)",
        "images": [
            "images/41-80/DMM58/IMG_6859.JPG",
            "images/41-80/DMM58/IMG_6860.JPG"
        ]
    },
    {
        "id": "ganadhyaksha-dmm59",
        "title": "Ganadhyaksha",
        "price": "₹6,500",
        "originalPrice": "₹8,500",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM59/IMG_6872.JPG",
        "code": "DMM59",
        "size": "1.8ft (17inches x 21inches)",
        "images": [
            "images/41-80/DMM59/IMG_6872.JPG",
            "images/41-80/DMM59/IMG_6873.JPG"
        ]
    },
    {
        "id": "chinchpokli-chintamani-2",
        "title": "Chinchpokli Chintamani",
        "price": "₹10,400",
        "originalPrice": "₹13,500",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM62/IMG_6904.JPG",
        "code": "DMM62",
        "size": "2.3ft (18inches x 27inches)",
        "images": [
            "images/41-80/DMM62/IMG_6904.JPG",
            "images/41-80/DMM62/IMG_6905.JPG"
        ]
    },
    {
        "id": "buddhipriya-2",
        "title": "Buddhipriya",
        "price": "₹4,600",
        "originalPrice": "₹6,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM65/IMG_6938.JPG",
        "code": "DMM65",
        "size": "1.8ft (15inches x 21inches)",
        "images": [
            "images/41-80/DMM65/IMG_6938.JPG",
            "images/41-80/DMM65/IMG_6939.JPG"
        ]
    },
    {
        "id": "lalbaug-lambodar",
        "title": "Lalbaug Lambodar",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM67/IMG_6952.JPG",
        "code": "DMM67",
        "size": "1.9ft (18inches x 23inches)",
        "images": [
            "images/41-80/DMM67/IMG_6952.JPG",
            "images/41-80/DMM67/IMG_6953.JPG"
        ]
    },
    {
        "id": "lalbaug-lambodar-2",
        "title": "Lalbaug Lambodar",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM68/IMG_6960.JPG",
        "code": "DMM68",
        "size": "1.9ft (18inches x 23inches)",
        "images": [
            "images/41-80/DMM68/IMG_6960.JPG",
            "images/41-80/DMM68/IMG_6961.JPG"
        ]
    },
    {
        "id": "lalbaug-lambodar-3",
        "title": "Lalbaug Lambodar",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM69/IMG_6964.JPG",
        "code": "DMM69",
        "size": "1.9ft (18inches x 23inches)",
        "images": [
            "images/41-80/DMM69/IMG_6964.JPG",
            "images/41-80/DMM69/IMG_6965.JPG"
        ]
    },
    {
        "id": "dhoomravarna",
        "title": "Dhoomravarna",
        "price": "₹6,900",
        "originalPrice": "₹9,000",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM73/IMG_6999.JPG",
        "code": "DMM73",
        "size": "1.9ft (23inches x 23inches)",
        "images": [
            "images/41-80/DMM73/IMG_6999.JPG",
            "images/41-80/DMM73/IMG_7001.JPG"
        ]
    },
    {
        "id": "siddhivinayaka-3",
        "title": "Siddhivinayaka",
        "price": "₹5,200",
        "originalPrice": "₹6,800",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM78D/IMG_7030.JPG",
        "code": "DMM78",
        "size": "1.8ft (20inches x 22inches)",
        "images": [
            "images/41-80/DMM78D/IMG_7030.JPG",
            "images/41-80/DMM78D/IMG_7031.JPG"
        ]
    },
    {
        "id": "bada-dagdusheth",
        "title": "Bada Dagdusheth",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/41-80/DMM80/IMG_7067.JPG",
        "code": "DMM80",
        "size": "2.0ft (24inches x 24inches)",
        "images": [
            "images/41-80/DMM80/IMG_7067.JPG",
            "images/41-80/DMM80/IMG_7068.JPG"
        ]
    },
    {
        "id": "sarveshwara-ganapati",
        "title": "Sarveshwara Ganapati",
        "price": "₹13,800",
        "originalPrice": "₹17,900",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM86/IMG_7140.JPG",
        "code": "DMM86",
        "size": "2.3ft (20inches x 27inches)",
        "images": [
            "images/81-93/DMM86/IMG_7140.JPG",
            "images/81-93/DMM86/IMG_7141.JPG"
        ]
    },
    {
        "id": "makhan-chor-ganeshji",
        "title": "Makhan Chor Ganeshji",
        "price": "₹4,700",
        "originalPrice": "₹6,100",
        "discount": "Eligible for home delivery",
        "image": "images/81-93/DMM90/IMG_7205.JPG",
        "code": "DMM90",
        "size": "1.7ft (16inches x 20inches)",
        "images": [
            "images/81-93/DMM90/IMG_7205.JPG",
            "images/81-93/DMM90/IMG_7206.JPG"
        ]
    }
];
