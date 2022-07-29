import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../text/headings/HeadingL2";
import ArraysObjectsFunctions from "./ArraysObjectsFunctions";
import ErrorHandling from "./ErrorHandling";

const BuildingBlocksProgram = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    "Arrays,ObjectsandFunctions"
  );

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
      name: "Arrays, Objects and Functions",
      value: "Arrays,ObjectsandFunctions",
    },
    {
      name: "Error Handling",
      value: "ErrorHandling",
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
      <HeadingL2 title="The Building Blocks of a Program" />
      {activeTab === "Arrays,ObjectsandFunctions" ? (
        <>
          <ArraysObjectsFunctions />
        </>
      ) : activeTab === "ErrorHandling" ? (
        <>
          <ErrorHandling />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BuildingBlocksProgram;
