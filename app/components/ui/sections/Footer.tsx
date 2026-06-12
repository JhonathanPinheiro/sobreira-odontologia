import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-hero text-primary-foreground font-display text-lg font-bold">
                S
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                Sobreira <span className="text-primary">Odontologia</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Odontologia humanizada com atendimento personalizado e especialista em Ortodontia em
              João Pessoa - PB.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#sobre", "Sobre"],
                ["#servicos", "Serviços"],
                ["#diferenciais", "Diferenciais"],
                ["#depoimentos", "Depoimentos"],
                ["#contato", "Contato"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-muted-foreground hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>R. Francisco Timóteo de Souza, 529C, Bancários, João Pessoa - PB</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="tel:+5583996370435" className="hover:text-primary">(83) 99637-0435</a>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Aberto até 19:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sobreira Odontologia. Todos os direitos reservados.
          </p>
          <a
            href="#"
            aria-label="Instagram"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            In
          </a>
        </div>
      </div>
    </footer>
  );
}
