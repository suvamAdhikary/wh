import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import OneLiner from "../../../../components/OneLiner";
import QA from "../../../../components/QA";
import UnOrderdList from "../../../../components/UnOrderdList";

const SupervisedLearning: NextPage = () => {
  const supervisedLearningData = {
    title: "Supervised Learning",
    list: [
      "An algorithm is trained on human-labeled data. The more samples you provide a supervised learning algorithm, the more precise it becomes in classifying new data",
      "Supervised Learning refers to when we have class labels in the dataset and we use these to build the classification model",
    ],
  };

  const supervisedLearningBreakdown = {
    title: "Supervised Learning",
    list: ["Regression", "Classification", "Neural Networks"],
  };

  const regressionData = {
    title: "Regression",
    data: "Regression models are built by looking at the relationships between features x and the result y where y is a continuous variable. Essentially, Regression estimates continuous values.",
  };

  const neuralNetworksData = {
    title: "Neural Networks",
    data: "Neural Networks refer to structures that imitate the structure of the human brain.",
  };

  const classificationData = {
    title: "Classification",
    data: "Classification on the other hand, focuses on discrete values it identifies. We can assign discrete class labels y based on many input features x.",
  };

  const classificationForms = {
    title: "Classification",
    description: "Some Forms :",
    list: [
      "Decision Trees",
      "Support vector machines",
      "Logistic regression",
      "Random forests",
    ],
  };

  const featuresData = {
    title: "Features",
    data: "Features are distinctive properties of input patterns that help in determining the output categories or classes of output. Each column is a feature and each row is a data point.",
  };

  const trainingData = {
    title: "Training",
    data: "Training refers to using a learning algorithm to determine and develop the parameters of your model.",
  };

  const machineLearningSetsData = {
    title: "Machine Learning",
    description: "Data set",
    list: ["Training", "Validation", "Test Sets"],
  };

  const trainingSubsetData = {
    title: "Training",
    data: "The training sub set is the data used to train the algorithm.",
  };

  const validationSubsetData = {
    title: "Validation",
    data: "The validation subset is used to validate our results and fine-tune the algorithm's parameters",
  };

  const testSetsData = {
    title: "Test Sets",
    description:
      "The testing data is the data the model has never seen before and used to evaluate how good our model is. Using terms like :",
    list: ["Accuracy", "Precision", "Recall"],
  };

  return (
    <>
      <Layout title="Supervised Learning - AI">
        <>
          <UnOrderdList
            heading={supervisedLearningData.title}
            listData={supervisedLearningData.list}
          />
          <UnOrderdList
            heading={supervisedLearningBreakdown.title}
            listData={supervisedLearningBreakdown.list}
          />
          <QA question={regressionData.title} answer={regressionData.data} />
          <QA
            question={neuralNetworksData.title}
            answer={neuralNetworksData.data}
          />
          <QA
            question={classificationData.title}
            answer={classificationData.data}
          />
          <UnOrderdList
            heading={classificationForms.title}
            description={classificationForms.description}
            listData={classificationForms.list}
          />
          <QA question={featuresData.title} answer={featuresData.data} />
          <OneLiner>
            Classification is the process of predicting the class of given data
            points.
          </OneLiner>
          <QA question={trainingData.title} answer={trainingData.data} />
          <UnOrderdList
            heading={machineLearningSetsData.title}
            description={machineLearningSetsData.description}
            listData={machineLearningSetsData.list}
          />
          <QA
            question={trainingSubsetData.title}
            answer={trainingSubsetData.data}
          />
          <QA
            question={validationSubsetData.title}
            answer={validationSubsetData.data}
          />
          <UnOrderdList
            heading={testSetsData.title}
            description={testSetsData.description}
            listData={testSetsData.list}
          />
        </>
      </Layout>
    </>
  );
};

export default SupervisedLearning;
