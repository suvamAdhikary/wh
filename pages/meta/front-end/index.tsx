import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import FrontEnd from "../../../components/pageLabel/meta/FrontEnd/FrontEnd";

const MetaFrontEnd: NextPage = () => {
  return (
    <>
      <Layout title="Meta Front End">
        <>
          <FrontEnd />
        </>
      </Layout>
    </>
  );
};

export default MetaFrontEnd;
