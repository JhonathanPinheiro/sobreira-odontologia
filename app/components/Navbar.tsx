'use client'

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Sobreira Odontologia">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-hero text-primary-foreground font-display text-lg font-bold shadow-soft">
            S
          </span>
          <span className="hidden font-display text-lg font-semibold text-foreground sm:block">
            Sobreira <span className="text-primary">Odontologia</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+5583996370435"
            className="hidden items-center gap-2 rounded-full bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            (83) 99637-0435
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+5583996370435"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-hero px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> (83) 99637-0435
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
