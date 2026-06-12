"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Star, ShieldCheck, HeartHandshake } from "lucide-react";
import { WHATSAPP_URL } from "../../WhatsAppButton";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-soft pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-primary shadow-soft backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            4.8 estrelas · 16 avaliações no Google
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Seu sorriso merece <span className="text-gradient">cuidado especializado</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Odontologia humanizada com atendimento personalizado e especialista em Ortodontia para
            transformar seu sorriso com conforto e segurança.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-hero px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Agendar Consulta
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-card px-7 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Pacientes</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">+1.500</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Avaliação</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">4.8<span className="text-sm text-muted-foreground">/5</span></dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Especialidade</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">Ortodontia</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-elegant">
            <Image
              src="/images/hero-dentist.jpg"
              alt="Dentista da Sobreira Odontologia em consultório moderno"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          {/* Floating trust cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -left-4 top-12 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-elegant backdrop-blur sm:flex sm:items-center sm:gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Tratamento</p>
              <p className="text-sm font-semibold text-foreground">Seguro e confiável</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -right-2 bottom-10 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-elegant backdrop-blur sm:flex sm:items-center sm:gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <HeartHandshake className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Atendimento</p>
              <p className="text-sm font-semibold text-foreground">Humanizado</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
