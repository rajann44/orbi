'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { OrbiLogo } from '@/components/icons/OrbiLogo';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const mode = searchParams.get('mode');
    setIsSignIn(mode !== 'signup');
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication logic
    console.log('Form submitted:', { email, password, name });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] px-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-12">
          <OrbiLogo size="lg" showWordmark={true} className="mb-8" />
          <div className="flex items-center gap-8">
            <button
              onClick={() => {
                setIsSignIn(true);
                router.push('/auth');
              }}
              className={`
                text-lg font-medium transition-colors duration-200
                ${isSignIn 
                  ? 'text-[#E0E0E0] border-b-2 border-[#E0E0E0] pb-2' 
                  : 'text-[#808080] hover:text-[#B0B0B0]'
                }
              `}
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setIsSignIn(false);
                router.push('/auth?mode=signup');
              }}
              className={`
                text-lg font-medium transition-colors duration-200
                ${!isSignIn 
                  ? 'text-[#E0E0E0] border-b-2 border-[#E0E0E0] pb-2' 
                  : 'text-[#808080] hover:text-[#B0B0B0]'
                }
              `}
            >
              Sign up
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {!isSignIn && (
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full px-4 py-3
                    bg-[#1E1E1E] border border-[#2A2A2A]
                    rounded-lg text-[#E0E0E0]
                    placeholder-[#808080]
                    focus:outline-none focus:border-[#3A3A3A]
                    transition-all duration-200
                  "
                  placeholder="Full Name"
                />
              </div>
            )}

            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full px-4 py-3
                  bg-[#1E1E1E] border border-[#2A2A2A]
                  rounded-lg text-[#E0E0E0]
                  placeholder-[#808080]
                  focus:outline-none focus:border-[#3A3A3A]
                  transition-all duration-200
                "
                placeholder="Email address"
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isSignIn ? 'current-password' : 'new-password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full px-4 py-3
                  bg-[#1E1E1E] border border-[#2A2A2A]
                  rounded-lg text-[#E0E0E0]
                  placeholder-[#808080]
                  focus:outline-none focus:border-[#3A3A3A]
                  transition-all duration-200
                "
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="
                w-full px-4 py-3
                bg-[#1E1E1E] text-[#E0E0E0]
                rounded-lg font-medium
                border border-[#2A2A2A]
                hover:bg-[#2A2A2A] active:bg-[#252525]
                focus:outline-none focus:border-[#3A3A3A]
                transition-all duration-200
              "
            >
              {isSignIn ? 'Sign in' : 'Create account'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[#808080] text-sm">
            {isSignIn 
              ? "Don't have an account? " 
              : 'Already have an account? '}
            <button
              onClick={() => {
                setIsSignIn(!isSignIn);
                router.push(`/auth${!isSignIn ? '' : '?mode=signup'}`);
              }}
              className="
                text-[#E0E0E0] hover:text-white
                font-medium
                transition-colors duration-200
              "
            >
              {isSignIn ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
} 