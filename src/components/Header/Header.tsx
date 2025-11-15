import { useEffect, useRef, useState, type JSX } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo-menor.png";

/**
 * Header com menu dropdown/hamburger para telas < 768px.
 * Acessibilidade:
 * - botão com aria-expanded / aria-controls
 * - role="menu" / role="menuitem" nos links móveis
 * - fecha com Escape e ao clicar fora
 */

const NAV_LINKS = [
  { href: "#hero", label: "Apresentação" },
  { href: "#problem", label: "Problema" },
  { href: "#tech", label: "Tecnologias" },
  { href: "#features", label: "Recursos" },
  { href: "#team", label: "Equipe" },
];

function scrollToIdWithOffset(e: React.MouseEvent, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  // calcula altura do header (sticky)
  const header = document.querySelector("header") as HTMLElement | null;
  const headerHeight = header
    ? Math.ceil(header.getBoundingClientRect().height)
    : 0;
  const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12; // 12px offset extra

  window.scrollTo({
    top: Math.max(y, 0),
    behavior: "smooth",
  });
}

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        open &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Fecha com ESC
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Quando abre, foca o primeiro link (melhora a navegação por teclado)
  useEffect(() => {
    if (open) {
      // delay leve para garantir render
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      // retorna foco pro botão hamburguer quando fecha
      setTimeout(() => buttonRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoContainer}>
          {/* ícone / logo */}
          <img
            src={Logo}
            alt="Logotipo do EquilibraNutri+"
            className={styles.logoIcon}
          />
          <h1 className={styles.logoText}>EquilibraNutri+</h1>
        </div>

        {/* Desktop nav (visível >= 768px) */}
        <nav className={styles.navDesktop} aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.link}
              onClick={(e) => {
                scrollToIdWithOffset(e, l.href);
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" className={styles.cta}>
            Contato
          </a>
        </nav>

        {/* Botão hamburguer (visível < 768px) */}
        <div className={styles.mobileArea}>
          <button
            ref={buttonRef}
            aria-controls="main-navigation-mobile"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={styles.hamburger}
            onClick={() => setOpen((s) => !s)}
            type="button"
          >
            {/* Icone simples: 3 linhas -> X ao abrir */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              {open ? (
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </g>
              ) : (
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </g>
              )}
            </svg>
          </button>

          {/* Menu móvel: dropdown */}
          <div
            id="main-navigation-mobile"
            ref={menuRef}
            className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
            role="menu"
            aria-hidden={!open}
          >
            <div className={styles.mobileMenuContent}>
              {NAV_LINKS.map((l, idx) => (
                <a
                  key={l.href}
                  href={l.href}
                  role="menuitem"
                  ref={idx === 0 ? firstLinkRef : undefined}
                  className={styles.mobileMenuItem}
                  onClick={(e) => {
                    scrollToIdWithOffset(e, l.href);
                    setOpen(false);
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                role="menuitem"
                className={`${styles.mobileMenuItem} ${styles.mobileCTA}`}
                onClick={() => setOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
