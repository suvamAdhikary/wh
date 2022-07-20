import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import OneLiner from "../../../components/OneLiner";
import UnOrderdList from "../../../components/lists/UnOrderdList";
import { useApp } from "../../../context/AppContext";

const IssuesEthicsBias: NextPage = () => {
  const AIEthicsData = {
    title: "AI Ethics",
    description:
      "There are ethical issues concerning AI that must be addressed in the medium term, short term and now",
    list: ["Avoid bias", "Use good training data", "Test and audit"],
  };

  const ethicalIssue = {
    title: "Ethical Issue",
    description:
      "Is a person entitled to know when they are speaking to a human being and when they are speaking to a bot ?",
    list: [
      "As many bots are now indistinguishable from human beings. Especially during short conversations a lack of trust in AI systems can be exacerbated by lack of transparency.",
      "The sudden discovery that one is not speaking to a human being but rather a bot can be unsettling and can make the transaction feel unequal.",
    ],
  };

  const trustData = {
    title: "Trust",
    description: "Trust is key in developing useful, successful AI systems",
    list: [
      "Transparency:- People should be aware when they are interacting with an AI system, and understand what their expectations for the interaction should be.",
      "Accountability:- Developers should create AI systems with algorithmic accountability, so that any unexpected results can be traced and undone if required.",
      "Privacy:- Personal information should always be protected.",
      "Lack of Bias:- Developers should use representative training data to avoid bias, and regular audits to detect any bias creeping in.",
    ],
  };

  const AIJobs = {
    title: "",
    description: "AI is effective for repetitive and rule-based jobs",
    list: ["Bank tellers", "Salespeople", "Call center operatives", "Drivers"],
  };

  const importantPoints = {
    title: "",
    description: "",
    list: [
      "AI raises ethical concerns because of the risks of bias and lack of transparency.",
      "AI professionals can mitigate against those risks.",
      "Mitigation strategies include providing effective training data, performing regular audits to ensure that AI systems are performing as expected, and adapting algorithms to adjust for bias.",
      "Many jobs will be lost to AI, and that the most vulnerable jobs will be those with rules-based, repeatable tasks, like call center workers and drivers.",
      "AI will generate new jobs, and new types of work.",
      "AI is already being used to benefit humankind in many fields, including healthcare, crime prevention, agriculture, and power generation, among others.",
      "Gaining public trust is key to allowing AI to reach its full potential.",
      "IBM follows three principles to develop ethical AI – Purpose, Transparency, and Skills.",
    ],
  };

  const { showBackBtn, hideBackBtn } = useApp();

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn;
    };
  }, []);

  return (
    <>
      <Layout title="Issues Ethics Bias - AI">
        <>
          <OneLiner>The number one key challenge of AI is privacy.</OneLiner>
          <OneLiner>
            Whoever owns the rights to use the algorithm owns it&apos;s
            applications.
          </OneLiner>
          <OneLiner>
            Ethics is not a technological problem, ethics is a human problem.
          </OneLiner>
          <OneLiner>
            Humans subconsciously apply certain kinds of bias that becomes
            obvious in large scale data which can then impact Machine Learning
            algorithm outcomes if those data sets are used for training.
          </OneLiner>
          <OneLiner>
            AI is extremely powerful and can be used in ways that negatively
            affect society.{" "}
          </OneLiner>
          <UnOrderdList
            heading={AIEthicsData.title}
            description={AIEthicsData.description}
            listData={AIEthicsData.list}
          />
          <OneLiner>Experts must guard against introducing bias</OneLiner>
          <OneLiner>
            AI powered risk assessment systems used in courts that help predict
            the probability of a person reoffending and hence provide guidelines
            for sentencing or granting parole based on the calculated risk of
            recidivism. There is concern that these systems may be biased
            against people of color.
          </OneLiner>
          <OneLiner>
            Developers of AI systems can guard against introducing bias by
            providing effective training data and performing regular tests and
            audits to ensure the system is performing as expected.
          </OneLiner>
          <UnOrderdList
            heading={ethicalIssue.title}
            description={ethicalIssue.description}
            listData={ethicalIssue.list}
          />
          <UnOrderdList
            heading={trustData.title}
            description={trustData.description}
            listData={trustData.list}
          />
          <OneLiner>
            Jobs which have repeatable tasks, whether in office work or manual
            work, are good candidates for being replaced by AI systems.
          </OneLiner>
          <UnOrderdList
            heading={AIJobs.title}
            description={AIJobs.description}
            listData={AIJobs.list}
          />
          <OneLiner>
            Concern among economists that developing countries are at even
            greater risk from AI encroaching into the job market with low-wage
            jobs quickly being lost.
          </OneLiner>
          <OneLiner>
            There are some ways that a developing country with many people
            looking for work can participate in the development of AI, and gain
            some benefits from the technology.
          </OneLiner>
          <UnOrderdList
            heading={importantPoints.title}
            description={importantPoints.description}
            listData={importantPoints.list}
          />
        </>
      </Layout>
    </>
  );
};

export default IssuesEthicsBias;
