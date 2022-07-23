import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import IntroductionFullStack from "../../../../components/pages/meta/SubComponents/Introduction/IntroductionFullStack";

const IntroductionToBackEndDev: NextPage = () => {
  return (
    <Layout title="Meta - Introduction to Back-End Development">
      <>
        <IntroductionFullStack heading="Introduction to Back-End Development" />
      </>
    </Layout>
  );
};

export default IntroductionToBackEndDev;
