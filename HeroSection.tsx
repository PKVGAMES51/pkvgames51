
import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://media.base44.com/images/public/69ef8da56d98d94beff96cc8/9e04cc55b_generated_c9dd1ec7.png" 
          alt="PKV GAMES 51 Hero" 
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block bg-primary/10 border border-primary/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary text-xs font-bold tracking-wider uppercase">PORTAL DIREKTORI TERVERIFIKASI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.1]">
            PKV GAMES <span className="text-primary">51</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Direktori referensi independen terlengkap untuk situs PKV Games, IDN Play, Togel, dan Slot Online di Indonesia. Edukasi, panduan, dan ulasan terpercaya dalam satu genggaman.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-12 font-bold w-full sm:w-auto" asChild>
              <a href="#directory">JELAJAHI DIREKTORI</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 font-bold w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10" asChild>
              <a href="/panduan-pkvgames">PANDUAN PEMULA</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Situs Terdaftar', value: '130+' },
            { label: 'Rating Rata-rata', value: '4.8/5.0' },
            { label: 'Update Terakhir', value: 'Hari ini' },
            { label: 'Status Server', value: 'Online' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl"
            >
              <div className="text-primary font-black text-xl mb-1">{stat.value}</div>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown size={32} className="text-white/30" />
      </div>
    </section>
  );
}
