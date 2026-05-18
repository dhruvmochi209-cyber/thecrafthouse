import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <a href="https://www.google.com/maps/search/?api=1&query=Om+Complex,+Main+Bajar,+Patan,+Gujarat" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer">
                <div className="p-5 border border-white/10 rounded-full group-hover:border-luxury-gold transition-colors mb-6">
                  <MapPin className="text-luxury-gold" size={32} />
                </div>
                <div>
                  <h4 className="font-serif text-luxury-softWhite mb-2 text-xl">Shop Location</h4>
                  <p className="text-luxury-softWhite/50 font-light group-hover:text-luxury-gold transition-colors">17, 2nd floor, Om Complex , < br /> Main Bajar  <br />Patan-384265, Gujarat, India</p>
                </div>
              </a>

              <a href="tel:+919723375721" className="flex flex-col items-center group cursor-pointer">
                <div className="p-5 border border-white/10 rounded-full group-hover:border-luxury-gold transition-colors mb-6">
                  <Phone className="text-luxury-gold" size={32} />
                </div>
                <div>
                  <h4 className="font-serif text-luxury-softWhite mb-2 text-xl">Direct Line</h4>
                  <p className="text-luxury-softWhite/50 font-light group-hover:text-luxury-gold transition-colors">+91 9723375721 , +91 9723572181 <br /> Vaghela Mittal</p>
                </div>
              </a>

              <a href="mailto:thecrafthouse@gmail.com" className="flex flex-col items-center group cursor-pointer">
                <div className="p-5 border border-white/10 rounded-full group-hover:border-luxury-gold transition-colors mb-6">
                  <Mail className="text-luxury-gold" size={32} />
                </div>
                <div>
                  <h4 className="font-serif text-luxury-softWhite mb-2 text-xl">Email Inquiry</h4>
                  <p className="text-luxury-softWhite/50 font-light group-hover:text-luxury-gold transition-colors">thecrafthouse@gmail.com</p>
                </div>
              </a>

              <a href="https://www.instagram.com/_.thecrafthouse__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer">
                <div className="p-5 border border-white/10 rounded-full group-hover:border-luxury-gold transition-colors mb-6">
                  <InstagramIcon className="text-luxury-gold" size={32} />
                </div>
                <div>
                  <h4 className="font-serif text-luxury-softWhite mb-2 text-xl">Instagram</h4>
                  <p className="text-luxury-softWhite/50 font-light group-hover:text-luxury-gold transition-colors">@_.thecrafthouse__</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
