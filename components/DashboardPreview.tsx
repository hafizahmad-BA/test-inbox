"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black border-y border-gray-100 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything in one clear view
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Transparent reporting so you know exact deliverability metrics before you send your marketing campaigns.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="border-b border-gray-100 dark:border-zinc-800 p-4 flex items-center gap-4 bg-gray-50/50 dark:bg-zinc-900/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="h-6 w-full max-w-sm bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded text-center text-xs text-gray-400 flex items-center justify-center font-mono">
              app.inboxwarm.com/dashboard/reports
            </div>
          </div>
          
          {/* Dashboard Body */}
          <div className="flex h-[400px] md:h-[600px] bg-white dark:bg-zinc-950">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-100 dark:border-zinc-800 p-6 hidden md:block">
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 dark:bg-zinc-900 rounded-md w-3/4 mb-10"></div>
                
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-6 rounded w-full flex items-center px-3 ${i === 1 ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 border border-primary-100 dark:border-primary-800/30' : 'bg-transparent border border-transparent'}`}>
                    <div className={`h-2.5 w-full max-w-[120px] rounded ${i === 1 ? 'bg-primary-500' : 'bg-gray-200 dark:bg-zinc-800'}`}></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6 md:p-10 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <div className="h-8 w-48 bg-gray-100 dark:bg-zinc-800 rounded-lg mb-2"></div>
                  <div className="h-4 w-32 bg-gray-50 dark:bg-zinc-900 rounded-md"></div>
                </div>
                <div className="h-10 w-32 bg-primary-600 rounded-lg"></div>
              </div>
              
              {/* Chart Area */}
              <div className="grid grid-cols-3 gap-6 mb-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-32 rounded-xl border border-gray-100 dark:border-zinc-800 p-4">
                    <div className="h-4 w-20 bg-gray-100 dark:bg-zinc-800 rounded mb-4"></div>
                    <div className="h-10 w-16 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent rounded"></div>
                  </div>
                ))}
              </div>
              
              <div className="flex-1 rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/20 p-6 flex flex-col justify-end gap-2 relative">
                <div className="absolute top-6 left-6 h-5 w-32 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                {/* Fake Graph Bars */}
                <div className="flex items-end gap-2 h-48 mt-auto px-4 w-full">
                  {[20, 35, 40, 60, 50, 80, 75, 90, 85, 95, 100, 98, 99].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                      className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-sm opacity-80"
                    ></motion.div>
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
