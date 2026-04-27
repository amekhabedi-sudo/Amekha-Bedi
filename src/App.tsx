/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, ArrowRight, Menu, X, ArrowUpRight, Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from './constants';
import { PortfolioItem } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = useMemo(() => ['All', ...new Set(PORTFOLIO_ITEMS.map(item => item.category))], []);

  const filteredItems = useMemo(() => 
    activeCategory === 'All' 
      ? PORTFOLIO_ITEMS.filter(item => !item.excludeFromAll)
      : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory)
  , [activeCategory]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-powder-blue/30 overflow-x-hidden bg-bg-primary">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md px-6 md:px-12 py-6 h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-serif font-bold tracking-tight text-navy-deep"
          >
            Amekha Bedi
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#works" className="nav-link">Works</a>
            <a href="#about" className="nav-link">About</a>
            <a href="https://www.linkedin.com/in/amekha-bedi-7ab9943b5/" target="_blank" rel="noopener noreferrer" className="nav-link">
              LinkedIn
            </a>
            <a 
              href="#works"
              className="border border-navy-deep px-6 py-2 text-xs font-bold text-navy-deep uppercase tracking-widest hover:bg-powder-blue hover:-translate-y-[2px] transition-all duration-500 focus:ring-2 focus:ring-powder-blue outline-none"
            >
              Explore My Work
            </a>
          </div>

          <button className="md:hidden text-navy-deep focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-bg-primary border-b border-steel-blue/10 px-6 py-8 flex flex-col space-y-6"
            >
              <a href="#works" onClick={toggleMenu} className="text-2xl font-serif text-navy-deep font-bold">Works</a>
              <a href="#about" onClick={toggleMenu} className="text-2xl font-serif text-navy-deep font-bold">About</a>
              <a href="https://www.linkedin.com/in/amekha-bedi-7ab9943b5/" onClick={toggleMenu} className="text-2xl font-serif text-navy-deep font-bold">
                LinkedIn
              </a>
              <a 
                href="#works" 
                onClick={toggleMenu} 
                className="w-full py-4 border border-navy-deep text-navy-deep font-bold uppercase tracking-widest text-xs text-center hover:bg-powder-blue transition-colors"
              >
                Explore My Work
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="hairline mx-6 md:mx-12 mt-20"></div>

      <main className="flex-grow pt-8">
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-5/12 space-y-6 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-steel-blue uppercase tracking-widest"
            >
              Visual Designer & Student
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-deep leading-tight tracking-tight"
            >
              Observing the World Through Visual Expression.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-slate-dark max-w-sm"
            >
              I’m a visually driven student capturing fleeting moments that might otherwise go unnoticed—whether through drawings, photographs, or paintings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <a 
                href="#works"
                className="bg-navy-deep text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-powder-blue hover:text-navy-deep hover:-translate-y-[3px] transition-all duration-500 focus:ring-2 focus:ring-powder-blue focus:ring-offset-2 outline-none flex items-center justify-center"
              >
                View My Work
              </a>
              <a href="#about" className="text-sm text-navy-deep font-bold border-b-2 border-powder-blue pb-1 uppercase tracking-widest hover:border-navy-deep transition-colors duration-300">
                My Narrative
              </a>
            </motion.div>

            <div className="mt-12 flex gap-8 items-center border-t border-steel-blue/10 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl text-navy-deep font-serif">14+</span>
                <span className="text-[10px] uppercase tracking-tighter text-steel-blue font-bold">Project Series</span>
              </div>
              <div className="h-8 w-px bg-steel-blue/30"></div>
              <div className="flex flex-col">
                <span className="text-2xl text-navy-deep font-serif">03</span>
                <span className="text-[10px] uppercase tracking-tighter text-steel-blue font-bold">Creative Mediums</span>
              </div>
              <div className="h-8 w-px bg-steel-blue/30"></div>
              <div className="flex flex-col">
                <span className="text-2xl text-navy-deep font-serif">2024</span>
                <span className="text-[10px] uppercase tracking-tighter text-steel-blue font-bold">Current Exhibit</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 columns-2 gap-4 space-y-4">
            {PORTFOLIO_ITEMS.slice(0, 4).map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => item.videoUrl && window.open(item.videoUrl, '_blank')}
                className={`gallery-item relative bg-bg-secondary overflow-hidden group break-inside-avoid ${item.videoUrl ? 'cursor-pointer' : ''}`}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.altText || item.title} 
                  className={`w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110 ${item.category.includes('AI') ? '' : 'grayscale'}`}
                />
                <div className="overlay">
                  <span className="font-serif text-lg mb-1">{item.title}</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">{item.category}</span>
                  {item.videoUrl && (
                    <Play className="mt-2 w-5 h-5 text-white fill-current" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-bg-secondary py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[0.5px] bg-steel-blue" />
              <span className="uppercase text-xs tracking-[0.3em] font-bold text-steel-blue">About Amekha</span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl font-serif text-navy-deep leading-snug">
                I’m someone who naturally notices the little things like light hitting a wall a certain way, expressions that last only a second, moments most people move past. I’ve always felt the need to hold onto those details, and design became the way I do that.
              </p>
              <p className="text-lg text-slate-dark/80 leading-loose">
                I want to work across different mediums drawing, photography, and AI, depending on what feels right for the idea. Some things are easier to sketch, some are better captured as they are, and some need to be built from scratch. I like experimenting and figuring out what works rather than sticking to one style.
                <br /><br />
                This portfolio contains a collection of artwork done by me, offering a glimpse into the way I see and document the world around me.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-navy-deep">Core Gallery</h2>
              <p className="text-slate-dark/60 max-w-xs font-bold text-[10px] uppercase tracking-widest">Filtered visual explorations</p>
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-10 border-b-[0.5px] border-steel-blue/20 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-[11px] uppercase tracking-[0.2em] transition-all relative pb-2 font-bold ${
                    activeCategory === category 
                      ? 'text-navy-deep' 
                      : 'text-steel-blue/50 hover:text-navy-deep'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div 
                      layoutId="activeFilter" 
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-navy-deep" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => item.videoUrl && window.open(item.videoUrl, '_blank')}
                  className={`gallery-item relative bg-bg-secondary overflow-hidden group break-inside-avoid ${item.videoUrl ? 'cursor-pointer' : ''}`}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.altText || item.title} 
                    className={`w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110 ${item.category.includes('AI') ? '' : 'grayscale'}`}
                  />
                  <div className="overlay">
                    <span className="font-serif text-xl mb-1">{item.title}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold">{item.category}</span>
                    {item.videoUrl && (
                      <div className="mt-4 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-current" />
                      </div>
                    )}
                    <p className="mt-4 text-xs italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-navy-deep tracking-tight">Let’s Create Something Meaningful.</h2>
          <p className="text-xs font-bold text-steel-blue uppercase tracking-[0.3em]">
            Open to collaborations, creative projects, and visual storytelling opportunities.
          </p>
          <a 
            href="mailto:amekhabedi@gmail.com"
            className="bg-navy-deep text-white px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-powder-blue hover:text-navy-deep hover:-translate-y-[3px] transition-all duration-500 focus:ring-2 focus:ring-powder-blue focus:ring-offset-2 outline-none inline-block mx-auto"
          >
            Get In Touch
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-16 px-6 md:px-12 flex justify-between items-center hairline bg-bg-primary">
        <div className="text-[10px] text-steel-blue uppercase tracking-widest font-bold">Open to collaborations, projects & visual storytelling</div>
        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/amekha-bedi-7ab9943b5/" target="_blank" rel="noopener noreferrer" className="text-xs text-navy-deep font-bold hover:text-steel-blue transition-colors uppercase tracking-widest">
            LinkedIn
          </a>
          <span className="text-[10px] text-steel-blue italic font-serif tracking-wider">
            © Amekha Bedi
          </span>
        </div>
      </footer>
    </div>
  );
}

