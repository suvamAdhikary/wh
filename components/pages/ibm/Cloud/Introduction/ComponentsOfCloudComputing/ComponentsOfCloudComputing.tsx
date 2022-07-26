import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";
import CloudInfrastructure from "./CloudInfrastructure";
import CloudStorageandContentDeliveryNetwork from "./CloudStorageandContentDeliveryNetwork";

const ComponentsOfCloudComputing = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>("CloudInfrastructure");

  const {
    showMagicBackBtn,
    hideMagicBackBtn,
    handleMagicBackCta,
    showHambergerBtn,
    hideHambergerBtn,
    handleAsineMenuCta,
    handleAsideMenuItems,
  } = useApp();

  const handleTabSelection: aFunctionWithAStringArg = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const topics = [
    {
      name: "Cloud Infrastructure",
      value: "CloudInfrastructure",
    },
    {
      name: "Cloud Storage and Content Delivery Network",
      value: "CloudStorageandContentDeliveryNetwork",
    },
  ];

  useEffect(() => {
    showHambergerBtn();
    showMagicBackBtn();
    handleMagicBackCta(backToParent);
    handleAsineMenuCta(handleTabSelection);
    handleAsideMenuItems(topics);

    return () => {
      hideMagicBackBtn();
      handleMagicBackCta(() => {});
      hideHambergerBtn();
      handleAsineMenuCta(() => {});
      handleAsideMenuItems([]);
    };
  }, []);

  return (
    <>
      <HeadingL2 title="Components of Cloud Computing" />
      {activeTab === "CloudInfrastructure" ? (
        <>
          <CloudInfrastructure />
        </>
      ) : activeTab === "CloudStorageandContentDeliveryNetwork" ? (
        <>
          <CloudStorageandContentDeliveryNetwork />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ComponentsOfCloudComputing;
