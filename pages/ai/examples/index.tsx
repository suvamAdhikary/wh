import { NextPage } from "next";
import React from "react";
import OneLiner from "../../../components/OneLiner";
import QA from "../../../components/QA";
import UnOrderdList from "../../../components/UnOrderdList";

const Examples: NextPage = () => {
  const AIAlgorithmsData =
    "AI algorithms that learn by example are the reason we can talk to Watson, Alexa, Siri, Cortana, and Google Assistant and they can talk back to us";

  const examples = [
    "Robotics and Automation, where AI is making it possible for robots to perceive unpredictable environments around them in order to decide on the next steps.",
    "Airport Security, where AI is making it possible for X-ray scanners to flag images that may look suspicious.",
    "Oil and Gas, where AI is helping companies analyze and classify thousands of rock samples to help identify the best locations to drill for oil?",
  ];

  const femousExamples = [
    "Watson playing Jeopardy to win against two of its greatest champions, Ken Jennings and Brad Rutter.",
    "Watson teaming up with the Academy to deliver an amplified Grammy experience for millions of fans.",
    "Watson collaborating with ESPN to serve 10 million users of the ESPN Fantasy App sharing insights that help them make better decisions to win their weekly matchups.",
  ];

  return (
    <>
      <main className="flex flex-col gap-4 px-8 py-4">
        <QA question="AI algorithms" answer={AIAlgorithmsData} />
        <OneLiner>
          AI-powered applications are creating an impact in diverse areas such
          as Healthcare, Education, Transcription, Law Enforcement, Customer
          Service, Mobile and Social Media Apps, Financial Fraud Prevention,
          Patient Diagnoses, Clinical Trials, and more.
        </OneLiner>
        <UnOrderdList
          heading="Some of these applications include"
          listData={examples}
        />
        <UnOrderdList
          heading="Some famous applications of AI from IBM include"
          listData={femousExamples}
        />
      </main>
    </>
  );
};

export default Examples;