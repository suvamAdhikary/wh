import { NextPage } from "next";
import React from "react";
import Back from "../../../components/buttons/Back";
import Layout from "../../../components/layout/Layout";
import FrontEnd from "../../../components/pageLabel/meta/FrontEnd/FrontEnd";

const MetaFrontEnd: NextPage = () => {
  return (
    <>
      <Layout title="Meta Front End">
        <>
          <Back />
        </>
        <>
          <FrontEnd />
        </>
      </Layout>
    </>
  );
};

export default MetaFrontEnd;
