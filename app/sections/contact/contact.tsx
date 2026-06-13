import Image from "next/image";

import css from "./contact.module.scss";

export default function ContactSection() {
    return (
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
              <a href="https://www.linkedin.com/in/julia-tokarevskaia" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/julia-tokarevskaia
              </a>
            </div>
            <div className={css.link}>
              <Image src="/img/github.svg" alt="Github icon" width={18} height={18} />
              <a href="https://github.com/ytokarevskaya" target="_blank" rel="noopener noreferrer">
                github.com/ytokarevskaya
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
    )
}