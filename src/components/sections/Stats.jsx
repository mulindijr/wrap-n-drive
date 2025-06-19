const Stats = () => {
    const stats = [
        { value: "500+", label: "Vehicles Wrapped" },
        { value: "15+", label: "Years Experience" },
        { value: "100%", label: "Satisfaction" },
        { value: "50+", label: "Color Options" },
    ];

    return (
        <section className="bg-[#16213e] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl font-bold text-[#e94560] mb-2">{stat.value}</div>
                            <div className="text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;