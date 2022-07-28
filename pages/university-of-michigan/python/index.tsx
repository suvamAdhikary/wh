import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import PythonMain from "../../../components/pages/Michigan/Python/PythonMain";

const Python: NextPage = () => {
  return (
    <>
      <Layout title="PYTHON">
        <>
          <PythonMain />
        </>
      </Layout>
    </>
  );
};

export default Python;
