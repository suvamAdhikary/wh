import { NextPage } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import MichiganHome from "../../components/pages/Michigan/Home/MichiganHome";

const UniversityOfMichigan: NextPage = () => {
  return (
    <>
      <Layout title="University of Michigan">
        <MichiganHome />
      </Layout>
    </>
  );
};

export default UniversityOfMichigan;
