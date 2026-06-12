"use client";

import { motion } from "framer-motion";
import { Accessibility as Acc, Car, Heart } from "lucide-react";

const features = [
  { icon: Acc, text: "Banheiro acessível para cadeirantes" },
  { icon: Car, text: "Estacionamento acessível para cadeirantes" },
  { icon: Heart, text: "Ambiente confortável e inclusivo" },
];

export function AccessibilitySection() {
  return (
    <section className="bg-gradient-hero py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Acessibilidade
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Cuidado para todos
            </h2>
            <p className="mt-3 text-primary-foreground/85">
              Uma estrutura pensada para receber você com conforto e dignidade.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.li
                  key={f.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm ring-1 ring-white/15"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium leading-snug">{f.text}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
