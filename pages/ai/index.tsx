import { NextPage } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import OneLiner from "../../components/OneLiner";
import QA from "../../components/QA";
import UnOrderdList from "../../components/UnOrderdList";

const AI: NextPage = () => {
  const howDoWeDefineIntelligenceData =
    "Human beings have innate intelligence, defined as the intelligence that governs every activity in our body. This intelligence is what causes an oak tree to grow out of a little seed, and an elephant to form from a single-celled organism.";

  const howDoesAILearnData = {
    description:
      "AI learns by creating machine learning models based on provided inputs and desired outputs.",
    list: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
    ],
  };

  const weekOrNarrowAIData =
    "Weak or Narrow AI is AI that is applied to a specific domain. For example, language translators, virtual assistants, self-driving cars, AI-powered web searches, recommendation engines, and intelligent spam filters. Applied AI can perform specific tasks, but not learn new ones, making decisions based on programmed algorithms, and training data.";

  const strongAIOrGeneralizedAIData =
    "Strong AI or Generalized AI is AI that can interact and operate a wide variety of independent and unrelated tasks. It can learn new tasks to solve new problems, and it does this by teaching itself new strategies. Generalized Intelligence is the combination of many AI strategies that learn from experience and can perform at a human level of intelligence.";

  const superAIOrConsciousAIData =
    "Super AI or Conscious AI is AI with human-level consciousness, which would require it to be self-aware. Because we are not yet able to adequately define what consciousness is, it is unlikely that we will be able to create a conscious AI in the near future.";

  const whatIsAIData = [
    "AI is about augmenting human intelligence by providing information and evidence that subject matter experts need to make informed decisions. AI uses mathematical algorithms to examine examples and create machine learning models based on the inputs and desired outputs.",
    "AI is about augmenting human intelligence by providing information and evidence that subject matter experts need to make informed decisions. AI uses mathematical algorithms to examine examples and create machine learning models based on the inputs and desired outputs.",
  ];

  return (
    <>
      <Layout title={"AI ???"}>
        <>
          <OneLiner>
            IBM Research defines Artificial Intelligence (AI) as Augmented
            Intelligence, helping experts scale their capabilities as machines
            do the time-consuming work.
          </OneLiner>
          <QA
            question="How do we define intelligence"
            answer={howDoWeDefineIntelligenceData}
          />
          <UnOrderdList
            heading="How does AI learn"
            description={howDoesAILearnData.description}
            listData={howDoesAILearnData.list}
          />
          <OneLiner>
            AI can be described in different ways based on strength, breadth,
            and application - Weak or Narrow AI, Strong or Generalized AI, Super
            or Conscious AI.
          </OneLiner>
          <QA question="Week or Narrow AI" answer={weekOrNarrowAIData} />
          <QA
            question="Strong AI or Generalized AI"
            answer={strongAIOrGeneralizedAIData}
          />
          <QA
            question="Super AI or Conscious AI"
            answer={superAIOrConsciousAIData}
          />
          <OneLiner>
            AI is the fusion of many fields of study, such as Computer Science,
            Electrical Engineering, Mathematics, Statistics, Psychology,
            Linguistics, and Philosophy.
          </OneLiner>
          <UnOrderdList heading="What is AI? " listData={whatIsAIData} />
        </>
      </Layout>
    </>
  );
};

export default AI;
