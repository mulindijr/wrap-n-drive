import { useState } from 'react';
import { FaCar, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

    const scrollToSection = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold flex items-center">
                            <FaCar className="text-[#e94560] mr-2" />
                            <span>Wrap & Drive</span>
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className={`text-lg font-semibold py-4 hover:underline decoration-[#e94560] decoration-2 underline-offset-[20px] ${activeSection === '#home' ? 'underline decoration-[#e94560] decoration-2 underline-offset-[20px]' : ''}`}>Home</a>
                        <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className={`text-lg font-semibold py-4 hover:underline decoration-[#e94560] decoration-2 underline-offset-[20px] ${activeSection === '#services' ? 'underline decoration-[#e94560] decoration-2 underline-offset-[20px]' : ''}`}>Services</a>
                        <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className={`text-lg font-semibold py-4 hover:underline decoration-[#e94560] decoration-2 underline-offset-[20px] ${activeSection === '#gallery' ? 'underline decoration-[#e94560] decoration-2 underline-offset-[20px]' : ''}`}>Gallery</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className={`text-lg font-semibold py-4 hover:underline decoration-[#e94560] decoration-2 underline-offset-[20px] ${activeSection === '#about' ? 'underline decoration-[#e94560] decoration-2 underline-offset-[20px]' : ''}`}>About</a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className={`text-lg font-semibold py-4 hover:underline decoration-[#e94560] decoration-2 underline-offset-[20px] ${activeSection === '#contact' ? 'underline decoration-[#e94560] decoration-2 underline-offset-[20px]' : ''}`}>Contact</a>
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

                <div className="relative md:hidden">
                    {mobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-gray-800 mt-4 rounded-lg shadow-md z-40 transition-all duration-300 ease-in-out">
                            <div className="flex flex-col space-y-3 px-4 py-3">
                                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className={`block py-2 text-xl ${activeSection === '#home' ? 'text-[#e94560]' : ''}`}>Home</a>
                                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className={`block py-2 text-xl ${activeSection === '#services' ? 'text-[#e94560]' : ''}`}>Services</a>
                                <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className = {`block py-2 text-xl ${activeSection === '#gallery' ? 'text-[#e94560]' : ''}`}>Gallery</a>
                                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className = {`block py-2 text-xl ${activeSection === '#about' ? 'text-[#e94560]' : ''}`}>About</a>
                                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className = {`block py-2 text-xl ${activeSection === '#contact' ? 'text-[#e94560]' : ''}`}>Contact</a>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;