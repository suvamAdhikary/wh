import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ProgrammingWithJS from "../../../../components/pages/meta/SubComponents/ProgrammingWithJS/ProgrammingWithJS";

const JavaScript: NextPage = () => {
  return (
    <>
      <Layout title="JavaScript - Meta">
        <>
          <ProgrammingWithJS />
        </>
      </Layout>
    </>
  );
};

export default JavaScript;
