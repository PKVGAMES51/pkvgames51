
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href="https://wa.me/6285717277011"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 transition-shadow hover:shadow-green-500/50"
            >
              <MessageSquare className="w-7 h-7" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-bold bg-slate-900 text-white border-none px-4 py-2">
            Hubungi Admin WA (24/7)
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
