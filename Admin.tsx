
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SITES_DATA } from '@/lib/sitesData';
import { getOverrides, saveOverride, clearOverride, clearAllOverrides, exportOverrides, importOverrides } from '@/lib/adminOverrides';
import { ShieldCheck, LogOut, Edit3, Trash2, Download, Upload, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [overrides, setOverrides] = useState(getOverrides());
  const [editSite, setEditSite] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem('gpkv_admin_session');
    if (session === 'active') setIsAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Sendi@123') {
      sessionStorage.setItem('gpkv_admin_session', 'active');
      setIsAuthenticated(true);
    } else {
      alert('Password Salah!');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('gpkv_admin_session');
    setIsAuthenticated(false);
  };

  const handleEditSite = (site: any) => {
    setEditSite({ ...site, ...(overrides[site.slug] || {}) });
    setIsDialogOpen(true);
  };

  const handleSaveOverride = () => {
    saveOverride(editSite.slug, {
      name: editSite.name,
      image_url: editSite.image_url,
      category: editSite.category,
      rating: editSite.rating
    });
    setOverrides(getOverrides());
    setIsDialogOpen(false);
  };

  const handleReset = (slug: string) => {
    clearOverride(slug);
    setOverrides(getOverrides());
  };

  const resetAll = () => {
    if (confirm('Bersihkan semua perubahan dan reset ke default?')) {
      clearAllOverrides();
      setOverrides({});
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-sm border-white/10 bg-white/5 backdrop-blur-xl text-white rounded-3xl">
            <CardHeader className="text-center pt-8">
              <ShieldCheck size={48} className="mx-auto text-primary mb-4" />
              <CardTitle className="text-2xl font-black">LOGIN ADMIN</CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <form onSubmit={handleLogin} className="space-y-4">
                <Input 
                  type="password" 
                  placeholder="Password..."
                  className="bg-white/10 border-white/20 h-12 rounded-xl text-center font-bold"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" className="w-full h-12 rounded-xl font-black uppercase">Masuk System</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h1 className="text-4xl font-black flex items-center">
          <ShieldCheck className="mr-3 text-primary" />
          CONTROL PANEL
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => {
            const blob = new Blob([exportOverrides()], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'gpkv_overrides.json';
            a.click();
          }}>
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button variant="outline" size="sm" onClick={resetAll}>
             <RotateCcw className="mr-2 h-4 w-4" /> Reset All
          </Button>
          <Button variant="destructive" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Exit
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border shadow-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-800">
            <TableRow>
              <TableHead className="font-bold">Situs</TableHead>
              <TableHead className="font-bold">Kategori</TableHead>
              <TableHead className="font-bold">Rating</TableHead>
              <TableHead className="font-bold">Status Override</TableHead>
              <TableHead className="text-right font-bold">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SITES_DATA.map((site) => (
              <TableRow key={site.slug}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={overrides[site.slug]?.image_url || site.image_url} 
                      className="w-8 h-8 rounded border object-contain bg-slate-50" 
                      alt="" 
                    />
                    <span>{overrides[site.slug]?.name || site.name}</span>
                  </div>
                </TableCell>
                <TableCell>{overrides[site.slug]?.category || site.category}</TableCell>
                <TableCell>{overrides[site.slug]?.rating || site.rating}</TableCell>
                <TableCell>
                  {overrides[site.slug] ? (
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded text-[10px] font-black uppercase">Custom</span>
                  ) : (
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-[10px] font-black uppercase">Default</span>
                  )}
                </TableCell>
                <TableCell className="text-right flex justify-end gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEditSite(site)}><Edit3 className="h-4 w-4" /></Button>
                  {overrides[site.slug] && (
                    <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleReset(site.slug)}><RotateCcw className="h-4 w-4" /></Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black uppercase">Edit Data Situs</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400">Nama Situs</label>
              <Input value={editSite?.name || ''} onChange={(e) => setEditSite({...editSite, name: e.target.value})} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400">Image URL</label>
              <Input value={editSite?.image_url || ''} onChange={(e) => setEditSite({...editSite, image_url: e.target.value})} />
              <div className="mt-2 bg-slate-50 p-2 border rounded">
                  <img src={editSite?.image_url} className="h-20 mx-auto object-contain" alt="Preview" />
              </div>
            </div>
             <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400">Kategori</label>
              <Input value={editSite?.category || ''} onChange={(e) => setEditSite({...editSite, category: e.target.value})} />
            </div>
             <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400">Rating</label>
              <Input type="number" step="0.1" value={editSite?.rating || ''} onChange={(e) => setEditSite({...editSite, rating: e.target.value})} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Batal</Button>
            <Button onClick={handleSaveOverride} className="font-bold px-8">Simpan Perubahan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
