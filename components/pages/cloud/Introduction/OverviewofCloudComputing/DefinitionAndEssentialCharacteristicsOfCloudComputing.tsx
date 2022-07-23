import React from "react";
import Gap from "../../../../Gap";
import HeadingL3 from "../../../../headings/HeadingL3";
import HeadingL4 from "../../../../headings/HeadingL4";
import UnOrderdList from "../../../../lists/UnOrderdList";
import OneLiner from "../../../../OneLiner";
import QA from "../../../../QA";

const DefinitionAndEssentialCharacteristicsOfCloudComputing = () => {
  const cloudComputing = {
    title: "Cloud Computing",
    description:
      "Definition of Cloud Computing by NIST (US National Institute of Standards and Technology)",
    list: [
      "A model for enabling convenint, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort or service provider interaction.",
      'Examples of computing resources include: "Networks", "Servers", "Storage", "Applications", "Services"',
    ],
  };

  const cloudModel = {
    title: "Cloud Model",
    list: [
      "5 Essential characteristics",
      "3 Deployment models",
      "3 Service models",
    ],
  };

  const essentialCharacteristics = {
    title: "5 Essential Characteristics",
    list: [
      "On-demant Self-service",
      "Broad Network Access",
      "Resource Pooling",
      "Rapid Elasticity",
      "Measured Service",
    ],
  };

  const onDemandSelfService = {
    title: "On-demand Self-service",
    data: "You get access to cloud resources such as the processing power, storage, and network you need, using a simple interface, without requiring human interaction with each service provider.",
  };

  const broadNetworkAccess = {
    title: "Broad Network Access",
    data: "Cloud computing resources can be accessed via the network through standard mechanisms and platforms such as mobile phones, tablets, laptops, and workstations.",
  };

  const resourcePooling = {
    title: "Resource Pooling",
    data: "What gives cloud providers economies of scale, which they pass on to their customers, making cloud cost-efficient.\nResources dynamically assigned based on demand",
  };

  const rapidElasticity = {
    title: "Rapid Elasticity",
    data: "You can access more resources when you need them, and scale back when you don't",
  };

  const measuredServices = {
    title: "Measured Services",
    data: "You only pay for what you use or reserve as you go.\nResource usage is monitored, measured, and reported transparently based on utilization.",
  };

  const deploymentModels = {
    title: "3 Types of cloud deployment models",
    list: ["Public", "Private", "Hybrid"],
  };

  const publicDeploymentModel = {
    title: "Public Deployment Model",
    data: "Leverage cloud services over the open internet on hardware owned by the cloud provider, but its usage is shared by other companies.",
  };

  const privateDeploymentModel = {
    title: "Private Deployment Model",
    data: "The cloud infrasturcture is provisioned for exclusive use by a single organization. It could run on-permises or it could be owned, managed, and operated by a service provider.",
  };

  const hybridDeploymentModel = {
    title: "Hybrid Deployment Model",
    data: "Mix of both public and private clouds, working together seamlessly",
  };

  const serviceModels = {
    title: "3 Service Models",
    list: [
      "IaaS (Infrastructure - Infrastructure as a Service)",
      "PaaS (Platform - Platform as a Service model)",
      "SaaS (Application - Software as a Service)",
    ],
  };

  const IaaS = {
    title: "Infrastructure as a Service",
    data: "You get access to infrasturcture and physical computing resourcesnsuch as servers, networking, storage, and data center space without the need to manage or operate them.",
  };

  const PaaS = {
    title: "Platform as a Service model",
    data: "You get access to the platform, that is the hardware and software tools, usually those needed to develop and deploy applications to users over the Internet.",
  };

  const SaaS = {
    title: "Software as a Service",
    data: 'Is a software licensing and delivery model in which software and applications are centrally hosted and licensed on a subscription basis, and sometimes also referred to as "on-demand software"',
  };

  return (
    <>
      <HeadingL3 title="Definition and Essential Characteristics of Cloud Computing" />
      <OneLiner>
        Cloud Computing - Delivery of on-demand computing resources
      </OneLiner>
      <UnOrderdList
        heading={cloudComputing.title}
        description={cloudComputing.description}
        listData={cloudComputing.list}
      />
      <OneLiner>CaaS (Cloud Computing as a Service)</OneLiner>
      <UnOrderdList heading={cloudModel.title} listData={cloudModel.list} />
      <Gap />
      <HeadingL4 title="5 Essential characteristics" />
      <UnOrderdList
        heading={essentialCharacteristics.title}
        listData={essentialCharacteristics.list}
      />
      <QA
        question={onDemandSelfService.title}
        answer={onDemandSelfService.data}
      />
      <QA
        question={broadNetworkAccess.title}
        answer={broadNetworkAccess.data}
      />
      <QA question={resourcePooling.title} answer={resourcePooling.data} />
      <QA question={rapidElasticity.title} answer={rapidElasticity.data} />
      <QA question={measuredServices.title} answer={measuredServices.data} />
      <Gap />
      <HeadingL4 title="3 Deployment models" />
      <UnOrderdList
        heading={deploymentModels.title}
        listData={deploymentModels.list}
      />
      <QA
        question={publicDeploymentModel.title}
        answer={publicDeploymentModel.data}
      />
      <QA
        question={privateDeploymentModel.title}
        answer={privateDeploymentModel.data}
      />
      <QA
        question={hybridDeploymentModel.title}
        answer={hybridDeploymentModel.data}
      />
      <Gap />
      <HeadingL4 title="3 Service models" />
      <UnOrderdList
        heading={serviceModels.title}
        listData={serviceModels.list}
      />
      <QA question={IaaS.title} answer={IaaS.data} />
      <QA question={PaaS.title} answer={PaaS.data} />
      <QA question={SaaS.title} answer={SaaS.data} />
    </>
  );
};

export default DefinitionAndEssentialCharacteristicsOfCloudComputing;
