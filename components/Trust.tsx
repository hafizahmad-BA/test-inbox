"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, LockKeyhole } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise-grade security
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We don&apos;t sell your data, we don&apos;t read your personal emails, and we don&apos;t use fake bot accounts. InboxWarm is built on privacy first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/30 text-center"
          >
            <ShieldCheck className="h-10 w-10 mx-auto text-primary-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">OAuth Authentication</h3>
            <p className="text-gray-500 text-sm">
              We never store your passwords. We use secure OAuth tokens to connect directly with Google and Microsoft.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/30 text-center"
          >
            <LockKeyhole className="h-10 w-10 mx-auto text-primary-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Private Network</h3>
            <p className="text-gray-500 text-sm">
              No generic spam networks. InboxWarm uses a curated peer-to-peer network of actual corporate and high-reputation personal inboxes.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/30 text-center"
          >
            <Server className="h-10 w-10 mx-auto text-primary-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Strict Data Deletion</h3>
            <p className="text-gray-500 text-sm">
              We only read the emails our system sends. We don&apos;t analyze your actual business communications.
            </p>
          </motion.div>
        </div>
        
        {/* Social Proof Stats */}
        <div className="mt-20 border-t border-gray-100 dark:border-zinc-900 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center">
             <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">25M+</div>
             <div className="text-sm text-gray-500">Emails warmed up daily</div>
           </div>
           <div className="text-center">
             <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">99.8%</div>
             <div className="text-sm text-gray-500">Average Inbox Placement</div>
           </div>
           <div className="text-center">
             <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">5,000+</div>
             <div className="text-sm text-gray-500">Active Agencies & Founders</div>
           </div>
           <div className="text-center">
             <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">0</div>
             <div className="text-sm text-gray-500">Domains Blacklisted</div>
           </div>
        </div>
      </div>
    </section>
  );
}
