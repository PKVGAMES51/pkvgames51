
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('gpkv_age_verified');
    if (!isVerified) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('gpkv_age_verified', 'true');
    setIsVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-3xl border-4 border-primary/20 shadow-2xl text-center"
          >
            <div className="mb-6 flex justify-center text-primary">
              <ShieldAlert size={64} className="animate-pulse" />
            </div>
            
            <h2 className="text-2xl font-black mb-4 tracking-tight">VERIFIKASI USIA</h2>
            
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              Portal ini berisi informasi untuk audiens dewasa. Anda harus berusia minimal <strong>18 TAHUN</strong> untuk mengakses direktori ini. Apakah Anda bersedia melanjutkan?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full h-12 font-bold border-slate-200 dark:border-slate-800"
                onClick={handleDecline}
              >
                <XCircle className="mr-2 h-5 w-5 text-red-500" />
                SAYA DIBAWAH 18
              </Button>
              <Button 
                size="lg" 
                className="rounded-full h-12 font-bold bg-primary hover:bg-primary/90"
                onClick={handleConfirm}
              >
                <CheckCircle2 className="mr-2 h-5 w-5" />
                SAYA 18+ TAHUN
              </Button>
            </div>
            
            <p className="mt-8 text-[10px] text-slate-400 dark:text-slate-600 uppercase font-bold tracking-widest">
              GAMESPKV51.ONLINE - INDEPENDENT DIRECTORY
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
