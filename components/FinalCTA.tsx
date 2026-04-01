"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-600/30 via-primary-900 to-primary-900 opacity-60"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 mix-blend-screen w-[800px] h-[600px] bg-primary-400/20 blur-[100px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            Stop guessing.<br />Start delivering.
          </h2>
          <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of founders and agencies who rely on InboxWarm to reach their customers&apos; primary inboxes. Set it up in 2 minutes and let the AI do the work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link 
              href="/pricing"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white hover:bg-primary-50 text-primary-700 font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group"
            >
              Start Your Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-primary-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-400" />
              <span>14-day full access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
