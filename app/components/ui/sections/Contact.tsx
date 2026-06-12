import { MapPin, Phone, Clock, Navigation, MessageCircle, CreditCard, Smartphone } from "lucide-react";
import { WHATSAPP_URL } from "../../WhatsAppButton";

const MAPS_QUERY = encodeURIComponent("R. Francisco Timóteo de Souza, 529C, Bancários, João Pessoa - PB, 58052-130");

export function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Contato</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Venha nos visitar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos prontos para receber você com todo o cuidado que merece.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 rounded-2xl border border-border bg-gradient-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Endereço</h3>
                <address className="mt-1 not-italic text-sm text-muted-foreground">
                  R. Francisco Timóteo de Souza, 529C<br />
                  Bancários, João Pessoa - PB<br />
                  58052-130
                </address>
              </div>
            </a>

            <a
              href="tel:+5583996370435"
              className="flex gap-4 rounded-2xl border border-border bg-gradient-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Telefone</h3>
                <p className="mt-1 text-sm text-muted-foreground">(83) 99637-0435</p>
                <p className="mt-1 text-xs font-medium text-primary">Toque para ligar</p>
              </div>
            </a>

            <div className="flex gap-4 rounded-2xl border border-border bg-gradient-card p-6 shadow-soft">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Horário</h3>
                <p className="mt-1 text-sm text-muted-foreground">Aberto até 19:30</p>
                <p className="mt-1 text-xs text-muted-foreground">Segunda a Sexta</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                <Navigation className="h-4 w-4" /> Como chegar
              </a>
            </div>

            {/* Payments */}
            <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Formas de pagamento
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { icon: CreditCard, label: "Crédito" },
                  { icon: CreditCard, label: "Débito" },
                  { icon: Smartphone, label: "NFC" },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.label}
                      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4 text-center"
                    >
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      <span className="text-xs font-medium text-foreground">{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Localização da Sobreira Odontologia"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
