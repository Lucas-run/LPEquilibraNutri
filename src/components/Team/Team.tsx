import type { JSX } from "react";
import styles from "./Team.module.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

type Member = { name: string; role: string; bio?: string };

const team: Member[] = [
  {
    name: "Rafaella Pinheiro",
    role: "Nutricionista (coordenadora)",
    bio: "Mestranda em Nutrição - UFMA; pesquisa em comportamento alimentar.",
  },
  {
    name: "Luciane Lee",
    role: "Psicóloga",
    bio: "Atua na dimensão emocional do consumo alimentar.",
  },
  {
    name: "Kelvin Felipe",
    role: "Administração",
    bio: "Planejamento financeiro e modelagem de negócio.",
  },
  {
    name: "Lucas",
    role: "Dev (infra e produto)",
    bio: "Desenvolve infraestrutura digital e automações.",
  },
  {
    name: "Enzo",
    role: "Marketing e comunicação",
    bio: "Posicionamento de marca e expansão comercial.",
  },
];

export default function Team(): JSX.Element {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <h3>Equipe</h3>
        <p className={styles.lead}>
          {
            "Equipe multidisciplinar com experiência técnica, científica e de mercado."
          }
        </p>
        <div className={styles.grid}>
          {team.map((m) => {
            const { ref, visible } = useRevealOnScroll();
            return (
              <div
                key={m.name}
                ref={ref as any}
                className={`${styles.card} reveal ${visible ? "visible" : ""}`}
                tabIndex={0}
                aria-label={`Membro ${m.name}, ${m.role}`}
              >
                <h4>{m.name}</h4>
                <p className={styles.role}>{m.role}</p>
                {m.bio && <p className={styles.bio}>{m.bio}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
