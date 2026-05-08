
import React from 'react';
import { BookOpen, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function EducationHub() {
  const guides = [
    {
      title: "Panduan PKV Games",
      description: "Pelajari cara daftar, deposit, dan strategi bermain PKV Games yang aman bagi pemula.",
      image: "https://media.base44.com/images/public/69ef8da56d98d94beff96cc8/5b5b33722_generated_4a82f1cd.png",
      link: "/panduan-pkvgames",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Keamanan Bermain",
      description: "Tips menjaga keamanan data pribadi dan menghindari penipuan saat bermain online.",
      image: "https://media.base44.com/images/public/69ef8da56d98d94beff96cc8/49a39c121_generated_5227a674.png",
      link: "/artikel/pkv-games-indonesia",
      icon: <Shield className="h-5 w-5 text-green-500" />
    },
    {
      title: "Panduan Togel & Slot",
      description: "Analisis permainan dan ulasan fitur-fitur pada situs Togel serta Slot terkemuka.",
      image: "https://media.base44.com/images/public/69ef8da56d98d94beff96cc8/5b5b33722_generated_4a82f1cd.png",
      link: "/panduan-slot&togel",
      icon: <HelpCircle className="h-5 w-5 text-yellow-500" />
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">EDUCATION HUB</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Tingkatkan pengetahuan dan keamanan Anda dalam memahami ekosistem direktori game online melalui panduan edukatif kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all group rounded-2xl">
              <div className="relative h-48 overflow-hidden">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center space-x-2 text-white">
                  {guide.icon}
                  <span className="font-bold uppercase text-xs tracking-widest">PANDUAN RESMI</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-black mb-3">{guide.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed font-medium">
                  {guide.description}
                </p>
                <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent group/btn" asChild>
                  <Link to={guide.link}>
                    BACA SELENGKAPNYA <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
