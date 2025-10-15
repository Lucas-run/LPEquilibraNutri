import type { JSX } from "react";
import styles from "./TechStack.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

type TechItem = { title: string; items: string[] };

const tech: TechItem[] = [
  {
    title: "Frontend",
    items: ["Next.js (Web) — PWA", "React (componentização)"],
  },
  { title: "Mobile", items: ["React Native"] },
  { title: "Backend", items: ["NestJS", "Prisma", "Supabase (BaaS)"] },
  { title: "IA", items: ["OpenAI GPT API (IA leve para personalização)"] },
  {
    title: "Hospedagem / Infra",
    items: ["Vercel (web)", "Render (backend)", "Supabase"],
  },
];

export default function TechStack(): JSX.Element {
  return (
    <section id="tech" className={styles.section}>
      <div className={styles.container}>
        <h3>Tecnologias & Arquitetura</h3>
        <p className={styles.lead}>
          Solução baseada em stack moderna para permitir escalabilidade,
          entregas rápidas e integração com IA leve. (Fonte: proposta
          arquitetural e estimativa de custos).
        </p>

        <div className={styles.grid}>
          {tech.map((t) => {
            const { ref, visible } = useRevealOnScroll();
            return (
              <div
                key={t.title}
                ref={ref as any} // cast para TSX compatibilidade
                className={`${styles.card} reveal ${visible ? "visible" : ""}`}
                tabIndex={0}
                aria-label={`Seção de tecnologia ${t.title}`}
              >
                <h4 className={styles.cardTitle}>{t.title}</h4>
                <ul className={styles.list}>
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
