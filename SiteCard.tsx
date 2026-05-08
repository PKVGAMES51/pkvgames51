
import React, { useState, useEffect } from 'react';
import { Heart, Share2, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SiteCardProps {
  site: {
    name: string;
    slug: string;
    category: string;
    rating: string | number;
    image_url: string;
  };
}

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('gpkv_favorites') || '[]');
    setIsFavorite(favorites.includes(site.slug));
  }, [site.slug]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    const favorites = JSON.parse(localStorage.getItem('gpkv_favorites') || '[]');
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((s: string) => s !== site.slug);
    } else {
      newFavorites = [...favorites, site.slug];
    }
    localStorage.setItem('gpkv_favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event('favorites_updated'));
  };

  const shareHandler = (platform: string) => {
    const url = `https://gamespkv51.online/situs/${site.slug}`;
    const text = `Cek situs ${site.name} di PKV GAMES 51!`;
    
    let shareUrl = '';
    switch (platform) {
      case 'wa': shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`; break;
      case 'tg': shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`; break;
      case 'tw': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`; break;
      case 'fb': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group rounded-xl">
        <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800 p-2">
          <img 
            src={site.image_url} 
            alt={site.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
               (e.target as HTMLImageElement).src = 'https://gamespkv51.online/GAMESPKV51.ONLINE.png';
            }}
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <Button
              variant="secondary"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm",
                isFavorite ? "text-red-500" : "text-slate-500"
              )}
              onClick={toggleFavorite}
            >
              <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
            </Button>
          </div>
          <div className="absolute bottom-2 left-2">
            <Badge variant="secondary" className="bg-black/70 text-white border-none backdrop-blur-sm text-[10px] font-bold">
              {site.category}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-sm truncate max-w-[120px]">{site.name}</h3>
            <div className="flex items-center text-yellow-500">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-[10px] font-bold ml-0.5">{site.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={() => shareHandler('wa')}>
                      <Share2 className="h-3.5 w-3.5 text-slate-400" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Bagikan</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <Button size="sm" className="h-7 px-3 text-[10px] font-bold rounded-full" asChild>
               <a href={`https://gamespkv51.online/${site.slug}`} target="_blank" rel="noreferrer">
                  KUNJUNGI <ExternalLink className="h-3 w-3 ml-1" />
               </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SiteCard;
