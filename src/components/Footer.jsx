import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center">
          <p className="text-luxury-softWhite/30 text-xs tracking-widest uppercase text-center">
            &copy; {new Date().getFullYear()} TheCraftHouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
