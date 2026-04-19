import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
      {/* Main Contact Form Block */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-8 bg-[#171717] border border-[#262626] rounded-[24px] p-6 sm:p-8 md:p-12 flex flex-col justify-center min-h-[500px]"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#737373] mb-6">Let's Connect</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 text-white max-w-lg">
          Ready to scale your <span className="text-amber-500">channel?</span>
        </h1>
        <p className="text-neutral-400 text-lg mb-8 max-w-md">
          Available for creator partnerships. Reach out via the form below to discuss retention goals, AVD targets, and editing workflows.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0a0a] border border-amber-500/30 rounded-2xl p-8 flex flex-col items-center text-center justify-center max-w-xl"
          >
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-neutral-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#737373]">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-[#0a0a0a] border border-[#262626] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 focus:bg-[#121212] transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#737373]">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-[#0a0a0a] border border-[#262626] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 focus:bg-[#121212] transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#737373]">Message</label>
              <textarea 
                id="message" 
                required
                rows={4} 
                className="bg-[#0a0a0a] border border-[#262626] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 focus:bg-[#121212] transition-colors resize-y min-h-[120px]" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed w-max"
            >
              <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </motion.section>

      {/* Social Links */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-4 bg-[#171717] border border-[#262626] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#737373] mb-8">Socials</h2>
        
        <div className="flex flex-col gap-6 w-full">
          <a href="#" className="flex items-center justify-between text-neutral-300 hover:text-amber-500 transition-all group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                 <Instagram className="w-4 h-4" />
               </div>
               <span className="font-semibold text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
             </div>
             <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>

          <a href="#" className="flex items-center justify-between text-neutral-300 hover:text-amber-500 transition-all group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                 <Twitter className="w-4 h-4" />
               </div>
               <span className="font-semibold text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">Twitter</span>
             </div>
             <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>

          <a href="#" className="flex items-center justify-between text-neutral-300 hover:text-amber-500 transition-all group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                 <Linkedin className="w-4 h-4" />
               </div>
               <span className="font-semibold text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
             </div>
             <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
