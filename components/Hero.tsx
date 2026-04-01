/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-visible pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-50 mix-blend-screen w-[800px] h-[600px] bg-primary-500/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 left-0 -translate-x-1/3 opacity-30 mix-blend-screen w-[600px] h-[600px] bg-violet-500/20 blur-[120px] rounded-full pointer-events-none hidden md:block"></div>
      
      {/* Optional faint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-sm font-medium mb-8 shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              The #1 AI Email Deliverability Platform
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.1]">
            Ensure Your Emails <br className="hidden md:block"/>
            Land in the <span className="text-gradient">Inbox</span>
          </h1>
          
          <p className="mt-2 text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            InboxWarm automatically interacts with your emails, boosts your sender reputation, and prevents your cold outreach from hitting the spam folder.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/pricing" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all shadow-[0_0_40px_-10px_rgba(30,41,59,0.7)] hover:shadow-[0_0_60px_-15px_rgba(30,41,59,0.9)] flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#how-it-works" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white font-medium transition-all shadow-sm flex items-center justify-center hover:border-gray-300 dark:hover:border-zinc-700 hover:-translate-y-0.5"
            >
              See how it works
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> No credit card required</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> 14-day free trial</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cancel anytime</div>
          </div>
        </motion.div>
        
        {/* Abstract Premium Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-6xl relative"
        >
          {/* Dashboard glow */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500 to-violet-500 rounded-2xl blur-2xl opacity-20 dark:opacity-40"></div>
          
          <div className="relative rounded-2xl border border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-2xl p-2 shadow-2xl overflow-hidden">
             {/* MacOS style window header */}
             <div className="border-b border-gray-200/50 dark:border-white/5 pb-2 px-2 flex items-center gap-2 mb-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
             </div>
             
             <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-zinc-950 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center relative shadow-inner">
               
               {/* Abstract inner UI elements representing a sleek graph */}
               <div className="absolute inset-0 p-8 flex flex-col gap-6">
                 {/* Top stats row */}
                 <div className="flex justify-between items-end">
                   <div>
                     <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 font-semibold">Total Deliverability</div>
                     <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-violet-500">99.8%</div>
                   </div>
                   <div className="flex gap-4">
                     <div className="h-10 w-24 rounded-lg bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center text-sm font-medium">Auto-pilot</div>
                     <div className="h-10 w-10 rounded-lg bg-primary-500 text-white flex items-center justify-center">+</div>
                   </div>
                 </div>
                 
                 {/* Main chart representation */}
                 <div className="flex-1 flex items-end gap-2 mt-4 relative">
                   {/* Horizontal grid lines */}
                   <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                     {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-full h-px bg-gray-200/50 dark:bg-white/5"></div>
                     ))}
                   </div>
                   
                   {/* Bars */}
                   {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 100, 98, 99].map((height, i) => (
                     <motion.div 
                       key={i}
                       initial={{ height: "0%" }}
                       animate={{ height: `${height}%` }}
                       transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: "easeOut" }}
                       className="flex-1 rounded-t-sm relative group"
                     >
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-primary-600/80 to-violet-400/80 rounded-t-sm opacity-90 transition-opacity group-hover:opacity-100"></div>
                        {i === 10 && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white dark:bg-white dark:text-black text-xs py-1 px-2 rounded font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            Inbox placement: 100%
                          </div>
                        )}
                     </motion.div>
                   ))}
                 </div>
               </div>
               
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
