'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IconButton } from '@/components/ui/IconButton';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of using Orbi',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'features',
    title: 'Features',
    description: 'Explore Orbi\'s capabilities',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const popularArticles = [
  {
    id: 'quick-start',
    title: 'Quick Start Guide',
    category: 'Getting Started',
    readTime: '5 min read',
  },
  {
    id: 'search-tips',
    title: 'Advanced Search Tips',
    category: 'Features',
    readTime: '8 min read',
  },
  {
    id: 'error-codes',
    title: 'Understanding Error Codes',
    category: 'Troubleshooting',
    readTime: '4 min read',
  },
  {
    id: 'account-settings',
    title: 'Managing Account Settings',
    category: 'Features',
    readTime: '6 min read',
  },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <Header />
      
      <main className="flex-1 pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-[#E0E0E0] mb-4">
              How can we help you?
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for help..."
                className="
                  w-full px-4 py-3 pl-12
                  bg-[#1E1E1E] border border-[#2A2A2A]
                  rounded-lg text-[#E0E0E0]
                  placeholder-[#808080]
                  focus:outline-none focus:border-[#3A3A3A]
                  transition-all duration-200
                "
              />
              <svg
                className="w-5 h-5 text-[#808080] absolute left-4 top-1/2 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                className="
                  p-6
                  bg-[#1E1E1E] border border-[#2A2A2A]
                  rounded-lg
                  text-left
                  hover:bg-[#2A2A2A] active:bg-[#252525]
                  transition-all duration-200
                  focus:outline-none focus:border-[#3A3A3A]
                "
              >
                <div className="text-[#E0E0E0] mb-3">
                  {category.icon}
                </div>
                <h3 className="text-[#E0E0E0] font-medium mb-2">
                  {category.title}
                </h3>
                <p className="text-[#808080] text-sm">
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Popular Articles */}
          <div>
            <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-6">
              Popular Articles
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article) => (
                <button
                  key={article.id}
                  className="
                    w-full p-4
                    bg-[#1E1E1E] border border-[#2A2A2A]
                    rounded-lg
                    text-left
                    hover:bg-[#2A2A2A] active:bg-[#252525]
                    transition-all duration-200
                    focus:outline-none focus:border-[#3A3A3A]
                  "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#E0E0E0] font-medium mb-1">
                        {article.title}
                      </h3>
                      <p className="text-[#808080] text-sm">
                        {article.category}
                      </p>
                    </div>
                    <span className="text-[#808080] text-sm">
                      {article.readTime}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 