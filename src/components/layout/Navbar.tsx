'use client';

import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '../ui/Button';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

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
            ? 'glass-nav shadow-md py-2 px-5 sm:px-6'
            : 'bg-white/85 backdrop-blur-md border border-slate-200/60 py-2.5 px-6 shadow-2xs'
        } flex items-center justify-between`}
      >
        {/* Logo & Brand Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xs border border-slate-200/80 p-1 overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/orqis-logo.png"
              alt="Orqis Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-brand text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Orqis</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                Quantum AI
              </span>
            </div>
            <span className="text-[11px] text-slate-600 font-medium tracking-wide hidden sm:block font-body">
              Oral Screening & Triage
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-xs xl:text-sm font-semibold text-slate-700 hover:text-teal-700 px-3 py-1.5 rounded-full hover:bg-slate-100/70 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="#sandbox">
            <Button variant="secondary" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
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
                className="font-body flex items-center justify-between text-sm font-semibold text-slate-800 px-4 py-2.5 rounded-2xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a href="#sandbox" onClick={() => setMobileOpen(false)} className="block w-full">
                <Button variant="secondary" size="md" className="w-full">
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
