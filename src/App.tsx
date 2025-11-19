import React, { useState } from 'react';
import { QuizStart } from './components/QuizStart';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResult } from './components/QuizResult';
import { questions } from './data/questions';
import { personalityResults } from './data/results';

type QuizState = 'start' | 'quiz' | 'result';

function App() {
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
    // Count answers for each dimension
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

    // Determine personality type based on majority in each dimension
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
}

export default App;
