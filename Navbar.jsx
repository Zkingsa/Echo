import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const { currentUser, logout } = useAuth();

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <i className="fas fa-shield-check text-3xl text-reliable-primary"></i>
              <span className="text-2xl font-bold text-reliable-dark">Reliable</span>
              <span className="text-xs bg-reliable-accent text-white px-2 py-1 rounded-full">trusted delivery</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">
                    <i className="fas fa-user-circle mr-1"></i>
                    {currentUser.email}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="bg-reliable-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition text-sm"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthClick('register')}
                    className="bg-reliable-accent text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition text-sm"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showAuth && (
        <AuthModal 
          mode={authMode} 
          onClose={() => setShowAuth(false)} 
          onSwitchMode={setAuthMode}
        />
      )}
    </>
  );
}