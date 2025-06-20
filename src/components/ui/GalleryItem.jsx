const GalleryItem = ({ item }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-64 object-cover" 
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-[#1a1a2e]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
        </div>
    );
};

export default GalleryItem;