import React from "react";
import Gap from "../../../../Gap";
import HeadingL2 from "../../../../headings/HeadingL2";
import UnOrderdList from "../../../../lists/UnOrderdList";

import DefinitionAndEssentialCharacteristicsOfCloudComputing from "./DefinitionAndEssentialCharacteristicsOfCloudComputing";
import HistoryAndEvolutionOfCloudComputing from "./HistoryAndEvolutionOfCloudComputing";
import KeyCloudServiceProvidersAndTheirServices from "./KeyCloudServiceProvidersAndTheirServices";
import KeyConsiderationsForCloudComputing from "./KeyConsiderationsForCloudComputing";

const IntroductionToCloudComputing = () => {
  const keyNotes = {
    title: "Key Notes",
    list: [
      "Cloud computing is the delivery of on-demand computing resources over the internet on a pay-as-you-go basis; resources are dynamically assigned and reassigned among multiple users and scale up and down in response to users’ needs.",
      "The origins of cloud computing can be traced back to the mainframes of the 1950s, with virtualization technologies and hypervisors serving as catalysts for the emergence of modern-day cloud computing.",
      "Organizations must consider their business needs, investment viability, and risk capacity in order to create a cloud adoption strategy that delivers desired benefits without causing business disruptions and security, compliance, or performance issues.",
      "Cloud adoption is growing faster than predicted. Driving this technological wave are cloud service providers with a host of services ranging from Infrastructure, Platform, and Software services. Some major Cloud providers of our times include AWS, Alibaba Cloud, Google, IBM, and Microsoft Azure.",
    ],
  };

  return (
    <>
      <HeadingL2 title="Introduction to Cloud Computing" />
      <Gap />
      <DefinitionAndEssentialCharacteristicsOfCloudComputing />
      <Gap />
      <HistoryAndEvolutionOfCloudComputing />
      <Gap />
      <KeyConsiderationsForCloudComputing />
      <Gap />
      <KeyCloudServiceProvidersAndTheirServices />
      <Gap />
      <UnOrderdList heading={keyNotes.title} listData={keyNotes.list} />
      <Gap />
    </>
  );
};

export default IntroductionToCloudComputing;
