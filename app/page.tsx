import Image from "next/image";
import css from "./globals.module.scss";

const SERVICES = ['Web design', 'Tvorba webových stránek', 'API integrace', 'Správa obsahu', 'Optimalizace výkonu', 'SEO optimalizace', 'Údržba a podpora'];

const PROJECTS = [
  {
    id: 'marco-barbershop',
    name: 'Marco Barbershop',
    description: 'Web pro barbershop s rezervačním systémem vytvořeným na míru.',
    images: ['/img/projects/marcobarbershop.png'],
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
    images: ['/img/projects/perfectsignature.png'],
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

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <Image src="/img/logo.svg" alt="Logo" className={css.logo} width={124} height={38} />
        <nav>
          <ul className={css.nav}>
            <li><a href="#hero">O mně</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Kontakty</a></li>
          </ul>
        </nav>
      </header>
      <section className={css.hero} id="hero">
        <main className={css.heroContent}>
          <div className={css.heading}>O mně</div>
          <h1 className={css.h1}>Tvořím moderní weby, které přinášejí výsledky</h1>
          <p className={css.paragraph}>Pomáhám firmám a podnikatelům s tvorbou webových stránek od nuly, jejich úpravami a rozvojem. Spojuji technické řešení, čistý design a promýšlenou strukturu.</p>
          <div className={css.divider} />
        </main>
        <footer className={css.heroFooter}>
          <div className={css.heading}>Služby</div>
          <ul className={css.services}>{SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}</ul>
        </footer> 
      </section>
      <section className={css.portfolio} id="portfolio">
        <div className={css.heading}>Portfolio</div>
        <h2 className={css.h1}>Vybrané projekty</h2>
        <div className={css.projects}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={css.projectCard}>
              <div className={css.projectGallery}>
                <div className={css.mainImage}>
                  <Image src={project.images[0]} alt={project.name} width={594} height={350} />
                </div>
              </div>
              <div className={css.projectCardDivider} />
              <div className={css.projectDescription}>
                <h3 className={css.h2}>{project.name}</h3>
                <div className={css.h3}>
                  {project.tags.join(' / ')}
                </div>
                <p className={css.paragraph}>{project.description}</p>
                <ul>
                  {project.bulletPoints.map((point, index) => (
                    <li key={index} className={css.paragraph}>
                      {point}
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Zobrazit web
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={css.contact} id="contact">
        <div className={css.contactText}>
          <div className={css.heading}>Kontakt</div>
          <h2 className={css.h2}>Máte zájem o spolupráci?</h2>
          <div className={css.divider} />
          <p className={css.paragraph}>Napište mi pár vět o projektu a já se vám ozvu zpět</p>
          <div className={css.links}>
            <div className={css.link}>
              <Image src="/img/email.svg" alt="Email icon" width={18} height={18} />
              <a href="mailto:j.linsher.jz@gmail.com">
                j.linsher.jz@gmail.com
              </a>
            </div>
            <div className={css.link}>
              <Image src="/img/linkedin.svg" alt="Linkedin icon" width={18} height={18} />
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/j-linsher
              </a>
            </div>
            <div className={css.link}>
              <Image src="/img/github.svg" alt="Github icon" width={18} height={18} />
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                github.com/j-linsher
              </a>
            </div>
          </div>
        </div>
        <div className={css.contactForm}>
          <form className={css.form}>
            <div className={css.inputs}>
              <input type="text" id="name" name="name" autoComplete="name" required placeholder="Vaše jméno" />
              <input type="email" id="email" name="email" autoComplete="email" required placeholder="Váš email" />
            </div>
            <textarea className={css.textarea} id="message" name="message" rows={5} required placeholder="Popište prosím svůj projekt..."></textarea>
            <button type="submit" className={css.submitButton}>Odeslat zprávu</button>
          </form>
        </div>
      </section>
      <footer className={css.pageFooter}>
        <p className={css.paragraph}>© 2026 JT web. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
