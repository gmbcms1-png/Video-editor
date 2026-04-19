import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import About from './About';
import Work from './Work';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden md:col-span-12 border border-[#262626] rounded-[24px] min-h-[350px] lg:min-h-[500px]"
        >
          {/* Parallax Background */}
          <motion.div 
            className="absolute inset-x-0 -top-1/4 bottom-0 bg-cover bg-center z-0 opacity-30 mix-blend-luminosity grayscale"
            style={{ 
              y: backgroundY, 
              backgroundImage: 'url("https://images.unsplash.com/photo-1574717024653-61fd2cf6d44d?q=80&w=1200&auto=format&fit=crop")' 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#171717]/90 to-[#262626]/60 z-0" />

          {/* Hero Content */}
          <div className="relative z-10 p-6 md:p-12 h-full flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-4 text-white">
                Crafting high-retention <br className="hidden sm:block"/>
                <span className="text-amber-500">YouTube videos</span> from raw footage.
              </h1>
              <p className="text-neutral-400 max-w-lg text-lg">
                Professional video editor specializing in the creator economy. Turning messy recordings into viral, fast-paced successes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="group px-6 py-3 bg-amber-500 text-black font-bold uppercase tracking-wider rounded-full text-xs flex items-center gap-2 hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                Book a Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/work" className="px-6 py-3 border border-neutral-700 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center text-white backdrop-blur-sm bg-black/20">
                View Showreel
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Mini About */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4 bg-[#171717] border border-[#262626] rounded-[24px] p-6 md:p-8 flex flex-col justify-between gap-6 h-full"
        >
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Quick Intro</h2>
            <p className="text-lg leading-relaxed text-neutral-200">
              I transform complex ideas into high-retention, algorithm-friendly masterpieces. I understand what makes viewers click, and what keeps them watching until the very end.
            </p>
          </div>
          <div className="mt-4">
            <Link to="/about" className="text-amber-500 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
              Read More &rarr;
            </Link>
          </div>
        </motion.section>

        {/* Floating image card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-8 bg-[#171717] border border-[#262626] rounded-[24px] overflow-hidden relative min-h-[250px] shadow-lg hover:shadow-amber-500/10 transition-shadow duration-500 group"
        >
           <img 
              src="https://images.unsplash.com/photo-1581335035253-270ebc03e3e7?q=80&w=1200&auto=format&fit=crop" 
              alt="Editor Portrait" 
              className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-2xl font-bold italic tracking-tighter">
              OPTIMIZING FOR<br/>
              <motion.span 
                className="text-amber-500 text-3xl md:text-5xl inline-block origin-left"
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                RETENTION
              </motion.span>
            </div>
        </motion.section>
      </div>

      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
}
