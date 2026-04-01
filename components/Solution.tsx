"use client";

import { motion } from "framer-motion";
import { Link2, Bot, LineChart } from "lucide-react";

export default function Solution() {
  const steps = [
    {
      icon: <Link2 className="h-6 w-6 text-primary-500" />,
      title: "1. Connect Email Accounts",
      description: "Securely connect your Google, Microsoft, or any SMTP/IMAP accounts in seconds. No technical skills required."
    },
    {
      icon: <Bot className="h-6 w-6 text-primary-500" />,
      title: "2. Set It & Forget It",
      description: "Our AI automatically sends, opens, replies, and marks your emails as important in real inboxes."
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary-500" />,
      title: "3. Watch Reputation Grow",
      description: "Monitor your domain score in real-time as we move your emails out of spam folders and into the primary inbox."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How InboxWarm works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A secure, automated system designed to replicate realistic human behavior across thousands of real inboxes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-white dark:bg-zinc-900 border-2 border-primary-100 dark:border-primary-900 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(99,102,241,0.1)] group-hover:border-primary-500 transition-colors z-10 relative">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
