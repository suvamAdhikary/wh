import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import UnOrderdList from "../../../components/lists/UnOrderdList";

const W2: NextPage = () => {
  const cognitiveComputingData = {
    title: "Cognitive Computing",
    description:
      "Cognitive computing systems differ from conventional computing systems in that they can:",
    list: [
      "Read and interpret unstructured data, understanding not just the meaning of words but also the intent and context in which they are used.",
      "Reason about problems in a way that humans reason and make decisions.",
      "Learn over time from their interactions with humans and keep getting smarter.",
    ],
  };

  const artificialIntelligenceData = {
    title: "Artificial Intelligence",
    description:
      "A branch of computer science dealing with the simulation of intelligent behavior",
    list: [
      "Planning",
      "Learning",
      "Reasioning",
      "Problem-solving",
      "Knowledge",
      "Perception",
      "Motion",
      "Manipulation",
      "Social Intelligence",
      "Creativity",
    ],
  };

  const machineLearningData = {
    title: "Machine Learning",
    description:
      "A subset of AI that uses computer algorithms to analyze data and make intelligent decisions based on what it has learned, without being explictly programmed",
    list: [
      "Trained with learge sets of data",
      "They learn from examples",
      "They do not follow rules-based algorithms",
      "Machine learning is what enables machines to solve problems on their own and make accurate predictions using the provided data.",
    ],
  };

  const deepLearningData = {
    title: "Deep Learning",
    description:
      "A specialized subset of Machine Learning that uses layered neural networks to simulate human decision-making",
    list: [
      "Deep learning algorithms can label and categorize information and identify patterns",
      "It is what enables AI systems to continuously learn on the job, and improve the quality and accuracy of results by determining whether decisions were correct",
    ],
  };

  const neuralNetworksData = {
    title: "Neural Networks",
    description:
      "Take inspiration from biological neural networks, although they work quite a bit differently",
    list: [
      "A neural network in AI is a collection of small computing units called neurons that take incoming data and learn to make decisions over time",
      "Neural networks are often layered deep and are the reason deep learning algorithms become more efficient as the datasets increase in volume, as opposed to other machine learning algorithms that may plateau as data increases",
    ],
  };

  const artificialIntelligenceAndDataScienceData = {
    title: "Artificial Intelligence and Data Science",
    list: [
      "Data science is the process and method for extracting knowledge and insights from large volumes of disparate data",
      "It involves mathematics, statistical analysis, data visualization, machine learning, and more...",
      "It could use machine learning algorithms and even deep learning models",
      "It's a broad term that encompasses the entire data processing methodology",
      "AI includes everything that allows computers to learn how to solve problems and make intelligent decisions",
      "Both AI and Data Science can involve the use of big data",
    ],
  };

  return (
    <>
      <Layout title="AI by IBM">
        <>
          <UnOrderdList
            heading={cognitiveComputingData.title}
            description={cognitiveComputingData.description}
            listData={cognitiveComputingData.list}
          />
          <UnOrderdList
            heading={artificialIntelligenceData.title}
            description={artificialIntelligenceData.description}
            listData={artificialIntelligenceData.list}
          />
          <UnOrderdList
            heading={machineLearningData.title}
            description={machineLearningData.description}
            listData={machineLearningData.list}
          />
          <UnOrderdList
            heading={deepLearningData.title}
            description={deepLearningData.description}
            listData={deepLearningData.list}
          />
          <UnOrderdList
            heading={neuralNetworksData.title}
            description={neuralNetworksData.description}
            listData={neuralNetworksData.list}
          />
          <UnOrderdList
            heading={artificialIntelligenceAndDataScienceData.title}
            listData={artificialIntelligenceAndDataScienceData.list}
          />
        </>
      </Layout>
    </>
  );
};

export default W2;
