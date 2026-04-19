import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import CustomCursor from './CustomCursor';

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black py-4 md:py-8 px-4 md:px-8 overflow-x-hidden relative">
      <CustomCursor />
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-6 relative">
        
        {/* Navigation Wrapper */}
        <nav className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-[#171717] border border-[#262626] rounded-[20px] sm:rounded-[24px] relative z-50">
          <Link to="/" onClick={closeMenu} className="font-bold text-lg sm:text-xl tracking-tighter italic flex items-center gap-3 hover:opacity-80 transition-opacity">
             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black not-italic shrink-0">V</div>
             VELOCITY<span className="text-amber-500">EDITS</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-neutral-400">
            <Link to="/" className={`${isActive('/') ? 'text-amber-500' : 'hover:text-white'} transition-colors`}>Home</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-amber-500' : 'hover:text-white'} transition-colors`}>About</Link>
            <Link to="/work" className={`${isActive('/work') ? 'text-amber-500' : 'hover:text-white'} transition-colors`}>Work</Link>
            <Link to="/testimonials" className={`${isActive('/testimonials') ? 'text-amber-500' : 'hover:text-white'} transition-colors`}>Testimonials</Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-amber-500' : 'hover:text-white'} transition-colors`}>Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[70px] left-0 right-0 bg-[#171717] border border-[#262626] p-6 rounded-[20px] z-40 md:hidden shadow-2xl flex flex-col gap-6"
            >
              <Link to="/" onClick={closeMenu} className={`text-lg font-bold uppercase tracking-widest ${isActive('/') ? 'text-amber-500' : 'text-white'}`}>Home</Link>
              <Link to="/about" onClick={closeMenu} className={`text-lg font-bold uppercase tracking-widest ${isActive('/about') ? 'text-amber-500' : 'text-white'}`}>About</Link>
              <Link to="/work" onClick={closeMenu} className={`text-lg font-bold uppercase tracking-widest ${isActive('/work') ? 'text-amber-500' : 'text-white'}`}>Work</Link>
              <Link to="/testimonials" onClick={closeMenu} className={`text-lg font-bold uppercase tracking-widest ${isActive('/testimonials') ? 'text-amber-500' : 'text-white'}`}>Testimonials</Link>
              <Link to="/contact" onClick={closeMenu} className={`text-lg font-bold uppercase tracking-widest ${isActive('/contact') ? 'text-amber-500' : 'text-white'}`}>Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
