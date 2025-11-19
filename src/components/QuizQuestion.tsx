import React from 'react';
import { Question } from '../types/quiz';
import { ArrowRight, Circle, Heart } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (value: string) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating doodles */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <svg
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
            viewBox="0 0 100 100"
          >
            {i % 3 === 0 && <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />}
            {i % 3 === 1 && <path d="M 20 50 Q 50 20, 80 50 T 80 80" fill="none" stroke="black" strokeWidth="2" />}
            {i % 3 === 2 && <polygon points="50,10 90,90 10,90" fill="none" stroke="black" strokeWidth="2" />}
          </svg>
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="bg-white p-8 md:p-12 border-4 border-black rounded-lg sketch-shadow">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-black flex items-center gap-2">
                <Heart className="w-6 h-6 animate-pulse" strokeWidth={2} />
                Question {currentQuestion + 1}/{totalQuestions}
              </span>
              <span className="text-xl font-black">
                {Math.round(progress)}%
              </span>
            </div>
            
            {/* Hand-drawn progress bar */}
            <div className="relative">
              <svg className="w-full h-8" viewBox="0 0 400 32">
                <path d="M 5 16 L 395 16" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M 5 16 L 395 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeDasharray="5,5" opacity="0.3" />
                <path 
                  d={`M 5 16 L ${5 + (390 * progress / 100)} 16`} 
                  stroke="black" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
                {/* Progress indicator circles */}
                {[...Array(totalQuestions)].map((_, i) => (
                  <circle
                    key={i}
                    cx={5 + (390 / (totalQuestions - 1)) * i}
                    cy="16"
                    r="6"
                    fill={i <= currentQuestion ? "black" : "white"}
                    stroke="black"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-10 leading-tight handwritten">
            {question.text}
          </h2>

          <div className="space-y-5">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(option.value)}
                className="w-full text-left p-6 bg-white border-3 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-200 group transform hover:translate-x-1 hover:-translate-y-1 sketch-shadow-hover relative overflow-hidden"
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-xl font-bold">
                    {option.text}
                  </span>
                  <ArrowRight className="w-8 h-8 transform group-hover:translate-x-2 transition-all" strokeWidth={2} />
                </div>
                
                {/* Decorative corner */}
                <svg className="absolute top-2 right-2 w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                  <path d="M 2 2 L 22 2 L 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
