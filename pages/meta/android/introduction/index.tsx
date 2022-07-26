import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import IntroReactNative from "../../../../components/pages/meta/SubComponents/Introduction/IntroReactNative";

const IntroductionToMobileDev: NextPage = () => {
  return (
    <>
      <Layout title="Meta - Introduction to Mobile Development">
        <>
          <IntroReactNative />
        </>
      </Layout>
    </>
  );
};

export default IntroductionToMobileDev;
