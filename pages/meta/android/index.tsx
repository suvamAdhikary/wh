import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import Android from "../../../components/pageLabel/meta/Android/Android";

const MetaAndroid: NextPage = () => {
  return (
    <>
      <Layout title="Meta Android">
        <>
          <Android />
        </>
      </Layout>
    </>
  );
};

export default MetaAndroid;
