import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import IntroductionFullStack from "../../../../components/pages/meta/SubComponents/Introduction/IntroductionFullStack";

const IntroductionToFrontEndDev: NextPage = () => {
  return (
    <>
      <Layout title="Meta - Introduction to Front End Development">
        <>
          <IntroductionFullStack heading="Introduction to Front-End Development" />
        </>
      </Layout>
    </>
  );
};

export default IntroductionToFrontEndDev;
