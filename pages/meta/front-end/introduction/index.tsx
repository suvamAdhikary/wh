import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import Introduction from "../../../../components/pageLabel/meta/components/Introduction/Introduction";

const IntroductionToFrontEndDev: NextPage = () => {
  return (
    <>
      <Layout title="Meta - Introduction to Front End Development">
        <>
          <Introduction heading="Introduction to Front-End Development" />
        </>
      </Layout>
    </>
  );
};

export default IntroductionToFrontEndDev;
