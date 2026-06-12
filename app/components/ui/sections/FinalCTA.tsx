"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../../WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal/40 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-4 text-center text-primary-foreground sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Agende sua consulta e cuide do seu sorriso
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
          Estamos prontos para oferecer um atendimento acolhedor e especializado para você e sua
          família.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-elegant transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Agendar pelo WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
