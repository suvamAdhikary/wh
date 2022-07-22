import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import Introduction from "../../../../components/pageLabel/meta/components/Introduction/Introduction";

const IntroductionToBackEndDev: NextPage = () => {
  return (
    <Layout title="Meta - Introduction to Back-End Development">
      <>
        <Introduction heading="Introduction to Back-End Development" />
      </>
    </Layout>
  );
};

export default IntroductionToBackEndDev;
