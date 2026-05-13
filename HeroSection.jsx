export default function HeroSection({ onOrderClick, onInfoClick }) {
  return (
    <div className="relative bg-gradient-to-br from-reliable-primary to-blue-700 min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hello, Welcome to Reliable
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            A company that is reliable to your goods and can deliver in time
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            We provide premium retail goods with guaranteed delivery. 
            Your satisfaction is our reputation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOrderClick}
              className="bg-reliable-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Order with us - See our goods
            </button>
            <button
              onClick={onInfoClick}
              className="bg-white text-reliable-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-info-circle mr-2"></i>
              More Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}