import React, { useState, useEffect } from 'react';
import {
  Heart,
  MessageCircle,
  Video,
  Phone,
  Bell,
  Settings,
  X,
  Camera
} from 'lucide-react';

const AppScreenshot = ({ title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById(`screenshot-${title}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [title]);

  return (
    <div
      id={`screenshot-${title}`}
      className={`transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } hover:scale-105 hover:-rotate-2 group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Phone Bezel + UI */}
      <div className="relative w-[260px] h-[530px] mx-auto rounded-[2.5rem] bg-black p-2 shadow-2xl">
        {/* Phone screen */}
        <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-[2rem] overflow-hidden p-4 pt-8 relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />

          {/* Title-specific Screens */}
          {title === 'Home Screen' && (
            <div className="h-full flex flex-col">
              {/* Status Bar */}
              <div className="flex justify-between text-white text-xs mb-6">
                <span>9:41</span>
                <span>100%</span>
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-white mr-2" />
                  <span className="text-white font-bold text-lg">Flamora</span>
                </div>
                <div className="flex space-x-3">
                  <Bell className="w-5 h-5 text-white" />
                  <Settings className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-4 mb-4 flex-1">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Profile"
                  className="w-full h-32 object-cover rounded-xl mb-3"
                />
                <h3 className="font-bold text-gray-800 text-lg">Emma, 25</h3>
                <p className="text-gray-600 text-sm">2 miles away</p>
                <div className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs inline-block mt-2">
                  94% Match
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <button className="bg-red-500 p-3 rounded-full">
                  <X className="w-6 h-6 text-white" />
                </button>
                <button className="bg-green-500 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          )}

          {title === 'Chat Screen' && (
            <div className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center mb-6 bg-white/10 rounded-xl p-3">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50"
                  alt="Chat"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <h3 className="text-white font-bold">Sophie</h3>
                  <p className="text-white/70 text-xs">Online now</p>
                </div>
                <Video className="w-5 h-5 text-white" />
              </div>

              {/* Messages */}
              <div className="flex-1 space-y-3">
                <div className="bg-white/20 rounded-2xl p-3 max-w-[80%]">
                  <p className="text-white text-sm">Hey! How's your day going? 😊</p>
                </div>
                <div className="bg-pink-500 rounded-2xl p-3 max-w-[80%] ml-auto">
                  <p className="text-white text-sm">Great! Just finished yoga class</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-3 max-w-[80%]">
                  <p className="text-white text-sm">That's awesome! I love yoga too 🧘‍♀️</p>
                </div>
              </div>

              {/* Input */}
              <div className="bg-white/20 rounded-full p-2 flex items-center mt-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-white placeholder-white/60 px-3 text-sm"
                />
                <button className="bg-pink-500 p-2 rounded-full">
                  <MessageCircle className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {title === 'Video Call Screen' && (
            <div className="h-full flex flex-col relative">
              {/* Main video */}
              <div className="flex-1 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Video Call"
                  className="w-full h-full object-cover"
                />

                {/* Small self video */}
                <div className="absolute top-4 right-4 w-16 h-20 bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Self"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Call info */}
                <div className="absolute top-4 left-4 bg-black/50 rounded-xl p-2">
                  <p className="text-white text-xs">Maya • 05:23</p>
                </div>
              </div>

              {/* Call Controls */}
              <div className="flex justify-center space-x-6">
                <button className="bg-white/20 p-3 rounded-full">
                  <Camera className="w-6 h-6 text-white" />
                </button>
                <button className="bg-red-500 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white transform rotate-135" />
                </button>
                <button className="bg-white/20 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating icons */}
 

      {/* Caption */}
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppScreenshot;
