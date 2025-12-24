document.addEventListener('DOMContentLoaded', () => {

    // --- YOUR BOOK DATA GOES HERE ---
    // To add a new book, copy an existing block (from { to },) and paste it.
    // Use an image hosting service (like imgur.com or postimages.org) for cover URLs.
   const books = [
   {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1751453755i/237809526.jpg",
        "title": "Sobre Dios",
        "author": "Byung-Chul Han",
        "review": "This is my first essay since a long time. Interesting analysis on why society has forgotten god. Even though I am an atheist, I have enjoyed it.",
        "readDate": "2025-12-23"
   },
   {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565783016l/51816145.jpg",
        "title": "Las lealtades",
        "author": "Delphine de Vigan",
        "review": "I really enjoy the style of the author. This book explores the hidden lifes of people, and what we imagine when we do not know what is actually happening. The intersection of multiple stories amazes me.",
        "readDate": "2025-12-18"
   },
   {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1720343930i/86362607.jpg",
        "title": "Como bestias",
        "author": "Violane Bérot",
        "review": "A short intriguing book. You never expect the end of the story, I have really enjoyed it.",
        "readDate": "2025-12-01"
   },
   {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610093616i/56591408.jpg",
        "title": "Las gratitudes",
        "author": "Delphine de Vigan",
        "review": "Recommended by my amazing partner, this book is perfect. The pace, the language, the characters. It makes you feel the pass of time, how we react to it, and that we need to be grateful with the people we love before it's too late. I loved it.",
        "readDate": "2025-11-30"
   },
  {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661787608i/62132240.jpg",
        "title": "Memorias del subsuelo",
        "author": "Fyodor Dostoevsky",
        "review": "A guide on how not to live. a guide on thinking more than living. Sorrow, that's all I can think about.",
        "readDate": "2025-11-29"
   },
 {
        "cover": "",
        "title": "Alpes: más allá de los límites",
        "author": "Kilian Jornet",
        "review": "I am always amazed by the feats that Kilian does. The photographs in the book are amazing.",
        "readDate": "2025-11-18"
   },
   {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1590192038i/9738320.jpg",
        "title": "Picnic en Hanging Rock",
        "author": "Joan Lindsay",
        "review": "What is real and what is imagination? I did not know about this story, but now I want to watch the movie. Life sometimes can be what we imagine, more than what we live. And that fine line between the two is what drives this story.",
        "readDate": "2025-11-16"
   },
    {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1574652462i/280826.jpg",
        "title": "Te trataré como una reina",
        "author": "Rosa Montero",
        "review": "Short and enjoyable book from the amazing author Rosa Montero. It is an engaging story, and there are many sentences in the book that I had to highlight.",
        "readDate": "2025-10-23"
   },
   {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1718085132i/57398262.jpg",
        "title": "Los nombres propios",
        "author": "Marta Jiménez Serrano",
        "review": "Am I any different to the young Paco? How are the things I am feeling any different to what I thought when I was a kid? Unfortunately, that is something that I cannot know, since I have not taken note of it. In this book, Marta let us to sneak into her life, as observers, as an imaginary friend (Belandia Fu), that knows everything that is going to happen but still allows you to make those mistakes that you need to make, in order to learn. This is a book about changes, but also about things that remain the same. I think the first half of the book is amazing, while the adult part of the book did not resonate that much with me. Still, quite enjoyable. ",
        "readDate": "2025-10-14"
   },
   {
        "cover": "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1593382384i/10261888.jpg",
        "title": "Futuro Imperfecto",
        "author": "Xulia Alonso",
        "review": "Losing someone is always difficult. Losing him based on decisions you have made in the past must be even harder. I have really enjoyed the book, it is raw, difficult to read at times, and an open wound that the author allows you to explore. I wish I would be able to openly write about my feelings as the author does. It is a gift to the rest of us. Thanks to the beautiful person that recommend it to me, it is amazing.",
        "readDate": "2025-09-27"
   },
   {
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699536928i/199860100.jpg",
        "title": "Abel",
        "author": "Alessandro Baricco",
        "review": "I really enjoy the writing of Alessandro Baricco. The atmosphere, the feeling of living in the wild west, and the feelings that the characters experience is engaging. I would not say I loved it, but I have really enjoyed it.",
        "readDate": "2025-09-13"
    },
   {
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320492037i/642231.jpg",
        "title": "Measuring the world",
        "author": "Daniel Kehlmann",
        "review": "It is a nice read. However, I did not really enjoyed the style of the author. Might be that I haven't read in English for a while.",
        "readDate": "2025-08-31"
    },
   {
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1745797102i/31578185.jpg",
        "title": "Pura Pasión",
        "author": "Annie Ernaux",
        "review": "What it feels like to be obsessed with someone? Annie Ernaux put to words the feeling of desire, extreme desire, that feels like madness. That is something we have all felt at some point, thinking 24/7 about someone. Her writing is beautiful.",
        "readDate": "2025-08-27"
    },
    {
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1170780526i/71530.jpg",
        "title": "Metafísica de los tubos",
        "author": "Amélie Nothomb",
        "review": "This reads as an imaginary autobiography. Knowing that she was borned in Japan, it makes sense how it describes having to leave. Really enjoyed, as most of her books.",
        "readDate": "2025-08-26"
    },
   {
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578152767i/50272339.jpg",
        "title": "Poeta Chileno",
        "author": "Alejandro Zambra",
        "review": "A book about Chile (or it could be anywhere else?) Having lived in Santiago, it brought me back to many places, and lifes I haven't lived. The prose is fun and light, as it should always be.",
        "readDate": "2025-08-10"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1170876977l/75524._SY75_.jpg",
        "title": "Cosmética del enemigo",
        "author": "Amélie Nothomb",
        "review": "This is the second book I read from Amélie Nothomb, and I am really enjoying her prose. While the story is weird, it can make you think of the penitence of our own mind and the acts of our past. It is short, and amazing. ",
        "readDate": "2025-08-03"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541455996l/42639871._SY75_.jpg",
        "title": "Siddharta",
        "author": "Hermann Hesse",
        "review": "While I understand the importance of the book, it did not completely engage me. I see the point, but it might be related to the narrative of India during the 60s, that now everything related to that make me feel like a rich hippie.",
        "readDate": "2025-07-26"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527156353l/3853137._SY75_.jpg",
        "title": "La insoportable levedad del ser",
        "author": "Milan Kundera",
        "review": "This story makes you think about the meaning of life, the choices we make, and how many different paths we can take. Are all the male characters evil? Could be.",
        "readDate": "2025-07-24"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344264065l/413617._SY75_.jpg",
        "title": "Good-Bye, Mr. Chips",
        "author": "James Hilton",
        "review": "A feel good book about a teacher and his life. It makes sense that the father of the author was a teacher, and got inspired by it. It is cozy, and warm. Very british, at the end of the day.",
        "readDate": "2025-07-22"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1696809224l/123723946._SY75_.jpg",
        "title": "La mala costumbre",
        "author": "Alana S. Portero",
        "review": "This book fascinated me. The author includes you in her life, and you can feel the pain and the difficulties she had to go through as a trans woman. It is a must read to understand how, not allowing yourself to be who you are, can be a prison.",
        "readDate": "2025-07-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1175626628l/537615._SY75_.jpg",
        "title": "Un lugar llamado Antaño",
        "author": "Olga Tokarczuk",
        "review": "My first read from this author, and it is heartbreaking. It is the story of a village, any village, and the people that live in it. It is a story about all of us, how desires, our dreams, our love. And how a single life pass by, without even noticing it.",
        "readDate": "2025-07-14"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609095173l/50202953._SY75_.jpg",
        "title": "Piranesi",
        "author": "Susanna Clarke",
        "review": "What did I just read? It is a weird book, but that keeps you engaged all along. A thriller? Could be.",
        "readDate": "2025-07-12"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589469434l/53412888._SX50_.jpg",
        "title": "Panza de burro",
        "author": "Andrea Abreu López",
        "review": "While I understand the aim of the author, I could not engage with the story. Not sure if it is because my childhood was not like this, or the language, but I did not get hooked.",
        "readDate": "2025-07-07"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1677065059l/122820753._SY75_.jpg",
        "title": "La educación física",
        "author": "Rosario Villajos",
        "review": "What being a female teenager must feel like. In a world where men are mainly a predator, not a colleague, this book made me think about my own adolescence, and those things I might have participated on or done that are awful. Amazing read, though repetitive at times.",
        "readDate": "2025-06-29"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1742989812l/228869268._SY75_.jpg",
        "title": "Comedia española",
        "author": "Manuel Gare",
        "review": "Amazing book about Granada, life, and the need of choosing your own path.",
        "readDate": "2025-06-19"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1738270273l/222939722._SY75_.jpg",
        "title": "Crisálida",
        "author": "Fernando Navarro",
        "review": "This book broke my heart so many times that I cannot count them. Child abuse, nature, and kindness. Everything in a book that is nothing alike I have read before.",
        "readDate": "2025-06-13"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1708863959l/205169773._SY75_.jpg",
        "title": "Los aerostatos",
        "author": "Amélie Nothomb",
        "review": "My first book from the author, and I can say it was surprising. I do not know what I was expecting, but definitively not this. It surprised me.",
        "readDate": "2025-06-12"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478591354l/32913971._SY75_.jpg",
        "title": "La esposa joven",
        "author": "Alessandro Baricco",
        "review": "Great book about waiting. What life means. What people expects from you.",
        "readDate": "2025-06-01"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1362851762l/17567272._SY75_.jpg",
        "title": "La ridícula idea de no volver a verte",
        "author": "Rosa Montero",
        "review": "Well, I could cry for hours with this book. Rosa Montero opens her heart, and mind, along telling the story of Marie Curie. If you have ever loved and lost someone, this book is a must read.",
        "readDate": "2025-06-01"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1739034260l/55756916._SY75_.jpg",
        "title": "Un verdor terrible",
        "author": "Benjamín Labatut",
        "review": "",
        "readDate": "2025-05-05"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465316363l/125187._SY75_.jpg",
        "title": "El desierto de los tártaros",
        "author": "Dino Buzzati",
        "review": "",
        "readDate": "2025-04-26"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1725659850l/216763266._SY75_.jpg",
        "title": "Una Historia de la Inteligencia (Spanish Edition)",
        "author": "Max Solomon Bennett",
        "review": "",
        "readDate": "2025-01-27"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1689105362l/138505710._SY75_.jpg",
        "title": "Doppelganger: A Trip into the Mirror World",
        "author": "Naomi Klein",
        "review": "",
        "readDate": "2025-03-09"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1735711178l/222010043._SX50_.jpg",
        "title": "Una filosofía para sobrevivir en el siglo XXI (Spanish Edition)",
        "author": "Jesús G. Maestro",
        "review": "",
        "readDate": "2025-02-05"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617005489l/57562114._SY75_.jpg",
        "title": "Jerusalén, santa y cautiva: Desde el corazón de la Ciudad Vieja a la eternidad",
        "author": "Mikel Ayestarán",
        "review": "",
        "readDate": "2025-01-04"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617005489l/57562114._SY75_.jpg",
        "title": "The Anthropocene Reviewed: Essays on a Human-Centered Planet",
        "author": "John Green",
        "review": "",
        "readDate": "2021-06-14"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1705382948l/199373502._SY75_.jpg",
        "title": "The Color of Everything: A Journey to Quiet the Chaos Within",
        "author": "Cory Richards",
        "review": "",
        "readDate": "2024-12-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585361945l/51152434._SY75_.jpg",
        "title": "What Are You Going Through",
        "author": "Sigrid Nunez",
        "review": "",
        "readDate": "2024-10-14"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421510580l/24861._SY75_.jpg",
        "title": "Demian",
        "author": "Hermann Hesse",
        "review": "",
        "readDate": "2024-09-29"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421023783l/24450653._SY75_.jpg",
        "title": "Creatividad, S.A. Cómo llevar la inspiración hasta el infinito y más allá",
        "author": "Ed Catmull",
        "review": "",
        "readDate": "2020-01-01"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347721113l/10388040._SY75_.jpg",
        "title": "Perfect Rigour: A Genius And The Mathematical Breakthrough Of The Century",
        "author": "Masha Gessen",
        "review": "",
        "readDate": "2024-08-22"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433801042l/25690410._SX50_.jpg",
        "title": "Vernon Subutex 2 (Vernon Subutex, #2)",
        "author": "Virginie Despentes",
        "review": "I am really enjoying this saga. It is true that I firstly enjoyed the TV show, and this is more or less the continuation of the first season, but Virginie prose is rapid and engaging. ",
        "readDate": "2021-04-01"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1750927010l/63034._SY75_.jpg",
        "title": "Los detectives salvajes",
        "author": "Roberto Bolaño",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548195384l/43684080._SX50_.jpg",
        "title": "Quizás vivir sea esto",
        "author": "Jorge Egocheaga Rodríguez",
        "review": "",
        "readDate": "2024-07-02"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1681763447l/134899244._SY75_.jpg",
        "title": "Baumgartner",
        "author": "Paul Auster",
        "review": "",
        "readDate": "2024-06-16"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562554946l/310612._SY75_.jpg",
        "title": "A Confederacy of Dunces",
        "author": "John Kennedy Toole",
        "review": "",
        "readDate": "2024-06-09"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630470982l/16902._SY75_.jpg",
        "title": "Walden or, Life in the Woods",
        "author": "Henry David Thoreau",
        "review": "",
        "readDate": "2024-05-07"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1455845332l/7056969._SX50_.jpg",
        "title": "El hombre que amaba a los perros",
        "author": "Leonardo Padura",
        "review": "",
        "readDate": "2024-04-14"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349026758l/6713575._SX50_.jpg",
        "title": "Coders at Work: Reflections on the Craft of Programming",
        "author": "Peter Seibel",
        "review": "",
        "readDate": "2024-03-18"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388211242l/69571._SY75_.jpg",
        "title": "Rich Dad, Poor Dad",
        "author": "Robert T. Kiyosaki",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1458895347l/29615987._SX50_.jpg",
        "title": "Los indómitos de la montaña",
        "author": "Dino Buzzati",
        "review": "",
        "readDate": "2024-02-03"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551550135l/44175358._SX50_.jpg",
        "title": "Some Stories: Lessons from the Edge of Business and Sport",
        "author": "Yvon Chouinard",
        "review": "",
        "readDate": "2024-01-23"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547379026l/43552762._SY75_.jpg",
        "title": "Outpost: A Journey to the Wild Ends of the Earth",
        "author": "Dan   Richards",
        "review": "",
        "readDate": "2024-01-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1701007039l/202714440._SY75_.jpg",
        "title": "Macho",
        "author": "Manuel Gare",
        "review": "",
        "readDate": "2023-12-12"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1703679682l/36531127._SY75_.jpg",
        "title": "Alone on the Wall",
        "author": "Alex Honnold",
        "review": "",
        "readDate": "2023-12-05"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481084931l/33155369._SY75_.jpg",
        "title": "The Push: A Climber's Journey of Endurance, Risk, and Going Beyond Limits",
        "author": "Tommy Caldwell",
        "review": "",
        "readDate": "2023-12-05"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348791936l/7489836._SY75_.jpg",
        "title": "9 Out of 10 Climbers Make the Same Mistakes: Navigation Through the Maze of Advice for the Self-coached Climber",
        "author": "Dave MacLeod",
        "review": "",
        "readDate": "2023-12-05"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682738725l/144405196._SY75_.jpg",
        "title": "The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI",
        "author": "Fei-Fei Li",
        "review": "",
        "readDate": "2023-11-26"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629679336l/55723020._SX50_.jpg",
        "title": "Dopamine Nation: Finding Balance in the Age of Indulgence",
        "author": "Anna Lembke",
        "review": "",
        "readDate": "2023-10-23"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393959374l/20763968._SX50_.jpg",
        "title": "The Tower",
        "author": "Kelly Cordes",
        "review": "",
        "readDate": "2023-10-16"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377629212l/18342486._SY75_.jpg",
        "title": "How to Sit (Mindfulness Essentials, #1)",
        "author": "Thich Nhat Hanh",
        "review": "",
        "readDate": "2023-09-29"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666034383l/63026490._SY75_.jpg",
        "title": "Tasmania",
        "author": "Paolo Giordano",
        "review": "",
        "readDate": "2023-09-15"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387751627l/1928573._SY75_.jpg",
        "title": "Royal Robbins: Spirit of the Age (Climbing Classics)",
        "author": "Pat Ament",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387737611l/1376687._SY75_.jpg",
        "title": "The Mountains of My Life (Modern Library Exploration)",
        "author": "Walter Bonatti",
        "review": "",
        "readDate": "2023-08-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1650466068l/60851211._SY75_.jpg",
        "title": "Tres veranos",
        "author": "Margarita Liberaki",
        "review": "",
        "readDate": "2023-08-11"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1641908122l/60103239._SX50_.jpg",
        "title": "Buena suerte",
        "author": "Nickolas Butler",
        "review": "",
        "readDate": "2023-08-05"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320520930l/6480781._SX50_.jpg",
        "title": "Open",
        "author": "Andre Agassi",
        "review": "",
        "readDate": "2023-07-31"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536007544l/41673213._SY75_.jpg",
        "title": "Carlos Soria alpinista",
        "author": "Darío Rodríguez Navarro",
        "review": "",
        "readDate": "2023-07-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1665847708l/62998972._SY75_.jpg",
        "title": "Closer to the Edge: Climbing to the Ends of the Earth",
        "author": "Leo Houlding",
        "review": "",
        "readDate": "2023-07-16"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1520417408l/39071233._SY75_.jpg",
        "title": "Las ocho montañas",
        "author": "Paolo Cognetti",
        "review": "",
        "readDate": "2023-06-26"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1170664720l/66947._SY75_.jpg",
        "title": "El jugador",
        "author": "Fyodor Dostoevsky",
        "review": "",
        "readDate": "2022-02-07"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511288482l/11084145._SY75_.jpg",
        "title": "Steve Jobs",
        "author": "Walter Isaacson",
        "review": "",
        "readDate": "2023-05-31"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557932856l/222146._SY75_.jpg",
        "title": "Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture",
        "author": "David Kushner",
        "review": "",
        "readDate": "2023-04-15"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1678289870l/86185993._SX50_.jpg",
        "title": "Campo 4: Recuerdos de un escalador de Yosemite",
        "author": "Steve Roper",
        "review": "",
        "readDate": "2023-03-27"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601937850l/54814676._SX50_.jpg",
        "title": "Crying in H Mart",
        "author": "Michelle Zauner",
        "review": "",
        "readDate": "2023-03-02"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568730327l/50759226._SX50_SY75_.jpg",
        "title": "Con fina desobediencia",
        "author": "Fermín de la Calle",
        "review": "",
        "readDate": "2023-02-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626718328l/57933306._SY75_.jpg",
        "title": "Stolen Focus: Why You Can't Pay Attention— and How to Think Deeply Again",
        "author": "Johann Hari",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171408273l/98250._SY75_.jpg",
        "title": "Once a Runner",
        "author": "John L. Parker Jr.",
        "review": "",
        "readDate": "2023-01-15"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419063039l/23814033._SX50_.jpg",
        "title": "Beyond Limits: A Life Through Climbing",
        "author": "Steve McClure",
        "review": "",
        "readDate": "2023-01-10"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612440497l/56945576._SY75_.jpg",
        "title": "Lecciones de estoicismo (Spanish Edition)",
        "author": "John   Sellars",
        "review": "",
        "readDate": "2022-12-17"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599719225l/55288158._SX50_.jpg",
        "title": "The Third Pole: Mystery, Obsession, and Death on Mount Everest",
        "author": "Mark Synnott",
        "review": "",
        "readDate": "2022-12-12"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1291658823l/9843968._SX50_.jpg",
        "title": "Las montañas de la mente: historia de una fascinación",
        "author": "Robert Macfarlane",
        "review": "",
        "readDate": "2022-11-09"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327867963l/117833._SY75_.jpg",
        "title": "The Master and Margarita",
        "author": "Mikhail Bulgakov",
        "review": "",
        "readDate": "2022-10-26"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627425434l/54785515._SY75_.jpg",
        "title": "Four Thousand Weeks: Time Management for Mortals",
        "author": "Oliver Burkeman",
        "review": "",
        "readDate": "2022-09-19"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347803942l/2866456._SY75_.jpg",
        "title": "El mal de Montano",
        "author": "Enrique Vila-Matas",
        "review": "",
        "readDate": "2022-09-02"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453028600l/28587180._SY75_.jpg",
        "title": "La conquista del Cervino",
        "author": "Edward Whymper",
        "review": "",
        "readDate": "2022-08-13"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543368565l/42969704._SY75_.jpg",
        "title": "Thirst: 2600 Miles to Home",
        "author": "Heather Anish Anderson",
        "review": "",
        "readDate": "2022-07-31"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328763394l/6738781._SY75_.jpg",
        "title": "Beyond the Mountain",
        "author": "Steve House",
        "review": "",
        "readDate": "2022-07-27"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568668356l/49977811._SY75_.jpg",
        "title": "Swimming in the Dark",
        "author": "Tomasz Jedrowski",
        "review": "",
        "readDate": "2022-07-16"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608723131l/53916142._SY75_.jpg",
        "title": "A Life on Our Planet: My Witness Statement and a Vision for the Future",
        "author": "David Attenborough",
        "review": "",
        "readDate": "2022-07-10"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563763650l/43218722._SY75_.jpg",
        "title": "How to Be an Anticapitalist in the Twenty-First Century",
        "author": "Erik Olin Wright",
        "review": "",
        "readDate": "2022-07-03"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433739086l/33313._SY75_.jpg",
        "title": "Kitchen Confidential: Adventures in the Culinary Underbelly",
        "author": "Anthony Bourdain",
        "review": "",
        "readDate": "2022-06-25"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1407027931l/124718._SX50_.jpg",
        "title": "One Man's Wilderness: An Alaskan Odyssey",
        "author": "Sam Keith",
        "review": "",
        "readDate": "2022-06-15"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327351982l/6625690._SY75_.jpg",
        "title": "Revelations",
        "author": "Jerry Moffatt",
        "review": "",
        "readDate": "2022-06-02"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442239711l/472331._SY75_.jpg",
        "title": "Watchmen",
        "author": "Alan Moore",
        "review": "",
        "readDate": "2022-05-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585192145l/50358103._SX50_.jpg",
        "title": "Money: The True Story of a Made-Up Thing",
        "author": "Jacob Goldstein",
        "review": "",
        "readDate": "2022-05-16"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634267730l/59351322._SX50_.jpg",
        "title": "Life Lived Wild:  Adventures at the Edge of the Map",
        "author": "Rick Ridgeway",
        "review": "",
        "readDate": "2022-05-13"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458._SY75_.jpg",
        "title": "Dune (Dune #1)",
        "author": "Frank Herbert",
        "review": "",
        "readDate": "2022-04-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581021978l/50615899._SX50_.jpg",
        "title": "Búnker: Memorias de encierro, rimas y tiburones blanco",
        "author": "Toteking",
        "review": "",
        "readDate": "2022-03-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637586659l/59682112._SX50_.jpg",
        "title": "Cualquier tiempo pasado fue anterior",
        "author": "Nieves Concostrina",
        "review": "",
        "readDate": "2022-03-26"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964._SY75_.jpg",
        "title": "A Man Called Ove",
        "author": "Fredrik Backman",
        "review": "",
        "readDate": "2022-03-12"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543278682l/36546612._SY75_.jpg",
        "title": "The Last Whalers: Three Years in the Far Pacific with a Courageous Tribe and a Vanishing Way of Life",
        "author": "Doug Bock Clark",
        "review": "",
        "readDate": "2022-02-26"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631184339l/58956328._SX50_.jpg",
        "title": "Por si las voces vuelven",
        "author": "Ángel  Martín",
        "review": "",
        "readDate": "2022-02-22"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1742326950l/166997._SY75_.jpg",
        "title": "Stoner",
        "author": "John  Williams",
        "review": "",
        "readDate": "2022-02-14"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634288448l/27208._SY75_.jpg",
        "title": "The Third Policeman",
        "author": "Flann O'Brien",
        "review": "",
        "readDate": "2022-01-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627588046l/58657656._SX50_.jpg",
        "title": "There and Back: Photographs from the Edge",
        "author": "Jimmy Chin",
        "review": "",
        "readDate": "2022-01-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438375131l/26016434._SY75_.jpg",
        "title": "Wilderness Essays",
        "author": "John Muir",
        "review": "",
        "readDate": "2022-01-21"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1613931705l/57148941._SX50_.jpg",
        "title": "Éramos el enemigo",
        "author": "George Takei",
        "review": "",
        "readDate": "2022-01-13"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611046075l/53290051._SX50_.jpg",
        "title": "Beyond Possible: One Soldier, Fourteen Peaks — My Life In The Death Zone",
        "author": "Nimsdai Purja",
        "review": "",
        "readDate": "2022-01-12"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384466431l/18805716._SX50_.jpg",
        "title": "Los conquistadores de lo inútil",
        "author": "Lionel Terray",
        "review": "",
        "readDate": "2021-12-27"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370840494l/17333428._SY75_.jpg",
        "title": "Without Their Permission: How the 21st Century Will Be Made, Not Managed",
        "author": "Alexis Ohanian",
        "review": "",
        "readDate": "2021-12-07"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597695864l/54493401._SY75_.jpg",
        "title": "Project Hail Mary",
        "author": "Andy Weir",
        "review": "",
        "readDate": "2021-11-27"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511760639l/35656221._SX50_.jpg",
        "title": "A Monk’s Guide to A Clean House & Mind",
        "author": "Shoukei Matsumoto",
        "review": "",
        "readDate": "2021-11-28"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556604137l/34466963._SY75_.jpg",
        "title": "Why We Sleep: Unlocking the Power of Sleep and Dreams",
        "author": "Matthew Walker",
        "review": "",
        "readDate": "2021-11-15"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524067121l/37880811._SY75_.jpg",
        "title": "Make Time: How to Focus on What Matters Every Day",
        "author": "Jake Knapp",
        "review": "",
        "readDate": "2021-10-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1415810578l/56180._SY75_.jpg",
        "title": "La soledad era esto",
        "author": "Juan José Millás",
        "review": "",
        "readDate": "2021-10-24"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465404348l/28259132._SY75_.jpg",
        "title": "Chaos Monkeys: Obscene Fortune and Random Failure in Silicon Valley",
        "author": "Antonio García Martínez",
        "review": "",
        "readDate": "2021-10-23"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353467455l/13651._SY75_.jpg",
        "title": "The Dispossessed: An Ambiguous Utopia",
        "author": "Ursula K. Le Guin",
        "review": "",
        "readDate": "2021-10-06"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546028482l/40915762._SY75_.jpg",
        "title": "Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again",
        "author": "Eric J. Topol",
        "review": "",
        "readDate": "2021-09-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401798323l/19480636._SY75_.jpg",
        "title": "Irène (Camille Verhœven, #1)",
        "author": "Pierre Lemaitre",
        "review": "",
        "readDate": "2021-09-04"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651521921l/15138713._SY75_.jpg",
        "title": "Raíces económicas del deterioro ecológico y social: Más allá de los dogmas",
        "author": "José Manuel Naredo Pérez",
        "review": "",
        "readDate": "2021-08-28"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545854312l/12609433._SY75_.jpg",
        "title": "The Power of Habit: Why We Do What We Do in Life and Business",
        "author": "Charles Duhigg",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554279400l/42118073._SY75_.jpg",
        "title": "Trillion Dollar Coach: The Leadership Playbook of Silicon Valley's Bill Campbell",
        "author": "Eric Schmidt",
        "review": "",
        "readDate": "2021-08-12"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1709427131l/8620024._SY75_.jpg",
        "title": "Ebano",
        "author": "Ryszard Kapuściński",
        "review": "",
        "readDate": "2021-08-09"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561638191l/43722897._SY75_.jpg",
        "title": "The Art of Statistics: How to Learn from Data",
        "author": "David Spiegelhalter",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538051959l/32827109._SY75_.jpg",
        "title": "El fin de la muerte (Trilogía de los tres cuerpos, #3)",
        "author": "Liu Cixin",
        "review": "",
        "readDate": "2021-07-14"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388371291l/456._SY75_.jpg",
        "title": "Leviathan",
        "author": "Paul Auster",
        "review": "",
        "readDate": "2021-06-27"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1736840562l/15731248._SY75_.jpg",
        "title": "The Ph.D. Grind: A Ph.D. Student Memoir",
        "author": "Philip J. Guo",
        "review": "",
        "readDate": "2021-06-10"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1508781967l/32827084._SY75_.jpg",
        "title": "El bosque oscuro (Trilogía de los tres cuerpos, #2)",
        "author": "Liu Cixin",
        "review": "",
        "readDate": "2021-06-07"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559568004l/45186565._SY75_.jpg",
        "title": "Uncanny Valley",
        "author": "Anna Wiener",
        "review": "",
        "readDate": "2021-06-03"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511909569l/28487182._SY75_.jpg",
        "title": "El problema de los tres cuerpos (Trilogía de los tres cuerpos, #1)",
        "author": "Liu Cixin",
        "review": "",
        "readDate": "2021-05-30"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495386506l/32919530._SY75_.jpg",
        "title": "A Mind at Play: How Claude Shannon Invented the Information Age",
        "author": "Jimmy Soni",
        "review": "",
        "readDate": "2021-05-29"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400859671l/163977._SY75_.jpg",
        "title": "Tortilla Flat",
        "author": "John Steinbeck",
        "review": "",
        "readDate": "2021-05-22"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618749890l/57771547._SY75_.jpg",
        "title": "The Backyard Adventurer",
        "author": "Beau Miles",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442839731l/6261332._SY75_.jpg",
        "title": "Shop Class as Soulcraft: An Inquiry Into the Value of Work",
        "author": "Matthew B. Crawford",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599569204l/55051662._SY75_.jpg",
        "title": "Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World",
        "author": "Cade Metz",
        "review": "",
        "readDate": ""
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570129884l/52269471._SX50_SY75_.jpg",
        "title": "Mindf*ck: Cambridge Analytica and the Plot to Break America",
        "author": "Christopher Wylie",
        "review": "",
        "readDate": "2021-05-01"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447957962l/25744928._SY75_.jpg",
        "title": "Deep Work: Rules for Focused Success in a Distracted World",
        "author": "Cal Newport",
        "review": "",
        "readDate": "2021-04-25"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435697935l/56829._SY75_.jpg",
        "title": "Hackers: Heroes of the Computer Revolution",
        "author": "Steven Levy",
        "review": "",
        "readDate": "2021-04-21"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542097539l/42767065._SX50_.jpg",
        "title": "Nada es imposible",
        "author": "Kilian Jornet",
        "review": "",
        "readDate": "2021-01-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498300876l/34798604._SX50_.jpg",
        "title": "Vernon Subutex 3 (Vernon Subutex, #3)",
        "author": "Virginie Despentes",
        "review": "",
        "readDate": "2021-04-11"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569891996l/50175330._SX50_SY75_.jpg",
        "title": "The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum",
        "author": "Camila Russo",
        "review": "Amazing book about the Ethereum story. It is truly engaging, and the pace of the writing is wonderful. With this kind of books I feel the urge of starting my own business, but I still need to find the idea! ",
        "readDate": "2021-04-04"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580651263l/52213526._SY75_.jpg",
        "title": "The Buy Nothing, Get Everything Plan: Discover the Joy of Spending Less, Sharing More, and Living Generously",
        "author": "Liesl Clark",
        "review": "Interesting idea on how to spend less while regaining more relationships.",
        "readDate": "2021-03-25"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646305232l/16842._SX50_.jpg",
        "title": "A Single Man",
        "author": "Christopher Isherwood",
        "review": "",
        "readDate": "2021-03-20"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495812024l/34219858._SY75_.jpg",
        "title": "North: Finding My Way While Running the Appalachian Trail",
        "author": "Scott Jurek",
        "review": "This book outlines the amazon FKT (Fastest Known Time) of Scott Jurek in the Appalachian Trail. But, I think it is also focused on that, without truly amazing people around us, we are not able to accomplish the impossible.",
        "readDate": "2021-03-16"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574331253l/49960370._SY75_.jpg",
        "title": "The Story of More: How We Got to Climate Change and Where to Go from Here",
        "author": "Hope Jahren",
        "review": "In this amazing book a summary of how we have reached the climate condition that we are suffering nowadays is depicted. It is terrifying to read about how we have increased all the consumption of natural sources, and I think that the pace is not going to slow down. In order to stop this, I think that those of us who are lucky to live in wealthy countries need to stop our non-sustanaible way of leaving. We need to live with less, in order to reach an equilibrium. I am a vegetarian, and I try to be as zero waste as possible, but you can always do more. I want to try to do more.",
        "readDate": "2021-03-11"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435277555l/25796900._SY75_.jpg",
        "title": "Obfuscation: A User's Guide for Privacy and Protest",
        "author": "Finn Brunton",
        "review": "Nowadays privacy is a hot topic. Companies sell our data, but because we are using their services for free. It is true that leaving those servicies is an utopia, but obfuscation gives a path to fight for privacy while using these services. Really interesting book, and I keed an eye on the tools they describe trackmenot and Adnauseam.",
        "readDate": "2021-03-08"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583758795l/49624060._SY75_.jpg",
        "title": "Explaining Humans: What Science Can Teach Us about Life, Love and Relationships",
        "author": "Camilla Pang",
        "review": "How humans resamble to human relationships or behaviours is amazing. It is true that many of our actions can be related to science facts. However, I wasn't truly engage with this book. I don't know if it is because how it is written, which is mainly autobiographical or when I read it, but maybe I will re-read it in the future. ",
        "readDate": "2021-03-04"
    },
    {
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523530659l/39674332._SY75_.jpg",
        "title": "It Doesn't Have to be Crazy at Work",
        "author": "Jason Fried",
        "review": "Last year I read Rework, from the same authors, and I found it fascinating. The technology industry has derived in a hustle culture that I do not think is sustainable nor healthy. In this book, the founders of Basecamp tell how they approach the management of their company, with great advices in order to have a calm company. Some of these advices can be implemented in research, and I will try to do it. Someday I would like to work in a company like Basecamp.",
        "readDate": "2021-03-01"
    },

];
    const tableBody = document.getElementById('book-table-body');
    const searchInput = document.getElementById('searchInput');

    // Function to render the table based on an array of books
    function renderTable(booksToRender) {
        tableBody.innerHTML = ''; // Clear existing rows

        if (booksToRender.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center;">No books found.</td></tr>`;
            return;
        }
        
        booksToRender.forEach(book => {
            const row = document.createElement('tr');
            
            // The `data-label` attributes are used by the CSS for the responsive view
            row.innerHTML = `
                <td data-label="Cover"><img src="${book.cover}" alt="Cover of ${book.title}" class="book-cover"></td>
                <td data-label="Title">${book.title}</td>
                <td data-label="Author">${book.author}</td>
                <td data-label="Review">${book.review}</td>
                <td data-label="Read Date">${book.readDate}</td>
            `;
            
            tableBody.appendChild(row);
        });
    }

    // Function to filter books based on search term
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredBooks = books.filter(book => {
            return (
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.review.toLowerCase().includes(searchTerm)
            );
        });

        renderTable(filteredBooks);
    }

    // Add event listener for the search input
    searchInput.addEventListener('input', filterBooks);

    // Initial render of the full table
    renderTable(books);
});
