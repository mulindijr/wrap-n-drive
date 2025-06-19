import { FaPaintRoller, FaShieldAlt, FaSpa, FaSun, FaCarSide, FaBolt, FaCheck } from 'react-icons/fa';

const iconComponents = { FaPaintRoller, FaShieldAlt, FaSpa, FaSun, FaCarSide, FaBolt };

const ServiceCard = ({ service }) => {
  const IconComponent = iconComponents[service.icon];
  
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:transform hover:-translate-y-2.5 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-[#e94560] text-white p-3 rounded-full mr-4">
            <IconComponent className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-[#1a1a2e]">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="mb-4 text-gray-600">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <FaCheck className="text-[#e94560] mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;