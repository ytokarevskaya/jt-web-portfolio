export const SERVICES = ['Web design', 'Tvorba webových stránek', 'API integrace', 'Správa obsahu', 'Optimalizace výkonu', 'SEO optimalizace', 'Údržba a podpora'];

export const PROJECTS = [
  {
    id: 'marco-barbershop',
    name: 'Marco Barbershop',
    description: 'Web pro barbershop s rezervačním systémem vytvořeným na míru.',
    images: [
      {
        path: '/img/projects/marcobarbershop.png',
        text: 'Hlavní stránka'
      },
      {
        path: '/img/projects/marco-price.png',
        text: 'Price list'
      },
      {
        path: '/img/projects/marco-rs-1.png',
        text: 'Rezervacni system'
      },
    ],
    tags: ['Wordpress', 'Rezervační systém'],
    bulletPoints: [
      'Úprava WordPress šablony pro vytvoření moderního a atraktivního designu',
      'Implementace rezervačního systému umožňujícího zákazníkům snadno rezervovat termíny online',
      'Responzivní design zajišťující optimální zobrazení na všech zařízeních',
      'Optimalizace rychlosti načítání pro lepší uživatelský zážitek a SEO',
    ],
    link: 'https://marcobarbershop.cz',
  },
  {
    id: 'perfect-siganture',
    name: 'Perfect Signature',
    description: 'E-shop s luxusními psacími pery na základě WordPressu',
    images: [
      {
        path: '/img/projects/perfectsignature.png',
        text: 'Hlavní stránka'
      }
    ],
    tags: ['Wordpress', 'Redesign'],
    bulletPoints: [
      'Redesign stávajícího WordPress e-shopu pro moderní a elegantní vzhled',
      'Úpravy existujících funkcí pro zlepšení uživatelského zážitku',
      'Optimalizace výkonu pro rychlé načítání',
      'Správa produktů a obsahu',
    ],
    link: 'https://perfectsignature.com',
  }
];