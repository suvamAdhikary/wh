import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import UnOrderdList from "../../../components/lists/UnOrderdList";
import { useApp } from "../../../context/AppContext";

const FutureCareer: NextPage = () => {
  const futureWithAI = {
    title: "",
    description: "",
    list: [
      "AI experts have varied views of the long-term future of AI.",
      "Understanding and generating natural language is likely to be the next big growth area for AI, along with vision systems for the blind.",
    ],
  };

  const AILadder = {
    title: "The AI Ladder",
    list: [
      "Modernize:- Make your data ready for an AI and hybrid cloud world.",
      "Collect:- Make your data simple and accessible.",
      "Organize:- Create a business ready analytics foundation.",
      "Analyze:- Build and scale AI with trust and explainability.",
      "Infuse:- Operationalize AI throughout your business.",
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
      <Layout title="Future Career - AI">
        <>
          <UnOrderdList
            heading={futureWithAI.title}
            description={futureWithAI.description}
            listData={futureWithAI.list}
          />
          <UnOrderdList heading={AILadder.title} listData={AILadder.list} />
        </>
      </Layout>
    </>
  );
};

export default FutureCareer;
