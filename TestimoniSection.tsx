
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TestimoniSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Peminat PKV Games",
      text: "Situs ini sangat membantu saya dalam memilih portal PKV Games yang terpercaya. Informasinya sangat akurat dan up to date.",
      rating: 5
    },
    {
      name: "Siska Putri",
      role: "Pemain Slot Edukatif",
      text: "Halaman panduan slot sangat mendetail. Menambah wawasan saya tentang bagaimana sistem game bekerja secara transparan.",
      rating: 4
    },
    {
      name: "Andi Wijaya",
      role: "Member Togel Online",
      text: "Terima kasih PKV GAMES 51 sudah menyediakan direktori situs dengan rating jujur. Sangat merekomendasikan untuk referensi.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">APA KATA MEREKA?</h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-slate-50 dark:bg-slate-800/50 border-none rounded-3xl relative p-6">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-8 font-medium leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
