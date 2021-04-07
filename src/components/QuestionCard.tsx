import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}></button>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
