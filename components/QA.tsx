import React from "react";

export interface QAProps {
  question: string;
  answer: string;
  id?: string;
}

const QA = ({ id, question, answer }: QAProps) => {
  return (
    <>
      <div
        id={id}
        className="flex flex-col gap-2 py-2 px-2 border border-solid border-sky-400"
      >
        <h5>{question} :-</h5>
        {answer?.split("\n").map((line) => (
          <p className="indent-4" key={line}>
            {line}
          </p>
        ))}
      </div>
    </>
  );
};

export default QA;
