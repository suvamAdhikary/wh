import React from "react";
import Gap from "../../../../../Gap";
import HeadingL3 from "../../../../../headings/HeadingL3";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import QA from "../../../../../QA";

const DeploymentModels = () => {
  const deploymentModels = {
    title: "",
    description:
      "Deployment models indicate where the infrastructure resides, who owns and manages it, and how cloud resources and services are made available to users. The three cloud deployment models include—",
    list: ["Public Cloud", "Private Cloud", "Hybrid Cloud"],
  };

  const publicCloud = {
    title: "Public Cloud",
    description: "In a public cloud model, users get access to",
    list: ["Servers", "Storage", "Network", "Security", "Applications"],
    closerLine:
      "as services delivered by cloud service providers over the internet. Using web consoles and APIs, users can provision the resources and services they need.",
    importantPoints: {
      title: "",
      list: [
        "The cloud provider owns, manages, provisions, and maintains the infrastructure, renting it out to customers either for a subscription charge or usage-based fee.",
        "Users don’t own the servers their applications run on or storage their data consumes, or manage the operations of the servers, or even determine how the platforms are maintained.",
        "We don’t own any of these cloud resources—we make an agreement with the service provider, use the resources, and pay for what we use within a certain period.",
        "Public clouds offer significant cost savings as the provider bears all the capital, operational, and maintenance expenses for the infrastructure and the facilities they are hosted in. It makes scalability as easy as requesting more capacity.",
        "However, with a public cloud, the user does not have any control over the computing environment and is subject to the performance and security of the cloud provider’s infrastructure.",
      ],
    },
    providers: {
      title: "Public Cloud Providers in The Market",
      list: [
        "Amazon Web Services",
        "Microsoft Azure",
        "IBM Cloud",
        "Google Cloud Platform",
        "Alibaba Cloud.",
      ],
      closerLine:
        "While all providers include a common set of core services, such as servers, storage, network, security, and databases, they also offer a wide spectrum of niche services with varied payment options.",
    },
    characteristics: {
      title: "Public Cloud Characteristics",
      list: [
        "A public cloud is a virtualized multi-tenant architecture enabling tenants or users to share computing resources, residing outside their firewalls.",
        "The cloud providers pool of resources, including infrastructure, platforms, and software, are not dedicated for use by a single tenant or organization.",
        "Resources are distributed on an as-needed basis offered through a variety of subscription and pay-as-you-go models.",
      ],
    },
    benefits: {
      title: "Public Cloud Benefits",
      list: [
        {
          heading: "On-demand Resources",
          list: [
            "Vast on-demand resources are available, allowing applications to respond seamlessly to fluctuations in demand.",
          ],
        },
        {
          heading: "Economics of scale",
          list: [
            "Considering the large number of users that share the centralized cloud resources on-demand, the public cloud offers the most significant economies of scale.",
          ],
        },
        {
          heading: "Highly Reliable",
          list: [
            "The sheer number of server and network resources available on the public cloud means that a public cloud is highly reliable.",
            "If one physical component fails, the service still runs unaffected on the remaining available components.",
          ],
        },
      ],
    },
    concerns: {
      title: "Public Cloud Concerns",
      list: [
        {
          heading: "Security",
          list: [
            "Security issues such as data breaches, data loss, account hijacking, insufficient due diligence, and system and application vulnerability seem to be some of the fears users continue to have concerning security in the public cloud.",
          ],
        },
        {
          heading: "Data Sovereignty Compliance",
          list: [
            "With data being stored in different locations and accessed across national borders, it has also become increasingly critical for companies to be compliant with data sovereignty regulations governing the storage, transfer, and security of data.",
            "A service provider’s ability to not just keep up with the regulations, but also the interpretation of these regulations, is a concern shared by many businesses.",
          ],
        },
      ],
    },
    useCases: {
      title: "Public Cloud Use Cases",
      list: [
        "Building and testing applications, and reducing time-to-market for their products and services.",
        "Businesses with fluctuating capacity and resourcing needs.",
        "Build secondary infrastructures for disaster recovery, data protection, and business continuity.",
        "Cloud storage and data management services for greater accessibility, easy distribution, and backing up their data.",
        "IT departments are outsourcing the management of less critical and standardized business platforms and applications to pubic cloud providers.",
      ],
    },
  };

  const privateCloud = {
    title: "Private Cloud",
    data: 'The National Institute of Standards and Technology defines Private Cloud as\n"Cloud infrastructure provisioned for exclusive use by a single organization comprising multiple consumers, such as the business units within the organization. It may be owned, managed, and operated by the organization, a third party, or some combination of them, and it may exist on or off premises."',

    internalOrExternal: {
      title: "Internal or External",
      list: [
        {
          heading: "Internal Infrastructure",
          list: [
            "When the platform is provisioned over an organization’s internal infrastructure, it runs on-premises and is owned, managed, and operated by the organization.",
          ],
        },
        {
          heading: "External Infrastructure",
          list: [
            "When it is provisioned over a cloud provider’s infrastructure, it is owned, managed, and operated by the service provider.",
            "This external private cloud offering that resides on a cloud service provider’s infrastructure is called a Virtual Private Cloud, or VPC.",
          ],
        },
      ],
    },

    vpc: {
      title: "Virtual Private Cloud ( VPC )",
      list: [
        "A VPC is a public cloud offering that lets an organization establish its own private and secure cloud-like computing environment in a logically isolated part of a shared public cloud.",
        "Using a VPC, organizations can leverage the dynamic scalability, high availability, and lower cost of ownership of a public cloud, while having the infrastructure and security tailored to the organization’s unique needs.",
        "Virtual Private Clouds are offered by most Public Cloud providers such as IBM and Amazon.",
      ],
    },

    bestOfBothWorlds: {
      title: "Best of Both Public and Private Cloud",
      list: [
        {
          heading: "Public Cloud Benefits",
          list: ["Dynamic Scalability", "Cost Efficiency", "Self-service"],
        },
        {
          heading: "Private Cloud Controls",
          list: ["Access", "Security", "Compliance"],
        },
      ],
    },

    benefits: {
      title: "Benefits of Private Cloud",
      list: [
        {
          heading: "CONTROLLED BY INTERNAL IT",
          list: [
            "The ability to leverage the value of cloud computing using systems that are directly managed or under perceived control of the organization’s internal IT.",
          ],
        },
        {
          heading: "REDUCED COSTS",
          list: [
            "The ability to better utilize internal computing resources, such as the organization’s existing investments in hardware and software, thereby reducing costs.",
          ],
        },
        {
          heading: "BETTER SCALABILITY",
          list: [
            "Better scalability through virtualization and “cloud bursting,” i.e., leveraging public cloud instances for a period of time but returning to the private cloud when the surge is met.",
          ],
        },
        {
          heading: "CONTROLLED ACCESS & SECURITY",
          list: [
            "Controlled access and greater security measures customized to specific organizational needs.",
          ],
        },
        {
          heading: "GREATER AGILITY",
          list: [
            "The ability to expand and provision things in a relatively short amount of time, providing greater agility.",
          ],
        },
      ],
    },

    useCases: {
      title: "Private Cloud Use Cases",
      list: [
        "A private cloud is an opportunity for organizations to modernize and unify their in-house and legacy applications. Moving these applications from their dedicated hardware to the cloud also allows them to leverage the power of the compute resources and multiple services available on the cloud.",
        "Using the private cloud, organizations are integrating data and application services from their existing applications with public cloud services. This allows them to leverage their private cloud’s compute capability for the larger jobs while pulling data into an application on a private cloud to leverage public cloud services — essentially opening their data centers to work with cloud services.",
        "Application portability is a key feature of cloud platforms. Using the private cloud gives organizations the ability to build applications anywhere, and move them anywhere, without having to compromise security and compliance in the process.",
        "Some of the key reasons that may prevent an organization from moving to a public cloud include security and regulatory concerns, and data sensitivity. A private cloud offers these organizations the benefits of on-demand enterprise resources while exercising full control over critical security and compliance issues from within the environment of their dedicated cloud.",
      ],
    },
  };

  const hybridCloud = {
    title: "Hybrid Cloud",
    description:
      "Hybrid Cloud is a computing environment that connects an organization's on-premise private cloud and third-party public cloud into a single flexible infrastructure for running the organization's applications and workloads.",
    list: [
      "The mix of public and private cloud resources gives organizations the flexibility to choose the optimal cloud for each application or workload.",
      "Workloads move freely between the two clouds as needs change.",
      "Organizations can choose to run the sensitive highly regulated and mission-critical applications or workloads with reasonably constant performance and capacity requirements on private Cloud infrastructure. While deploying the less sensitive and more dynamic workloads on the public cloud.",
    ],

    cloudBursting: {
      title: "Cloud Bursting",
      data: "With proper integration and orchestration between the public and private clouds, you can leverage both clouds for the same workload. For example, you can leverage additional public cloud capacity to accommodate a spike in demand for a private cloud application also known as cloud bursting.",
    },

    tenents: {
      title: "The Three Tenents",
      list: [
        {
          heading: "Interoperable",
          list: [
            "Hybrid cloud is interoperable, which means, that the public and private cloud services can understand each other's APIs, configuration, data formats, and forms of authentication and authorization.",
          ],
        },
        {
          heading: "Scalable",
          list: [
            "When there is a spike in demand a workload running on the private cloud can leverage the additional public cloud capacity making it scalable.",
          ],
        },
        {
          heading: "Portable",
          list: [
            "A hybrid cloud is also portable, since you're no longer locked in with a specific vendor, you can move applications and data not just between on-premise and cloud systems, but also between cloud service providers.",
          ],
        },
      ],
    },

    types: {
      title: "Types of Hybrid Clouds",
      list: [
        {
          heading: "Hybrid Monocloud",
          list: [
            "A Hybrid Monocloud is a hybrid cloud with one cloud provider.",
          ],
        },
        {
          heading: "Hybrid Multicloud",
          list: [
            "A Hybrid Multicloud is an open standards-based stack that can be deployed on any public cloud infrastructure.",
            "The difference lies in the flexibility that the hybrid multicloud offers organizations to move workloads and environments from one vendor to another.",
          ],
        },
        {
          heading: "Composite Multicloud",
          list: [
            "A Hybrid multicloud called the, Composite Multicloud, which makes this flexibility even more granular as it distributes single applications across multiple providers, allowing you to move application components across cloud services and vendors as needed.",
          ],
        },
      ],
    },

    benefits: {
      title: "Hybrid Cloud Benefits",
      list: [
        "Security and Compliance",
        "Scalability and Resilience",
        "Resource Optimization",
        "Cost Saving",
        "A hybrid cloud lets organizations deploy highly regulated or sensitive workloads in a private cloud while running the less-sensitive workloads on a public cloud.",
        "Using a hybrid cloud you can scale up quickly, inexpensively, and even automatically using the public cloud infrastructure, all without impacting the other workloads running on your private cloud.",
        "Because you're not locked-in with a specific vendor and also don't have to make either-or decisions between the different cloud models, you can make the most cost-efficient use of your infrastructure budget. You can maintain workloads where they are most efficient, spin-up environments using pay-as-you-go in public cloud, and rapidly adopt new tools as you need them.",
      ],
    },

    useCases: {
      title: "Hybrid Cloud Use Cases",
      list: [
        {
          heading: "Software-as-a-Service Integration",
          list: [
            "Software-as-a-Service integration, through hybrid integration organizations are connecting software-as-a-service applications available in the public cloud to their existing public cloud, private cloud, and traditional IT applications to deliver new solutions.",
          ],
        },
        {
          heading: "Data & AI Integration",
          list: [
            "Data and AI integration, organizations today are creating richer and more personal experiences by combining new data sources on the public cloud. Such as weather, social, the Internet of things, CRM, and ERP, with existing data in analytics, machine learning, and AI capabilities.",
          ],
        },
        {
          heading: "Enhancing Legacy Apps",
          list: [
            "Enhancing legacy apps, an increasing number of organizations are using public cloud services to upgrade their user experience of their on-premises applications and deploy them globally to new devices, while incrementally modernizing their Core Business Systems.",
          ],
        },
        {
          heading: "VMware Migration",
          list: [
            "VM ware migration, more and more organizations are lifting and shifting their on-premises virtualized workloads to a public cloud without conversion or modification to reduce their on-premises data center footprint and position themselves to scale without added capital expense.",
          ],
        },
      ],
    },
  };

  const deploymentModelsSummery = {
    title: "",
    list: [
      "In the Public cloud model, the service provider owns, manages, provisions, and maintains the physical infrastructure such as data centers, servers, networking equipment, and storage, with users accessing virtualized compute, networking and storage resources as services.",
      "In the Private cloud model, the provider provisions the cloud infrastructure for exclusive use by a single organization. The private cloud infrastructure can be internal to the organization and run or on-premises. Or, it can be on a public cloud, as in case of Virtual Private Clouds (VPC) and be owned, managed, and operated by the cloud provider.",
      "In the Hybrid cloud model, an organization’s on-premise private cloud and third-party, public cloud is connected as a single, flexible infrastructure leveraging the features and benefits of both Public and Private clouds.",
    ],
  };

  return (
    <>
      <HeadingL3 title="Deployment Models" />
      <UnOrderdList
        heading={deploymentModels.title}
        description={deploymentModels.description}
        listData={deploymentModels.list}
      />
      <OneLiner>
        <UnOrderdList
          heading={publicCloud.title}
          description={publicCloud.description}
          listData={publicCloud.list}
          closerLine={publicCloud.closerLine}
        />
        <UnOrderdList
          heading={publicCloud.importantPoints.title}
          listData={publicCloud.importantPoints.list}
        />
        <Gap />
        <UnOrderdList
          heading={publicCloud.providers.title}
          listData={publicCloud.providers.list}
          closerLine={publicCloud.providers.closerLine}
        />
        <Gap />
        <UnOrderdList
          heading={publicCloud.characteristics.title}
          listData={publicCloud.characteristics.list}
        />
        <Gap />
        <UnOrderdList
          heading={publicCloud.benefits.title}
          isMultiList={true}
          listData={publicCloud.benefits.list}
        />
        <Gap />
        <UnOrderdList
          heading={publicCloud.concerns.title}
          isMultiList={true}
          listData={publicCloud.concerns.list}
        />
        <Gap />
        <UnOrderdList
          heading={publicCloud.useCases.title}
          listData={publicCloud.useCases.list}
        />
      </OneLiner>
      <OneLiner>
        <QA question={privateCloud.title} answer={privateCloud.data} />
        <Gap />
        <UnOrderdList
          heading={privateCloud.internalOrExternal.title}
          listData={privateCloud.internalOrExternal.list}
          isMultiList={true}
        />
        <Gap />
        <UnOrderdList
          heading={privateCloud.vpc.title}
          listData={privateCloud.vpc.list}
        />
        <Gap />
        <UnOrderdList
          heading={privateCloud.bestOfBothWorlds.title}
          listData={privateCloud.bestOfBothWorlds.list}
          isMultiList={true}
        />
        <Gap />
        <UnOrderdList
          heading={privateCloud.benefits.title}
          listData={privateCloud.benefits.list}
          isMultiList={true}
        />
        <Gap />
        <UnOrderdList
          heading={privateCloud.useCases.title}
          listData={privateCloud.useCases.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={hybridCloud.title}
          description={hybridCloud.description}
          listData={hybridCloud.list}
        />
        <Gap />
        <QA
          question={hybridCloud.cloudBursting.title}
          answer={hybridCloud.cloudBursting.data}
        />
        <Gap />
        <UnOrderdList
          heading={hybridCloud.tenents.title}
          isMultiList={true}
          listData={hybridCloud.tenents.list}
        />
        <Gap />
        <UnOrderdList
          heading={hybridCloud.types.title}
          isMultiList={true}
          listData={hybridCloud.types.list}
        />
        <Gap />
        <UnOrderdList
          heading={hybridCloud.benefits.title}
          listData={hybridCloud.benefits.list}
        />
        <Gap />
        <UnOrderdList
          heading={hybridCloud.useCases.title}
          isMultiList={true}
          listData={hybridCloud.useCases.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={deploymentModelsSummery.title}
          listData={deploymentModelsSummery.list}
        />
      </OneLiner>
    </>
  );
};

export default DeploymentModels;
