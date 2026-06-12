"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Award, CalendarCheck, MapPin, Accessibility, Building2 } from "lucide-react";

const items = [
  { icon: HeartHandshake, title: "Atendimento Humanizado", text: "Acolhimento e empatia em cada consulta." },
  { icon: Award, title: "Especialista em Ortodontia", text: "Expertise para transformar seu sorriso." },
  { icon: CalendarCheck, title: "Agendamento Fácil", text: "Marque pelo WhatsApp em poucos minutos." },
  { icon: MapPin, title: "Localização Privilegiada", text: "Bairro dos Bancários, fácil acesso." },
  { icon: Accessibility, title: "Estrutura Acessível", text: "Ambiente inclusivo para todos." },
  { icon: Building2, title: "Ambiente Moderno", text: "Equipamentos de última geração." },
];

export function WhyChoose() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Diferenciais</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Por que escolher a <span className="text-gradient">Sobreira</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
