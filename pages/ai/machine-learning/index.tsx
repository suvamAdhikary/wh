import { NextPage } from "next";
import React from "react";
import OneLiner from "../../../components/OneLiner";
import QA from "../../../components/QA";
import UnOrderdList from "../../../components/UnOrderdList";

const MachineLearning: NextPage = () => {
  const machineLearningDef = {
    title: "Machine Learning",
    data: "Machine Learning, a subset of AI, uses computer algorithms to analyze data and make intelligent decisions based on what it has learned.",
  };

  const machineLearningData = {
    title: "Machine Learning",
    description:
      "A subset of AI that uses computer algorithms to analyze data and make intelligent decisions based on what it has learned, without being explictly programmed",
    list: [
      "Builds models to classify and make predictions from provided data",
      "Trained with learge sets of data",
      "They learn from examples",
      "They do not follow rules-based algorithms",
      "Machine learning is what enables machines to solve problems on their own and make accurate predictions using the provided data.",
    ],
  };

  const supervisedLearningData = {
    title: "Supervised Learning",
    data: "An algorithm is trained on human-labeled data. The more samples you provide a supervised learning algorithm, the more precise it becomes in classifying new data.",
  };

  const unsupervisedLearningData = {
    title: "Unsupervised Learning",
    list: [
      "Relies on giving the algorithm unlabeled data and letting it find patterns by itself. You provide the input, but not labels, and let the machine infer qualities",
      "Unsupervised Learning don't have class labels and we must discover class labels from unstructured data. This could involve things such as deep learning looking at pictures to train models. Things like this are typically done with something called clustering",
    ],
  };

  const reinforcementLearningData = {
    title: "Reinforcement Learning",
    data: "Relies on providing a machine learning algorithm with a set of rules and constraints, and letting it learn how to achieve its goals. You define the state, the desired goal, allowed actions, and constraints.",
    list: [
      "Relies on providing a machine learning algorithm with a set of rules and constraints, and letting it learn how to achieve its goals. You define the state, the desired goal, allowed actions, and constraints",
      "Reinforcement Learning is a different subset, and what this does is it uses a reward function to penalize bad actions or reward good actions",
    ],
  };

  const machineLearningModelData = {
    title: "Machine Learning Model",
    data: "A machine learning model is the algorithm used to find patterns in the data without the programmer having to explictly program these patterns.",
  };

  return (
    <>
      <main className="flex flex-col gap-4 px-8 py-4">
        <QA
          question={machineLearningDef.title}
          answer={machineLearningDef.data}
        />
        <UnOrderdList
          heading={machineLearningData.title}
          description={machineLearningData.description}
          listData={machineLearningData.list}
        />
        <OneLiner>
          Machine Learning relies on defining behavioral rules by examining and
          comparing large datasets to find common patterns.
        </OneLiner>
        <QA
          question={supervisedLearningData.title}
          answer={supervisedLearningData.data}
        />
        <UnOrderdList
          heading={unsupervisedLearningData.title}
          listData={unsupervisedLearningData.list}
        />
        {/* <QA
          question={reinforcementLearningData.title}
          answer={reinforcementLearningData.data}
        /> */}
        <UnOrderdList
          heading={reinforcementLearningData.title}
          listData={reinforcementLearningData.list}
        />
        <QA
          question={machineLearningModelData.title}
          answer={machineLearningModelData.data}
        />
      </main>
    </>
  );
};

export default MachineLearning;
