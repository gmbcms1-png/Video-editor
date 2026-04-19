import { motion } from 'motion/react';
import { MonitorPlay, Aperture, Scissors } from 'lucide-react';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
      {/* Main Text Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-8 bg-[#171717] border border-[#262626] rounded-[24px] p-6 sm:p-8 md:p-12 flex flex-col justify-center"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#737373] mb-6">About Me</h2>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8 text-white">
          I'm Marcus, a <span className="text-amber-500">YouTube editing specialist</span> maximizing audience retention.
        </h1>
        <div className="space-y-6 text-neutral-300 text-lg">
          <p>
            Editing for the creator economy isn't just about cutting clips—it's about algorithm psychology. I specialize in hooking viewers in the first 3 seconds, crafting high-speed pacing, and ensuring flat retention curves.
          </p>
          <p>
            From high-stakes challenges to engaging video essays, I know exactly what keeps your audience watching. My goal is simple: turn your raw 6-hour VOD or A-roll into a viral, hyper-optimized masterpiece.
          </p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-4 bg-[#171717] border border-[#262626] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between"
      >
        <div className="grid grid-cols-1 gap-8">
          <motion.div whileHover={{ x: 10 }} className="space-y-2 border-b border-neutral-800 pb-8 transition-transform">
            <div className="text-5xl font-bold text-amber-500">250M+</div>
            <div className="text-[12px] uppercase tracking-[2px] text-[#737373] font-semibold">Total Views Generated</div>
          </motion.div>
          <motion.div whileHover={{ x: 10 }} className="space-y-2 border-b border-neutral-800 pb-8 transition-transform">
            <div className="text-5xl font-bold text-amber-500">85%+</div>
            <div className="text-[12px] uppercase tracking-[2px] text-[#737373] font-semibold">Avg. 30s Retention</div>
          </motion.div>
          <motion.div whileHover={{ x: 10 }} className="space-y-2 transition-transform">
            <div className="text-5xl font-bold text-amber-500">12</div>
            <div className="text-[12px] uppercase tracking-[2px] text-[#737373] font-semibold">Top Creator Partners</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Toolkit */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-12 bg-[#171717] border border-[#262626] rounded-[24px] p-6 sm:p-8 md:p-12 mb-8"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#737373] mb-8">The Arsenal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-4">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-amber-500"
            >
              <MonitorPlay className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-bold">Premiere Pro</h3>
            <p className="text-neutral-400 text-sm">Lightning-fast assembly, snappy J-cuts, dynamic zooms, and flawless multi-cam syncing for ultimate workflow speed.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-4">
            <motion.div 
              whileHover={{ rotate: -15, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-amber-500"
            >
              <Aperture className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-bold">DaVinci Resolve</h3>
            <p className="text-neutral-400 text-sm">High-end color grading to make your thumbnails perfectly match the video, giving your brand that million-dollar polish.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-4">
            <motion.div 
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-amber-500"
            >
              <Scissors className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-bold">After Effects</h3>
            <p className="text-neutral-400 text-sm">Creating engaging pop-ups, kinetic typography, map animations, and 3D camera tracking to keep the viewer hooked.</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
