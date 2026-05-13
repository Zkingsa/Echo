export default function Footer() {
  return (
    <footer className="bg-reliable-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-shield-check text-2xl text-reliable-accent"></i>
              <span className="text-xl font-bold">Reliable</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for premium retail goods and timely delivery services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">Delivery Info</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><i className="fas fa-envelope mr-2"></i> support@relaible.com</li>
              <li><i className="fas fa-phone mr-2"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-map-marker-alt mr-2"></i> 123 Commerce St, Digital City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Reliable. All rights reserved. Project Echo</p>
        </div>
      </div>
    </footer>
  );
}