import type { JSX } from "react";
import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          © {new Date().getFullYear()} EquilibraNutri+. Todos os direitos
          reservados.
        </div>
        <div className={styles.links}>
          <a href="#privacy">Privacidade</a>
          <a href="#terms">Termos</a>
        </div>
      </div>
    </footer>
  );
}
