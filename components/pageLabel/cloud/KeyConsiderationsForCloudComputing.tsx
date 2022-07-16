import React from "react";
import Gap from "../../Gap";
import HeadingL3 from "../../headings/HeadingL3";
import HeadingL4 from "../../headings/HeadingL4";
import UnOrderdList from "../../UnOrderdList";

const KeyConsiderationsForCloudComputing = () => {
  const infrastructureAndWorkloads = {
    title: "Infrastructure and Workloads",
    list: [
      "The cost of building and operating data centers can become astronomical.",
      "Low initial costs and pay-as-you-go attributes of cloud computing can add up to significant cost savings.",
    ],
  };

  const SaaSAndDevelopmentPlatforms = {
    title: "SaaS and Development Platforms",
    description: "Leasing or Buying ?",
    list: [
      "Organization need to consider if paying for application access is a more viable option than purchasing off-the-shelf software and subsequently investing in upgrades.",
    ],
  };

  const speedAndProductivity = {
    title: "Speed and Productivity",
    list: [
      "Organizations also need to consider what it means for them to get a new application up and running in 'X' hours on the cloud versus a couple of weeks, even months on traditional platforms.",
      "Also, the person-hour cost efficiencies increases from using cloud dashboards, real-time statistics, and active analytics.",
    ],
  };

  const riskFactor = {
    title: "Risk Factor",
    description: "Hardware and software or Rent by the hour ?",
    list: [
      "Organizations need to consider the impact of making a wrong decision, their risk exposure.",
      "Is it safer for an organization to work on a 12-month plan to build, write, test, and release that code if they're uncertain about adoption?",
      'And is it better for them to "try" something new paying-as-you-go rather than making long-term decisions based on little or no trial or adoption?',
    ],
  };

  const flexibility = {
    title: "Flexibility",
    list: [
      "Users can scale back or scale up services to fit their needs",
      "Customize applications",
      "Access cloud services from anywhere",
      "Virtual Private Cloudes",
      "Encryption",
      "API keys",
    ],
  };

  const efficiency = {
    title: "Efficiency",
    list: [
      "Enterprise users can get applications to market without worrying about underlying infrastructure costs or its maintenance",
      "Cloud-based applications and data are accessible from virtually any internet-connected device",
      "Hardware failures do not result in data loss because of networked backups",
    ],
  };

  const strategicValue = {
    title: "Strategic Value",
    list: [
      "Cloud services give enterprises a competitive advantage by providing the most innovative technologies available while managing the underlying infrastructure, thus enabling organizations to focus on their priorities",
    ],
  };

  const someChallenges = {
    title: "Challenges",
    list: [
      "Data security, associated with loss or unavailability of data causing business disruption",
      "Governance and sovereignty issues",
      "Legal, regulatory, and compliance issues",
      "Lack of standardization in how the constantly evolving technologies integrate and interoperate",
      "Choosing the right deployment and service models to serve specific needs",
      "Partnering with the right cloud service providers",
      "Concerns related to business continuity and disaster recovery",
    ],
  };

  return (
    <>
      <HeadingL3 title="Key Considerations for Cloud Computing" />
      <HeadingL4 title="Key Drivers for moving to cloud" />
      <UnOrderdList
        heading={infrastructureAndWorkloads.title}
        listData={infrastructureAndWorkloads.list}
      />
      <UnOrderdList
        heading={SaaSAndDevelopmentPlatforms.title}
        description={SaaSAndDevelopmentPlatforms.description}
        listData={SaaSAndDevelopmentPlatforms.list}
      />
      <UnOrderdList
        heading={speedAndProductivity.title}
        listData={speedAndProductivity.list}
      />
      <UnOrderdList
        heading={riskFactor.title}
        description={riskFactor.description}
        listData={riskFactor.list}
      />
      <Gap />
      <HeadingL4 title="Benifits of cloud adoption" />
      <UnOrderdList heading={flexibility.title} listData={flexibility.list} />
      <UnOrderdList heading={efficiency.title} listData={efficiency.list} />
      <UnOrderdList
        heading={strategicValue.title}
        listData={strategicValue.list}
      />
      <Gap />
      <HeadingL4 title="Challenges of cloud adoption" />
      <UnOrderdList
        heading={someChallenges.title}
        listData={someChallenges.list}
      />
    </>
  );
};

export default KeyConsiderationsForCloudComputing;
