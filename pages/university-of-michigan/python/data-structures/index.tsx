import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import PythonDataStructures from "../../../../components/pages/Michigan/Python/PythonDataStructures/PythonDataStructures";
import { useApp } from "../../../../context/AppContext";

const DataStructure: NextPage = () => {
  const { showBackBtn, hideBackBtn } = useApp();

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn;
    };
  }, [showBackBtn, hideBackBtn]);

  return (
    <>
      <Layout title="Python - Data Structures">
        <>
          <PythonDataStructures />
        </>
      </Layout>
    </>
  );
};

export default DataStructure;
