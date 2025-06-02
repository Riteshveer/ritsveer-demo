
const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      <div className="text-center animate-fade-in">
        <div className="text-xl md:text-2xl font-bold text-gray-700 mb-2">10+</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider">PROJECTS</div>
      </div>
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="text-xl md:text-2xl font-bold text-gray-700 mb-2">15+</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider">ML MODELS</div>
      </div>
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-xl md:text-2xl font-bold text-gray-700 mb-2">5+</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider">HACKATHONS</div>
      </div>
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="text-xl md:text-2xl font-bold text-gray-700 mb-2">3+</div>
        <div className="text-gray-500 text-xs uppercase tracking-wider">TECHNOLOGIES</div>
      </div>
    </div>
  );
};

export default StatisticsSection;
