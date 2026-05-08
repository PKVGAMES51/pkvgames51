
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, LayoutGrid, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ActivityFeed() {
  const [activities, setActivities] = useState([
    { id: 1, user: 'User 2**', action: 'membuka situs', site: 'DewaQQ', time: 'Baru saja' },
    { id: 2, user: 'Guest_811', action: 'menambah favorit', site: 'Lapak303', time: '1 menit lalu' },
    { id: 3, user: 'Vip_Indo', action: 'membaca panduan', site: 'PKV Games', time: '2 menit lalu' },
  ]);

  const actions = ['membuka situs', 'menambah favorit', 'membaca ulasan', 'membagikan situs'];
  const users = ['Player**', 'Anon_4**', 'Hoki88', 'Sultan_Vip', 'Guest62', 'JackpotLover'];
  const sites = ['DewaQQ', 'JakartaQQ', 'SundulQQ', 'Lapak303', 'SaktiQQ', 'QQEmas', 'DewaTogel'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        user: users[Math.floor(Math.random() * users.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        site: sites[Math.floor(Math.random() * sites.length)],
        time: 'Baru saja'
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border shadow-xl sticky top-24">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <Activity className="h-5 w-5 text-red-500 animate-pulse" />
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-tight">AKTIVITAS LIVE</h3>
            <p className="text-[10px] text-slate-500 font-bold">AKTIF SEKARANG</p>
          </div>
        </div>
        <div className="flex items-center">
            <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-500">812</span>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {activities.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-start space-x-3 text-xs"
            >
              <div className="min-w-[40px] font-bold text-primary">{item.user}</div>
              <div className="flex-1 text-slate-500 dark:text-slate-400 font-medium">
                {item.action} <span className="font-bold text-slate-900 dark:text-slate-100">"{item.site}"</span>
              </div>
              <div className="text-[10px] text-slate-400 whitespace-nowrap">{item.time}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 pt-4 border-t">
         <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
             <span>SERVER CLOUD</span>
             <span className="text-green-500">DITERBITKAN</span>
         </div>
         <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-medium overflow-hidden whitespace-nowrap bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
             <Clock className="h-3 w-3 text-slate-400 shrink-0" />
             <span>Refreshed: 05-08-2024 16:11:08 WIB</span>
         </div>
      </div>
    </div>
  );
}
