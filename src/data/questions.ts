import type { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    question: "Milline loom on Eesti rahvusloom?",
    options: ["Hunt", "Karu", "Põder"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    question: "Milline planeet on Päikesesüsteemis kõige suurem?",
    options: ["Maa", "Jupiter", "Mars"],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    question: "Kes kirjutas 'Tõe ja õiguse'?",
    options: ["Eduard Vilde", "Anton Hansen Tammsaare", "Jaan Kross"],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    question: "Mis värvi on Eesti lipp?",
    options: ["Sinine, must ja valge", "Punane, valge ja sinine", "Roheline, valge ja punane"],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: "Mitu päeva on nädalas?",
    options: ["5", "6", "7"],
    correctAnswerIndex: 2,
  },
  {
    id: 6,
    question: "Milline neist on JavaScripti raamistik?",
    options: ["React", "Photoshop", "Excel"],
    correctAnswerIndex: 0,
  },
  {
    id: 7,
    question: "Mis on vee keemiline valem?",
    options: ["CO2", "H2O", "O2"],
    correctAnswerIndex: 1,
  }
];