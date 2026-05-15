import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ from, to, duration, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-serif text-luxury-gold mb-2 block">
      {count}{suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const stats = [
    { num: 20, suffix: "+", label: "Years Experience" },
    { num: 5000, suffix: "+", label: "Projects Completed" }
  ];

  return (
    <section className="py-24 relative bg-luxury-dark border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="w-full lg:w-5/12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block"
            >

            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-luxury-softWhite mb-6 leading-tight"
            >
              Why Choose <br />
              <span className="italic font-light text-gradient">TheCraftHouse</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-luxury-softWhite/60 font-light text-lg mb-8 leading-relaxed"
            >
              At TheCraftHouse, we blend traditional craftsmanship with modern luxury to create timeless handcrafted designs that reflect elegance, quality, and artistic perfection in every detail.
            </motion.p>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-6 glass-card rounded-sm"
              >
                <Counter from={0} to={stat.num} duration={2} suffix={stat.suffix} />
                <span className="uppercase tracking-widest text-xs text-luxury-softWhite/50">{stat.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
