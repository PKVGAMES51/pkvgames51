
import React from 'react';

export default function RunningText() {
  const messages = [
    "SELAMAT DATANG DI PKV GAMES 51 - PORTAL DIREKTORI TERPERCAYA DI INDONESIA",
    "PANDUAN LENGKAP PKV GAMES, IDN PLAY, SLOT, DAN TOGEL SETIAP HARI",
    "HUBUNGI WHATSAPP RESMI KAMI DI +62 857-1727-7011 UNTUK KONSULTASI GRATIS",
    "PASTIKAN ANDA BERUSIA 18 TAHUN KE ATAS UNTUK MENGAKSES PORTAL INI",
    "GAMESPKV51.ONLINE ADALAH SITUS REFERENSI, BUKAN SITUS OPERATOR JUDI"
  ];

  return (
    <div className="bg-yellow-400 dark:bg-yellow-500 py-1.5 overflow-hidden border-b border-black/5">
      <div className="flex whitespace-nowrap animate-marquee">
        {messages.map((msg, i) => (
          <span key={i} className="flex items-center mx-4 text-xs font-bold text-black">
            <span className="bg-black text-white px-1.5 py-0.5 rounded text-[10px] mr-3">TERKINI</span>
            {msg}
            <span className="mx-6 text-black/30 opacity-50">•</span>
          </span>
        ))}
        {/* Repeat for seamless loop */}
        {messages.map((msg, i) => (
          <span key={`repeat-${i}`} className="flex items-center mx-4 text-xs font-bold text-black">
            <span className="bg-black text-white px-1.5 py-0.5 rounded text-[10px] mr-3">TERKINI</span>
            {msg}
            <span className="mx-6 text-black/30 opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
