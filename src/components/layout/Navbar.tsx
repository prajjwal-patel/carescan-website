'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '../ui/Button';
import { Menu, X, KeyRound, ChevronRight, Sun, Moon } from 'lucide-react';
import { useCredentials } from '@/context/CredentialsContext';
import { useTheme } from '@/context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useCredentials();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy: Determine active section
      const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      let currentActive = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            currentActive = `#${id}`;
            break;
          }
        }
      }
      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5 transition-all duration-300">
        <div
          className={`mx-auto rounded-full dock-nav-base transition-all duration-300 ${
            isScrolled
              ? 'max-w-5xl bg-white/92 dark:bg-slate-900/92 backdrop-blur-xl border border-teal-500/30 dark:border-teal-400/30 dock-pill-scrolled py-1.5 sm:py-2 px-3 sm:px-5'
              : 'max-w-7xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 py-2.5 sm:py-3 px-4 sm:px-6 shadow-2xs'
          } flex items-center justify-between gap-2 xl:gap-4`}
        >
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 whitespace-nowrap">
            <div
              className={`relative rounded-full bg-white flex items-center justify-center shadow-xs border border-slate-200/80 dark:border-slate-700/80 overflow-hidden group-hover:scale-105 transition-all duration-300 shrink-0 ${
                isScrolled ? 'w-8 h-8 sm:w-9 sm:h-9 p-0.5' : 'w-10 h-10 sm:w-11 sm:h-11 p-1'
              }`}
            >
              <Image
                src="/orqis-logo.png"
                alt="Orqis Logo"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col whitespace-nowrap shrink-0">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span
                  className={`font-brand font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight transition-all duration-300 ${
                    isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                  }`}
                >
                  CareScan
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800/80 whitespace-nowrap">
                  16-Qubit VQC
                </span>
              </div>
              {!isScrolled && (
                <span className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-medium tracking-wide hidden md:block font-body whitespace-nowrap animate-in fade-in duration-200">
                  Quantum-Classical Oral Triage
                </span>
              )}
            </div>
          </a>

          {/* Desktop Navigation Links - Single Line with Active ScrollSpy Indicator */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0 flex-nowrap whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-body text-xs xl:text-sm font-semibold px-2.5 xl:px-3 py-1.5 rounded-full transition-all whitespace-nowrap inline-block ${
                    isActive
                      ? 'bg-teal-100/90 dark:bg-teal-950/90 text-teal-900 dark:text-teal-200 border border-teal-300/80 dark:border-teal-700/80 shadow-2xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Area: Dark Mode Toggle + Credentials Button */}
          <div className="hidden sm:flex items-center gap-2 shrink-0 whitespace-nowrap">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer"
              aria-label="Toggle dark mode"
              title="Toggle color theme"
            >
              <Sun className="w-4 h-4 text-amber-400 hidden dark:block animate-in spin-in-180 duration-200" />
              <Moon className="w-4 h-4 text-slate-700 block dark:hidden animate-in spin-in-180 duration-200" />
            </button>

            {/* Credentials Trigger */}
            <Button
              onClick={() => openModal()}
              variant="secondary"
              size={isScrolled ? 'sm' : 'sm'}
              icon={<KeyRound className="w-3.5 h-3.5" />}
              className="whitespace-nowrap text-xs xl:text-sm shadow-xs font-semibold"
            >
              Credentials
            </Button>
          </div>

          {/* Mobile Action Area */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
              title="Toggle color theme"
            >
              <Sun className="w-4 h-4 text-amber-400 hidden dark:block" />
              <Moon className="w-4 h-4 text-slate-700 block dark:hidden" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 max-w-lg mx-auto glass-card rounded-3xl p-5 shadow-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-body flex items-center justify-between text-sm font-semibold px-4 py-2.5 rounded-2xl transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-teal-100/80 dark:bg-teal-950/80 text-teal-900 dark:text-teal-200 font-bold'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-slate-800/80 hover:text-teal-700 dark:hover:text-teal-400'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </a>
                );
              })}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setMobileOpen(false);
                    openModal();
                  }}
                  icon={<KeyRound className="w-4 h-4" />}
                  className="w-full whitespace-nowrap"
                >
                  User & Clinician Credentials
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
