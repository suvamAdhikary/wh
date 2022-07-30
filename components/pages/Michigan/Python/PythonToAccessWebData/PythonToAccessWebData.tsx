import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../context/AppContext";
import HeadingL1 from "../../../../text/headings/HeadingL1";
import NavInMain from "../../../../layout/NavInMain";
import UnOrderdList from "../../../../lists/UnOrderdList";
import JSONandtheRESTArchitecture from "./JSONandtheRESTArchitecture/JSONandtheRESTArchitecture";
import NetworksandSockets from "./NetworksandSockets/NetworksandSockets";
import ProgramsthatSurftheWeb from "./ProgramsthatSurftheWeb/ProgramsthatSurftheWeb";
import RegularExpressions from "./RegularExpressions/RegularExpressions";
import WebServicesandXML from "./WebServicesandXML/WebServicesandXML";

const PythonToAccessWebData = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const { showBackBtn, hideBackBtn } = useApp();

  const handleTabSelection = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const hereAgain = () => {
    setActiveTab("");
  };

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn();
    };
  }, []);

  const topics = [
    {
      name: "Regular Expressions (Chapter 11)",
      value: "RegularExpressions(Chapter11)",
      cta: () => {},
    },
    {
      name: "Networks and Sockets (Chapter 12)",
      value: "NetworksandSockets(Chapter12)",
      cta: () => {},
    },
    {
      name: "Programs that Surf the Web (Chapter 12)",
      value: "ProgramsthatSurftheWeb(Chapter12)",
      cta: () => {},
    },
    {
      name: "Web Services and XML (Chapter 13)",
      value: "WebServicesandXML(Chapter13)",
      cta: () => {},
    },
    {
      name: "JSON and the REST Architecture (Chapter 13)",
      value: "JSONandtheRESTArchitecture(Chapter13)",
      cta: () => {},
    },
  ];

  const learningObjectives = {
    title: "Learning Objectives",
    list: [
      "Use regular expressions to extract data from strings.",
      "Understand the protocols web browsers use to retrieve documents and web apps.",
      "Retrieve data from websites and APIs using Python.",
      "Work with XML (eXtensible Markup Language) data.",
    ],
  };

  return (
    <>
      {activeTab === "RegularExpressions(Chapter11)" ? (
        <>
          <RegularExpressions backToParent={hereAgain} />
        </>
      ) : activeTab === "NetworksandSockets(Chapter12)" ? (
        <>
          <NetworksandSockets backToParent={hereAgain} />
        </>
      ) : activeTab === "ProgramsthatSurftheWeb(Chapter12)" ? (
        <>
          <ProgramsthatSurftheWeb backToParent={hereAgain} />
        </>
      ) : activeTab === "WebServicesandXML(Chapter13)" ? (
        <>
          <WebServicesandXML backToParent={hereAgain} />
        </>
      ) : activeTab === "JSONandtheRESTArchitecture(Chapter13)" ? (
        <>
          <JSONandtheRESTArchitecture backToParent={hereAgain} />
        </>
      ) : (
        <>
          <HeadingL1 title="Using Python to Access Web Data" />
          <UnOrderdList
            heading={learningObjectives.title}
            listData={learningObjectives.list}
          />
          <NavInMain menuList={topics} cta={handleTabSelection} />
        </>
      )}
    </>
  );
};

export default PythonToAccessWebData;
