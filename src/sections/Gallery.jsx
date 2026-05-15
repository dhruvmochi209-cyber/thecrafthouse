import { motion } from 'framer-motion';
import galleryImg1 from '../assets/embroidery.png';
import galleryImg2 from '../assets/mirror.jpg';
import galleryImg3 from '../assets/latkan.png';
import galleryImg4 from '../assets/tassless.png';

const images = [
  { src: galleryImg1, title: 'Khat Work', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: galleryImg2, title: 'Mirror Work', span: 'col-span-1 row-span-1' },
  { src: galleryImg3, title: 'Fancy Choli Latkan', span: 'col-span-1 row-span-1' },
  { src: galleryImg4, title: 'Saree Tassles', span: 'col-span-1 md:col-span-2 row-span-1' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-luxury-gold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-softWhite">
            Curated <span className="italic font-light text-gradient">Masterpieces</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`${item.span} relative overflow-hidden group cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif text-luxury-softWhite transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="w-12 h-px bg-luxury-gold mt-3 md:mt-4 transform scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
