"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-gray-200 dark:border-zinc-800 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white group">
              <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center group-hover:bg-primary-500 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                 <Sparkles className="h-4 w-4 text-white" />
              </div>
              InboxWarm
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link 
              href="/pricing" 
              className="text-sm font-medium px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-all shadow-md shadow-primary-500/20"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-zinc-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-zinc-800 flex flex-col gap-3">
                <Link 
                  href="/login" 
                  className="block text-center px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 text-base font-medium text-gray-900 dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-center px-4 py-3 rounded-xl bg-primary-600 text-base font-medium text-white shadow-md shadow-primary-500/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
