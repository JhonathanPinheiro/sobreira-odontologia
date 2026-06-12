'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mariana Albuquerque",
    text: "Atendimento impecável! Me senti acolhida desde o primeiro momento. O tratamento ortodôntico está sendo uma experiência incrível.",
    rating: 5,
  },
  {
    name: "Rafael Santos",
    text: "Profissionais extremamente competentes e o ambiente é muito confortável. Recomendo a Sobreira de olhos fechados.",
    rating: 5,
  },
  {
    name: "Juliana Lima",
    text: "Levei meus filhos e fomos super bem atendidos. Clínica moderna, limpa e com profissionais que sabem lidar com crianças.",
    rating: 5,
  },
  {
    name: "Carlos Henrique",
    text: "Coloquei aparelho na Sobreira e o acompanhamento é excelente. Resultado superou minhas expectativas.",
    rating: 4,
  },
  {
    name: "Patrícia Mendes",
    text: "Atendimento humanizado de verdade. Explicaram cada etapa do tratamento com paciência e cuidado.",
    rating: 5,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const r = reviews[index];

  return (
    <section id="depoimentos" className="bg-gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            O que nossos pacientes dizem
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2 shadow-soft">
            <div className="flex" aria-label="Avaliação 4.8 de 5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.8/5</span>
            <span className="text-sm text-muted-foreground">· 16 avaliações</span>
          </div>
        </div>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-border bg-gradient-card p-8 shadow-elegant sm:p-12"
            >
              <Quote className="h-10 w-10 text-teal/40" aria-hidden="true" />
              <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
                "{r.text}"
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">{r.name}</p>
                  <p className="text-sm text-muted-foreground">Paciente</p>
                </div>
                <div className="flex" aria-label={`${r.rating} estrelas`}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`h-5 w-5 ${s <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
