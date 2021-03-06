import React from "react";
import Gap from "../../../../../Gap";
import HeadingL2 from "../../../../../text/headings/HeadingL2";
import UnOrderdList from "../../../../../lists/UnOrderdList";

const BusinessCaseForCloudComputing = () => {
  const cloudAdoptionCaseStudies = {
    title: "Cloud Adoption Case Studies",
    description:
      "The adoption of cloud technologies is enabling enterprises, big and small, to be agile, innovative, and competitive, and to create differentiated customer experiences. The question organizations are asking is not whether they should move to the cloud, rather what strategy they should adopt to move to the cloud.\nSome case studies that demonstrate the impact businesses have created by adopting cloud:",
    list: [
      "American Airlines adopting cloud technologies to deliver customer value rapidly across its enterprise",
      "UBank leveraging cloud platform services to give more control to their developers thereby removing barriers to innovation",
      "Bitly leveraging the scalability offered by cloud infrastructure for low-latency delivery to its geographically disbursed enterprise customers",
      "ActivTrades leveraging the infrastructure, storage, network, and security offerings on the cloud to accelerate execution and delivery of new functions in their online trading systems to their customers",
    ],
  };

  return (
    <>
      <HeadingL2 title="Business Case for Cloud Computing" />
      <Gap />
      <UnOrderdList
        heading={cloudAdoptionCaseStudies.title}
        description={cloudAdoptionCaseStudies.description}
        listData={cloudAdoptionCaseStudies.list}
      />
      <Gap />
    </>
  );
};

export default BusinessCaseForCloudComputing;
