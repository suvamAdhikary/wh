import { NextPage } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import Introduction from "../../components/pageLabel/cloud/Introduction/Introduction";

const Cloud: NextPage = () => {
  return (
    <>
      <Layout title="Introduction to Cloud Computing By IBM Skills Network">
        <>
          <Introduction />
        </>
      </Layout>
    </>
  );
};

export default Cloud;
