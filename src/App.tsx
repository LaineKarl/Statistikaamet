import { useState } from "react";
import type { Question, UserAnswer } from "./types/quiz";
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import AnswerOptions from "./components/AnswerOptions";
import Results from "./components/Results";
import Feedback from "./components/Feedback";
import logo from "./assets/images/ES_Logo.svg";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleAnswerClick = (index: number) => {
    const isCorrect = index === currentQuestion.correctAnswerIndex;

    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer: currentQuestion.options[index],
      correctAnswer: currentQuestion.options[currentQuestion.correctAnswerIndex],
      isCorrect,
    };

    setAnswers((prev) => [...prev, answer]);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
  <div>
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: 20 }}>
      <a href="https://www.stat.ee/" target="_blank" rel="noopener noreferrer">
      <img src={logo} alt="Logo" style={{ height: 60 }} />
      </a>
    </div>

    <div>
      {quizFinished ? (
        <Results userAnswers={answers} />
      ) : (

        <>
          <h1>VIKTORIIN</h1>
          <QuestionCard question={currentQuestion.question} />

          <AnswerOptions
            options={currentQuestion.options}
            onOptionClick={handleAnswerClick}
            disabled={showFeedback}
          />

          {showFeedback && (
            <Feedback userAnswers={answers} onNext={handleNext} />
          )}
        </>
      )}
    </div>
  </div>
);
}