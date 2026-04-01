"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowDownCircle, MailWarning } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950/50 border-y border-gray-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why your cold emails <span className="text-red-500">fail</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            ISPs like Google and Microsoft use strict algorithms to filter spam. If you don&apos;t have a strong sender reputation, your outreach is invisible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <MailWarning className="h-8 w-8 text-amber-500" />,
              title: "Low Open Rates",
              description: "Your emails are landing in the spam or promotions folder, so prospects never even read your pitch."
            },
            {
              icon: <AlertCircle className="h-8 w-8 text-red-500" />,
              title: "Damaged Domain Reputation",
              description: "Sending high volumes without warmup flags your domain, permanently destroying your email ROI."
            },
            {
              icon: <ArrowDownCircle className="h-8 w-8 text-orange-500" />,
              title: "Wasted Leads",
              description: "You're burning through expensive lead lists without any replies because of silent deliverability issues."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
