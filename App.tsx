/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';

// Components
import Header from '@/components/portal/Header';
import Footer from '@/components/portal/Footer';
import RunningText from '@/components/portal/RunningText';
import AgeGate from '@/components/portal/AgeGate';
import WhatsAppButton from '@/components/portal/WhatsAppButton';
import ScrollToTop from '@/components/portal/ScrollToTop';

// Pages
import Home from '@/pages/Home';
import Favorit from '@/pages/Favorit';
import Admin from '@/pages/Admin';
import StaticPage from '@/pages/StaticPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <RunningText />
            <Header />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorit" element={<Favorit />} />
                <Route path="/admin" element={<Admin />} />
                
                {/* Information Pages */}
                <Route path="/disclaimer" element={<StaticPage />} />
                <Route path="/kebijakan-privasi" element={<StaticPage />} />
                <Route path="/tentang-kami" element={<StaticPage />} />
                <Route path="/kontak" element={<StaticPage />} />
                <Route path="/panduan-pkvgames" element={<StaticPage />} />
                <Route path="/panduan-idnplay" element={<StaticPage />} />
                <Route path="/panduan-slot&togel" element={<StaticPage />} />
                <Route path="/artikel/pkv-games-indonesia" element={<StaticPage />} />
              </Routes>
            </main>

            <Footer />
            
            {/* Global Overlays */}
            <AgeGate />
            <WhatsAppButton />
            <ScrollToTop />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

