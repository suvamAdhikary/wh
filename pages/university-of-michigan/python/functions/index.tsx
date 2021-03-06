import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import OneLiner from "../../../../components/OneLiner";
import QA from "../../../../components/QA";
import UnOrderdList from "../../../../components/lists/UnOrderdList";
import { useApp } from "../../../../context/AppContext";

const Functions: NextPage = () => {
  const buildingOurOwnFunctionsData = [
    "We create a new function using the def keyword followed by optional parameters in parentheses",
    "We indent the body of the function",
    "This defines the function but does not execute the body of the function",
  ];

  const argumentsData = [
    "An argument is a value we pass into the function as its input when we call the function",
    "We use arguments so we can direct the function to do different kinds of work when we call it at different times",
    "We put the arguments in parentheses after the name of the function",
  ];

  const parametersData =
    'A parameter is a variable which we use in the function definition. It is a "handle" that allows the code in the function to access the arguments for a particular function invocation';

  const returnValuesData =
    "Often a function will take its arguments, do some computation, and return a value to be used as the value of the function call in the calling expression. The return keyword is used for this";

  const returnValueData = [
    "A fruitful function is one that produces a result (or return value)",
    'The return statement ends the function execution and "sends back" the result of the function',
  ];

  const multipleParametersArgumentsData = [
    "We can define more than one parameter in the function definition",
    "We simply add more than one arguments when we call the function",
    "We match the number and order of arguments and parameters",
  ];

  const { showBackBtn, hideBackBtn } = useApp();
  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn;
    };
  }, []);

  return (
    <>
      <Layout title="Functions - Python">
        <>
          <OneLiner>
            A function is some stored code that we use. A function takes some
            input and produces an output.
          </OneLiner>
          <UnOrderdList
            heading="Building our Own Functions"
            listData={buildingOurOwnFunctionsData}
          />
          <UnOrderdList heading="Arguments" listData={argumentsData} />
          <QA question="Parameters" answer={parametersData} />
          <QA question="Return Values" answer={returnValuesData} />
          <UnOrderdList heading="Return Value" listData={returnValueData} />
          <UnOrderdList
            heading="Multiple Parameters / Arguments"
            listData={multipleParametersArgumentsData}
          />
        </>
      </Layout>
    </>
  );
};

export default Functions;
