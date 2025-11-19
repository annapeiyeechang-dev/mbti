import React, { useRef } from 'react';
import { PersonalityResult } from '../types/quiz';
import { Sparkles, TrendingUp, AlertCircle, Briefcase, RotateCcw, Share2, Download, Copy, Twitter } from 'lucide-react';
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
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div ref={resultRef} className="bg-black border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
          <div className="bg-white border-8 border-black p-8 md:p-12 text-center">
            <div className="text-8xl mb-6 animate-bounce">{result.emoji}</div>
            <h1 className="text-5xl md:text-6xl font-black mb-3 uppercase tracking-tight">{result.type}</h1>
            <div className="w-32 h-2 bg-black mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide">{result.title}</h2>
          </div>

          <div className="p-8 md:p-12 space-y-8 bg-white">
            <div className="bg-black text-white p-6 border-4 border-black transform -rotate-1">
              <p className="text-xl font-bold leading-relaxed uppercase">
                {result.description}
              </p>
            </div>

            <div className="bg-white border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center mb-4 gap-2">
                <Sparkles className="w-8 h-8 text-black" />
                <h3 className="text-3xl font-black uppercase">Fun Fact</h3>
              </div>
              <p className="text-xl font-bold italic">"{result.funFact}"</p>
            </div>

            <div>
              <div className="flex items-center mb-6 gap-2">
                <TrendingUp className="w-8 h-8 text-black" />
                <h3 className="text-3xl font-black uppercase">Your Strengths</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-black p-5 flex items-center transform hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <span className="text-black mr-3 text-2xl font-black">✓</span>
                    <span className="font-bold uppercase text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6 gap-2">
                <AlertCircle className="w-8 h-8 text-black" />
                <h3 className="text-3xl font-black uppercase">Growth Areas</h3>
              </div>
              <div className="space-y-4">
                {result.weaknesses.map((weakness, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-black p-5 flex items-center transform hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <span className="text-black mr-3 text-2xl font-black">⚠</span>
                    <span className="font-bold uppercase text-sm">{weakness}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6 gap-2">
                <Briefcase className="w-8 h-8 text-black" />
                <h3 className="text-3xl font-black uppercase">Ideal Careers</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {result.careers.map((career, index) => (
                  <div
                    key={index}
                    className="bg-black text-white border-4 border-black p-4 text-center transform hover:scale-105 transition-all"
                  >
                    <span className="font-black uppercase text-xs">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 bg-black text-white p-8 border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-center mb-6 gap-2">
            <Share2 className="w-8 h-8" />
            <h3 className="text-3xl font-black uppercase">Share Your Results</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleDownload}
              className="bg-white text-black font-black py-4 px-8 border-4 border-white hover:bg-black hover:text-white transform hover:scale-105 transition-all uppercase tracking-wide flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]"
            >
              <Download className="w-5 h-5" />
              Download Image
            </button>
            
            <button
              onClick={handleCopyLink}
              className="bg-white text-black font-black py-4 px-8 border-4 border-white hover:bg-black hover:text-white transform hover:scale-105 transition-all uppercase tracking-wide flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]"
            >
              <Copy className="w-5 h-5" />
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            
            <button
              onClick={handleShareTwitter}
              className="bg-white text-black font-black py-4 px-8 border-4 border-white hover:bg-black hover:text-white transform hover:scale-105 transition-all uppercase tracking-wide flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]"
            >
              <Twitter className="w-5 h-5" />
              Share on X
            </button>
          </div>
        </div>

        {/* Restart Button */}
        <div className="text-center mt-8">
          <button
            onClick={onRestart}
            className="bg-black text-white text-2xl font-black py-6 px-12 border-4 border-black hover:bg-white hover:text-black transform hover:scale-105 hover:rotate-2 transition-all uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.7)] inline-flex items-center gap-3"
          >
            <RotateCcw className="w-6 h-6" />
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};
