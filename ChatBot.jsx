import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { sendMessageToDeepSeek } from '../services/deepseek';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m ReliableBot. How can I assist you today? I can help with deliveries, orders, account issues, and more.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { currentUser } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !currentUser) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    // Prepare conversation history (last 10 messages for context)
    const history = messages.slice(-10).map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await sendMessageToDeepSeek(userMessage, history);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!currentUser) return null;

  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-reliable-primary text-white w-16 h-16 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center justify-center"
        title="Chat with ReliableBot"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-2xl`}></i>
      </button>

      {/* Chatbot modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-reliable-primary text-white p-4 flex items-center space-x-3">
              <i className="fas fa-robot text-xl"></i>
              <div>
                <h3 className="font-semibold">ReliableBot Assistant</h3>
                <p className="text-xs text-blue-200">Online • Here to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-reliable-primary text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none border'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-none border">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reliable-primary focus:border-transparent text-sm"
                  disabled={loading}
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-reliable-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                ReliableBot assists with IT, orders, deliveries & more
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}