import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import BackEnd from "../../../components/pageLabel/meta/BackEnd/BackEnd";

const MetaBackEnd: NextPage = () => {
  return (
    <>
      <Layout title="Meta Back End">
        <>
          <BackEnd />
        </>
      </Layout>
    </>
  );
};

export default MetaBackEnd;
