import css from "./hero.module.scss";
import { SERVICES } from "../../const";

export default function HeroSection() {
    return (
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
    );
}