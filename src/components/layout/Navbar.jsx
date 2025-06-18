import { useState } from 'react';
import { FaCar, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold flex items-center">
                            <FaCar className="text-yellow-500 mr-2" />
                            <span>Wrap & Drive</span>
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="nav-link py-4">Home</a>
                        <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="nav-link py-4">Services</a>
                        <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className="nav-link py-4">Gallery</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="nav-link py-4">About</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="nav-link py-4">Contact</a>
                    </div>

                    <div className="md:hidden">
                        <button 
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                          className="text-white focus:outline-none"
                        >
                          {mobileMenuOpen ? <FaTimes className='text-2xl'/> : <FaBars className="text-2xl" />}
                        </button>
                    </div>
                </div>

                <div 
                    className={`mobile-menu md:hidden ${mobileMenuOpen ? 'open' : ''}`}
                    style={{
                        maxHeight: mobileMenuOpen ? '500px' : '0',
                        transition: 'max-height 0.5s ease-out'
                    }}
                >
                    <div className="flex flex-col space-y-3 px-4 py-3">
                        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="block py-2 hover:text-accent">Home</a>
                        <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="block py-2 hover:text-accent">Services</a>
                        <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className="block py-2 hover:text-accent">Gallery</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="block py-2 hover:text-accent">About</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block py-2 hover:text-accent">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;