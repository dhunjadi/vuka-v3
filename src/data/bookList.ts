export interface IBook {
    id: string;
    author: string;
    country: string;
    imgSrc: string;
    language: string;
    link: string;
    pages: number;
    title: string;
    year: number;
    copiesAvailiable: number;
}

export const bookList: IBook[] = [
    {
        id: '1',
        author: 'Chinua Achebe',
        country: 'Nigeria',
        imgSrc: '/images/BookCovers/ThingsFallApart.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
        pages: 209,
        title: 'Things Fall Apart',
        year: 1958,
        copiesAvailiable: 1,
    },
    {
        id: '2',
        author: 'Hans Christian Andersen',
        country: 'Denmark',
        imgSrc: '/images/BookCovers/fairy-tales.jpg',
        language: 'Danish',
        link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
        pages: 784,
        title: 'Fairy tales',
        year: 1836,
        copiesAvailiable: 5,
    },
    {
        id: '3',
        author: 'Dante Alighieri',
        country: 'Italy',
        imgSrc: '/images/BookCovers/divine-comedy.jpg',
        language: 'Italian',
        link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
        pages: 928,
        title: 'The Divine Comedy',
        year: 1315,
        copiesAvailiable: 5,
    },
    {
        id: '4',
        author: 'Unknown',
        country: 'Sumer and Akkadian Empire',
        imgSrc: '/images/BookCovers/gilgamesh.jpg',
        language: 'Akkadian',
        link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
        pages: 160,
        title: 'The Epic Of Gilgamesh',
        year: -170,
        copiesAvailiable: 50,
    },
    {
        id: '5',
        author: 'Unknown',
        country: 'Achaemenid Empire',
        imgSrc: '/images/BookCovers/book-of-job.jpg',
        language: 'Hebrew',
        link: 'https://en.wikipedia.org/wiki/Book_of_Job\n',
        pages: 176,
        title: 'The Book Of Job',
        year: -600,
        copiesAvailiable: 5,
    },
    {
        id: '6',
        author: 'Unknown',
        country: 'India/Iran/Iraq/Egypt/Tajikistan',
        imgSrc: 'images/BookCovers/1001-nights.jpg',
        language: 'Arabic',
        link: 'https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n',
        pages: 288,
        title: 'One Thousand and One Nights',
        year: 1200,
        copiesAvailiable: 5,
    },
    {
        id: '7',
        author: 'Jane Austen',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/pride-and-prejudice.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice\n',
        pages: 226,
        title: 'Pride and Prejudice',
        year: 1813,
        copiesAvailiable: 5,
    },
    {
        id: '8',
        author: 'Samuel Beckett',
        country: 'Republic of Ireland',
        imgSrc: 'images/BookCovers/molloy.jpg',
        language: 'French, English',
        link: 'https://en.wikipedia.org/wiki/Molloy_(novel)\n',
        pages: 256,
        title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
        year: 1952,
        copiesAvailiable: 5,
    },
    {
        id: '9',
        author: 'Giovanni Boccaccio',
        country: 'Italy',
        imgSrc: 'images/BookCovers/decameron.jpg',
        language: 'Italian',
        link: 'https://en.wikipedia.org/wiki/The_Decameron\n',
        pages: 1024,
        title: 'The Decameron',
        year: 1351,
        copiesAvailiable: 5,
    },
    {
        id: '10',
        author: 'Jorge Luis Borges',
        country: 'Argentina',
        imgSrc: 'images/BookCovers/ficciones.jpg',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Ficciones\n',
        pages: 224,
        title: 'Ficciones',
        year: 1965,
        copiesAvailiable: 5,
    },
    {
        id: '11',
        author: 'Emily Bront\u00eb',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/wuthering-heights.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Wuthering_Heights\n',
        pages: 342,
        title: 'Wuthering Heights',
        year: 1847,
        copiesAvailiable: 5,
    },
    {
        id: '12',
        author: 'Albert Camus',
        country: 'Algeria, French Empire',
        imgSrc: 'images/BookCovers/stranger.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/The_Stranger_(novel)\n',
        pages: 185,
        title: 'The Stranger',
        year: 1942,
        copiesAvailiable: 5,
    },
    {
        id: '13',
        author: 'Paul Celan',
        country: 'Romania, France',
        imgSrc: 'images/BookCovers/paul-celan-poems.jpg',
        language: 'German',
        link: '\n',
        pages: 320,
        title: 'Poems',
        year: 1952,
        copiesAvailiable: 5,
    },
    {
        id: '14',
        author: 'Louis-Ferdinand C\u00e9line',
        country: 'France',
        imgSrc: 'images/BookCovers/journey-to-the-end-of-night.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n',
        pages: 505,
        title: 'Journey to the End of the Night',
        year: 1932,
        copiesAvailiable: 5,
    },
    {
        id: '15',
        author: 'Miguel de Cervantes',
        country: 'Spain',
        imgSrc: 'images/BookCovers/don-quijote.jpg',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Don_Quixote\n',
        pages: 1056,
        title: 'Don Quijote De La Mancha',
        year: 1610,
        copiesAvailiable: 5,
    },
    {
        id: '16',
        author: 'Geoffrey Chaucer',
        country: 'England',
        imgSrc: 'images/BookCovers/canterbury-tales.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/The_Canterbury_Tales\n',
        pages: 544,
        title: 'The Canterbury Tales',
        year: 1450,
        copiesAvailiable: 5,
    },
    {
        id: '17',
        author: 'Anton Chekhov',
        country: 'Russia',
        imgSrc: 'images/BookCovers/anton-chekhov-stories.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n',
        pages: 194,
        title: 'Stories',
        year: 1886,
        copiesAvailiable: 5,
    },
    {
        id: '18',
        author: 'Joseph Conrad',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/nostromo.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Nostromo\n',
        pages: 320,
        title: 'Nostromo',
        year: 1904,
        copiesAvailiable: 5,
    },
    {
        id: '19',
        author: 'Charles Dickens',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/great-expectations.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Great_Expectations\n',
        pages: 194,
        title: 'Great Expectations',
        year: 1861,
        copiesAvailiable: 5,
    },
    {
        id: '20',
        author: 'Denis Diderot',
        country: 'France',
        imgSrc: 'images/BookCovers/jacques-the-fatalist.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n',
        pages: 596,
        title: 'Jacques the Fatalist',
        year: 1796,
        copiesAvailiable: 5,
    },
    {
        id: '21',
        author: 'Alfred D\u00f6blin',
        country: 'Germany',
        imgSrc: 'images/BookCovers/berlin-alexanderplatz.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n',
        pages: 600,
        title: 'Berlin Alexanderplatz',
        year: 1929,
        copiesAvailiable: 5,
    },
    {
        id: '22',
        author: 'Fyodor Dostoevsky',
        country: 'Russia',
        imgSrc: 'images/BookCovers/crime-and-punishment.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/Crime_and_Punishment\n',
        pages: 551,
        title: 'Crime and Punishment',
        year: 1866,
        copiesAvailiable: 5,
    },
    {
        id: '23',
        author: 'Fyodor Dostoevsky',
        country: 'Russia',
        imgSrc: 'images/BookCovers/the-idiot.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/The_Idiot\n',
        pages: 656,
        title: 'The Idiot',
        year: 1869,
        copiesAvailiable: 5,
    },
    {
        id: '24',
        author: 'Fyodor Dostoevsky',
        country: 'Russia',
        imgSrc: 'images/BookCovers/the-possessed.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n',
        pages: 768,
        title: 'The Possessed',
        year: 1872,
        copiesAvailiable: 5,
    },
    {
        id: '25',
        author: 'Fyodor Dostoevsky',
        country: 'Russia',
        imgSrc: 'images/BookCovers/the-brothers-karamazov.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n',
        pages: 824,
        title: 'The Brothers Karamazov',
        year: 1880,
        copiesAvailiable: 5,
    },
    {
        id: '26',
        author: 'George Eliot',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/middlemarch.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Middlemarch\n',
        pages: 800,
        title: 'Middlemarch',
        year: 1871,
        copiesAvailiable: 5,
    },
    {
        id: '27',
        author: 'Ralph Ellison',
        country: 'United States',
        imgSrc: 'images/BookCovers/invisible-man.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Invisible_Man\n',
        pages: 581,
        title: 'Invisible Man',
        year: 1952,
        copiesAvailiable: 5,
    },
    {
        id: '28',
        author: 'Euripides',
        country: 'Greece',
        imgSrc: 'images/BookCovers/medea.jpg',
        language: 'Greek',
        link: 'https://en.wikipedia.org/wiki/Medea_(play)\n',
        pages: 104,
        title: 'Medea',
        year: -431,
        copiesAvailiable: 5,
    },
    {
        id: '29',
        author: 'William Faulkner',
        country: 'United States',
        imgSrc: 'images/BookCovers/absalom-absalom.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Absalom,_Absalom!\n',
        pages: 313,
        title: 'Absalom, Absalom!',
        year: 1936,
        copiesAvailiable: 5,
    },
    {
        id: '30',
        author: 'William Faulkner',
        country: 'United States',
        imgSrc: 'images/BookCovers/the-sound-and-the-fury.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n',
        pages: 326,
        title: 'The Sound and the Fury',
        year: 1929,
        copiesAvailiable: 5,
    },
    {
        id: '31',
        author: 'Gustave Flaubert',
        country: 'France',
        imgSrc: 'images/BookCovers/madame-bovary.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Madame_Bovary\n',
        pages: 528,
        title: 'Madame Bovary',
        year: 1857,
        copiesAvailiable: 5,
    },
    {
        id: '32',
        author: 'Gustave Flaubert',
        country: 'France',
        imgSrc: 'images/BookCovers/sentimental-education.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Sentimental_Education\n',
        pages: 606,
        title: 'Sentimental Education',
        year: 1869,
        copiesAvailiable: 5,
    },
    {
        id: '33',
        author: 'Federico Garc\u00eda Lorca',
        country: 'Spain',
        imgSrc: 'images/BookCovers/gypsy-ballads.jpg',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Gypsy_Ballads\n',
        pages: 218,
        title: 'Gypsy Ballads',
        year: 1928,
        copiesAvailiable: 5,
    },
    {
        id: '34',
        author: 'Gabriel Garc\u00eda M\u00e1rquez',
        country: 'Colombia',
        imgSrc: 'images/BookCovers/one-hundred-years-of-solitude.jpg',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n',
        pages: 417,
        title: 'One Hundred Years of Solitude',
        year: 1967,
        copiesAvailiable: 5,
    },
    {
        id: '35',
        author: 'Gabriel Garc\u00eda M\u00e1rquez',
        country: 'Colombia',
        imgSrc: 'images/BookCovers/love-in-the-time-of-cholera.jpg',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n',
        pages: 368,
        title: 'Love in the Time of Cholera',
        year: 1985,
        copiesAvailiable: 5,
    },
    {
        id: '36',
        author: 'Johann Wolfgang von Goethe',
        country: 'Saxe-Weimar',
        imgSrc: 'images/BookCovers/faust.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/Goethe%27s_Faust\n',
        pages: 158,
        title: 'Faust',
        year: 1832,
        copiesAvailiable: 5,
    },
    {
        id: '37',
        author: 'Nikolai Gogol',
        country: 'Russia',
        imgSrc: 'images/BookCovers/dead-souls.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/Dead_Souls\n',
        pages: 432,
        title: 'Dead Souls',
        year: 1842,
        copiesAvailiable: 5,
    },
    {
        id: '38',
        author: 'G\u00fcnter Grass',
        country: 'Germany',
        imgSrc: 'images/BookCovers/the-tin-drum.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/The_Tin_Drum\n',
        pages: 600,
        title: 'The Tin Drum',
        year: 1959,
        copiesAvailiable: 5,
    },
    {
        id: '39',
        author: 'Jo\u00e3o Guimar\u00e3es Rosa',
        country: 'Brazil',
        imgSrc: 'images/BookCovers/the-devil-to-pay-in-the-backlands.jpg',
        language: 'Portuguese',
        link: 'https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n',
        pages: 494,
        title: 'The Devil to Pay in the Backlands',
        year: 1956,
        copiesAvailiable: 5,
    },
    {
        id: '40',
        author: 'Knut Hamsun',
        country: 'Norway',
        imgSrc: 'images/BookCovers/hunger.jpg',
        language: 'Norwegian',
        link: 'https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n',
        pages: 176,
        title: 'Hunger',
        year: 1890,
        copiesAvailiable: 5,
    },
    {
        id: '41',
        author: 'Ernest Hemingway',
        country: 'United States',
        imgSrc: 'images/BookCovers/the-old-man-and-the-sea.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n',
        pages: 128,
        title: 'The Old Man and the Sea',
        year: 1952,
        copiesAvailiable: 5,
    },
    {
        id: '42',
        author: 'Homer',
        country: 'Greece',
        imgSrc: 'images/BookCovers/iliad.jpg',
        language: 'Greek',
        link: 'https://en.wikipedia.org/wiki/Iliad\n',
        pages: 608,
        title: 'Iliad',
        year: -735,
        copiesAvailiable: 5,
    },
    {
        id: '43',
        author: 'Homer',
        country: 'Greece',
        imgSrc: 'images/BookCovers/odyssey.jpg',
        language: 'Greek',
        link: 'https://en.wikipedia.org/wiki/Odyssey\n',
        pages: 374,
        title: 'Odyssey',
        year: -800,
        copiesAvailiable: 5,
    },
    {
        id: '44',
        author: 'Henrik Ibsen',
        country: 'Norway',
        imgSrc: 'images/BookCovers/a-dolls-house.jpg',
        language: 'Norwegian',
        link: 'https://en.wikipedia.org/wiki/A_Doll%27s_House\n',
        pages: 68,
        title: "A Doll's House",
        year: 1879,
        copiesAvailiable: 5,
    },
    {
        id: '45',
        author: 'James Joyce',
        country: 'Irish Free State',
        imgSrc: 'images/BookCovers/ulysses.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Ulysses_(novel)\n',
        pages: 228,
        title: 'Ulysses',
        year: 1922,
        copiesAvailiable: 5,
    },
    {
        id: '46',
        author: 'Franz Kafka',
        country: 'Czechoslovakia',
        imgSrc: 'images/BookCovers/kafka-stories.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n',
        pages: 488,
        title: 'Stories',
        year: 1924,
        copiesAvailiable: 5,
    },
    {
        id: '47',
        author: 'Franz Kafka',
        country: 'Czechoslovakia',
        imgSrc: 'images/BookCovers/the-trial.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/The_Trial\n',
        pages: 160,
        title: 'The Trial',
        year: 1925,
        copiesAvailiable: 5,
    },
    {
        id: '48',
        author: 'Franz Kafka',
        country: 'Czechoslovakia',
        imgSrc: 'images/BookCovers/the-castle.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/The_Castle_(novel)\n',
        pages: 352,
        title: 'The Castle',
        year: 1926,
        copiesAvailiable: 5,
    },
    {
        id: '49',
        author: 'K\u0101lid\u0101sa',
        country: 'India',
        imgSrc: 'images/BookCovers/the-recognition-of-shakuntala.jpg',
        language: 'Sanskrit',
        link: 'https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n',
        pages: 147,
        title: 'The recognition of Shakuntala',
        year: 150,
        copiesAvailiable: 5,
    },
    {
        id: '50',
        author: 'Yasunari Kawabata',
        country: 'Japan',
        imgSrc: 'images/BookCovers/the-sound-of-the-mountain.jpg',
        language: 'Japanese',
        link: 'https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n',
        pages: 288,
        title: 'The Sound of the Mountain',
        year: 1954,
        copiesAvailiable: 5,
    },
    {
        id: '51',
        author: 'Nikos Kazantzakis',
        country: 'Greece',
        imgSrc: 'images/BookCovers/zorba-the-greek.jpg',
        language: 'Greek',
        link: 'https://en.wikipedia.org/wiki/Zorba_the_Greek\n',
        pages: 368,
        title: 'Zorba the Greek',
        year: 1946,
        copiesAvailiable: 5,
    },
    {
        id: '52',
        author: 'D. H. Lawrence',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/sons-and-lovers.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Sons_and_Lovers\n',
        pages: 432,
        title: 'Sons and Lovers',
        year: 1913,
        copiesAvailiable: 5,
    },
    {
        id: '53',
        author: 'Halld\u00f3r Laxness',
        country: 'Iceland',
        imgSrc: 'images/BookCovers/independent-people.jpg',
        language: 'Icelandic',
        link: 'https://en.wikipedia.org/wiki/Independent_People\n',
        pages: 470,
        title: 'Independent People',
        year: 1934,
        copiesAvailiable: 5,
    },
    {
        id: '54',
        author: 'Giacomo Leopardi',
        country: 'Italy',
        imgSrc: 'images/BookCovers/giacomo-leopardi-poems.jpg',
        language: 'Italian',
        link: '\n',
        pages: 184,
        title: 'Poems',
        year: 1818,
        copiesAvailiable: 5,
    },
    {
        id: '55',
        author: 'Doris Lessing',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/the-golden-notebook.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/The_Golden_Notebook\n',
        pages: 688,
        title: 'The Golden Notebook',
        year: 1962,
        copiesAvailiable: 5,
    },
    {
        id: '56',
        author: 'Astrid Lindgren',
        country: 'Sweden',
        imgSrc: 'images/BookCovers/pippi-longstocking.jpg',
        language: 'Swedish',
        link: 'https://en.wikipedia.org/wiki/Pippi_Longstocking\n',
        pages: 160,
        title: 'Pippi Longstocking',
        year: 1945,
        copiesAvailiable: 5,
    },
    {
        id: '57',
        author: 'Lu Xun',
        country: 'China',
        imgSrc: 'images/BookCovers/diary-of-a-madman.jpg',
        language: 'Chinese',
        link: 'https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n',
        pages: 389,
        title: 'Diary of a Madman',
        year: 1918,
        copiesAvailiable: 5,
    },
    {
        id: '58',
        author: 'Naguib Mahfouz',
        country: 'Egypt',
        imgSrc: 'images/BookCovers/children-of-gebelawi.jpg',
        language: 'Arabic',
        link: 'https://en.wikipedia.org/wiki/Children_of_Gebelawi\n',
        pages: 355,
        title: 'Children of Gebelawi',
        year: 1959,
        copiesAvailiable: 5,
    },
    {
        id: '59',
        author: 'Thomas Mann',
        country: 'Germany',
        imgSrc: 'images/BookCovers/buddenbrooks.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/Buddenbrooks\n',
        pages: 736,
        title: 'Buddenbrooks',
        year: 1901,
        copiesAvailiable: 5,
    },
    {
        id: '60',
        author: 'Thomas Mann',
        country: 'Germany',
        imgSrc: 'images/BookCovers/the-magic-mountain.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/The_Magic_Mountain\n',
        pages: 720,
        title: 'The Magic Mountain',
        year: 1924,
        copiesAvailiable: 5,
    },
    {
        id: '61',
        author: 'Herman Melville',
        country: 'United States',
        imgSrc: 'images/BookCovers/moby-dick.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Moby-Dick\n',
        pages: 378,
        title: 'Moby Dick',
        year: 1851,
        copiesAvailiable: 5,
    },
    {
        id: '62',
        author: 'Michel de Montaigne',
        country: 'France',
        imgSrc: 'images/BookCovers/michel-de-montaigne-essays.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Essays_(Montaigne)\n',
        pages: 404,
        title: 'Essays',
        year: 1595,
        copiesAvailiable: 5,
    },
    {
        id: '63',
        author: 'Elsa Morante',
        country: 'Italy',
        imgSrc: 'images/BookCovers/elsa-morante-history.jpg',
        language: 'Italian',
        link: 'https://en.wikipedia.org/wiki/History_(novel)\n',
        pages: 600,
        title: 'History',
        year: 1974,
        copiesAvailiable: 5,
    },
    {
        id: '64',
        author: 'Toni Morrison',
        country: 'United States',
        imgSrc: 'images/BookCovers/beloved.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Beloved_(novel)\n',
        pages: 321,
        title: 'Beloved',
        year: 1987,
        copiesAvailiable: 5,
    },
    {
        id: '65',
        author: 'Murasaki Shikibu',
        country: 'Japan',
        imgSrc: 'images/BookCovers/the-tale-of-genji.jpg',
        language: 'Japanese',
        link: 'https://en.wikipedia.org/wiki/The_Tale_of_Genji\n',
        pages: 1360,
        title: 'The Tale of Genji',
        year: 1006,
        copiesAvailiable: 5,
    },
    {
        id: '66',
        author: 'Robert Musil',
        country: 'Austria',
        imgSrc: 'images/BookCovers/the-man-without-qualities.jpg',
        language: 'German',
        link: 'https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n',
        pages: 365,
        title: 'The Man Without Qualities',
        year: 1931,
        copiesAvailiable: 5,
    },
    {
        id: '67',
        author: 'Vladimir Nabokov',
        country: 'Russia/United States',
        imgSrc: 'images/BookCovers/lolita.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Lolita\n',
        pages: 317,
        title: 'Lolita',
        year: 1955,
        copiesAvailiable: 5,
    },
    {
        id: '68',
        author: 'George Orwell',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/1984.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n',
        pages: 272,
        title: 'Nineteen Eighty-Four',
        year: 1949,
        copiesAvailiable: 5,
    },
    {
        id: '69',
        author: 'Ovid',
        country: 'Roman Empire',
        imgSrc: 'images/BookCovers/metamorphoses.jpg',
        language: 'Classical Latin',
        link: 'https://en.wikipedia.org/wiki/Metamorphoses\n',
        pages: 576,
        title: 'Metamorphoses',
        year: 100,
        copiesAvailiable: 5,
    },
    {
        id: '70',
        author: 'Fernando Pessoa',
        country: 'Portugal',
        imgSrc: 'images/BookCovers/the-book-of-disquiet.jpg',
        language: 'Portuguese',
        link: 'https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n',
        pages: 272,
        title: 'The Book of Disquiet',
        year: 1928,
        copiesAvailiable: 5,
    },
    {
        id: '71',
        author: 'Edgar Allan Poe',
        country: 'United States',
        imgSrc: 'images/BookCovers/edgar-allan-poe-tales.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n',
        pages: 842,
        title: 'Tales',
        year: 1950,
        copiesAvailiable: 5,
    },
    {
        id: '72',
        author: 'Marcel Proust',
        country: 'France',
        imgSrc: 'images/BookCovers/in-search-of-lost-time.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n',
        pages: 2408,
        title: 'In Search of Lost Time',
        year: 1920,
        copiesAvailiable: 5,
    },
    {
        id: '73',
        author: 'Fran\u00e7ois Rabelais',
        country: 'France',
        imgSrc: 'images/BookCovers/gargantua-and-pantagruel.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n',
        pages: 623,
        title: 'Gargantua and Pantagruel',
        year: 1533,
        copiesAvailiable: 5,
    },
    {
        id: '74',
        author: 'Juan Rulfo',
        country: 'Mexico',
        imgSrc: 'images/BookCovers/pedro-paramo.jpg',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n',
        pages: 124,
        title: 'Pedro P\u00e1ramo',
        year: 1955,
        copiesAvailiable: 5,
    },
    {
        id: '75',
        author: 'Rumi',
        country: 'Sultanate of Rum',
        imgSrc: 'images/BookCovers/the-masnavi.jpg',
        language: 'Persian',
        link: 'https://en.wikipedia.org/wiki/Masnavi\n',
        pages: 438,
        title: 'The Masnavi',
        year: 1236,
        copiesAvailiable: 5,
    },
    {
        id: '76',
        author: 'Salman Rushdie',
        country: 'United Kingdom, India',
        imgSrc: 'images/BookCovers/midnights-children.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Midnight%27s_Children\n',
        pages: 536,
        title: "Midnight's Children",
        year: 1981,
        copiesAvailiable: 5,
    },
    {
        id: '77',
        author: 'Saadi',
        country: 'Persia, Persian Empire',
        imgSrc: 'images/BookCovers/bostan.jpg',
        language: 'Persian',
        link: 'https://en.wikipedia.org/wiki/Bustan_(book)\n',
        pages: 298,
        title: 'Bostan',
        year: 1257,
        copiesAvailiable: 5,
    },
    {
        id: '78',
        author: 'Tayeb Salih',
        country: 'Sudan',
        imgSrc: 'images/BookCovers/season-of-migration-to-the-north.jpg',
        language: 'Arabic',
        link: 'https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n',
        pages: 139,
        title: 'Season of Migration to the North',
        year: 1966,
        copiesAvailiable: 5,
    },
    {
        id: '79',
        author: 'Jos\u00e9 Saramago',
        country: 'Portugal',
        imgSrc: 'images/BookCovers/blindness.jpg',
        language: 'Portuguese',
        link: 'https://en.wikipedia.org/wiki/Blindness_(novel)\n',
        pages: 352,
        title: 'Blindness',
        year: 1995,
        copiesAvailiable: 5,
    },
    {
        id: '80',
        author: 'William Shakespeare',
        country: 'England',
        imgSrc: 'images/BookCovers/hamlet.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Hamlet\n',
        pages: 432,
        title: 'Hamlet',
        year: 1603,
        copiesAvailiable: 5,
    },
    {
        id: '81',
        author: 'William Shakespeare',
        country: 'England',
        imgSrc: 'images/BookCovers/king-lear.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/King_Lear\n',
        pages: 384,
        title: 'King Lear',
        year: 1608,
        copiesAvailiable: 5,
    },
    {
        id: '82',
        author: 'William Shakespeare',
        country: 'England',
        imgSrc: 'images/BookCovers/othello.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Othello\n',
        pages: 314,
        title: 'Othello',
        year: 1609,
        copiesAvailiable: 5,
    },
    {
        id: '83',
        author: 'Sophocles',
        country: 'Greece',
        imgSrc: 'images/BookCovers/oedipus-the-king.jpg',
        language: 'Greek',
        link: 'https://en.wikipedia.org/wiki/Oedipus_the_King\n',
        pages: 88,
        title: 'Oedipus the King',
        year: -430,
        copiesAvailiable: 5,
    },
    {
        id: '84',
        author: 'Stendhal',
        country: 'France',
        imgSrc: 'images/BookCovers/the-red-and-the-black.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/The_Red_and_the_Black\n',
        pages: 576,
        title: 'The Red and the Black',
        year: 1830,
        copiesAvailiable: 5,
    },
    {
        id: '85',
        author: 'Laurence Sterne',
        country: 'England',
        imgSrc: 'images/BookCovers/the-life-and-opinions-of-tristram-shandy.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n',
        pages: 640,
        title: 'The Life And Opinions of Tristram Shandy',
        year: 1760,
        copiesAvailiable: 5,
    },
    {
        id: '86',
        author: 'Italo Svevo',
        country: 'Italy',
        imgSrc: 'images/BookCovers/confessions-of-zeno.jpg',
        language: 'Italian',
        link: 'https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n',
        pages: 412,
        title: 'Confessions of Zeno',
        year: 1923,
        copiesAvailiable: 5,
    },
    {
        id: '87',
        author: 'Jonathan Swift',
        country: 'Ireland',
        imgSrc: 'images/BookCovers/gullivers-travels.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n',
        pages: 178,
        title: "Gulliver's Travels",
        year: 1726,
        copiesAvailiable: 5,
    },
    {
        id: '88',
        author: 'Leo Tolstoy',
        country: 'Russia',
        imgSrc: 'images/BookCovers/war-and-peace.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/War_and_Peace\n',
        pages: 1296,
        title: 'War and Peace',
        year: 1867,
        copiesAvailiable: 5,
    },
    {
        id: '89',
        author: 'Leo Tolstoy',
        country: 'Russia',
        imgSrc: 'images/BookCovers/anna-karenina.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/Anna_Karenina\n',
        pages: 864,
        title: 'Anna Karenina',
        year: 1877,
        copiesAvailiable: 5,
    },
    {
        id: '90',
        author: 'Leo Tolstoy',
        country: 'Russia',
        imgSrc: 'images/BookCovers/the-death-of-ivan-ilyich.jpg',
        language: 'Russian',
        link: 'https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n',
        pages: 92,
        title: 'The Death of Ivan Ilyich',
        year: 1886,
        copiesAvailiable: 5,
    },
    {
        id: '91',
        author: 'Mark Twain',
        country: 'United States',
        imgSrc: 'images/BookCovers/the-adventures-of-huckleberry-finn.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n',
        pages: 224,
        title: 'The Adventures of Huckleberry Finn',
        year: 1884,
        copiesAvailiable: 5,
    },
    {
        id: '92',
        author: 'Valmiki',
        country: 'India',
        imgSrc: 'images/BookCovers/ramayana.jpg',
        language: 'Sanskrit',
        link: 'https://en.wikipedia.org/wiki/Ramayana\n',
        pages: 152,
        title: 'Ramayana',
        year: -450,
        copiesAvailiable: 5,
    },
    {
        id: '93',
        author: 'Virgil',
        country: 'Roman Empire',
        imgSrc: 'images/BookCovers/the-aeneid.jpg',
        language: 'Classical Latin',
        link: 'https://en.wikipedia.org/wiki/Aeneid\n',
        pages: 442,
        title: 'The Aeneid',
        year: -23,
        copiesAvailiable: 5,
    },
    {
        id: '94',
        author: 'Vyasa',
        country: 'India',
        imgSrc: 'images/BookCovers/mahabharata.jpg',
        language: 'Sanskrit',
        link: 'https://en.wikipedia.org/wiki/Mahabharata\n',
        pages: 276,
        title: 'Mahabharata',
        year: -700,
        copiesAvailiable: 5,
    },
    {
        id: '95',
        author: 'Walt Whitman',
        country: 'United States',
        imgSrc: 'images/BookCovers/leaves-of-grass.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Leaves_of_Grass\n',
        pages: 152,
        title: 'Leaves of Grass',
        year: 1855,
        copiesAvailiable: 5,
    },
    {
        id: '96',
        author: 'Virginia Woolf',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/mrs-dalloway.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Mrs_Dalloway\n',
        pages: 216,
        title: 'Mrs Dalloway',
        year: 1925,
        copiesAvailiable: 5,
    },
    {
        id: '97',
        author: 'Virginia Woolf',
        country: 'United Kingdom',
        imgSrc: 'images/BookCovers/to-the-lighthouse.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/To_the_Lighthouse\n',
        pages: 209,
        title: 'To the Lighthouse',
        year: 1927,
        copiesAvailiable: 5,
    },
    {
        id: '98',
        author: 'Marguerite Yourcenar',
        country: 'France/Belgium',
        imgSrc: 'images/BookCovers/memoirs-of-hadrian.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n',
        pages: 408,
        title: 'Memoirs of Hadrian',
        year: 1951,
        copiesAvailiable: 5,
    },
];

export default bookList;