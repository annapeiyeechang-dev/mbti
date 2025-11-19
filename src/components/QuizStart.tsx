import React from 'react';
import { Brain, Zap, Target, Sparkles, Star } from 'lucide-react';

interface QuizStartProps {
  onStart: () => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Hand-drawn doodles background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-10 left-10 w-32 h-32 animate-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
        <svg className="absolute top-40 right-20 w-24 h-24 animate-wiggle" viewBox="0 0 100 100">
          <path d="M 10 50 Q 30 10, 50 50 T 90 50" fill="none" stroke="black" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-20 left-1/4 w-40 h-40 animate-float" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="black" strokeWidth="2" strokeDasharray="3,3" />
        </svg>
        <svg className="absolute bottom-40 right-1/3 w-28 h-28 animate-wiggle" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="black" strokeWidth="2" transform="rotate(15 50 50)" />
        </svg>
      </div>

      <div className="max-w-2xl w-full bg-white rounded-lg border-4 border-black p-8 md:p-12 text-center relative z-10 sketch-shadow">
        {/* Decorative corner doodles */}
        <div className="absolute -top-3 -left-3 w-8 h-8">
          <Star className="w-full h-full text-black animate-spin-slow" strokeWidth={2} />
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8">
          <Star className="w-full h-full text-black animate-spin-slow" strokeWidth={2} />
        </div>
        
        <div className="mb-6 flex justify-center gap-6">
          <div className="relative">
            <Brain className="w-16 h-16 text-black animate-bounce" strokeWidth={2} />
            <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4" viewBox="0 0 80 16">
              <ellipse cx="40" cy="8" rx="35" ry="6" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.3" />
            </svg>
          </div>
          <div className="relative">
            <Zap className="w-16 h-16 text-black animate-bounce delay-100" strokeWidth={2} />
            <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4" viewBox="0 0 80 16">
              <ellipse cx="40" cy="8" rx="35" ry="6" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.3" />
            </svg>
          </div>
          <div className="relative">
            <Target className="w-16 h-16 text-black animate-bounce delay-200" strokeWidth={2} />
            <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4" viewBox="0 0 80 16">
              <ellipse cx="40" cy="8" rx="35" ry="6" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.3" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-black mb-4 tracking-tight handwritten">
          Who Are You?
        </h1>
        
        {/* Hand-drawn underline */}
        <svg className="w-48 h-4 mx-auto mb-6" viewBox="0 0 200 16">
          <path d="M 5 8 Q 50 12, 100 8 T 195 8" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M 5 10 Q 50 6, 100 10 T 195 10" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
        
        <p className="text-2xl text-black font-bold mb-8">
          Discover Your Personality Type
        </p>
        
        <div className="bg-white border-3 border-black p-6 mb-8 rounded-lg sketch-border relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4">
            <Sparkles className="w-8 h-8 text-black animate-pulse" strokeWidth={2} />
          </div>
          <h2 className="text-xl font-black mb-4 flex items-center justify-center gap-2">
            What You'll Discover
          </h2>
          <ul className="text-left space-y-3 text-lg font-semibold">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✦</span>
              <span>Your unique personality type</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✦</span>
              <span>Your natural superpowers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✦</span>
              <span>Perfect career matches</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✦</span>
              <span>Fun facts about YOU</span>
            </li>
          </ul>
        </div>
        
        <button
          onClick={onStart}
          className="bg-black text-white text-2xl font-black py-6 px-16 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:-rotate-2 transition-all duration-200 sketch-shadow-hover relative overflow-hidden group"
        >
          <span className="relative z-10">Start Quiz!</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </button>
        
        {/* Decorative doodles around button */}
        <div className="mt-4 flex justify-center gap-2">
          <svg className="w-6 h-6 animate-wiggle" viewBox="0 0 24 24">
            <path d="M 12 2 L 15 10 L 23 12 L 15 14 L 12 22 L 9 14 L 1 12 L 9 10 Z" fill="none" stroke="black" strokeWidth="2" />
          </svg>
          <svg className="w-6 h-6 animate-wiggle delay-100" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="black" />
          </svg>
          <svg className="w-6 h-6 animate-wiggle delay-200" viewBox="0 0 24 24">
            <path d="M 12 2 L 15 10 L 23 12 L 15 14 L 12 22 L 9 14 L 1 12 L 9 10 Z" fill="none" stroke="black" strokeWidth="2" />
          </svg>
        </div>
        
        <p className="text-sm text-black font-bold mt-6">
          32 Questions • 5 Minutes • 100% Accurate
        </p>
      </div>
    </div>
  );
};
