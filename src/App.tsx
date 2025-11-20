import React, { useState } from 'react';
import { QuizStart } from './components/QuizStart';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResult } from './components/QuizResult';
import { CompatibilityAnalyzer } from './components/CompatibilityAnalyzer';
import { EnneagramQuiz } from './components/EnneagramQuiz';
import { questions } from './data/questions';
import { personalityResults } from './data/results';
import { Users, Brain, Compass } from 'lucide-react';

type QuizState = 'start' | 'quiz' | 'result';
type AppTab = 'quiz' | 'compatibility' | 'enneagram';

function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('quiz');
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({
    EI: [],
    SN: [],
    TF: [],
    JP: []
  });

  const handleStart = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({
      EI: [],
      SN: [],
      TF: [],
      JP: []
    });
  };

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswers = {
      ...answers,
      [currentQuestion.dimension]: [...answers[currentQuestion.dimension], value]
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('result');
    }
  };

  const calculatePersonalityType = () => {
    const counts = {
      E: answers.EI.filter(a => a === 'E').length,
      I: answers.EI.filter(a => a === 'I').length,
      S: answers.SN.filter(a => a === 'S').length,
      N: answers.SN.filter(a => a === 'N').length,
      T: answers.TF.filter(a => a === 'T').length,
      F: answers.TF.filter(a => a === 'F').length,
      J: answers.JP.filter(a => a === 'J').length,
      P: answers.JP.filter(a => a === 'P').length,
    };

    const type = 
      (counts.E > counts.I ? 'E' : counts.I > counts.E ? 'I' : 'E') +
      (counts.S > counts.N ? 'S' : counts.N > counts.S ? 'N' : 'N') +
      (counts.T > counts.F ? 'T' : counts.F > counts.T ? 'F' : 'F') +
      (counts.J > counts.P ? 'J' : counts.P > counts.J ? 'P' : 'P');

    return personalityResults[type];
  };

  const handleRestart = () => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setAnswers({
      EI: [],
      SN: [],
      TF: [],
      JP: []
    });
  };

  const renderQuizContent = () => {
    if (quizState === 'start') {
      return <QuizStart onStart={handleStart} />;
    }

    if (quizState === 'quiz') {
      return (
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      );
    }

    return <QuizResult result={calculatePersonalityType()} onRestart={handleRestart} />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-2 py-4">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 font-black text-base md:text-lg border-3 border-black rounded-lg transition-all transform hover:scale-105 ${
                activeTab === 'quiz'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <Brain className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
              <span className="hidden sm:inline">MBTI Quiz</span>
              <span className="sm:hidden">MBTI</span>
            </button>
            <button
              onClick={() => setActiveTab('compatibility')}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 font-black text-base md:text-lg border-3 border-black rounded-lg transition-all transform hover:scale-105 ${
                activeTab === 'compatibility'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
              <span className="hidden sm:inline">Compatibility</span>
              <span className="sm:hidden">Match</span>
            </button>
            <button
              onClick={() => setActiveTab('enneagram')}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 font-black text-base md:text-lg border-3 border-black rounded-lg transition-all transform hover:scale-105 ${
                activeTab === 'enneagram'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <Compass className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
              <span className="hidden sm:inline">Enneagram</span>
              <span className="sm:hidden">Ennea</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'quiz' && renderQuizContent()}
        {activeTab === 'compatibility' && <CompatibilityAnalyzer />}
        {activeTab === 'enneagram' && <EnneagramQuiz />}
      </div>
    </div>
  );
}

export default App;
