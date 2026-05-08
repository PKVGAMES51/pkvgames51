
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Book, Info, Mail, AlertTriangle } from 'lucide-react';
import FAQSection from '@/components/portal/FAQSection';

const PAGE_DATA: any = {
  '/disclaimer': {
    title: 'LEGAL DISCLAIMER',
    icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
    content: `
      GAMESPKV51.ONLINE adalah portal direktori informasi independen yang dibuat semata-mata untuk tujuan edukasi dan penyediaan informasi publik. Kami bukan merupakan operator game online, agen judi, atau entitas yang terafiliasi secara langsung dengan sistem taruhan online.
      
      Informasi yang disediakan di website ini ditujukan sebagai referensi informasi semata bagi masyarakat umum berusia 18 tahun ke atas. Kami berusaha menyajikan data yang akurat, namun tidak menjamin keandalan seratus persen atas perubahan yang mungkin terjadi pada pihak ketiga yang tercantum dalam direktori kami.
      
      GAMESPKV51.ONLINE tidak bertanggung jawab atas kerugian finansial atau konsekuensi hukum apa pun yang timbul dari keputusan pribadi pengguna setelah membaca informasi kami. Kami mengimbau semua pengunjung untuk mematuhi hukum yang berlaku di wilayah hukum masing-masing.
    `
  },
  '/kebijakan-privasi': {
    title: 'KEBIJAKAN PRIVASI',
    icon: <Shield className="h-10 w-10 text-green-500" />,
    content: `
      Keamanan data Anda adalah prioritas utama kami. Kami berkomitmen untuk menjaga privasi semua pengunjung PKV GAMES 51.
      
      Kami menggunakan LocalStorage pada perangkat Anda hanya untuk menyimpan preferensi personal seperti:
      1. Verifikasi Usia (Age Gate Status)
      2. Daftar Situs Favorit (Bookmark)
      3. Preferensi Mode Tampilan (Dark/Light Mode)
      
      Data-data ini tersimpan secara lokal dan tidak dikirimkan ke server kami. Kami tidak mengumpulkan data identitas pribadi (PII) kecuali jika Anda secara sukarela menghubungi kami melalui email atau WhatsApp. Kami tidak pernah membagikan atau menjual basis data pengunjung kami kepada pihak ketiga mana pun.
    `
  },
  '/tentang-kami': {
    title: 'TENTANG KAMI',
    icon: <Info className="h-10 w-10 text-blue-500" />,
    content: `
      PKV GAMES 51 lahir dari kebutuhan masyarakat akan informasi yang objektif, jujur, dan terkurasi mengenai ekosistem platform game online di Indonesia. 
      
      Tim kami terdiri dari pengamat industri gaming digital yang berpengalaman dalam menganalisis berbagai platform seperti PKV Games, IDN Play, Togel, dan Slot. Kami percaya bahwa transparansi informasi adalah kunci bagi setiap pengguna untuk memahami platform mana yang kredibel dan memiliki reputasi baik.
      
      Misi kami adalah menjadi "Wikipedia versi Gaming" yang paling terpercaya di Asia Tenggara, khususnya bagi audiens Indonesia. Kami mendedikasikan waktu kami untuk memverifikasi setiap situs dalam direktori kami agar pengunjung mendapatkan pengalaman informasi yang berkualitas.
    `
  },
  '/kontak': {
    title: 'HUBUNGI KAMI',
    icon: <Mail className="h-10 w-10 text-primary" />,
    content: `
      Apakah Anda memiliki pertanyaan, laporan mengenai data yang tidak akurat, atau ingin menjalin kerjasama informasi dengan PKV GAMES 51? Tim admin kami siap melayani Anda 24/7.
      
      WhatsApp Resmi: +62 857-1727-7011
      Email Support: gamespkv51@gmail.com
      Telegram: @gamespkv51
      Office: Digital Nomad Hub, Bali, Indonesia.
      
      Kami sangat menghargai setiap masukan dan kritik membangun dari para pengguna kami guna menjadikan direktori ini lebih baik di masa depan.
    `
  }
};

export default function StaticPage() {
  const location = useLocation();
  const data = PAGE_DATA[location.pathname] || {
    title: 'HALALAN PANDUAN',
    icon: <Book className="h-10 w-10 text-primary" />,
    content: 'Konten sedang dalam proses pembaruan informasi edukasi...'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-col items-center text-center"
           >
             <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl mb-8">
                {data.icon}
             </div>
             <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">{data.title}</h1>
             <div className="w-20 h-1.5 bg-primary rounded-full"></div>
           </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-20 text-center">
         <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-loose whitespace-pre-wrap">
              {data.content}
            </p>
         </div>
      </div>
      
      <FAQSection />
    </div>
  );
}
