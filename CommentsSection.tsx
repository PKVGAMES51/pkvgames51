
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { MessageSquare, Send, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'motion/react';

// Mock DB for comments in LocalStorage
const getComments = () => {
  const data = localStorage.getItem('gpkv_comments');
  return data ? JSON.parse(data) : [
    { id: 1, name: 'Admin PKV', text: 'Selamat datang! Silakan diskusikan pengalaman Anda di sini dengan bijak.', date: '3 jam lalu', status: 'approved' },
    { id: 2, name: 'Rudy Hartono', text: 'SundulQQ mantap bosku, informasinya pas banget.', date: '1 jam lalu', status: 'approved' }
  ];
};

const saveComment = (comment) => {
  const current = getComments();
  localStorage.setItem('gpkv_comments', JSON.stringify([...current, { ...comment, id: Date.now(), status: 'approved' }]));
};

export default function CommentsSection() {
  const queryClient = useQueryClient();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const { data: comments = [] } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
  });

  const mutation = useMutation({
    mutationFn: (newComment: any) => Promise.resolve(saveComment(newComment)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      setComment('');
      setName('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;
    mutation.mutate({ name, text: comment, date: 'Baru saja' });
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center space-x-3 mb-10">
          <div className="h-12 w-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
            <MessageSquare size={24} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">KOLOM DISKUSI</h2>
            <p className="text-xs text-slate-500 font-bold">{comments.length} Komentar Terdaftar</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nama Anda</label>
              <Input 
                placeholder="Masukkan nama..." 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border-none h-12 rounded-xl focus-visible:ring-primary font-medium"
              />
            </div>
          </div>
          <div className="space-y-2 mb-6">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Pesan / Pengalaman</label>
            <textarea 
              placeholder="Tuliskan pengalaman atau pertanyaan Anda..." 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full min-h-[120px] p-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus-visible:ring-primary font-medium outline-none text-sm resize-none"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full sm:w-auto px-8 h-12 font-bold rounded-xl space-x-2"
            disabled={mutation.isPending}
          >
            <span>KIRIM KOMENTAR</span>
            <Send size={16} />
          </Button>
        </form>

        <div className="space-y-6">
          <AnimatePresence>
            {comments.slice().reverse().map((item: any) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border shadow-sm"
              >
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <User size={20} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <div className="flex items-center text-[10px] text-slate-400 font-bold">
                      <Clock size={10} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
