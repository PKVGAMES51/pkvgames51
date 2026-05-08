
import React, { useState, useMemo } from 'react';
import { SITES_DATA, CATEGORIES } from '@/lib/sitesData';
import { applySiteOverrides } from '@/lib/adminOverrides';
import SiteCard from './SiteCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, AppWindow } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DirectoryGrid() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSites = useMemo(() => {
    let sites = applySiteOverrides(SITES_DATA);
    
    if (activeCategory !== "Semua") {
      sites = sites.filter(site => site.category === activeCategory);
    }
    
    if (searchQuery) {
      sites = sites.filter(site => 
        site.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return sites;
  }, [activeCategory, searchQuery]);

  return (
    <section id="directory" className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">DIREKTORI SITUS REKOMENDASI</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
          
          <div className="w-full max-w-2xl relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input 
              placeholder="Cari nama situs..." 
              className="pl-10 h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={cn(
                  "rounded-full px-5 h-9 text-xs font-bold transition-all",
                  activeCategory === cat ? "shadow-md scale-105" : "bg-white dark:bg-slate-900"
                )}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== "Semua" && (
                  <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                    {SITES_DATA.filter(s => s.category === cat).length}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {filteredSites.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {filteredSites.map((site) => (
              <SiteCard key={site.slug} site={site} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
            <AppWindow className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">Maaf, situs yang Anda cari tidak ditemukan.</p>
            <Button variant="link" onClick={() => {setSearchQuery(""); setActiveCategory("Semua");}}>
              Reset Pencarian
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
