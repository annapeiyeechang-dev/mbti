import React from 'react';
import { Question } from '../types/quiz';
import { ArrowRight, Circle } from 'lucide-react';

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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <Circle
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="bg-black text-white p-8 md:p-12 border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,255,255,0.3)]">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-black uppercase tracking-wider">
                Question {currentQuestion + 1}/{totalQuestions}
              </span>
              <span className="text-xl font-black">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-white h-4 border-4 border-white overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-10 leading-tight uppercase">
            {question.text}
          </h2>

          <div className="space-y-5">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(option.value)}
                className="w-full text-left p-6 bg-white text-black border-4 border-white hover:bg-black hover:text-white transition-all duration-200 group transform hover:translate-x-2 hover:translate-y-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.7)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold uppercase tracking-wide">
                    {option.text}
                  </span>
                  <ArrowRight className="w-8 h-8 transform group-hover:translate-x-2 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
