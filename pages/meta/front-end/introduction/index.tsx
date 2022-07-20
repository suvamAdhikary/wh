import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import Introduction from "../../../../components/pageLabel/meta/FrontEnd/Introduction/Introduction";
import { useApp } from "../../../../context/AppContext";

export interface introductionToFrontEndDevProps {
  handleHambergarClick?: any;
}

const IntroductionToFrontEndDev: NextPage = ({
  handleHambergarClick,
}: introductionToFrontEndDevProps) => {
  const { showBackBtn, hideBackBtn } = useApp();

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn();
    };
  }, []);

  return (
    <>
      <Layout
        title="Meta - Introduction to Front End Development"
        handleHambergarClick={handleHambergarClick}
      >
        <>
          <Introduction />
        </>
      </Layout>
    </>
  );
};

export default IntroductionToFrontEndDev;
