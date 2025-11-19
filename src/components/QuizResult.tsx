import React, { useRef } from 'react';
import { PersonalityResult } from '../types/quiz';
import { Sparkles, TrendingUp, AlertCircle, Briefcase, RotateCcw, Share2, Download, Copy, Twitter, Star } from 'lucide-react';
import html2canvas from 'html2canvas';

interface QuizResultProps {
  result: PersonalityResult;
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, onRestart }) => {
  const resultRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  const handleDownload = async () => {
    if (!resultRef.current) return;
    
    const canvas = await html2canvas(resultRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
    });
    
    const link = document.createElement('a');
    link.download = `personality-${result.type}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const text = `I'm a ${result.type} - ${result.title}! 🎉 Discover your personality type too!`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-20 left-10 w-40 h-40 animate-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-40 h-40 animate-wiggle" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={resultRef} className="bg-white border-4 border-black rounded-lg sketch-shadow overflow-hidden">
          <div className="bg-white border-b-4 border-black p-8 md:p-12 text-center relative">
            {/* Decorative stars */}
            <div className="absolute top-4 left-4">
              <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
            </div>
            <div className="absolute top-4 right-4">
              <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
            </div>
            
            <div className="text-8xl mb-6 animate-bounce">{result.emoji}</div>
            <h1 className="text-5xl md:text-6xl font-black mb-3 handwritten">{result.type}</h1>
            
            {/* Hand-drawn underline */}
            <svg className="w-48 h-4 mx-auto mb-4" viewBox="0 0 200 16">
              <path d="M 5 8 Q 50 12, 100 8 T 195 8" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
            </svg>
            
            <h2 className="text-3xl md:text-4xl font-black">{result.title}</h2>
          </div>

          <div className="p-8 md:p-12 space-y-8 bg-white">
            <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4">
                <Sparkles className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <p className="text-xl font-semibold leading-relaxed text-center">
                {result.description}
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border transform rotate-1">
              <div className="flex items-center mb-4 gap-2">
                <Sparkles className="w-8 h-8 text-black animate-pulse" strokeWidth={2} />
                <h3 className="text-3xl font-black handwritten">Fun Fact</h3>
              </div>
              <p className="text-xl font-semibold italic">"{result.funFact}"</p>
            </div>

            <div>
              <div className="flex items-center mb-6 gap-2">
                <TrendingUp className="w-8 h-8 text-black" strokeWidth={2} />
                <h3 className="text-3xl font-black handwritten">Your Strengths</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="bg-white border-3 border-black p-5 rounded-lg flex items-center transform hover:translate-x-1 hover:-translate-y-1 transition-all sketch-shadow-hover"
                  >
                    <span className="text-black mr-3 text-2xl font-black">✓</span>
                    <span className="font-bold text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6 gap-2">
                <AlertCircle className="w-8 h-8 text-black" strokeWidth={2} />
                <h3 className="text-3xl font-black handwritten">Growth Areas</h3>
              </div>
              <div className="space-y-4">
                {result.weaknesses.map((weakness, index) => (
                  <div
                    key={index}
                    className="bg-white border-3 border-black p-5 rounded-lg flex items-center transform hover:translate-x-1 hover:-translate-y-1 transition-all sketch-shadow-hover"
                  >
                    <span className="text-black mr-3 text-2xl font-black">⚠</span>
                    <span className="font-bold text-sm">{weakness}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6 gap-2">
                <Briefcase className="w-8 h-8 text-black" strokeWidth={2} />
                <h3 className="text-3xl font-black handwritten">Ideal Careers</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {result.careers.map((career, index) => (
                  <div
                    key={index}
                    className="bg-black text-white border-3 border-black p-4 rounded-lg text-center transform hover:scale-105 hover:-rotate-2 transition-all"
                  >
                    <span className="font-black text-xs">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 bg-white p-8 border-4 border-black rounded-lg sketch-shadow">
          <div className="flex items-center justify-center mb-6 gap-2">
            <Share2 className="w-8 h-8 text-black" strokeWidth={2} />
            <h3 className="text-3xl font-black handwritten">Share Your Results</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleDownload}
              className="bg-black text-white font-black py-4 px-8 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:-rotate-2 transition-all flex items-center gap-2 sketch-shadow-hover"
            >
              <Download className="w-5 h-5" strokeWidth={2} />
              Download Image
            </button>
            
            <button
              onClick={handleCopyLink}
              className="bg-black text-white font-black py-4 px-8 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:-rotate-2 transition-all flex items-center gap-2 sketch-shadow-hover"
            >
              <Copy className="w-5 h-5" strokeWidth={2} />
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            
            <button
              onClick={handleShareTwitter}
              className="bg-black text-white font-black py-4 px-8 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:-rotate-2 transition-all flex items-center gap-2 sketch-shadow-hover"
            >
              <Twitter className="w-5 h-5" strokeWidth={2} />
              Share on X
            </button>
          </div>
        </div>

        {/* Restart Button */}
        <div className="text-center mt-8">
          <button
            onClick={onRestart}
            className="bg-black text-white text-2xl font-black py-6 px-12 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:rotate-2 transition-all inline-flex items-center gap-3 sketch-shadow-hover"
          >
            <RotateCcw className="w-6 h-6" strokeWidth={2} />
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};
