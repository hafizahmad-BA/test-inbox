"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950/50 border-y border-gray-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Start warming your inbox in 2 minutes. No hidden fees. Cancel anytime.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-200 dark:border-zinc-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Pro Warmup</h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-gray-900 dark:text-white">$29</span>
              <span className="text-gray-500 font-medium">/inbox/month</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">Volume discounts available for agencies</p>
          </div>
          
          <ul className="space-y-4 mb-8">
            {[
              "Up to 50 warmup emails per day",
              "AI-generated realistic replies",
              "Advanced sender reputation monitoring",
              "Dedicated proxy IP setup",
              "Priority support"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            href="/pricing"
            className="block w-full py-4 px-6 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all text-center shadow-lg hover:shadow-primary-500/25"
          >
            Start 14-Day Free Trial
          </Link>
          
          <div className="text-center mt-6">
            <Link href="/pricing" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
              View all plans & features &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
