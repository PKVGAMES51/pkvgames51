
import React from 'react';
import HeroSection from '@/components/portal/HeroSection';
import DirectoryGrid from '@/components/portal/DirectoryGrid';
import EducationHub from '@/components/portal/EducationHub';
import FAQSection from '@/components/portal/FAQSection';
import TestimoniSection from '@/components/portal/TestimoniSection';
import ActivityFeed from '@/components/portal/ActivityFeed';
import CommentsSection from '@/components/portal/CommentsSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 xl:col-span-9">
            <DirectoryGrid />
          </div>
          <div className="lg:col-span-4 xl:col-span-3 space-y-8 py-16">
            <ActivityFeed />
            <div className="bg-primary p-6 rounded-3xl text-white">
                <h3 className="font-black text-xl mb-4 italic">REFERENSI NO. 1</h3>
                <p className="text-sm opacity-90 font-medium leading-relaxed mb-6">
                    Mencari situs yang terverifikasi? Gunakan filter pencarian kami untuk menemukan portal gaming terbaik pilihan PKV GAMES 51.
                </p>
                <img src="https://media.base44.com/images/public/69ef8da56d98d94beff96cc8/5b5b33722_generated_4a82f1cd.png" className="w-full h-auto rounded-xl grayscale brightness-150" alt="Shield" />
            </div>
          </div>
        </div>
      </div>

      <EducationHub />
      <TestimoniSection />
      <FAQSection />
      <CommentsSection />
    </div>
  );
}
