import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-luxury-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={aboutImg}
                  alt="Artisan hand embroidery"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border border-white/10 m-4 z-20 pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Decorative block behind image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-2/3 aspect-square border border-luxury-gold/30 z-0 hidden md:block"
            ></motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block">The Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-softWhite mb-8 leading-tight">
                Where Art Meets <br />
                <span className="italic font-light text-gradient">Fashion Excellence</span>
              </h2>

              <div className="space-y-6 text-luxury-softWhite/70 font-light text-lg leading-relaxed">
                <p>
                  At TheCraftHouse, we believe that true luxury lies in the details. Founded on the principles of heritage craftsmanship and modern aesthetics, our studio is dedicated to preserving the art of intricate handwork.
                </p>
                <p>
                  Every stitch, bead, and thread is carefully placed by master artisans who have honed their skills over generations. We transform premium fabrics into wearable masterpieces that tell a story of dedication and artistic vision.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 flex items-center gap-8"
              >
                <div>
                  <h4 className="text-3xl font-serif text-luxury-gold mb-1">20+</h4>
                  <p className="text-xs uppercase tracking-widest text-luxury-softWhite/50">Years Legacy</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <h4 className="text-3xl font-serif text-luxury-gold mb-1">5000+</h4>
                  <p className="text-xs uppercase tracking-widest text-luxury-softWhite/50">Bespoke Pieces</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
