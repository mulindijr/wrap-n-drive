import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-8 rounded-lg shadow-md bg-gradient-to-br from-white to-gray-100 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-[#1a1a2e]">{testimonial.name}</h4>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{testimonial.comment}</p>
      <div className="text-sm text-gray-500">{testimonial.service}</div>
    </div>
  );
};

export default TestimonialCard;