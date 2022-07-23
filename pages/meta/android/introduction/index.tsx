import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import IntroductionFullStack from "../../../../components/pages/meta/SubComponents/Introduction/IntroductionFullStack";

const IntroductionToMobileDev: NextPage = () => {
  return (
    <>
      <Layout title="Meta - Introduction to Mobile Development">
        <>
          <IntroductionFullStack heading="Introduction to Android Development" />
        </>
      </Layout>
    </>
  );
};

export default IntroductionToMobileDev;
