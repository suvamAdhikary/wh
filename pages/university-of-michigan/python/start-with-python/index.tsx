import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import UnOrderdList from "../../../../components/lists/UnOrderdList";
import OneLiner from "../../../../components/OneLiner";
import QA from "../../../../components/QA";

const StartPython: NextPage = () => {
  const programStepsOrProgramFlow: string[] = [
    "Like a racipe or installation instructions, a program is a sequence of steps to be done in order.",
    "Some steps are conditional - they may be skipped.",
    "Sometimes a step or a group of steps is to be repeated.",
    "Sometimes we store a set of steps to be used over and over as needed several places throughout the program.",
  ];

  return (
    <>
      <Layout title="Programming for Everybody (Getting Started with Python)">
        <>
          <QA
            question="Reserverved Words"
            answer="False, None, True, and, as, assert, break, class, if, def, del, elif, else, except, return, for, from, global, try, import, in, is, lambda, while, not, or, pass, raise, finally, continue, nonlocal, with, yield"
          />
          <QA
            question="Interactive"
            answer="You type directly to Python one line at a time and it responds"
          />
          <QA
            question="Script"
            answer="You enter a sequence of statements (lines) into a file using a text editor and tell Python to execute the statements in the file"
          />
          <UnOrderdList
            heading="Program Steps or Program Flow"
            listData={programStepsOrProgramFlow}
          />
          <OneLiner>Sequential Repeated Conditional</OneLiner>
        </>
      </Layout>
    </>
  );
};

export default StartPython;
