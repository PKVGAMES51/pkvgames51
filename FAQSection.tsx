
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Apa itu PKV GAMES 51?",
      answer: "PKV GAMES 51 adalah portal direktori informasi independen yang menyediakan referensi, ulasan, dan panduan edukasi untuk berbagai situs game online populer di Indonesia seperti PKV Games, Togel, Slot, dan IDN Play."
    },
    {
      question: "Apakah situs ini merupakan situs judi?",
      answer: "BUKAN. Website ini adalah portal referensi murni untuk tujuan edukasi dan penyediaan informasi publik bagi masyarakat. Kami tidak mengoperasikan game apa pun secara langsung di domain ini."
    },
    {
      question: "Bagaimana cara memilih situs yang aman?",
      answer: "Anda dapat melihat rating dan ulasan yang kami sediakan di Directory Grid. Kami merekomendasikan situs-situs yang telah memiliki reputasi baik dan terverifikasi oleh komunitas."
    },
    {
      question: "Informasi apa saja yang ada di panduan edukasi?",
      answer: "Panduan kami mencakup cara registrasi, tips keamanan data, pemahaman sistem permainan, hingga ulasan fitur-fitur terbaru yang ada pada platform game online."
    },
    {
      question: "Bagaimana jika saya menemukan informasi yang tidak akurat?",
      answer: "Anda dapat menghubungi tim admin kami melalui WhatsApp di menu Kontak untuk memberikan masukan atau laporan. Kami berkomitmen untuk selalu memperbarui data direktori kami."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4 uppercase">PERTANYAAN UMUM (FAQ)</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-slate-900 border px-6 rounded-2xl shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-5 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 dark:text-slate-400 leading-relaxed pb-5 font-medium border-t pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
