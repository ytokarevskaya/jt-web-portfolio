import css from "./hero.module.scss";
import { SERVICES } from "../../const";

export default function HeroSection() {
    return (
        <section className={css.hero} id="hero">
        <main className={css.heroContent}>
          <div className={css.heading}>O mně</div>
          <h1 className={css.h1}>Partner pro váš webový projekt</h1>
          <p className={css.paragraph}>Ahoj, jsem Julia. Pomáhám podnikatelům a firmám s tvorbou, správou a rozvojem webů a e-shopů – od prvního nápadu až po každodenní provoz.</p>
          <div className={css.divider} />
        </main>
        <footer className={css.heroFooter}>
          <div className={css.heading}>Služby</div>
          <ul className={css.services}>{SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}</ul>
        </footer> 
      </section>
    );
}