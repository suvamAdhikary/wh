import { NextPage } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import IBMHome from "../../components/pages/ibm/Home/IBMHome";

const IBM: NextPage = () => {
  return (
    <>
      <Layout title="IBM">
        <IBMHome />
      </Layout>
    </>
  );
};

export default IBM;
