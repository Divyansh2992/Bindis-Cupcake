import React, { useState, useEffect } from 'react';

const Animation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-[300px] h-[300px] bg-white rounded-lg p-4 transform transition-all duration-1000 animate-greeting flex flex-col items-center justify-center">
        {/* GIF Avatar Container */}
        <div className="relative w-40 h-40">
          <img 
            src="Images/avatar/Chefcooking.mp4"  // Replace with your GIF path
            alt="Animated Avatar"
            className="w-full h-full object-contain"
          />

          {/* Speech Bubble */}
          {showText && (
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-speech-bubble">
              <div className="bg-pink-100 rounded-xl px-4 py-2 shadow-lg relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-100 transform rotate-45" />
                <p className="text-lg font-semibold text-gray-800 whitespace-nowrap animate-text-reveal">
                  Welcome!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Welcome Text */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-800 animate-fade-slide">
            Sweet Delights
          </h2>
          <p className="text-sm text-pink-600 font-medium animate-fade-slide delay-200 mt-1">
            Discover our treats
          </p>
        </div>
      </div>
    </div>
  );
};

export default Animation;