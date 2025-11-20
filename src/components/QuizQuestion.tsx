import React from 'react';
import { Question } from '../types/quiz';
import { ArrowRight, Star } from 'lucide-react';

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
      {/* Background doodles */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-20 left-10 w-32 h-32 animate-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-32 h-32 animate-wiggle" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-black">Question {currentQuestion + 1} of {totalQuestions}</span>
            <span className="text-lg font-black">{Math.round(progress)}%</span>
          </div>
          <div className="h-4 bg-white border-3 border-black rounded-full overflow-hidden relative">
            <div
              className="h-full bg-black transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated stripes */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 20px)',
                animation: 'slide 1s linear infinite'
              }} />
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border-4 border-black rounded-lg p-8 md:p-12 sketch-shadow relative">
          {/* Decorative stars */}
          <div className="absolute -top-3 -left-3">
            <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
          </div>
          <div className="absolute -top-3 -right-3">
            <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center leading-tight">
            {question.text}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(option.value)}
                className="w-full p-6 bg-white border-3 border-black rounded-lg text-left font-bold text-lg hover:bg-black hover:text-white transform hover:translate-x-2 hover:-translate-y-1 transition-all duration-200 flex items-center justify-between group sketch-shadow-hover"
              >
                <span>{option.text}</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" strokeWidth={2} />
              </button>
            ))}
          </div>
        </div>

        {/* Fun encouragement */}
        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-black">
            {currentQuestion < 8 && "You're doing great! Keep going! 🌟"}
            {currentQuestion >= 8 && currentQuestion < 16 && "Halfway there! You've got this! 💪"}
            {currentQuestion >= 16 && currentQuestion < 24 && "Almost done! Stay focused! 🎯"}
            {currentQuestion >= 24 && "Final stretch! You're amazing! 🎉"}
          </p>
        </div>
      </div>
    </div>
  );
};
