import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import { PORTFOLIO_VIDEOS } from '../data';

const CATEGORIES = ['All', 'Challenge', 'Gaming', 'Vlog', 'Tech Review', 'Video Essay'];

export default function Work() {
  const [filter, setFilter] = useState('All');
  
  const filteredVideos = PORTFOLIO_VIDEOS.filter(video => 
    filter === 'All' || video.category === filter
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
      {/* Header section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-12 bg-gradient-to-br from-[#171717] to-[#262626] border border-[#262626] rounded-[24px] p-6 sm:p-8 md:p-12 mb-2"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 text-white">
          Videos that <span className="text-amber-500">keep them watching.</span>
        </h1>
        <p className="text-neutral-400 max-w-2xl text-lg">
          A curated selection of high-performing YouTube videos. Millions of views, flat retention curves. Let the metrics speak for themselves.
        </p>
      </motion.section>

      {/* Category Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-12 flex flex-wrap gap-2 mb-2"
      >
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors border ${
              filter === category 
                ? 'bg-amber-500 text-black border-amber-500' 
                : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Video Grid */}
      <motion.div layout className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredVideos.map((video, index) => (
            <motion.div 
              key={video.id} 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[16px] overflow-hidden bg-[#262626]">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 group-hover:bg-amber-500/80 transition-all duration-300">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="px-1">
                <div className="text-sm font-bold uppercase tracking-wide text-white">{video.title}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-amber-500 mt-1">{video.category}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
