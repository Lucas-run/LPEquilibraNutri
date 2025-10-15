// src/hooks/useRevealOnScroll.ts
import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit;

export default function useRevealOnScroll(options?: Options) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // Se quiser animar só uma vez, desconecta quando aparecer
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px", // assume aparecer um pouco antes
        threshold: 0.12,
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, visible };
}
