import heroImage from '../../assets/images/hero.jpg';

const Hero = () => {
    return (
        <section 
            id="home"
            className="flex items-center justify-center text-white bg-cover bg-center min-h-[90vh]"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`
            }}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Ride</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Premium automotive customization services including vinyl wraps, PPF, ceramic coating, detailing, and window tinting.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href="#contact" 
                        className="bg-[#e94560] hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
                    >
                        Get a Quote
                    </a>
                    <a 
                        href="#services" 
                        className="bg-transparent text-white hover:text-gray-900 border-2 border-white hover:bg-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
                    >
                        Our Services
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;