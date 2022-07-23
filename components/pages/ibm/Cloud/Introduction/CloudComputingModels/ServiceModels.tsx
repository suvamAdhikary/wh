import React from "react";
import HeadingL3 from "../../../../../headings/HeadingL3";
import UnOrderdList from "../../../../../lists/UnOrderdList";

const ServiceModels = () => {
  const threeServiceModels = {
    title: "Three service models",
    list: [
      "IaaS -  Infrastructure as a Service",
      "PaaS - Platform as a Service",
      "Software as a Service",
    ],
  };

  const overviewOfServiceModels = {
    title: "Overview of Service models",
    list: [
      "IaaS is a set of compute networking and storage resources that have been virtualized by a vendor so that a user can access and configure them any way they want. The persona for IaaS is a system admin, or an IT admin.",
      "Software as a Service is just software that you don't have to install on your machine and you don't have to manually update. And so the user for Software as a Service could be anyone. It's usually charged on a subscription model rather than a one-time license fee.",
      "Platform as a Service takes advantage of all the virtualized resources from Iaas and then just abstracts them away, so the user doesn't have to worry about managing any of those virtualized resources. The user for PaaS is not a system admin, usually it's a dev. In IBM we call this dev, Jane.",
      "If it's make a pyramid as SaaS at top of the pyramid and IaaS at bottom, is meant to indicate that as you move down, you're increasing complexity in terms of your knowledge and management of infrastructure resources and you're increasing the ease of use.",
    ],
  };

  const carMetafore = {
    title: "A Car Metaphor",
    list: [
      "In this metaphor IaaS is like leasing a car. So if you've ever leased a car, you probably did a lot of research, and you care about the specs of the car and their performance. You care about the color of the car, what kind of car it is. You're the one driving and you're the one paying for it. You're also paying for the gas and any tolls or maintenance.",
      "Platform as a Service in this metaphor, that's more like renting a car. So say you're on vacation and you just got off at the air Airport and you're going to pick up your rental car. You don't really care what color it is. You don't even care about the specs of it, but you're still driving and you're paying for the gas and any tolls you go through.",
      "Software as a Service is again the easiest one. That one's more like getting a taxi or an uber. So with the taxi or an uber, you don't care at all about what kind of car it is, what color it is and in fact, you're not even the one driving, or paying for gas, or any tolls because that's baked into the price.",
    ],
  };

  const IaaSProvides = {
    title: "IaaS Cloud Provider Manages",
    list: [
      {
        heading: "Physical Resources",
        list: ["Data Centers", "Cooling", "Power", "Networking", "Security"],
      },
      {
        heading: "Computing Resources",
        list: ["Servers", "Storage"],
      },
    ],
  };

  const PaaSProvides = {
    title: "PaaS Cloud Provider Manages The Platform Infratructure",
    list: [
      {
        heading: "Computing Resources and",
        list: [],
      },
      {
        heading: "Platform Infrastructure",
        list: [
          "Operating System (OS)",
          "Development Tools",
          "Databases",
          "Business Analytics",
        ],
      },
    ],
  };

  const SaaSProvides = {
    title: "SaaS Cloud Provider Hosts & Manages",
    list: [
      {
        heading: "Platform Infrastructure and",
        list: [],
      },
      {
        heading: "",
        list: ["Applications", "Data"],
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Service Models" />
      <UnOrderdList
        heading={threeServiceModels.title}
        listData={threeServiceModels.list}
      />
      <UnOrderdList
        heading={overviewOfServiceModels.title}
        listData={overviewOfServiceModels.list}
      />
      <UnOrderdList heading={carMetafore.title} listData={carMetafore.list} />
      <UnOrderdList
        heading={IaaSProvides.title}
        listData={IaaSProvides.list}
        isMultiList={true}
      />
      <UnOrderdList
        heading={PaaSProvides.title}
        isMultiList={true}
        listData={PaaSProvides.list}
      />
      <UnOrderdList
        heading={SaaSProvides.title}
        isMultiList={true}
        listData={SaaSProvides.list}
      />
    </>
  );
};

export default ServiceModels;
