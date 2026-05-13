import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

function App() {
  const handleOrderClick = () => {
    alert('Browse our catalog of premium goods! (Demo feature)');
  };

  const handleInfoClick = () => {
    alert('Learn more about Reliable delivery services! (Demo feature)');
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <HeroSection onOrderClick={handleOrderClick} onInfoClick={handleInfoClick} />
        
        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <i className="fas fa-truck text-4xl text-reliable-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Guaranteed delivery within promised timeframes</p>
              </div>
              <div className="text-center p-6">
                <i className="fas fa-shield-alt text-4xl text-reliable-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600">Enterprise-grade security for all transactions</p>
              </div>
              <div className="text-center p-6">
                <i className="fas fa-headset text-4xl text-reliable-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">AI-powered assistance and human support team</p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
        <ChatBot />
      </div>
    </AuthProvider>
  );
}

export default App;