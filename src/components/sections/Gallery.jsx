import GalleryItem from '../ui/GalleryItem';
import galleryItems from '../data/gallery';

const Gallery = () => {

    return (
        <section id="gallery" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Work Gallery</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Browse through our portfolio of completed projects to see the quality of our work and get inspiration for your own vehicle.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                      <GalleryItem key={index} item={item} />
                    ))}
                </div>
          
                <div className="text-center mt-12">
                    <a 
                      href="#contact" 
                      className="bg-[#e94560] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
                    >
                      Book Your Transformation Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;