import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import UnOrderdList from "../../../components/lists/UnOrderdList";
import { useApp } from "../../../context/AppContext";

const DeepLearning: NextPage = () => {
  const deepLearningData = {
    title: "Deep Learning",
    description:
      "A specialized subset of Machine Learning that uses layered neural networks to simulate human decision-making",
    list: [
      "Deep Learning layers algorithms to create a Neural Network, an artificial replication of the structure and functionality of the brain",
      "Deep learning algorithms can label and categorize information and identify patterns",
      "It is what enables AI systems to continuously learn on the job, and improve the quality and accuracy of results by determining whether decisions were correct",
      "Deep Learning enables natural language understanding capabilities of AI systems",
      "When creating deep learning algorithms, developers and engineers configure the number of layers and the type of functions that connect the outputs of each layer to the inputs of the next",
    ],
  };

  const deepLearningMajorFix = {
    title: "",
    description:
      "Deep Learning fixes one of the major problems present in older generations of learning algorithms :",
    list: [
      "Ehe efficiency and performance of machine learning algorithms plateau as the datasets grow",
      "Deep learning algorithms continue to improve as they are fed more data",
    ],
  };

  const deepLearningMajorUses = {
    title: "",
    description:
      "Deep Learning has proven to be very efficient at various tasks, including...",
    list: [
      "Image Captioning",
      "Voice Recognition & Transcription",
      "Facial Recognition",
      "Medical Imaging",
      "Language Translation",
      "Driverless cars",
    ],
  };

  const { showBackBtn, hideBackBtn } = useApp();

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn;
    };
  }, []);

  return (
    <>
      <Layout title="Deep Learning - AI">
        <>
          <UnOrderdList
            heading={deepLearningData.title}
            description={deepLearningData.description}
            listData={deepLearningData.list}
          />
          <UnOrderdList
            heading={deepLearningMajorFix.title}
            description={deepLearningMajorFix.description}
            listData={deepLearningMajorFix.list}
          />
          <UnOrderdList
            heading={deepLearningMajorUses.title}
            description={deepLearningMajorUses.description}
            listData={deepLearningMajorUses.list}
          />
        </>
      </Layout>
    </>
  );
};

export default DeepLearning;
