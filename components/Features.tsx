"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, Target, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Smart Sending Patterns",
      description: "We mimic human schedules—sending emails during business hours with realistic fluctuations, avoiding bot-like robotic triggers.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "AI Reply Simulation",
      description: "Our LLM-powered network generates contextual, completely natural replies to your emails, creating engagement that ISPs love.",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "Deliverability Tracking",
      description: "Get real-time insights into exactly where your emails land (Inbox, Spam, Promotions) across different providers.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Spam Rescue",
      description: "If an email lands in spam, our automated network flags it, un-spams it, and moves it back to the primary inbox to teach algorithms.",
      icon: <Lock className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary-900/40 via-zinc-900 to-zinc-900 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Powerful features to outsmart <span className="text-gradient">spam filters</span>.
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg">
              We&apos;ve engineered the most robust peer-to-peer warmup network. No fake accounts, just real authentic engagement.
            </p>
            
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 h-10 w-10 shrink-0 bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">{feature.title}</h4>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl aspect-square p-8 shadow-2xl relative"
          >
             <div className="absolute -z-10 bg-primary-600/30 w-[300px] h-[300px] blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             
             {/* Decorative abstract elements */}
             <div className="h-full w-full flex flex-col gap-4">
               <div className="flex-1 rounded-xl bg-white/5 border border-white/5 animate-pulse flex items-center justify-center">
                  <span className="text-zinc-500 font-mono text-sm">Analyzing sender health...</span>
               </div>
               <div className="h-32 grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-green-500/10 border border-green-500/20 flex flex-col items-center justify-center">
                    <span className="text-green-400 text-xl font-bold">100%</span>
                    <span className="text-xs text-zinc-500 mt-1 uppercase">Google</span>
                  </div>
                  <div className="rounded-xl bg-green-500/10 border border-green-500/20 flex flex-col items-center justify-center">
                    <span className="text-green-400 text-xl font-bold">98%</span>
                    <span className="text-xs text-zinc-500 mt-1 uppercase">Outlook</span>
                  </div>
                  <div className="rounded-xl bg-green-500/10 border border-green-500/20 flex flex-col items-center justify-center">
                    <span className="text-green-400 text-xl font-bold">99%</span>
                    <span className="text-xs text-zinc-500 mt-1 uppercase">Yahoo</span>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
