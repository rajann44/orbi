import { OrbiLogo } from '../icons/OrbiLogo';
import { IconButton } from '../ui/IconButton';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 px-6 flex items-center justify-between bg-[#121212] border-b border-[#2A2A2A]">
      <OrbiLogo size="sm" showWordmark={true} />
      
      <div className="flex items-center gap-4">
        <IconButton
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label="Settings"
          className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors"
        />
        
        <IconButton
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
            </svg>
          }
          label="Help"
          className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors"
        />
        
        <button className="
          bg-transparent text-[#E0E0E0] 
          px-4 py-2 rounded-lg
          text-sm font-medium
          hover:bg-[#2A2A2A] active:bg-[#252525]
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20
        ">
          Sign in
        </button>
        
        <button className="
          bg-[#E0E0E0] text-[#121212] 
          px-4 py-2 rounded-lg
          text-sm font-medium
          hover:bg-[#F0F0F0] active:bg-[#D0D0D0]
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/20
        ">
          Sign up
        </button>
      </div>
    </header>
  );
}; 