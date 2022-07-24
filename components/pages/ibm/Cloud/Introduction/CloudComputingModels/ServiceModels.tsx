import React from "react";
import Gap from "../../../../../Gap";
import HeadingL3 from "../../../../../headings/HeadingL3";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";

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

  const IaaS = {
    title: "Infrastructure-as-a-Service ( IaaS )",
    list: [
      "IaaS is a form of cloud computing that delivers fundamental compute, network, and storage resources to consumers on-demand, over the internet, on a pay-as-you-go basis.",
      "The cloud provider hosts the infrastructure components traditionally present in an on-premises data center as well as the virtualization or hypervisor layer.",
      "In an IaaS Cloud environment, customers can create or provision virtual machines (or VMs) in their choice of Region and Zone available from the Cloud Provider.",
      "These VMs typically come pre-installed the customer’s choice of operating system. The customers can then deploy middleware, install applications, and run workloads on these VMs. They can also and create storage for their workloads and backups.",
      "Cloud providers often provide customers the ability to track and monitor the performance and usage of their cloud services and manage disaster recovery.",
    ],
    keyComponents: {
      title: "Key Components of Cloud Infrastructure",
      list: [
        {
          heading: "Physical Data Centers:",
          list: [
            "IaaS providers manage large data centers that contain the physical machines required to power the various layers of abstraction on top of them.",
            "In most IaaS models, end users do not interact directly with the physical infrastructure but experience it as a service provided to them.",
          ],
        },
        {
          heading: "Compute:",
          list: [
            "IaaS providers manage the hypervisors and end-users programmatically provision virtual instances with desired amounts of compute, memory, and storage resources.",
            "Cloud compute typically comes with supporting services like auto scaling and load balancing that provide scalability and high performance.",
          ],
        },
        {
          heading: "Network:",
          list: [
            "Users get access to networking resources on the cloud through virtualization or programmatically, through APIs.",
          ],
        },
        {
          heading: "Storage:",
          list: [
            "There are three types of cloud data storage: object, file, and block storage.",
            "Object storage is the most common mode of storage in the cloud, given that it is highly distributed and resilient.",
          ],
        },
      ],
    },
    useCases: {
      title: "Use Cases",
      list: [
        "Organizations today are using cloud infrastructure services to enable their teams to set up test and development environments faster, helping create new applications more quickly.",
        "By abstracting the low-level components, cloud infrastructure is helping developers focus more on business logic than infrastructure management.",
        "Business continuity and disaster recovery require a significant amount of technology and staff investments. IaaS is helping organizations reduce this cost and make applications and data accessible as usual during a disaster or outage.",
        "Organizations are using cloud infrastructure to deploy their web applications faster and also scale infrastructure up and down as demand fluctuates.",
        "Organizations are leveraging the high-performance computing capabilities of cloud infrastructure to solve complex problems involving millions of variables and calculations such as climate and weather predictions and financial modeling. Mining massive data sets to locate valuable patterns, trends, and associations requires a huge amount of processing power.",
        "Cloud infrastructure not only provides the required high-performance computing but also makes it economically viable. While there are some concerns regarding the lack of transparency in the cloud infrastructure’s configuration and management and dependency on a third-party for workload availability and performance, Infrastructure-as-a-Service is the fastest growing cloud model today.",
      ],
    },
  };

  const PaaS = {
    title: "What is PaaS?",
    description:
      "A cloud computing model that provides a complete application platform to",
    list: ["Develop", "Deploy", "Run", "Manage"],
    closerLine: "created by them or acquired from a third-party.",
    hostAndManage: {
      title: "PaaS Providers Host & Manage",
      description:
        "Installation, Configuration, Operation of Application Infrastructure:",
      list: [
        "Servers",
        "Networks",
        "Storage",
        "Operating System",
        "Application Runtimes",
        "APIs",
        "Middleware",
        "Databases",
      ],
      closerLine:
        "and other tools at their data center.\nThe provider also takes responsibility for the installation, configuration, and operation of the application infrastructure, leaving the user responsible for only the application code and its maintenance.\nCustomers pay for this service on a usage basis and purchase resources on-demand.",
    },
    characteristics: {
      title: "Characteristics",
      description:
        "With PaaS, the cloud service provider delivers and manages the entire platform infrastructure, abstracting users from the lower-level details of the environment.",
      list: [
        {
          heading: "High Level of Abstraction:",
          list: [
            "PaaS clouds are distinguished by the high level of abstraction they provide to the users, eliminating the complexity of deploying applications, configuring infrastructure, and provisioning and configuring supporting technologies like load balancers and databases.",
          ],
        },
        {
          heading: "Support Services and APIs:",
          list: [
            "PaaS clouds provide services and APIs that help simplify the job of developers in delivering elastically scalable and highly available cloud applications.",
            "These services typically include a variety of capabilities such as APIs for distributed caching, queuing and messaging, file and data storage, workload management, user identity, and analytics, thus eliminating the need to integrate disparate components.",
          ],
        },
        {
          heading: "Run-time Environments:",
          list: [
            "The PaaS run-time environment executes end-user code according to policies set by the application owner and cloud provider.",
          ],
        },
        {
          heading: "Rapid Deployment Mechanisms:",
          list: [
            "Many of the PaaS offerings provide developers with rapid deployment mechanisms, or “push and run” mechanism, for deploying and running applications.",
          ],
        },
        {
          heading: "Middleware Capabilities:",
          list: [
            "PaaS offerings support a range of application infrastructure or middleware capabilities.",
            "Such as application servers, database management systems, business analytics servers, mobile back-end services, integration services, business process management systems, rules engines, and complex event processing systems.",
            "Such an application infrastructure assists developers by reducing the amount of code that must be written while expanding the application’s functional capabilities.",
          ],
        },
      ],
    },
    useCases: {
      title: "Use Cases",
      list: [
        {
          heading: "API Development and Management:",
          list: [
            "Organizations are using PaaS to develop, run, manage, and secure APIs and microservices, which are loosely coupled, independently deployable components and services.",
          ],
        },
        {
          heading: "Internet of Things ( IOT ):",
          list: [
            "PaaS clouds support a broad range of application environments, programming languages, and tools used for IoT deployments.",
          ],
        },
        {
          heading: "Business Analytics / Intelligence:",
          list: [
            "PaaS tools allow organizations to analyze their data to find business insights that enable more informed business decisions and predictions.",
          ],
        },
        {
          heading: "Business Process Management ( BPM ):",
          list: [
            "Organizations are using the PaaS cloud to access BPM platform delivered as a service.",
          ],
        },
        {
          heading: "Master Data Management ( MDM ):",
          list: [
            "Organizations are leveraging the PaaS cloud to provide a single point of reference for critical business data such as information about customer transactions and analytical data to support decision making.",
          ],
        },
      ],
    },
    advantages: {
      title: "Advantages of PaaS Cloud",
      list: [
        {
          heading: "Scalability",
          list: [
            "Scalability, made possible because of the rapid allocation and deallocation of resources with a pay-as-you-use model offered by PaaS.",
          ],
        },
        {
          heading: "Faster Time to Market",
          list: [
            "The APIs, support services, and middleware capabilities that PaaS clouds provide assist developers in focusing their efforts on application development and testing, resulting in faster time to market for their products and services.",
            "Middleware capabilities also reduce the amount of code that needs to be written while expanding the application’s functional capabilities.",
          ],
        },
        {
          heading: "Greater Agility and Innovation",
          list: [
            "Greater agility and innovation because using PaaS platforms means that you can experiment with multiple operating systems, languages, and tools without having to invest in these resources.",
            "You can evaluate and prototype ideas with very low risk exposure resulting in faster, easier, less-risky adoption of a wider range of resources.",
          ],
        },
      ],
    },
    offerings: {
      title: "PaaS Available Offerings",
      list: [
        "AWS Elastic Beanstalk",
        "Cloud Foundry",
        "IBM Cloud Paks",
        "Windows Azure",
        "RedHat OpenShift",
        "Magento Commerce Cloud",
        "Force.com",
        "Apache Stratos",
      ],
    },
    risks: {
      title: "Risks of PaaS",
      list: [
        "Information security threats",
        "Dependency on the service provider’s infrastructure",
        "Customers lack control over changes in strategy, service offerings, or tools",
      ],
    },
  };

  const SaaS = {
    title: "What is SaaS?",
    description:
      "Software-as-a-Service, “SaaS”, is a cloud offering that provides users with access to a service provider’s cloud-based software.\nApplications reside on a remote cloud network, and users use these applications without having to maintain and update the infrastructure.",
    list: [
      {
        heading: "Provides Maintains:",
        list: ["Servers", "Databases", "Application Code", "Security"],
      },
      {
        heading: "Providers Manages Application:",
        list: ["Security", "Availability", "Performance"],
      },
    ],
    supports: {
      title: "SaaS Supports",
      description:
        "According to Forrester Research, SaaS has overtaken on-premises solutions in categories such as human capital management (HCM), customer relationship management (CRM), and collaboration. Solutions once available with several different deployment options are now SaaS-only.",
      list: [
        {
          heading: "Email and Collaboration",
          list: [
            "email and collaboration via offerings such as Microsoft's Office 365 and Google's Gmail.",
          ],
        },
        {
          heading: "Customer Relationship Management",
          list: [
            "Customer Relationship Management via services such as NetSuite CRM and Salesforce.",
          ],
        },
        {
          heading: "Human Resource Management",
          list: [
            "Human Resource Management via services from Workday and SAP SuccessFactors.",
          ],
        },
        {
          heading: "Financial Management",
          list: [
            "Financial management, billing and collaboration, and many more.",
          ],
        },
      ],
    },
    characteristics: {
      title: "Key Characteristics",
      list: [
        {
          heading: "Multitenant Architecture",
          list: [
            "SaaS clouds have a multitenant architecture. Infrastructure and code are maintained centrally and accessed by all users.",
          ],
        },
        {
          heading: "Manage Privileges and Monitor Data",
          list: [
            "SaaS makes it easy for users to manage privileges, monitor data use, and ensure everyone sees the same information at the same time.",
          ],
        },
        {
          heading: "Security, Compliance, Maintenance",
          list: [
            "Security, compliance, and maintenance are all part of the offering.",
          ],
        },
        {
          heading: "Customize Applications",
          list: [
            "Users can customize applications to fit their business processes with point-and-click ease.",
            "Users can customize the UI to work with their branding guidelines; they can modify data fields and enable or disable features within the business process.",
            "These customizations are preserved through upgrades.",
          ],
        },
        {
          heading: "Subscription Model",
          list: [
            "Users pay for the use of the services via a subscription model.",
          ],
        },
        {
          heading: "Scalable Resources",
          list: [
            "The use of resources can be scaled easily, depending on service needs.",
          ],
        },
      ],
    },
    benefits: {
      title: "Key Benefits",
      list: [
        {
          heading: "Greatly Reducing The Time from Decision to Value",
          list: [
            "Businesses can directly procure solutions without upfront capital and assistance from IT, greatly reducing the time from decision to value from months to days.",
          ],
        },
        {
          heading: "Increases Workforce Productivity and Efficiency",
          list: [
            "Users can access core business apps from wherever they are.",
            "They can also buy and deploy apps in minutes, reducing the typical obstacles enterprises have to test the products they might use.",
          ],
        },
        {
          heading: "Spread Out Software Costs Over Time",
          list: [
            "Using SaaS applications, individuals and small enterprises can spread out their software costs over time. ",
          ],
        },
      ],
    },
    useCases: {
      title: "Use Cases",
      description:
        "Organizations are moving to SaaS for their core business needs as part of their strategic transformation.",
      list: [
        "To reduce on-premises IT infrastructure and reduce capital expenditure.",
        "Oragnzaitions are leveraging SaaS to avoid the need for ongoing upgrades, maintenance, and patching, done traditionally by internal IT resources.",
        "Applications run reliably with minimal input, for example, email servers and office collaboration and productivity tools.",
        "Organizations are increasingly opting for SaaS eCommerce Platforms to manage their websites, marketing, sales, and operations.",
        "With SaaS, organizations are able to take advantage of the resilience and business continuity of the cloud provider.",
        "Enterprises are now developing SaaS integration platforms (or SIPs) for building additional SaaS applications, moving SaaS beyond standalone software functionality to a platform for mission-critical applications.",
      ],
      closerLine: "=> Trending towards SaaS integration platforms.",
    },
    concerns: {
      title: "Concerns",
      list: [
        "Data ownership and data safety.",
        "Security is an important consideration when you’re allowing a third-party to maintain business-critical data.",
        "Application access relies on a good internet connection. If you’re not connected, you cannot access the apps.",
      ],
    },
  };

  const serviceModelsSummery = {
    title: "",
    list: [
      "Cloud computing allows us to utilize technology as a service, leveraging remote resources on-demand, on a pay-as-you-model. There are three main service models available on the cloud—Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS).",
      "IaaS provides the fundamental compute, network, and storage resources for customers on-demand.",
      "PaaS provides customers the hardware, software, and infrastructure to develop, deploy, manage, and run applications created by them or acquired from a third-party.",
      "SaaS provides access to users to a service provider’s cloud-based software. Users simply access the applications on Cloud while the Cloud provider maintains the infrastructure, platform, data, application code, security, availability, and performance of the application.",
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
      <OneLiner>
        <UnOrderdList heading={IaaS.title} listData={IaaS.list} />
        <Gap />
        <UnOrderdList
          heading={IaaS.keyComponents.title}
          isMultiList={true}
          listData={IaaS.keyComponents.list}
        />
        <Gap />
        <UnOrderdList
          heading={IaaS.useCases.title}
          listData={IaaS.useCases.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={PaaS.title}
          description={PaaS.description}
          listData={PaaS.list}
          closerLine={PaaS.closerLine}
        />
        <Gap />
        <UnOrderdList
          heading={PaaS.hostAndManage.title}
          description={PaaS.hostAndManage.description}
          listData={PaaS.hostAndManage.list}
          closerLine={PaaS.hostAndManage.closerLine}
        />
        <Gap />
        <UnOrderdList
          heading={PaaS.characteristics.title}
          description={PaaS.characteristics.description}
          isMultiList={true}
          listData={PaaS.characteristics.list}
        />
        <Gap />
        <UnOrderdList
          heading={PaaS.useCases.title}
          isMultiList={true}
          listData={PaaS.useCases.list}
        />
        <Gap />
        <UnOrderdList
          heading={PaaS.advantages.title}
          isMultiList={true}
          listData={PaaS.advantages.list}
        />
        <Gap />
        <UnOrderdList
          heading={PaaS.offerings.title}
          listData={PaaS.offerings.list}
        />
        <Gap />
        <UnOrderdList heading={PaaS.risks.title} listData={PaaS.risks.list} />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={SaaS.title}
          description={SaaS.description}
          isMultiList={true}
          listData={SaaS.list}
        />
        <Gap />
        <UnOrderdList
          heading={SaaS.supports.title}
          description={SaaS.supports.description}
          isMultiList={true}
          listData={SaaS.supports.list}
        />
        <Gap />
        <UnOrderdList
          heading={SaaS.characteristics.title}
          isMultiList={true}
          listData={SaaS.characteristics.list}
        />
        <Gap />
        <UnOrderdList
          heading={SaaS.benefits.title}
          isMultiList={true}
          listData={SaaS.benefits.list}
        />
        <Gap />
        <UnOrderdList
          heading={SaaS.useCases.title}
          description={SaaS.useCases.description}
          listData={SaaS.useCases.list}
          closerLine={SaaS.useCases.closerLine}
        />
        <Gap />
        <UnOrderdList
          heading={SaaS.concerns.title}
          listData={SaaS.concerns.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={serviceModelsSummery.title}
          listData={serviceModelsSummery.list}
        />
      </OneLiner>
    </>
  );
};

export default ServiceModels;
