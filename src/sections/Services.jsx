import { motion } from 'framer-motion';
import { Scissors, Star, Gem, Crown, Feather, Settings, Award, PenTool } from 'lucide-react';

const servicesList = [
  {
    icon: <PenTool size={32} className="text-luxury-gold" />,
    title: "Hand Embroidery",
    desc: "Intricate traditional and modern embroidery techniques tailored to your design vision."
  },
  {
    icon: <Settings size={32} className="text-luxury-gold" />,
    title: "Fancy Heavy  Choli Latkan",
    desc: "Bespoke handcrafted latkans to elevate the elegance of your bridal and ethnic wear."
  },
  {
    icon: <Gem size={32} className="text-luxury-gold" />,
    title: "Fancy Tassels ( Saree Resa ) ",
    desc: "Handcrafted saree tassels designed with elegance and intricate detailing to add a luxurious finishing touch to every drape."
  },
  {
    icon: <Scissors size={32} className="text-luxury-gold" />,
    title: "Readymade Less & Heavy Work Materials",
    desc: "Premium lace and heavy decorative materials crafted to enhance bridal, designer, and traditional outfits with rich elegance and style."
  },
  {
    icon: <Star size={32} className="text-luxury-gold" />,
    title: "Khat Work",
    desc: "Authentic aari and khat work performed by master craftsmen on traditional frames."
  },
  {
    icon: <Crown size={32} className="text-luxury-gold" />,
    title: "Custom Bridal Handwork",
    desc: "Personalized embellishments to make your bridal ensemble truly one-of-a-kind."
  },
  {
    icon: <Award size={32} className="text-luxury-gold" />,
    title: "Mirror Work ",
    desc: "Beautiful handcrafted mirror work designed with intricate patterns and sparkling details to create a vibrant and traditional ethnic look."
  },
  {
    icon: <Feather size={32} className="text-luxury-gold" />,
    title: "Materials",
    desc: "Beautiful handcrafted mirror work designed with intricate patterns and sparkling details to create a vibrant and traditional ethnic look "
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-[#0d0d0d] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-luxury-softWhite"
          >
            Craft <span className="italic font-light text-gradient">Services</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-card p-8 rounded-sm hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-luxury-gold/10"></div>

              <div className="mb-6 inline-block p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-luxury-softWhite mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-luxury-softWhite/60 text-sm font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
