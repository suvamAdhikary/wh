import { NextPage } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import MetaHome from "../../components/pages/meta/Home/MetaHome";

const Meta: NextPage = () => {
  return (
    <>
      <Layout title="Meta">
        <MetaHome />
      </Layout>
    </>
  );
};

export default Meta;
