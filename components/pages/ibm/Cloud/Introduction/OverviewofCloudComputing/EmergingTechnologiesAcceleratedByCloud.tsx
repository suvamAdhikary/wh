import React from "react";
import Gap from "../../../../../Gap";
import HeadingL2 from "../../../../../text/headings/HeadingL2";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import QA from "../../../../../QA";


const EmergingTechnologiesAcceleratedByCloud = () => {
  const IoTAndCloud = {
    title: "IoT and Cloud",
    data: "Backend analytics platform, Cloud <=> IoT Platforms, Devices",
  };

  const AIIoTAndTheCloud = {
    title: "AI, IoT and the Cloud",
    list: [
      "IoT behavior based on AI responses",
      "AI acts on data from IoT devices",
      "Cloud provides scalable on demand resources",
    ],
  };

  const blockchainAndCloud = {
    title: "Blockchain and Cloud",
    list: [
      "Blockchain: A secure, immutable network that allows members to view only the transactions that are relevant to them",
      "85% businesses today rely on multiple clouds to meet their IT needs",
      "More than 70% of businesses use more than three clouds",
    ],
  };

  const a3WayRelationship = {
    title: "A 3-Way Relationship",
    list: [
      "Blockchain provides the trusted, decentralized source of truth",
      "Artificial Intelligence powers the analytics and decision-making from the data collected",
      "Cloud provides globally distributed, scalable, and cost-efficient computing resources",
    ],
  };

  const analyticsOnCloud = {
    title: "Analytics on Cloud",
    description: "How can analytics technology leverage the cloud?",
    list: [
      "Track trends on social media to predict future events",
      "Analyze data to build machine learning models in cognitive applications",
      "Data analytics and predictive maintenance solutions for city infrastructure",
    ],
  };

  const emergingTechnologiesCaseStudies = {
    title: "Emerging Technologies Case Studies",
    description:
      "Emerging technologies, powered by the cloud, are disrupting existing business models and creating unprecedented opportunities for businesses to grow, innovate, and create value for their customers.\nSome case studies that demonstrate how the use of emerging technologies on the cloud is creating value for millions around the world:",
    list: [
      "The use of the Internet of Things on the cloud to combat poaching of endangered rhinos in South Africa",
      "Artificial Intelligence on the cloud being leveraged to deliver unique digital experiences to millions of fans around the world by the United States Tennis Association",
      "Blockchain on the cloud helping farmers reduce waste by building traceability and transparency in the food supply chain",
      "The use of data analytics for driving predictive maintenance solutions for a city’s infrastructure by KONE",
    ],
  };

  return (
    <>
      <HeadingL2 title="Emerging Technologies Accelerated by Cloud" />
      <Gap />
      <QA question={IoTAndCloud.title} answer={IoTAndCloud.data} />
      <UnOrderdList
        heading={AIIoTAndTheCloud.title}
        listData={AIIoTAndTheCloud.list}
      />
      <UnOrderdList
        heading={blockchainAndCloud.title}
        listData={blockchainAndCloud.list}
      />
      <UnOrderdList
        heading={a3WayRelationship.title}
        listData={a3WayRelationship.list}
      />
      <UnOrderdList
        heading={analyticsOnCloud.title}
        listData={analyticsOnCloud.list}
      />
      <UnOrderdList
        heading={emergingTechnologiesCaseStudies.title}
        description={emergingTechnologiesCaseStudies.description}
        listData={emergingTechnologiesCaseStudies.list}
      />
    </>
  );
};

export default EmergingTechnologiesAcceleratedByCloud;
