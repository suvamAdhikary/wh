import React from "react";

export interface QAProps {
  question: string;
  answer: string;
  id?: string;
}

const QA = ({ id, question, answer }: QAProps) => {
  return (
    <>
      <article id={id} className="qa-wrapper">
        <h5>{question} :-</h5>
        {answer?.split("\n").map((line) => (
          <p className="qa__ans" key={line}>
            {line}
          </p>
        ))}
      </article>
    </>
  );
};

export default QA;
