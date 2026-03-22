// Üks küsimus viktoriinis
export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

// Kasutaja vastus (tulemuste jaoks)
export type UserAnswer = {
  questionId: number;
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
};