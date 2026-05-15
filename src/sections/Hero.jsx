import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
// Note: using local images that were copied via script
import heroBg from '../assets/hero_background_1778246977193.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBg}
          alt="Luxury Craft Background"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/30 via-transparent to-luxury-dark"></div>

        {/* Subtle animated gradient glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden mb-6"
        >

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-luxury-softWhite leading-tight mb-8"
        >
          Luxury Handmade Shop <br />
          <span className="text-gradient italic font-light">TheCraftHouse</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto text-luxury-softWhite/70 text-lg md:text-xl font-light mb-12 leading-relaxed"
        >
          Elevating fashion through meticulous hand embroidery, bespoke bridal handwork, and artisanal detailing that defines modern luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="#gallery"
            className="group relative px-8 py-4 bg-luxury-gold text-luxury-dark font-medium tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection
              <ArrowDown size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
          </a>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-luxury-softWhite/50">Swipe now</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-luxury-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
