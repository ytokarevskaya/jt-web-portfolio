import Image from "next/image";
import HeroSection from "./sections/hero/hero";
import PortfolioSection from "./sections/portfolio/portfolio";
import ContactSection from "./sections/contact/contact";

import css from "./globals.module.scss";

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
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <footer className={css.pageFooter}>
        <p className={css.paragraph}>© 2026 JT web. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
