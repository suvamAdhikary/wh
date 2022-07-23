import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import IntroductionCloud from "../../../components/pages/cloud/Introduction/IntroductionCloud";

const Cloud: NextPage = () => {
  return (
    <>
      <Layout title="Introduction to Cloud Computing By IBM Skills Network">
        <>
          <IntroductionCloud />
        </>
      </Layout>
    </>
  );
};

export default Cloud;
