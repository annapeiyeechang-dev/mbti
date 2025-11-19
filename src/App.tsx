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
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleStart = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswers = {
      ...answers,
      [currentQuestion.dimension]: value,
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('result');
    }
  };

  const calculatePersonalityType = () => {
    const dimensions = {
      EI: { E: 0, I: 0 },
      SN: { S: 0, N: 0 },
      TF: { T: 0, F: 0 },
      JP: { J: 0, P: 0 },
    };

    Object.entries(answers).forEach(([dimension, value]) => {
      if (dimension === 'EI') {
        dimensions.EI[value as 'E' | 'I']++;
      } else if (dimension === 'SN') {
        dimensions.SN[value as 'S' | 'N']++;
      } else if (dimension === 'TF') {
        dimensions.TF[value as 'T' | 'F']++;
      } else if (dimension === 'JP') {
        dimensions.JP[value as 'J' | 'P']++;
      }
    });

    const type = 
      (dimensions.EI.E >= dimensions.EI.I ? 'E' : 'I') +
      (dimensions.SN.S >= dimensions.SN.N ? 'S' : 'N') +
      (dimensions.TF.T >= dimensions.TF.F ? 'T' : 'F') +
      (dimensions.JP.J >= dimensions.JP.P ? 'J' : 'P');

    return personalityResults[type];
  };

  const handleRestart = () => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setAnswers({});
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
