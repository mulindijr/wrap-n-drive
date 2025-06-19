import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
    const stats = [
        { value: 500, suffix: '+', label: "Vehicles Wrapped" },
        { value: 15, suffix: '+', label: "Years Experience" },
        { value: 100, suffix: '%', label: "Satisfaction" },
        { value: 50, suffix: '+', label: "Color Options" },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="bg-[#16213e] text-white py-12" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl font-bold text-[#e94560] mb-2">
                                {inView && (
                                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                                )}
                            </div>
                            <div className="text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;