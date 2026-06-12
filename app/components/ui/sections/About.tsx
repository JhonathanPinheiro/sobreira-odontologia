"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Atendimento humanizado",
  "Especialista em Ortodontia",
  "Ambiente confortável",
  "Atendimento com hora marcada",
];

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <Image
              src="/images/clinic-interior.jpg"
              alt="Ambiente moderno e acolhedor da Sobreira Odontologia"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-elegant sm:block">
            <p className="font-display text-3xl font-bold text-primary">+10</p>
            <p className="text-sm text-muted-foreground">Anos de experiência</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Sobre nós</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Sobre a <span className="text-gradient">Sobreira Odontologia</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A Sobreira Odontologia oferece atendimento humanizado e personalizado, proporcionando
            tratamentos odontológicos com excelência, conforto e tecnologia. Com especialização em
            Ortodontia, a clínica busca transformar sorrisos e promover saúde bucal de forma
            acolhedora e profissional.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-gradient-card p-4 shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
