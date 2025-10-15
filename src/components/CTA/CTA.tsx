import styles from "./CTA.module.css";
import Button from "../Button/Button";
import type { JSX } from "react";

export default function CTA(): JSX.Element {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h3>Quer a apresentação completa?</h3>
          <p>
            Solicite o PDF com a proposta institucional, arquitetura e
            estimativas.
          </p>
        </div>
        <div className={styles.actions}>
          <Button href="mailto:contato@exemplo.com">Enviar pedido</Button>
          <Button href="#contact" variant="ghost">
            Contato
          </Button>
        </div>
      </div>
    </section>
  );
}
