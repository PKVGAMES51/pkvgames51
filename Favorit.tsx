
import React, { useState, useEffect, useMemo } from 'react';
import { SITES_DATA } from '@/lib/sitesData';
import { applySiteOverrides } from '@/lib/adminOverrides';
import SiteCard from '@/components/portal/SiteCard';
import { Button } from '@/components/ui/button';
import { Heart, Trash2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Favorit() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const loadFavorites = () => {
    const favs = JSON.parse(localStorage.getItem('gpkv_favorites') || '[]');
    setFavorites(favs);
  };

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favorites_updated', loadFavorites);
    return () => window.removeEventListener('favorites_updated', loadFavorites);
  }, []);

  const favoriteSites = useMemo(() => {
     const allSites = applySiteOverrides(SITES_DATA);
     return allSites.filter(site => favorites.includes(site.slug));
  }, [favorites]);

  const removeAll = () => {
    localStorage.setItem('gpkv_favorites', '[]');
    loadFavorites();
  };

  const visitAll = () => {
    favoriteSites.forEach(site => {
      window.open(`https://gamespkv51.online/${site.slug}`, '_blank');
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2 flex items-center">
            <Heart className="mr-3 text-red-500 fill-current" />
            FAVORIT SAYA
          </h1>
          <p className="text-slate-500 font-medium">Kumpulan situs yang Anda simpan untuk akses cepat.</p>
        </div>
        
        {favorites.length > 0 && (
          <div className="flex items-center gap-3">
             <Button variant="outline" className="rounded-full font-bold" onClick={removeAll}>
                <Trash2 className="mr-2 h-4 w-4" /> HAPUS SEMUA
             </Button>
             <Button className="rounded-full font-bold shadow-lg shadow-primary/20" onClick={visitAll}>
                <Zap className="mr-2 h-4 w-4" /> KUNJUNGI SEMUA
             </Button>
          </div>
        )}
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <AnimatePresence>
            {favoriteSites.map((site) => (
              <SiteCard key={site.slug} site={site} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-32 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
           <Heart size={64} className="mx-auto mb-6 text-slate-200" />
           <h3 className="text-xl font-bold mb-2">Belum ada situs favorit</h3>
           <p className="text-slate-500 mb-8 max-w-sm mx-auto font-medium">Klik icon hati pada kartu situs untuk menyimpannya di sini.</p>
           <Button variant="default" className="rounded-full px-8 font-bold" asChild>
             <a href="/">JELAJAHI SITUS</a>
           </Button>
        </div>
      )}
    </div>
  );
}
