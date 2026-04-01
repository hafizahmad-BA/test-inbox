import Link from "next/link";
import { Sparkles, Share2, MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white group">
              <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                 <Sparkles className="h-4 w-4 text-white" />
              </div>
              InboxWarm
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xs text-sm leading-relaxed">
              The smartest peer-to-peer AI warmup network designed to maximize email deliverability and completely avoid the spam folder.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="https://twitter.com" className="hover:text-primary-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-primary-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Share2 className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="hover:text-primary-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/features" className="hover:text-primary-500 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-primary-500 transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="hover:text-primary-500 transition-colors">Integrations</Link></li>
              <li><Link href="/changelog" className="hover:text-primary-500 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-primary-500 transition-colors">Documentation</Link></li>
              <li><Link href="/use-cases" className="hover:text-primary-500 transition-colors">Use Cases</Link></li>
              <li><Link href="/deliverability-guide" className="hover:text-primary-500 transition-colors">Deliverability Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-primary-500 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary-500 transition-colors">Contact us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} InboxWarm Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
