import React from "react";
import Gap from "../../../../../../Gap";
import UnOrderdList from "../../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../../OneLiner";
import DynamicTable from "../../../../../../tables/DynamicTable";
import CodeWithOP from "../../../../../../text/code/CodeWithOP";
import HeadingL4 from "../../../../../../text/headings/HeadingL4";
import OperatorsInDepth from "./OperatorsInDepth";

const Operators = () => {
  const operators = {
    heading: "Operators",
    list: [
      "Operators are used to perform operations on variables and values.",
      "An operator is used to manipulate individual data items and return a result.",
      "You may already be familiar with the assignment operator to assign a value to a variable. You use assignment operators for simple and complex calculations.",
    ],

    arithmetic: {
      title: "Arithmetic Operators",
      description:
        "The assignment operators, you can use to perform simple arithmetic.\nWithout parentheses, JavaScript will follow the standard mathematical sequence of calculation.",
      cols: ["Operator", "Meaning", "Example"],
      data: [
        {
          Operator: "+",
          Meaning: "Addition",
          Example: "2 + 3",
        },
        {
          Operator: "-",
          Meaning: "Subtraction",
          Example: "3 - 2",
        },
        {
          Operator: "/",
          Meaning: "Division",
          Example: "35 / 5",
        },
        {
          Operator: "*",
          Meaning: "Multiplication",
          Example: "7 * 4",
        },
        {
          Operator: "**",
          Meaning: "Exponential",
          Example: "10 * 2",
        },
        {
          Operator: "%",
          Meaning: "Remainder or Modulus",
          Example: "7 % 3",
        },
      ],
    },

    comparison: {
      title: "Comparison Operators",
      description:
        "Comparison operators, which compares and returns a logical value based on whether the comparison is true.",
      cols: ["Operator", "Meaning", "Example"],
      data: [
        {
          Operator: ">",
          Meaning: "Greater than",
          Example: "3 > 2",
        },
        {
          Operator: "<",
          Meaning: "Less than",
          Example: "2 < 3",
        },
        {
          Operator: "==",
          Meaning: "Equal to",
          Example: "5 == 5",
        },
        {
          Operator: "!=",
          Meaning: "Not equal to",
          Example: "5 != 6",
        },
        {
          Operator: "===",
          Meaning: "Strictly Equal to",
          Example: '5 == "5"',
        },
        {
          Operator: "!==",
          Meaning: "Strictly Not equal to",
          Example: '5 != "5"',
        },
      ],
    },

    logical: {
      title: "Logical Operators",
      description:
        "Logical operators are used in JavaScript to determine if something is true or false.",
      cols: ["Operator", "Meaning", "Example"],
      data: [
        {
          Operator: "&&",
          Meaning: "Checks for both conditions to be true",
          Example: "a > 5 && a < 10",
        },
        {
          Operator: "||",
          Meaning: "Checks for at least one condition to be true",
          Example: "a > 5 || a > 10",
        },
        {
          Operator: "!",
          Meaning: "Returns false if the result is true",
          Example: "!(a > 5)",
        },
      ],
    },

    code: `
  /* Arithmetic operators in JS:
      + addition
      - subtraction
      * multiplication
      / division
  */

  /* Comparison operators in JS:
      > greater than
      < less than
      == equal to
  */

  console.log(2 + 2);
  console.log(1 + 2 + 3 + 4 + 5);
  console.log(20 - 18);
  console.log(2 * 3);
  console.log(8 / 1);
  console.log(10 ** 2);
  console.log(3 % 2);
  console.log(3 > 2);
  console.log(2 > 3);
  console.log(10 == 10);
  console.log(10 != "10");
  console.log(10 !== "10");
    `,

    codeOp: `
  4
  15
  2
  6
  8
  100
  1
  true
  false
  true
  false
  true
  `,
  };

  return (
    <>
      <OneLiner>
        <HeadingL4 title={operators.heading} />
        <Gap />
        <UnOrderdList listData={operators.list} />
        <Gap />
        <DynamicTable
          heading={operators.arithmetic.title}
          description={operators.arithmetic.description}
          cols={operators.arithmetic.cols}
          tableData={operators.arithmetic.data}
        />
        <Gap />
        <DynamicTable
          heading={operators.comparison.title}
          description={operators.comparison.description}
          cols={operators.comparison.cols}
          tableData={operators.comparison.data}
        />
        <Gap />
        <DynamicTable
          heading={operators.logical.title}
          description={operators.logical.description}
          cols={operators.logical.cols}
          tableData={operators.logical.data}
        />
        <Gap />
        <CodeWithOP code={operators.code} op={operators.codeOp} />
      </OneLiner>
      <OperatorsInDepth />
    </>
  );
};

export default Operators;
