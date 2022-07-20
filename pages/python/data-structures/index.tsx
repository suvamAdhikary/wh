import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import { useApp } from "../../../context/AppContext";

const DataStructure: NextPage = () => {
  const { showBackBtn, hideBackBtn } = useApp();

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn;
    };
  }, []);

  return (
    <>
      <Layout title="Python - Data Structures">
        <>
          <div>DataStructure</div>
        </>
      </Layout>
    </>
  );
};

export default DataStructure;
