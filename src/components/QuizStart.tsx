import React from 'react';
import { Brain, Zap, Target, Sparkles } from 'lucide-react';

interface QuizStartProps {
  onStart: () => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-4 border-white rounded-full animate-spin-slow"></div>
      </div>

      <div className="max-w-2xl w-full bg-white rounded-none border-8 border-black p-8 md:p-12 text-center relative z-10 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
        <div className="mb-6 flex justify-center gap-4">
          <Brain className="w-16 h-16 text-black animate-bounce" />
          <Zap className="w-16 h-16 text-black animate-bounce delay-100" />
          <Target className="w-16 h-16 text-black animate-bounce delay-200" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-black mb-4 tracking-tight">
          WHO ARE YOU?
        </h1>
        
        <div className="w-32 h-2 bg-black mx-auto mb-6"></div>
        
        <p className="text-2xl text-black font-bold mb-8 uppercase tracking-wide">
          Discover Your Personality Type
        </p>
        
        <div className="bg-black text-white p-6 mb-8 border-4 border-black transform -rotate-1">
          <h2 className="text-xl font-black mb-4 uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            What You'll Discover
            <Sparkles className="w-6 h-6" />
          </h2>
          <ul className="text-left space-y-3 text-lg font-bold">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">→</span>
              <span>Your unique personality type</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">→</span>
              <span>Your natural superpowers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">→</span>
              <span>Perfect career matches</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">→</span>
              <span>Fun facts about YOU</span>
            </li>
          </ul>
        </div>
        
        <button
          onClick={onStart}
          className="bg-black text-white text-2xl font-black py-6 px-16 border-4 border-black hover:bg-white hover:text-black transform hover:scale-105 hover:rotate-2 transition-all duration-200 uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          START NOW!
        </button>
        
        <p className="text-sm text-black font-bold mt-6 uppercase tracking-wide">
          12 Questions • 2 Minutes • 100% Fun
        </p>
      </div>
    </div>
  );
};
