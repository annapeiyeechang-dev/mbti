import React, { useState, useRef } from 'react';
import { Plus, Trash2, Heart, Sparkles, TrendingUp, AlertCircle, Download, Copy, Twitter, Star } from 'lucide-react';
import { personalityResults } from '../data/results';
import { calculateCompatibility } from '../utils/compatibility';
import html2canvas from 'html2canvas';

type RelationshipType = 'couple' | 'friends' | 'family' | 'coworker' | 'boss';

const mbtiTypes = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

const relationshipTypes: { value: RelationshipType; label: string; emoji: string }[] = [
  { value: 'couple', label: 'Romantic Couple', emoji: '💑' },
  { value: 'friends', label: 'Friends', emoji: '👯' },
  { value: 'family', label: 'Family', emoji: '👨‍👩‍👧‍👦' },
  { value: 'coworker', label: 'Coworkers', emoji: '💼' },
  { value: 'boss', label: 'Boss & Employee', emoji: '👔' }
];

export const CompatibilityAnalyzer: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['', '']);
  const [relationshipType, setRelationshipType] = useState<RelationshipType>('couple');
  const [showResults, setShowResults] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const addPersonality = () => {
    if (selectedTypes.length < 6) {
      setSelectedTypes([...selectedTypes, '']);
    }
  };

  const removePersonality = (index: number) => {
    if (selectedTypes.length > 2) {
      setSelectedTypes(selectedTypes.filter((_, i) => i !== index));
    }
  };

  const updatePersonality = (index: number, value: string) => {
    const newTypes = [...selectedTypes];
    newTypes[index] = value;
    setSelectedTypes(newTypes);
  };

  const canAnalyze = selectedTypes.every(type => type !== '') && selectedTypes.length >= 2;

  const handleAnalyze = () => {
    if (canAnalyze) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedTypes(['', '']);
    setRelationshipType('couple');
    setShowResults(false);
  };

  const handleDownload = async () => {
    if (!resultRef.current) return;
    
    const canvas = await html2canvas(resultRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
    });
    
    const link = document.createElement('a');
    link.download = `compatibility-${selectedTypes.join('-')}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const text = `Check out our MBTI compatibility analysis! 🎉`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  if (showResults) {
    const compatibility = calculateCompatibility(selectedTypes, relationshipType);
    
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
              <div className="absolute top-4 left-4">
                <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
              </div>
              <div className="absolute top-4 right-4">
                <Star className="w-8 h-8 text-black animate-spin-slow" strokeWidth={2} />
              </div>
              
              <div className="text-8xl mb-6 animate-bounce">
                {relationshipTypes.find(r => r.value === relationshipType)?.emoji}
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-3 handwritten">
                {relationshipTypes.find(r => r.value === relationshipType)?.label} Compatibility
              </h1>
              
              <svg className="w-48 h-4 mx-auto mb-4" viewBox="0 0 200 16">
                <path d="M 5 8 Q 50 12, 100 8 T 195 8" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
              </svg>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {selectedTypes.map((type, index) => (
                  <div key={index} className="bg-black text-white px-6 py-3 rounded-full border-3 border-black font-black text-xl">
                    {type}
                  </div>
                ))}
              </div>

              <div className="inline-block bg-white border-3 border-black px-8 py-4 rounded-full">
                <div className="text-5xl font-black">{compatibility.score}%</div>
                <div className="text-sm font-bold">Compatibility Score</div>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8 bg-white">
              <div className="bg-white border-3 border-black p-6 rounded-lg sketch-border relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4">
                  <Heart className="w-8 h-8 text-black animate-pulse" strokeWidth={2} />
                </div>
                <p className="text-xl font-semibold leading-relaxed text-center">
                  {compatibility.summary}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6 gap-2">
                  <TrendingUp className="w-8 h-8 text-black" strokeWidth={2} />
                  <h3 className="text-3xl font-black handwritten">Strengths Together</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {compatibility.strengths.map((strength, index) => (
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
                  <h3 className="text-3xl font-black handwritten">Potential Challenges</h3>
                </div>
                <div className="space-y-4">
                  {compatibility.challenges.map((challenge, index) => (
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
                  <h3 className="text-3xl font-black handwritten">Tips for Success</h3>
                </div>
                <ul className="space-y-3">
                  {compatibility.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black mr-3 text-xl font-black">→</span>
                      <span className="font-semibold text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Share Section */}
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
              onClick={handleReset}
              className="bg-black text-white text-2xl font-black py-6 px-12 border-3 border-black rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:rotate-2 transition-all inline-flex items-center gap-3 sketch-shadow-hover"
            >
              Analyze Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-white border-4 border-black rounded-lg sketch-shadow p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💫</div>
            <h1 className="text-5xl font-black mb-4 handwritten">Relationship Compatibility</h1>
            <svg className="w-48 h-4 mx-auto mb-4" viewBox="0 0 200 16">
              <path d="M 5 8 Q 50 12, 100 8 T 195 8" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p className="text-xl font-semibold">
              Discover how different MBTI types work together!
            </p>
          </div>

          {/* Relationship Type Selection */}
          <div className="mb-8">
            <label className="block text-2xl font-black mb-4 handwritten">Relationship Type</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {relationshipTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setRelationshipType(type.value)}
                  className={`p-4 border-3 border-black rounded-lg font-bold text-sm transition-all transform hover:scale-105 ${
                    relationshipType === type.value
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  <div className="text-3xl mb-2">{type.emoji}</div>
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Personality Type Selection */}
          <div className="mb-8">
            <label className="block text-2xl font-black mb-4 handwritten">Select Personality Types</label>
            <div className="space-y-4">
              {selectedTypes.map((type, index) => (
                <div key={index} className="flex gap-3">
                  <select
                    value={type}
                    onChange={(e) => updatePersonality(index, e.target.value)}
                    className="flex-1 p-4 border-3 border-black rounded-lg font-bold text-lg bg-white focus:outline-none focus:ring-4 focus:ring-black"
                  >
                    <option value="">Select MBTI Type...</option>
                    {mbtiTypes.map((mbti) => (
                      <option key={mbti} value={mbti}>
                        {mbti} - {personalityResults[mbti].title}
                      </option>
                    ))}
                  </select>
                  {selectedTypes.length > 2 && (
                    <button
                      onClick={() => removePersonality(index)}
                      className="p-4 border-3 border-black rounded-lg bg-white hover:bg-black hover:text-white transition-all transform hover:scale-105"
                    >
                      <Trash2 className="w-6 h-6" strokeWidth={2} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {selectedTypes.length < 6 && (
              <button
                onClick={addPersonality}
                className="mt-4 w-full p-4 border-3 border-black rounded-lg bg-white hover:bg-black hover:text-white font-black text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Plus className="w-6 h-6" strokeWidth={2} />
                Add Another Person
              </button>
            )}
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={!canAnalyze}
            className={`w-full py-6 px-8 border-3 border-black rounded-full font-black text-2xl transition-all transform ${
              canAnalyze
                ? 'bg-black text-white hover:bg-white hover:text-black hover:scale-105 hover:-rotate-2 sketch-shadow-hover'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Analyze Compatibility! ✨
          </button>
        </div>
      </div>
    </div>
  );
};
