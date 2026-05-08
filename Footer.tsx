
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, ShieldCheck, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const paymentIcons = [
    { name: 'BCA', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg' },
    { name: 'BRI', url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg' },
    { name: 'BNI', url: 'https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg' },
    { name: 'Mandiri', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg' },
    { name: 'GoPay', url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg' },
    { name: 'OVO', url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg' },
    { name: 'DANA', url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg' },
    { name: 'ShopeePay', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/ShopeePay_Logo.svg' },
    { name: 'QRIS', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg' },
  ];

  return (
    <footer className="w-full border-t bg-slate-50 dark:bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://gamespkv51.online/GAMESPKV51.ONLINE.png" alt="PKV GAMES 51" className="h-10 w-auto" />
              <span className="font-heading text-xl font-bold">PKV GAMES 51</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Portal direktori informasi independen terbaik untuk referensi situs PKV Games, Togel, Slot, dan IDN Play di Indonesia. Kami menyediakan informasi yang akurat dan terpercaya.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="mailto:gamespkv51@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/6285717277011" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://gamespkv51.online" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tentang-kami" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link to="/kontak" className="text-muted-foreground hover:text-primary transition-colors">Hubungi Kami</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Legal Disclaimer</Link></li>
              <li><Link to="/kebijakan-privasi" className="text-muted-foreground hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link to="/favorit" className="text-muted-foreground hover:text-primary transition-colors">Favorit Saya</Link></li>
            </ul>
          </div>

          {/* Guidelines */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Panduan Edukasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/panduan-pkvgames" className="text-muted-foreground hover:text-primary transition-colors">Panduan PKV Games</Link></li>
              <li><Link to="/panduan-idnplay" className="text-muted-foreground hover:text-primary transition-colors">Panduan IDN Play</Link></li>
              <li><Link to="/panduan-slot&togel" className="text-muted-foreground hover:text-primary transition-colors">Panduan Slot & Togel</Link></li>
              <li><Link to="/artikel/pkv-games-indonesia" className="text-muted-foreground hover:text-primary transition-colors">Blog & Artikel</Link></li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Keamanan & Kepercayaan</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 p-2 rounded-lg border shadow-sm">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-xs font-bold">100% VERIFIED</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 p-2 rounded-lg border shadow-sm">
                <span className="text-xs font-bold">18+ ADULT ONLY</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-3 font-medium">METODE PEMBAYARAN TERIMA:</p>
              <div className="grid grid-cols-4 gap-2">
                {paymentIcons.map((icon) => (
                  <div key={icon.name} className="bg-white p-1 rounded border flex items-center justify-center h-8 grayscale hover:grayscale-0 transition-all cursor-help" title={icon.name}>
                    <img src={icon.url} alt={icon.name} className="h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} PKV GAMES 51. Seluruh hak cipta dilindungi. Portal Edukasi & Informasi Independen.
          </p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span>Powered by GamesPKV51.Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
