import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import QA from "../../../components/QA";
import UnOrderdList from "../../../components/lists/UnOrderdList";
import { useApp } from "../../../context/AppContext";

const Loops: NextPage = () => {
  const { showBackBtn, hideBackBtn } = useApp();

  const loopsData = {
    heading: "Loops",
    data: "Loops (repeted steps) have iteration variables that change each time through a loop. Often these iteration variables go through a sequence of numbers.",
  };

  const breakingOutOfALoopData = {
    heading: "Breaking Out of a Loop",
    list: [
      "The break statement ends the current loop and jumps to the statement immediately following the loop",
      "It is like a loop test that can happen anywhere in the body of the loop",
    ],
  };

  const finishingAnIterationWithContinueData = {
    heading: "Finishing an Iteration with Continue",
    list: "The continue statement ends the current iteration and jumps to the top of the loop and start the next iteration",
  };

  const aSimpleDefiniteLoopData = {
    heading: "A Simple Definite Loop",
    list: "Definite loops (for loops) have explicit iteration variables that change each time through a loop. These iteration variables move through the sequence or set",
  };

  const lookingAtInData = {
    heading: "Looking at in...",
    list: [
      'The iteration variable "iterates" through the sequence (orderd set)',
      "The block (body) of code is executed once for each value in the sequence",
      "The iteration variable move through all of the values in the sequence",
    ],
  };

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn;
    };
  }, []);

  return (
    <>
      <Layout title="Loops - Python">
        <>
          <QA question={loopsData.heading} answer={loopsData.data} />
          <UnOrderdList
            heading={breakingOutOfALoopData.heading}
            listData={breakingOutOfALoopData.list}
          />
          <QA
            question={finishingAnIterationWithContinueData.heading}
            answer={finishingAnIterationWithContinueData.list}
          />
          <QA
            question={aSimpleDefiniteLoopData.heading}
            answer={aSimpleDefiniteLoopData.list}
          />
          <UnOrderdList
            heading={lookingAtInData.heading}
            listData={lookingAtInData.list}
          />
        </>
      </Layout>
    </>
  );
};

export default Loops;
