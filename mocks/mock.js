const products = [
  {
    "id": 1,
    "category": "tec",
    "title": " Tux Sudo",
    "price": 4.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:247/h:247/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-TuxSudo-NS.png"
  },
  {
    "id": 2,
    "category": "tec",
    "title": "Need More Space",
    "price": 4.90,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:247/h:247/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-need-more-space-nerd-stickers.png"
  },
  {
    "id": 3,
    "category": "tec",
    "title": "Fullstack dev",
    "price": 5,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:247/h:247/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/Adesivo-Fullstack-Dev-Nerd-Stickers.png"
  },
  {
    "id": 5,
    "category": "tec",
    "title": "Front Ninja",
    "price": 3.87,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:247/h:247/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/Adesivo-Ninja-Nerd-Stickers.png"
  },
  {
    "id": 6,
    "category": "tec",
    "title": "NASA",
    "price": 4.32,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:247/h:247/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/14395367561-1.jpeg"
  },
  {
    "id": 4,
    "category": "tec",
    "title": "Octocat II",
    "price": 3.90,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:247/h:247/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/STK-227-Octocat-II-525X525cm-1.jpg"
  },
  {
    "id": 8,
    "category": "tec",
    "title": " Extreme go horse",
    "price": 4.32,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/12/adesivo-extreme-go-horse-ns.png"
  },
  {
    "id": 7,
    "category": "tec",
    "title": "Red Bug",
    "price": 4.32,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-RedBug-NS.png"
  },
  {
    "id": 9,
    "category": "games",
    "title": "Sova",
    "price": 6.32,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2021/07/00-sova-site.png"
  },
  {
    "id": 10,
    "category": "games",
    "title": "Kirby Sword",
    "price": 4.92,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/Kirby.png"
  },
  {
    "id": 11,
    "category": "games",
    "title": "Frog CT",
    "price": 4.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-frog-douglas-feer.png"
  },
  {
    "id": 12,
    "category": "games",
    "title": "Link Sword",
    "price": 5.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-link-douglas-feer.png"
  },
  {
    "id": 13,
    "category": "games",
    "title": "Hollow",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-hollow-douglas-feer.png"
  },
  {
    "id": 14,
    "category": "games",
    "title": "Wisp Poke",
    "price": 6.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-Wisp-Marcel-Meira.png"
  },
  {
    "id": 15,
    "category": "games",
    "title": "Magikarp",
    "price": 7.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-Fish-Marcel-Meira.png"
  },
  {
    "id": 16,
    "category": "games",
    "title": "Yoshi Pixel",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-Pixel-Yoshi-Douglas-Feer.png"
  },
  {
    "id": 17,
    "category": "anime",
    "title": "Beerus",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2021/01/742-adesivo-Beerus-Douglas-Feer.png"
  },
  {
    "id": 18,
    "category": "anime",
    "title": "Sailor Cats",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2021/01/926-adesivo-Sailor-Cats-Douglas-Feer.png"
  },
  {
    "id": 19,
    "category": "anime",
    "title": "Itachi Nike",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2021/08/00-adesivo-itachi-nike-nerd-stickers.png"
  },
  {
    "id": 20,
    "category": "anime",
    "title": "Eyes of slayers",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2021/05/00-eyes-of-slayers-site.png"
  },
  {
    "id": 21,
    "category": "anime",
    "title": "EVE Flower",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2021/05/00-eve-flower-site.png"
  },
  {
    "id": 22,
    "category": "anime",
    "title": "Triforce Kitsune",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-Triforce-Kitsune-Felipe-Eric.png"
  },
  {
    "id": 23,
    "category": "anime",
    "title": "Kakashi Alcool Gel",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-kakashi-alcool-gel-ferod-nerd-stickers.png"
  },
  {
    "id": 24,
    "category": "anime",
    "title": "Tanjiro",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/Adesivo-Tanjiro-02-Nerd-Stickers.png"
  },
  {
    "id": 25,
    "category": "anime",
    "title": "Rocklee",
    "price": 3.22,
    "image": "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/Adesivo-Rocklee-Nerd-Stickers.png"
  },
];

const categorys = [
  {
    id: 1,
    category: "tec",
    title: "Tecnologia",
    image:
      "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:247/h:247/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-TuxSudo-NS.png",
  },
  {
    id: 2,
    category: "anime",
    title: "Anime",
    image:
      "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2021/05/00-eyes-of-slayers-site.png",
  },
  {
    id: 3,
    category: "games",
    title: "Games",
    image:
      "https://mlohrktvfr9b.i.optimole.com/scftOdE.BaVg~16a4d/w:600/h:600/q:90/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-00-Pixel-Yoshi-Douglas-Feer.png",
  },
];
