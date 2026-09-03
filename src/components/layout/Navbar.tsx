'use client';

import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '../ui/Button';
import { Menu, X, Activity, Sparkles, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-2.5 px-5 sm:px-6'
            : 'bg-white/70 backdrop-blur-md border border-slate-200/50 py-3.5 px-6'
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-teal-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-slate-900">CareScan</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-full border border-indigo-100">
                Research
              </span>
            </div>
            <span className="text-[10px] text-slate-600 font-medium tracking-wide -mt-1 hidden sm:block">
              AI & Quantum Screening
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs xl:text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-full hover:bg-slate-100/70 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="#sandbox">
            <Button variant="primary" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Explore Sandbox
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 max-w-lg mx-auto glass-card rounded-3xl p-5 shadow-xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between text-sm font-medium text-slate-700 px-4 py-2.5 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a href="#sandbox" onClick={() => setMobileOpen(false)} className="block w-full">
                <Button variant="primary" size="md" className="w-full">
                  Launch Interactive Sandbox
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
