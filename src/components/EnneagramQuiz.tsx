import React, { useState, useRef } from 'react';
import { ArrowRight, Star, Sparkles, TrendingUp, AlertCircle, Heart, Download, Copy, Twitter, RotateCcw, PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { enneagramQuestions } from '../data/enneagramQuestions';
import { enneagramResults } from '../data/enneagramResults';
import html2canvas from 'html2canvas';

type QuizState = 'start' | 'quiz' | 'result';

export const EnneagramQuiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<number, number>>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  });
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setScores({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 });
  };

  const handleAnswer = (typeScores: Record<number, number>) => {
    const newScores = { ...scores };
    Object.entries(typeScores).forEach(([type, score]) => {
      newScores[parseInt(type)] += score;
    });
    setScores(newScores);

    if (currentQuestionIndex < enneagramQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('result');
    }
  };

  const calculateEnneagramType = () => {
    const sortedTypes = Object.entries(scores)
      .sort(([, a], [, b]) => b - a);
    
    const primaryType = parseInt(sortedTypes[0][0]);
    const secondaryType = parseInt(sortedTypes[1][0]);
    
    // Calculate total score for percentage
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const primaryPercentage = Math.round((scores[primaryType] / totalScore) * 100);
    const secondaryPercentage = Math.round((scores[secondaryType] / totalScore) * 100);
    
    // Prepare pie chart data
    const pieChartData = Object.entries(scores)
      .map(([type, score]) => ({
        name: `Type ${type}`,
        value: Math.round((score / totalScore) * 100),
        type: parseInt(type),
        emoji: enneagramResults[parseInt(type)].emoji
      }))
      .sort((a, b) => b.value - a.value);
    
    return {
      primary: enneagramResults[primaryType],
      secondary: enneagramResults[secondaryType],
      primaryPercentage,
      secondaryPercentage,
      scores: sortedTypes,
      pieChartData
    };
  };

  const handleRestart = () => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setScores({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 });
  };

  const handleDownload = async () => {
    if (!resultRef.current) return;
    
    const canvas = await html2canvas(resultRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
    });
    
    const result = calculateEnneagramType();
    const link = document.createElement('a');
    link.download = `enneagram-type-${result.primary.type}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const result = calculateEnneagramType();
    const text = `I'm ${result.primaryPercentage}% Type ${result.primary.type} (${result.primary.title})! 🎉 Discover your Enneagram type!`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  // Custom label for pie chart
  const renderCustomLabel = (entry: any) => {
    return `${entry.value}%`;
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border-3 border-black p-3 rounded-lg sketch-shadow">
          <p className="font-black text-lg">{payload[0].payload.emoji} {payload[0].name}</p>
          <p className="font-bold text-sm">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  // Start Screen
  if (quizState === 'start') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
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
        </div>

        <div className="max-w-2xl w-full bg-white rounded-lg border-4 border-black p-8 md:p-12 text-center relative z-10 sketch-shadow">
          <div className="absolute -top-3 -left-3 w-8 h-8">
            <Star className="w-full h-full text-black animate-spin-slow" strokeWidth={2} />
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8">
            <Star className="w-full h-full text-black animate-spin-slow" strokeWidth={2} />
          </div>
          
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="text-7xl animate-bounce">🎯</div>
              <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4" viewBox="0 0 80 16">
                <ellipse cx="40" cy="8" rx="35" ry="6" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.3" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-black mb-4 tracking-tight handwritten">
            Enneagram Test
          </h1>
          
          <svg className="w-48 h-4 mx-auto mb-6" viewBox="0 0 200 16">
            <path d="M 5 8 Q 50 12, 100 8 T 195 8" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path d="M 5 10 Q 50 6, 100 10 T 195 10" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </svg>
          
          <p className="text-2xl text-black font-bold mb-8">
            Find Your Core Type & What Really Drives You
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
                <span>Your main Enneagram type (with percentage!)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">✦</span>
                <span>Visual breakdown of all 9 types</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">✦</span>
                <span>What really motivates you deep down</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">✦</span>
                <span>Your hidden fears and how to grow</span>
              </li>
            </ul>
          </div>
          
          <button
            onClick={handleStart}
            className="bg-black text-white text-2xl font-black py-6 px-16 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:-rotate-2 transition-all duration-200 sketch-shadow-hover relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Go!</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          
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
            36 Questions • 7 Minutes • Real Insights
          </p>
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (quizState === 'quiz') {
    const currentQuestion = enneagramQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / enneagramQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-20 left-10 w-32 h-32 animate-float" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
          <svg className="absolute bottom-20 right-10 w-32 h-32 animate-wiggle" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="black" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-3xl w-full relative z-10">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-black">Question {currentQuestionIndex + 1} of {enneagramQuestions.length}</span>
              <span className="text-lg font-black">{Math.round(progress)}%</span>
            </div>
            <div className="h-4 bg-white border-3 border-black rounded-full overflow-hidden relative">
              <div
                className="h-full bg-black transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 20px)',
                  animation: 'slide 1s linear infinite'
                }} />
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black rounded-lg p-8 md:p-12 sketch-shadow relative">
            <div className="absolute -top-3 -left-3">
              <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
            </div>
            <div className="absolute -top-3 -right-3">
              <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center leading-tight">
              {currentQuestion.text}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.scores)}
                  className="w-full p-6 bg-white border-3 border-black rounded-lg text-left font-bold text-lg hover:bg-black hover:text-white transform hover:translate-x-2 hover:-translate-y-1 transition-all duration-200 flex items-center justify-between group sketch-shadow-hover"
                >
                  <span>{option.text}</span>
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" strokeWidth={2} />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-bold text-black">
              {currentQuestionIndex < 9 && "You're doing great! Keep going! 🌟"}
              {currentQuestionIndex >= 9 && currentQuestionIndex < 18 && "Nice! You're getting the hang of this! 💪"}
              {currentQuestionIndex >= 18 && currentQuestionIndex < 27 && "Almost there! Stay honest with yourself! 🎯"}
              {currentQuestionIndex >= 27 && "Final stretch! You've got this! 🎉"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  const result = calculateEnneagramType();

  // Colors for pie chart (grayscale shades for black/white aesthetic)
  const COLORS = ['#000000', '#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc'];

  return (
    <div className="min-h-screen bg-white py-12 px-4 relative overflow-hidden">
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
            <div className="absolute top-4 left-4">
              <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
            </div>
            <div className="absolute top-4 right-4">
              <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
            </div>
            
            <div className="text-8xl mb-6 animate-bounce">{result.primary.emoji}</div>
            
            <div className="inline-block bg-black text-white px-8 py-3 rounded-full mb-4 text-2xl font-black">
              {result.primaryPercentage}% Match!
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-3 handwritten">Type {result.primary.type}</h1>
            
            <svg className="w-48 h-4 mx-auto mb-4" viewBox="0 0 200 16">
              <path d="M 5 8 Q 50 12, 100 8 T 195 8" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
            </svg>
            
            <h2 className="text-3xl md:text-4xl font-black mb-4">{result.primary.title}</h2>
            <p className="text-xl font-bold text-black">"{result.primary.nickname}"</p>
          </div>

          <div className="p-8 md:p-12 space-y-8 bg-white">
            {/* Pie Chart Section */}
            <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4">
                <PieChartIcon className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black mb-6 text-center handwritten">Your Complete Type Breakdown</h3>
              
              <div className="w-full h-80 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={result.pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomLabel}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="#000000"
                      strokeWidth={3}
                    >
                      {result.pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                {result.pieChartData.map((item, index) => (
                  <div
                    key={item.type}
                    className="bg-white border-2 border-black p-3 rounded-lg text-center transform hover:scale-105 transition-all"
                    style={{ backgroundColor: COLORS[index % COLORS.length] + '15' }}
                  >
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <div className="font-black text-sm">Type {item.type}</div>
                    <div className="font-bold text-xs">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4">
                <Sparkles className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <p className="text-xl font-semibold leading-relaxed text-center">
                {result.primary.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border">
                <div className="flex items-center mb-4 gap-2">
                  <Heart className="w-8 h-8 text-black" strokeWidth={2} />
                  <h3 className="text-2xl font-black handwritten">What Drives You</h3>
                </div>
                <p className="font-semibold text-lg">{result.primary.coreMotivation}</p>
              </div>

              <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border">
                <div className="flex items-center mb-4 gap-2">
                  <AlertCircle className="w-8 h-8 text-black" strokeWidth={2} />
                  <h3 className="text-2xl font-black handwritten">Your Fear</h3>
                </div>
                <p className="font-semibold text-lg">{result.primary.coreFear}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6 gap-2">
                <TrendingUp className="w-8 h-8 text-black" strokeWidth={2} />
                <h3 className="text-3xl font-black handwritten">Your Superpowers</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.primary.strengths.map((strength, index) => (
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
                <h3 className="text-3xl font-black handwritten">Your Growth Edges</h3>
              </div>
              <div className="space-y-4">
                {result.primary.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-white border-3 border-black p-5 rounded-lg flex items-center transform hover:translate-x-1 hover:-translate-y-1 transition-all sketch-shadow-hover"
                  >
                    <span className="text-black mr-3 text-2xl font-black">⚠</span>
                    <span className="font-bold text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border transform rotate-1">
              <div className="flex items-center mb-4 gap-2">
                <Sparkles className="w-8 h-8 text-black animate-pulse" strokeWidth={2} />
                <h3 className="text-3xl font-black handwritten">Your Growth Path</h3>
              </div>
              <p className="text-xl font-semibold italic">"{result.primary.growthPath}"</p>
            </div>

            <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border">
              <h3 className="text-2xl font-black mb-4 handwritten">Your Secondary Type</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{result.secondary.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-xl font-black">Type {result.secondary.type} - {result.secondary.title}</p>
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-black">
                      {result.secondaryPercentage}%
                    </span>
                  </div>
                  <p className="font-semibold text-sm">This secondary influence adds extra flavor to your personality!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 border-4 border-black rounded-lg sketch-shadow">
          <div className="flex items-center justify-center mb-6 gap-2">
            <Heart className="w-8 h-8 text-black" strokeWidth={2} />
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

        <div className="text-center mt-8">
          <button
            onClick={handleRestart}
            className="bg-black text-white text-2xl font-black py-6 px-12 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:rotate-2 transition-all inline-flex items-center gap-3 sketch-shadow-hover"
          >
            <RotateCcw className="w-6 h-6" strokeWidth={2} />
            Take Test Again
          </button>
        </div>
      </div>
    </div>
  );
};
