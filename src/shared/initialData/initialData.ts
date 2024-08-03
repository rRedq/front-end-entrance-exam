import { InitialData } from 'shared/types/dataTypes';

export const initialData: InitialData = {
  contacts: {
    label: 'Let´s chat! I´m ready to work on exciting projects',
    email: 'vann19bj@gmail.com',
    phone: '+34 666 666 666',
  },
  education: [
    {
      year: '2024',
      title: 'UX/UI',
      tags: ['UX', 'UI', 'research', 'DesignSystem', 'Agile', 'wireframing', 'figma', 'IA'],
      source: 'Neoland',
    },
    {
      year: '2022',
      title: 'Product designer',
      tags: ['analytics', 'research', 'prototype', 'wireframing'],
      source: 'Coursera',
    },
    {
      year: '2017 - 2021',
      title: 'Graphic design',
      tags: ['branding', 'web', 'illustration', 'adobe'],
      source: 'Cali Institute of the Arts',
    },
  ],
  experience: [
    {
      period: 'Jul. 2023 - Ago. 2023',
      position: 'Senior Graphic Designer',
      time: 'Pinnacle | Full-time',
      list: [
        'Research and brainstorm various design ideas for content and marketing.',
        'Review the work submitted by Junior Designers and sharing feedback.',
      ],
    },
    {
      period: 'Ene. 2021 - Jul. 2023',
      position: 'Graphic / Web designer',
      time: 'Double Square | Full-time',
      list: [
        'Development of internal projects from scratch, product design of brands..',
        'Landing page, webapps and hybrid apps.',
        'Taking decisions with stakeholders for the future of products such as Beagle labs, myur...',
      ],
    },
    {
      period: 'Feb. 2021 - Jul. 2023',
      position: 'Graphic Designer',
      time: 'Freelance',
      list: [
        'Visual design for Events, Brands and Products.',
        'Product design, Packaging Design.',
        'Logo Design.',
      ],
    },
  ],
  interests: [
    'branding',
    'brand identity',
    'logo',
    'typography',
    'photography',
    'designing',
    'poster design',
    'research',
    'social networks',
    'illustration',
  ],
  languages: [
    {
      language: 'English',
      level: '100',
    },
    {
      language: 'Spanish',
      level: '80',
    },
    {
      language: 'French',
      level: '70',
    },
  ],
  profileName: {
    greeting: 'Hello 👋🏻 I’m',
    name: 'Graham Hunt',
    position: 'Brand / Logo Designer',
  },
};
