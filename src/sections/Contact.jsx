import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-luxury-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-softWhite mb-8">
              Start Your <span className="italic font-light text-gradient">Masterpiece</span>
            </h2>
            <p className="text-luxury-softWhite/60 font-light mb-16 max-w-5xl mx-auto text-lg">
              For any inquiries, custom design requests, or business details, feel free to contact our shop — always ready to help you with the perfect handcrafted solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center group">
                <div className="p-5 border border-white/10 rounded-full group-hover:border-luxury-gold transition-colors mb-6">
                  <MapPin className="text-luxury-gold" size={32} />
                </div>
                <div>
                  <h4 className="font-serif text-luxury-softWhite mb-2 text-xl">Shop Location</h4>
                  <p className="text-luxury-softWhite/50 font-light">17, 2nd floor, Om Complex , < br /> Main Bajar  <br />Patan-384265, Gujarat, India</p>
                </div>
              </div>

              <div className="flex flex-col items-center group">
                <div className="p-5 border border-white/10 rounded-full group-hover:border-luxury-gold transition-colors mb-6">
                  <Phone className="text-luxury-gold" size={32} />
                </div>
                <div>
                  <h4 className="font-serif text-luxury-softWhite mb-2 text-xl">Direct Line</h4>
                  <p className="text-luxury-softWhite/50 font-light">+91 9723375721 , +91 9664845190 <br /> Vaghela Mittal</p>
                </div>
              </div>

              <div className="flex flex-col items-center group">
                <div className="p-5 border border-white/10 rounded-full group-hover:border-luxury-gold transition-colors mb-6">
                  <Mail className="text-luxury-gold" size={32} />
                </div>
                <div>
                  <h4 className="font-serif text-luxury-softWhite mb-2 text-xl">Email Inquiry</h4>
                  <p className="text-luxury-softWhite/50 font-light">thecrafthouse@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
