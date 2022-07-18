import { NextPage } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import BusinessCaseForCloudComputing from "../../components/pageLabel/cloud/BusinessCaseForCloudComputing";
import EmergingTechnologiesAcceleratedByCloud from "../../components/pageLabel/cloud/EmergingTechnologiesAcceleratedByCloud";
import IntroductionToCloudComputing from "../../components/pageLabel/cloud/IntroductionToCloudComputing";

const Cloud: NextPage = () => {
  return (
    <>
      <Layout title="Cloud ???">
        <IntroductionToCloudComputing />
        <BusinessCaseForCloudComputing />
        <EmergingTechnologiesAcceleratedByCloud />
      </Layout>
    </>
  );
};

export default Cloud;
