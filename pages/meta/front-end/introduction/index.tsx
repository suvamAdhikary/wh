import { NextPage } from "next";
import React from "react";
import Back from "../../../../components/buttons/Back";
import Layout from "../../../../components/layout/Layout";
import Introduction from "../../../../components/pageLabel/meta/FrontEnd/Introduction/Introduction";

const IntroductionToFrontEndDev: NextPage = () => {
  return (
    <>
      <Layout title="Meta - Introduction to Front End Development">
        <>
          <Back />
        </>
        <>
          <Introduction />
        </>
      </Layout>
    </>
  );
};

export default IntroductionToFrontEndDev;
