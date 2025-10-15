import type { JSX } from "react";
import styles from "./Features.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

type Feature = { title: string; desc: string };

const features: Feature[] = [
  {
    title: "Gamificação",
    desc: "Trilhas, desafios e conquistas que mantêm o jovem engajado.",
  },
  {
    title: "Inteligência emocional",
    desc: "Ferramentas para identificar comer emocional e promover regulação.",
  },
  {
    title: "Painel para escolas",
    desc: "Dados agregados para gestores planejar políticas e intervenções.",
  },
  {
    title: "Aproximação estética",
    desc: "Fala a linguagem jovem integrando estética saudável e propósito.",
  },
];

export default function Features(): JSX.Element {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h3>Proposta de valor</h3>
        <p className={styles.lead}>
          Integração entre nutrição, emoção e tecnologia para mudança de
          comportamento.
        </p>
        <div className={styles.grid}>
          {features.map((f) => {
            const { ref, visible } = useRevealOnScroll();
            return (
              <article
                key={f.title}
                ref={ref as any}
                className={`${styles.card} reveal ${visible ? "visible" : ""}`}
                tabIndex={0}
                aria-label={`Recurso: ${f.title}`}
              >
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
