import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/layout/Layout";
import TwoColTable from "../../../components/tables/TwoColTable";
import UnOrderdList from "../../../components/lists/UnOrderdList";

const Conditional: NextPage = () => {
  const booleanExpressionsData = [
    "Boolean expressions ask a question and precedence a Yes or No result which we use to control program flow",
    "Boolean expressions using comparison operators evaluate to True / False or Yes / No",
    "Comparison operators look at variables but do not change the variables",
  ];

  const comparisonOperatorsData = {
    cols: ["Python", "Meaning"],
    data: [
      {
        Python: "x == y",
        Meaning: "x is equal to y",
      },
      {
        Python: "x != y",
        Meaning: "x is not equal to y",
      },
      {
        Python: "x > y",
        Meaning: "x is greater than y",
      },
      {
        Python: "x < y",
        Meaning: "x is less than y",
      },
      {
        Python: "x >= y",
        Meaning: "x is greater than or equal to y",
      },
      {
        Python: "x <= y",
        Meaning: "x is less than or equal to y",
      },
      {
        Python: "x is y",
        Meaning: "x is the same as y",
      },
      {
        Python: "x is not y",
        Meaning: "x is not the same as y",
      },
    ],
  };

  const theTryExceptStructureData = [
    "You surround a dangerous section of code with try and except",
    "If the code in the try works - the except is skipped",
    "If the code in the try fails - it jumps to the except section",
  ];

  return (
    <>
      <Layout title="Conditional - Python">
        <>
          <UnOrderdList
            heading="Boolean expressions"
            listData={booleanExpressionsData}
          />
          <TwoColTable
            heading="Comparison Operators"
            cols={comparisonOperatorsData.cols}
            tableData={comparisonOperatorsData.data}
          />
          <UnOrderdList
            heading="The try / except Structure"
            listData={theTryExceptStructureData}
          />
        </>
      </Layout>
    </>
  );
};

export default Conditional;
