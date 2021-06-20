import { Quiz } from "./quizData.types";

const quizOne: Quiz = {
  quizName: "Marvel Cinematic Universe",
  playTime: "5 minutes",
  questions: [
    {
      question:
        "How many avengers were there in first Avengers movie released in 2012?",
      points: 5,
      options: [
        {
          text: "22",
          isRight: false,
        },
        {
          text: "6",
          isRight: true,
        },
      ],
    },
    {
      question:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 15,
      negativePoint: 3,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false,
        },
        {
          text: "performing surgery as a real doctor",
          isRight: true,
        },
      ],
    },
    {
      question: "Who's the love interest for Wanda in MCU?",
      points: 5,
      options: [
        {
          text: "Clint",
          isRight: false,
        },
        {
          text: "Vision",
          isRight: true,
        },
      ],
    },
  ],
};

console.log(quizOne.questions[2].negativePoint);

export { quizOne };