'use client';

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { MainContent } from '@/components/layout/MainContent';
import { Footer } from '@/components/layout/Footer';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const mode = searchParams.get('mode') || 'deepSearch';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {/* Search results will be displayed here */}
            <div className="flex items-center justify-between">
              <p className="text-[#B0B0B0]">
                Search results for: <span className="text-[#E0E0E0]">{query}</span>
              </p>
              <span className="text-[#808080] text-sm">
                Mode: <span className="text-[#E0E0E0]">{mode}</span>
              </span>
            </div>
            
            {/* Placeholder for search results */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="p-4 rounded-lg bg-[#1E1E1E] border border-[#2A2A2A]"
                >
                  <h3 className="text-[#E0E0E0] font-medium mb-2">
                    Search Result {i}
                  </h3>
                  <p className="text-[#B0B0B0] text-sm">
                    This is a placeholder for search result {i}. The actual search results will be implemented based on your backend requirements.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 