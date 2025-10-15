import type { JSX } from "react";
import styles from "./Costs.module.css";

type Cost = { label: string; value: string };

const costs: Cost[] = [
  { label: "Hospedagem web (Vercel)", value: "R$ 110,00 / mês" },
  { label: "Google Play (taxa única)", value: "R$ 138,00" },
  { label: "Apple Store (anuidade)", value: "R$ 546,99 / ano" },
  { label: "Hospedagem backend (Render)", value: "R$ 104,98 / mês" },
  { label: "Plano Supabase", value: "R$ 138,00 / mês" },
  { label: "IA (estimativa)", value: "~ R$ 100,00 / mês (produção)" },
];

export default function Costs(): JSX.Element {
  return (
    <section id="costs" className={styles.section}>
      <div className={styles.container}>
        <h3>Estimativa de Custos</h3>
        <p className={styles.lead}>
          Valores iniciais extraídos da proposta — use como referência para
          planejamento financeiro. :contentReference[oaicite:2]{"{index=2}"}
        </p>
        <ul className={styles.list}>
          {costs.map((c) => (
            <li key={c.label} className={styles.item}>
              <span className={styles.label}>{c.label}</span>
              <span className={styles.value}>{c.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
