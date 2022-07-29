import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import UnOrderdList from "../../../../../lists/UnOrderdList";

const KeyCloudServiceProvidersAndTheirServices = () => {
  const alibabaCloud = {
    title: "Alibaba Cloud ( Aliyun )",
    list: [
      "Compute",
      "Analytics",
      "Network",
      "Storage",
      "Security",
      "Monitoring and managing",
      "Communication",
      "IoT",
      "Application Development",
      "Data Migration",
      "Web hosting, etc.",
    ],
  };

  const amazonWebServices = {
    title: "Amazon Web Services ( AWS )",
    list: [
      "Compute",
      "DevOps",
      "IoT",
      "Machine Learning",
      "Networking",
      "Robotics",
      "Data Analytics",
      "Content Delivery",
      "Serverless Computing, etc.",
    ],
  };

  const googleCloudPlatform = {
    title: "Google Cloud Platform ( GCP )",
    list: [
      "Infrastructure",
      "Platform",
      "Serverless Computing",
      "Google Search",
      "YouTube",
      "Communication",
      "Productivity",
      "Collaboration",
      "Storage",
      "Web application development",
      "Web application hosting, etc.",
    ],
  };

  const IBMCloud = {
    title: "IBM Cloud",
    list: [
      "Compute",
      "Network",
      "Storage",
      "Management",
      "Security",
      "DevOps",
      "Databases",
      "Data & Analytics",
      "Bare Metal Servers",
      "VMWare Hosting",
      "Virtual Private Cloud",
      "Blockchain",
      "AI (Watson)",
      "IoT, etc.",
    ],
  };

  const microsoft = {
    title: "Microsoft Azure",
    list: ["Building", "Testing", "Deploying", "Managing"],
  };

  const oracleCloud = {
    title: "Oracle Cloud",
    list: [
      "ERP",
      "SCM",
      "HCM",
      "Marketing",
      "Sales",
      "Cloud Database Services, etc.",
    ],
  };

  const salesforce = {
    title: "Salesforce",
    list: [
      "Sales Cloud",
      "Service Cloude",
      "Marketing Cloud",
      "Analytics in real-time",
      "Customer success and support",
      "Social platforms",
    ],
  };

  const SAP = {
    title: "SAP",
    description: "Enterprise software and applications",
    list: ["ERP", "CRM", "HR", "FINANCE", "SAP Cloud Platform, etc."],
  };

  return (
    <>
      <HeadingL3 title="Key Cloud Service Providers and Their Services" />
      <UnOrderdList heading={alibabaCloud.title} listData={alibabaCloud.list} />
      <UnOrderdList
        heading={amazonWebServices.title}
        listData={amazonWebServices.list}
      />
      <UnOrderdList
        heading={googleCloudPlatform.title}
        listData={googleCloudPlatform.list}
      />
      <UnOrderdList heading={IBMCloud.title} listData={IBMCloud.list} />
      <UnOrderdList heading={microsoft.title} listData={microsoft.list} />
      <UnOrderdList heading={oracleCloud.title} listData={oracleCloud.list} />
      <UnOrderdList heading={salesforce.title} listData={salesforce.list} />
      <UnOrderdList
        heading={SAP.title}
        description={SAP.description}
        listData={SAP.list}
      />
    </>
  );
};

export default KeyCloudServiceProvidersAndTheirServices;
