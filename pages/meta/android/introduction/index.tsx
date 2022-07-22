import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import Introduction from "../../../../components/pageLabel/meta/components/Introduction/Introduction";

const IntroductionToMobileDev: NextPage = () => {
  return (
    <>
      <Layout title="Meta - Introduction to Mobile Development">
        <>
          <Introduction heading="Introduction to Android Development" />
        </>
      </Layout>
    </>
  );
};

export default IntroductionToMobileDev;
