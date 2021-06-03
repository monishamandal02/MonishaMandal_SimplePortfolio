import { nanoid } from 'nanoid';

export const headData = {
  title: 'Monisha Mandal',
  lang: 'en',
  description: 'Hey! Welcome to my Portfolio.',
};

// HERO DATA
export const heroData = {
  title: 'Hi, My Name is',
  name: 'Monisha Mandal',
  subtitle: '',
  cta: 'Click Here',
};

// ABOUT DATA
export const aboutData = {
  img: 'monisha.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://monishamandal02.github.io/Resume_webpage/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project 1.png',
    title: 'Resturant_Menu-React-1',
    info: 'A website for Resturant Menu.',
    url: 'https://monishamandal02.github.io/Menu_Reactjs-5/',
    repo: 'https://github.com/monishamandal02/Menu_Reactjs-5',
  },
  {
    id: nanoid(),
    img: 'Project 2.png',
    title: 'Details-React-2',
    info: 'A card webpage which provide details of selective people who data is added.',
    url: 'https://monishamandal02.github.io/Details-Reactjs_3/',
    repo: 'https://github.com/monishamandal02/Details-Reactjs_3',
  },
  {
    id: nanoid(),
    img: 'Project 3.png',
    title: 'Tour-React-3',
    info: 'A Reactjs Webpage',
    url: 'https://monishamandal02.github.io/Reactjs_2-Tours-Setup/',
    repo: 'https://github.com/monishamandal02/Reactjs_2-Tours-Setup',
  },
  {
    id: nanoid(),
    img: 'Project 4.png',
    title: 'API-React-4',
    info: 'A webpage where I used the external api for the first time.',
    url:'https://monishamandal02.github.io/TheCocktailDB_API-Reactjs-6/',
    repo: 'https://github.com/monishamandal02/TheCocktailDB_API-Reactjs-6',
  },
  {
    id: nanoid(),
    img: 'Project 5.png',
    title: 'PARK HERE 24',
    info: 'Park Here 24 is our ongoing project in which I am working with my team mates.It\'s a parking lot management system in which IOT and MERN stack will be used of proper deployment of entire project.',
    url: 'https://shreyanshsingh2107.github.io/PARK_Here-24/',
    repo: 'https://github.com/shreyanshsingh2107/PARK_Here-24',
  },
  {
    id: nanoid(),
    img: 'Project 6.png',
    title: 'Portfolio-React-5',
    info: 'My first portfolio website using Reactjs and Gatsby.',
    url: 'https://monishamandal02.github.io/MonishaMandal_SimplePortfolio/',
    repo: 'https://github.com/monishamandal02/MonishaMandal_SimplePortfolio',
  },
];

export const contactData = {
  cta: '',
  btn: '',
  email: 'monishamandal0203@gmail.com',
};

export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/m_riya02',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/monisha-mandal-418678193/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/monishamandal02',
    },
  ],
};

export const githubButtons = {
  isEnabled: true,
};
