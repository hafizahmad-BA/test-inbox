"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is email warmup and why do I need it?",
      answer: "Email warmup is the process of gradually increasing the sending volume of a new email address while generating positive engagement (opens, replies, marking out of spam). It establishes trust with ISPs like Google and Microsoft, ensuring your actual marketing or sales emails land in the primary inbox rather than the spam folder."
    },
    {
      question: "How is InboxWarm different from competitors?",
      answer: "Unlike legacy tools that use fake bot accounts, InboxWarm operates a high-quality peer-to-peer network consisting of real business domains. We also use advanced AI to generate realistic, context-aware conversational threads rather than generic 'gibberish' replies that spam filters can now detect."
    },
    {
      question: "How long does it take to warm up a domain?",
      answer: "For a brand new domain, we recommend warming up for at least 14 to 21 days before scaling your outreach campaigns. If you are recovering a damaged domain, it may take 30 days to see your deliverability score return to 99%."
    },
    {
      question: "Is it safe to connect my primary business email?",
      answer: "Yes. We use strict OAuth permissions and cannot access your private emails, passwords, or company data. We only monitor, open, and reply to emails containing our proprietary hidden warmup footprint."
    },
    {
      question: "Will the people in my organization see the warmup emails?",
      answer: "No. InboxWarm automatically creates a filter in your inbox that archives warmup messages, marks them as read (after engaging), and keeps them invisible so your daily workflow is uninterrupted."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            For more details, visit our <a href="/docs" className="text-primary-600 hover:underline">Help Center</a>.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-950/50">
      <button 
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900 dark:text-gray-100">{question}</span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-gray-400 shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-gray-400 shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
