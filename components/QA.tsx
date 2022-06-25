import React from "react";

export interface QAProps {
  question: string;
  answer: string;
}

const QA = ({ question, answer }: QAProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 py-2 px-2 border border-solid border-sky-400">
        <h5>{question} :-</h5>
        <p>
          {"=>"} {answer}
        </p>
      </div>
    </>
  );
};

export default QA;
