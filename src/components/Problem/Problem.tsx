import type { JSX } from "react";
import styles from "./Problem.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

export default function Problem(): JSX.Element {
  const statsData = [
    {
      strong: "~24 milhões",
      span: "adolescentes em idade escolar (IBGE, 2022)",
    },
    {
      strong: "81%",
      span: "apresentam 2+ fatores de risco (UFMG/UNIFESP, 2024)",
    },
    { strong: "5+ horas/dia", span: "tempo médio de uso de celular" },
  ];
  return (
    <section id="problem" className={styles.section}>
      <div className={styles.container}>
        <h3>O problema</h3>
        <p>
          O consumo de ultraprocessados entre adolescentes cresce de forma
          alarmante e contribui para o surgimento precoce de doenças crônicas
          não transmissíveis (DCNTs). Estudos indicam que apenas ~4 em cada 100
          adolescentes não apresentam fatores de risco comportamentais —
          enquanto 81 em cada 100 já têm dois ou mais fatores (sedentarismo,
          baixo consumo de frutas e alto consumo de ultraprocessados).
        </p>

        <div className={styles.stats}>
          {statsData.map((s) => {
            const { ref, visible } = useRevealOnScroll();
            return (
              <div
                key={s.strong}
                ref={ref as any}
                className={`${styles.stat} reveal ${visible ? "visible" : ""}`}
                tabIndex={0}
                aria-label={`${s.strong} — ${s.span}`}
              >
                <strong>{s.strong}</strong>
                <span>{s.span}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
