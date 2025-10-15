import styles from "./Hero.module.css";
import Button from "../Button/Button";
import type { JSX } from "react";
import heroMock from "../../assets/logo-nobg.png";

export default function Hero(): JSX.Element {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.title}>EquilibraNutri+</h2>
          <p className={styles.subtitle}>
            A startup maranhense que transforma emoções em escolhas alimentares
            saudáveis — gamificação e inteligência emocional a serviço de uma
            geração mais saudável.
          </p>
          <div className={styles.actions}>
            <Button href="#cta">Receber apresentação</Button>
            <Button href="#tech" variant="ghost">
              Ver tecnologias
            </Button>
          </div>
        </div>
        <aside className={styles.visual}>
          <div className={styles.mockCard}>
            <img
              src={heroMock}
              alt="Mockup do aplicativo EquilibraNutri+"
              className={styles.mockImage}
              loading="lazy"
              width={420} /* bom para evitar CLS */
              height={280}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
