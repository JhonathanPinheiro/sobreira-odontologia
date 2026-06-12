"use client";

import { motion } from "framer-motion";
import { Smile, Stethoscope, Sparkles, Sun, Wrench, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Ortodontia",
    items: ["Aparelhos ortodônticos", "Alinhamento dental", "Correção da mordida"],
  },
  {
    icon: Stethoscope,
    title: "Avaliação Odontológica",
    items: ["Diagnóstico completo", "Planejamento individualizado", "Orientação personalizada"],
  },
  {
    icon: Sparkles,
    title: "Limpeza e Prevenção",
    items: ["Profilaxia profissional", "Saúde gengival", "Cuidado preventivo"],
  },
  {
    icon: Sun,
    title: "Estética Dental",
    items: ["Clareamento", "Harmonização do sorriso", "Design de sorriso"],
  },
  {
    icon: Wrench,
    title: "Restaurações",
    items: ["Recuperação funcional", "Recuperação estética", "Materiais modernos"],
  },
  {
    icon: HeartPulse,
    title: "Atendimento Geral",
    items: ["Cuidados preventivos", "Tratamentos corretivos", "Toda a família"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Nossos serviços</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Tratamentos completos para o seu sorriso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Da ortodontia à estética dental, oferecemos cuidado completo com tecnologia e
            acolhimento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-teal/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-soft">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    {svc.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {svc.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
