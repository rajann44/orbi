"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { OrbiLogo } from '../icons/OrbiLogo';
import { IconButton } from '../ui/IconButton';
import { DropdownMenu } from '../ui/DropdownMenu';

const actionChips = [
  {
    id: 'createImages',
    label: 'Create Images',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'research',
    label: 'Research',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 3.25H4.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h14.5a1.5 1.5 0 001.5-1.5V9.5M9.5 3.25h5m-5 0v5m5-5v5m-5 0h5m-5 0v5m5-5v5" />
      </svg>
    ),
  },
  {
    id: 'editImage',
    label: 'Edit Image',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    id: 'latestNews',
    label: 'Latest News',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    id: 'personas',
    label: 'Personas',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const searchModes = [
  {
    id: 'deepSearch',
    label: 'DeepSearch',
    description: 'Advanced search and reasoning',
  },
  {
    id: 'deeperSearch',
    label: 'DeeperSearch',
    description: 'Enhanced analysis and insights',
  },
  {
    id: 'deepestSearch',
    label: 'DeepestSearch',
    description: 'Maximum depth and complexity',
  },
];

export const MainContent = () => {
  const [query, setQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selectedSearchMode, setSelectedSearchMode] = useState('deepSearch');
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null!);
  const router = useRouter();

  const handleSearchButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}&mode=${selectedSearchMode}`);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 pt-16">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <OrbiLogo size="lg" className="mb-8" showWordmark={true} />
        
        <form 
          onSubmit={handleSearch}
          className={`
            relative bg-[#2D2D2D] rounded-[24px] p-3.5
            flex items-center gap-3 w-full max-w-3xl
            transition-all duration-200 ease-in-out
            ${isInputFocused 
              ? 'ring-1 ring-[#4A90E2]/20 shadow-[0_0_0_1px_rgba(74,144,226,0.1)]' 
              : 'shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]'
            }
          `}
        >
          <IconButton
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            }
            label="Voice input"
            className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors"
          />
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            placeholder="What do you want to know?"
            className="
              flex-1 bg-transparent outline-none 
              text-[#E0E0E0] placeholder-[#808080]
              text-base leading-6
              transition-colors duration-200
              min-w-0
            "
          />
          
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <button
                ref={searchButtonRef}
                onClick={handleSearchButtonClick}
                className="
                  bg-[#252525] text-[#E0E0E0] 
                  px-2.5 py-1.5 rounded-lg
                  flex items-center gap-1.5
                  text-sm font-medium
                  hover:bg-[#2A2A2A] active:bg-[#202020]
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20
                "
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchModes.find(mode => mode.id === selectedSearchMode)?.label}
                <svg className={`w-3 h-3 transition-transform duration-200 ${isSearchDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <DropdownMenu
                items={searchModes}
                selectedItemId={selectedSearchMode}
                onSelect={setSelectedSearchMode}
                isOpen={isSearchDropdownOpen}
                onClose={() => setIsSearchDropdownOpen(false)}
                triggerRef={searchButtonRef}
              />
            </div>
            
            <button 
              type="submit"
              className="
                bg-[#252525] text-[#E0E0E0] 
                px-2.5 py-1.5 rounded-lg
                flex items-center gap-1.5
                text-sm font-medium
                hover:bg-[#2A2A2A] active:bg-[#202020]
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20
              "
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Think
            </button>
            
            <button className="
              bg-[#252525] text-[#E0E0E0] 
              px-2.5 py-1.5 rounded-lg
              flex items-center gap-1.5
              text-sm font-medium
              hover:bg-[#2A2A2A] active:bg-[#202020]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20
            ">
              Orbi 3
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <IconButton
              icon={
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              }
              label="Upload file"
              className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors"
            />
          </div>
        </form>
        
        <div className="flex flex-wrap justify-center gap-2">
          {actionChips.map((chip) => (
            <button 
              key={chip.id} 
              className="
                bg-[#2A2A2A] rounded-[16px] 
                px-4 py-2 flex items-center gap-2 
                text-[#E0E0E0] text-sm
                hover:bg-[#3A3A3A] active:bg-[#252525]
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20
              "
            >
              {chip.icon}
              <span>{chip.label}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}; 