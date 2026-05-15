import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import WhyChooseUs from './sections/WhyChooseUs';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full bg-luxury-dark text-luxury-softWhite overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-dark">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
