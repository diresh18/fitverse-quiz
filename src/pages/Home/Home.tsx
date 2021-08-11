import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz/QuizContext";

export const Home = () => {
  const {
    state: { allQuizzes },
    dispatch,
  } = useQuiz();

  useEffect(() => {
    dispatch({ type: "RESET_QUIZ_STATE" });
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl mt-4 mb-8 text-center">
        Quiz Master!!
      </h1>
      <div className="flex">
        {allQuizzes?.map((quiz) => {
          return (
            <Link to={`/quiz/${quiz.id}`}>
              <div className="border border-black max-w-max p-4 ml-8">
                <h2 className="text-lg font-bold">{quiz.quizName}</h2>
                <div>Test Yourself by taking this Quiz!!</div>
                <div>{quiz.questions.length} Questions</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
