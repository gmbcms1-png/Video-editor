import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
      {/* Header section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-12 bg-[#171717] border border-[#262626] rounded-[24px] p-6 sm:p-8 md:p-12 mb-2"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#737373] mb-4">Client Voices</h2>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white max-w-3xl">
          Don't just take my word <br/><span className="text-amber-500">for it.</span>
        </h1>
      </motion.section>

      {/* Testimonial Grid */}
      <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="flex flex-col justify-between bg-[#171717] border border-[#262626] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
          >
            <div className="mb-8">
              <div className="text-amber-500 text-6xl font-serif leading-none h-8 opacity-50">"</div>
              <p className="text-xl md:text-2xl italic text-neutral-300 font-light pr-4">
                {testimonial.text}
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-amber-500 text-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                <p className="text-xs uppercase tracking-widest text-[#737373] mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
