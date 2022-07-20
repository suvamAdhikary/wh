import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import OneLiner from "../../../../components/OneLiner";
import UnOrderdList from "../../../../components/lists/UnOrderdList";
import { useApp } from "../../../../context/AppContext";

const Application: NextPage = () => {
  const naturalLanguageProcessing = {
    title: "Natural Language Processing",
    list: [
      "Natural language processing is a subset of artificial intelligence that enables computers to understand the meaning of human language",
      "Natural language processing uses machine learning and deep learning algorithms to discern a word's semantic meaning",
      "It does this by deconstructing sentences grammatically, relationally, and structurally and understanding the context of use",
      "NLP systems might also be able to understand intent and emotion, such as whether you're asking a question out of frustration, confusion, or irritation.",
      "Understanding the real intent of the user's language, NLP systems draw inferences through a broad array of linguistic models and algorithms",
    ],
  };

  const speechToText = {
    title: "Speech to Text",
    list: [
      "The older iterations of speech-to-text technology require programmers to go through tedious process of discovering and codifying the rules of classifying and converting voice samples into text. With neural networks, instead of coding the rules, you provide voice samples and their corresponding text. The neural network finds the common patterns among the pronunciation of words and then learns to map new voice recordings to their corresponding texts",
      "Google uses AI-powered speech-to-text in there Call Screen feature to handle scam calls and show you the text of the person speaking in real time",
      " YouTube uses this to provide automatic closed captioning",
    ],
  };

  const textToSpeech = {
    title: "Text to Speech ( Speech synthesis )",
    list: [
      "First, a neural network ingests numerous samples of a person's voice until it can tell whether a new voice sample belongs to the same person",
      "Then, a second neural network generates audio data and runs it through the first network to see if it validates it as belonging to the subject. If it does not, the generator corrects its sample and reruns it through the classifier",
      "The two networks repeat the process until they generate samples that sound natural",
      "Companies use AI-powered voice synthesis to enhance customer experience and give their brands their unique voice",
      "In the medical field, this technology is helping ALS patients regain their true voice instead of using a computerized voice",
    ],
  };

  const computerVision = {
    title: "Computer Vision",
    list: [
      "The field of computer vision focuses on replicating parts of the complexity of the human visual system, and enabling computers to identify and process objects in images and videos, in the same way humans do",
      "The field of computer vision has taken great leaps in recent years and surpasses humans in tasks related to detecting and labeling objects, thanks to advances in deep learning and neural networks",
      "This technology enables self-driving cars to make sense of their surroundings",
      "It plays a vital role in facial recognition applications allowing computers to match images of people's faces to their identities",
      "It also plays a crucial role in augmented and mixed reality. The technology that allows computing devices such as smartphones, tablets, and smart glasses to overlay and embed virtual objects on real-world imagery",
      "Online photo libraries like Google Photos, use computer vision to detect objects and classify images by the type of content they contain",
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
      <Layout title="Application - AI">
        <>
          <UnOrderdList
            heading={naturalLanguageProcessing.title}
            listData={naturalLanguageProcessing.list}
          />
          <UnOrderdList
            heading={speechToText.title}
            listData={speechToText.list}
          />
          <UnOrderdList
            heading={textToSpeech.title}
            listData={textToSpeech.list}
          />
          <UnOrderdList
            heading={computerVision.title}
            listData={computerVision.list}
          />
          <OneLiner>
            Self-driving cars is an application of AI that can utilize NLP,
            speech, and most importantly, computer vision.
          </OneLiner>
        </>
      </Layout>
    </>
  );
};

export default Application;
