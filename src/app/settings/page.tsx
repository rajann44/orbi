'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const settingsSections = [
  {
    id: 'account',
    title: 'Account',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 'appearance',
    title: 'Appearance',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('account');

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <Header />
      
      <main className="flex-1 pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              <nav className="space-y-1">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full px-4 py-3
                      flex items-center gap-3
                      rounded-lg
                      transition-all duration-200
                      ${
                        activeSection === section.id
                          ? 'bg-[#1E1E1E] text-[#E0E0E0]'
                          : 'text-[#808080] hover:bg-[#1E1E1E] hover:text-[#E0E0E0]'
                      }
                    `}
                  >
                    {section.icon}
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg p-6">
                {activeSection === 'account' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-[#E0E0E0]">Account Settings</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#B0B0B0] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="
                            w-full px-4 py-2.5
                            bg-[#121212] border border-[#2A2A2A]
                            rounded-lg text-[#E0E0E0]
                            placeholder-[#808080]
                            focus:outline-none focus:border-[#3A3A3A]
                            transition-all duration-200
                          "
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#B0B0B0] mb-2">
                          Display Name
                        </label>
                        <input
                          type="text"
                          className="
                            w-full px-4 py-2.5
                            bg-[#121212] border border-[#2A2A2A]
                            rounded-lg text-[#E0E0E0]
                            placeholder-[#808080]
                            focus:outline-none focus:border-[#3A3A3A]
                            transition-all duration-200
                          "
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#B0B0B0] mb-2">
                          Change Password
                        </label>
                        <div className="space-y-3">
                          <input
                            type="password"
                            className="
                              w-full px-4 py-2.5
                              bg-[#121212] border border-[#2A2A2A]
                              rounded-lg text-[#E0E0E0]
                              placeholder-[#808080]
                              focus:outline-none focus:border-[#3A3A3A]
                              transition-all duration-200
                            "
                            placeholder="Current password"
                          />
                          <input
                            type="password"
                            className="
                              w-full px-4 py-2.5
                              bg-[#121212] border border-[#2A2A2A]
                              rounded-lg text-[#E0E0E0]
                              placeholder-[#808080]
                              focus:outline-none focus:border-[#3A3A3A]
                              transition-all duration-200
                            "
                            placeholder="New password"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        className="
                          px-4 py-2
                          bg-[#1E1E1E] text-[#E0E0E0]
                          rounded-lg font-medium
                          border border-[#2A2A2A]
                          hover:bg-[#2A2A2A] active:bg-[#252525]
                          focus:outline-none focus:border-[#3A3A3A]
                          transition-all duration-200
                        "
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}

                {activeSection === 'appearance' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-[#E0E0E0]">Appearance</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#B0B0B0] mb-2">
                          Theme
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button className="
                            p-4
                            bg-[#121212] border border-[#2A2A2A]
                            rounded-lg
                            text-left
                            hover:bg-[#2A2A2A] active:bg-[#252525]
                            transition-all duration-200
                            focus:outline-none focus:border-[#3A3A3A]
                          ">
                            <div className="text-[#E0E0E0] font-medium mb-1">Dark</div>
                            <p className="text-[#808080] text-sm">Default theme</p>
                          </button>
                          <button className="
                            p-4
                            bg-[#121212] border border-[#2A2A2A]
                            rounded-lg
                            text-left
                            hover:bg-[#2A2A2A] active:bg-[#252525]
                            transition-all duration-200
                            focus:outline-none focus:border-[#3A3A3A]
                          ">
                            <div className="text-[#E0E0E0] font-medium mb-1">Light</div>
                            <p className="text-[#808080] text-sm">Coming soon</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'notifications' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-[#E0E0E0]">Notifications</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#121212] border border-[#2A2A2A] rounded-lg">
                        <div>
                          <div className="text-[#E0E0E0] font-medium">Email Notifications</div>
                          <p className="text-[#808080] text-sm">Receive email updates about your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="
                            w-11 h-6
                            bg-[#2A2A2A]
                            peer-focus:outline-none
                            rounded-full
                            peer
                            peer-checked:after:translate-x-full
                            peer-checked:after:border-white
                            after:content-['']
                            after:absolute
                            after:top-[2px]
                            after:left-[2px]
                            after:bg-[#E0E0E0]
                            after:rounded-full
                            after:h-5
                            after:w-5
                            after:transition-all
                            peer-checked:bg-[#4A90E2]
                          "></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-[#121212] border border-[#2A2A2A] rounded-lg">
                        <div>
                          <div className="text-[#E0E0E0] font-medium">Push Notifications</div>
                          <p className="text-[#808080] text-sm">Receive push notifications in your browser</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="
                            w-11 h-6
                            bg-[#2A2A2A]
                            peer-focus:outline-none
                            rounded-full
                            peer
                            peer-checked:after:translate-x-full
                            peer-checked:after:border-white
                            after:content-['']
                            after:absolute
                            after:top-[2px]
                            after:left-[2px]
                            after:bg-[#E0E0E0]
                            after:rounded-full
                            after:h-5
                            after:w-5
                            after:transition-all
                            peer-checked:bg-[#4A90E2]
                          "></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'privacy' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-[#E0E0E0]">Privacy & Security</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-[#121212] border border-[#2A2A2A] rounded-lg">
                        <div>
                          <div className="text-[#E0E0E0] font-medium">Two-Factor Authentication</div>
                          <p className="text-[#808080] text-sm">Add an extra layer of security to your account</p>
                        </div>
                        <button className="
                          px-4 py-2
                          bg-[#1E1E1E] text-[#E0E0E0]
                          rounded-lg font-medium
                          border border-[#2A2A2A]
                          hover:bg-[#2A2A2A] active:bg-[#252525]
                          focus:outline-none focus:border-[#3A3A3A]
                          transition-all duration-200
                        ">
                          Enable
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-[#121212] border border-[#2A2A2A] rounded-lg">
                        <div>
                          <div className="text-[#E0E0E0] font-medium">Data Export</div>
                          <p className="text-[#808080] text-sm">Download a copy of your data</p>
                        </div>
                        <button className="
                          px-4 py-2
                          bg-[#1E1E1E] text-[#E0E0E0]
                          rounded-lg font-medium
                          border border-[#2A2A2A]
                          hover:bg-[#2A2A2A] active:bg-[#252525]
                          focus:outline-none focus:border-[#3A3A3A]
                          transition-all duration-200
                        ">
                          Export
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-[#121212] border border-[#2A2A2A] rounded-lg">
                        <div>
                          <div className="text-[#E0E0E0] font-medium">Delete Account</div>
                          <p className="text-[#808080] text-sm">Permanently delete your account and all data</p>
                        </div>
                        <button className="
                          px-4 py-2
                          bg-[#1E1E1E] text-[#E0E0E0]
                          rounded-lg font-medium
                          border border-[#2A2A2A]
                          hover:bg-[#2A2A2A] active:bg-[#252525]
                          focus:outline-none focus:border-[#3A3A3A]
                          transition-all duration-200
                        ">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 