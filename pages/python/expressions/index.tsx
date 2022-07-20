import { NextPage } from "next";
import React, { useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import QA from "../../../components/QA";
import UnOrderdList from "../../../components/lists/UnOrderdList";
import { useApp } from "../../../context/AppContext";

const Expressions: NextPage = () => {
  const constantsData = [
    'Fixed values such as numbers, letters, and strings, are called "constants" because their value does not change',
    "Numeric constants are as you expect",
    `String constants use single quotes (') or double quotes (")`,
  ];

  const reservedWordsData = {
    description:
      "You cannot use reserved words as variable names / identifiers",
    list: [
      "False",
      "None",
      "True",
      "and",
      "as",
      "assert",
      "break",
      "class",
      "if",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "return",
      "for",
      "from",
      "global",
      "try",
      "import",
      "in",
      "is",
      "lambda",
      "while",
      "not",
      "or",
      "pass",
      "raise",
      "finally",
      "continue",
      "nonlocal",
      "with",
      "yield",
    ],
  };

  const variablesData = [
    'A variable is a named place in the memory where a programmer can store data and later retrieve the data using the variable "name"',
    "Programmers get to choose the names of the variables",
    "You can change the contents of a variable in a later statement",
  ];

  const pythonVariableNameRulesData = [
    "Must start with a letter or underscore _",
    "Must consist of letters, numbers, and underscores",
    "Case Sensitive",
  ];

  const assignmentStatementsData = [
    "We assign a value to a variable using the assignment statement (=)",
    "An assignment statement consist of an expression on the right-hand side and a variable to store  the result",
    "Example:- x = 3.9 * x * (1 - x)",
  ];

  const numericExpressionsData = [
    'Because of the lack of mathematical symbols on computer keyboards - we use "computer-speak" to express the classic math operations',
    "Asterisk is multiplication",
    "Exponentiation (raise to a power) looks different than in math",
    "+ Addition",
    "- Subtraction",
    "* Multiplication",
    "/ Division",
    "** Power",
    "% Remainder",
  ];

  const orderOfEvaluationData = [
    "When we string operators together Python must know which one to do first",
    'This is called "operator precedence"',
    'Which operator "takes precedence" over the others?',
  ];

  const operatorPrecedenceRulesData = {
    description: "Highest precedence rule to lowest precedence rule:",
    list: [
      "Parentheses are always respected",
      "Exponentiation (raise to a power)",
      "Multiplication, Division, and Remainder",
      "Addition and Subtraction",
      "Left to right",
    ],
  };

  const operatorPrecedenceData = [
    "Remember the rules top to bottom",
    "When writing code - use parentheses",
    "When writing code - keep mathematical expressions simple enough that they are easy to understand",
    "Break long series of mathematical operations up to make them more clear",
  ];

  const whatDoesTypeMeanData = [
    'In Python variables, literals, and constants have a "type"',
    "Python knows the difference between an integer number and a string",
    'For example "+" means "addition" if something is a number and "concatenate" if something is a string',
  ];

  const typeMattersData = [
    'Python knows what "type" everything is',
    "Some operations are prohibited",
    'You cannot "add 1" to a string',
    "We can ask Python what type something is by using the type() function",
  ];

  const severalTypesOfNumbersData = [
    "Numbers have two main types",
    "Integers are whole numbers: -14, -2, 0, 1, 100, 401233",
    "Floating Point Numbers have decimal parts: -2.5, 0.0, 98.6, 14.0",
    "There are other number types - they are variations on float and integer",
  ];

  const typeConversionsData = [
    "When you put an integer and floating point in an expression, the integer is implicitly converted to a float",
    "You can control this with the built-in functions int() and float()",
  ];

  const stringConversionsData = [
    "You can also use int() and float() to convert between strings and integers",
    "You will get an error if the string does not contain numeric characters",
  ];

  const userInputData = [
    "We can instruct Python to pause and read data from the user using the input() function",
    "The input() function returns a string",
  ];

  const commentsInPythonData = [
    'Anything after a "#" is ignored by Python',
    "Describe what is going to happen in a sequence of a code",
    "Document who wrote the code or other ancillary information",
    "Turn off a line of code - perhaps temporarily",
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
      <Layout title="Expressions - Python">
        <>
          <UnOrderdList heading="Constants" listData={constantsData} />
          <UnOrderdList
            heading="Reserved Words"
            description={reservedWordsData.description}
            listData={reservedWordsData.list}
          />
          <UnOrderdList heading="Variables" listData={variablesData} />
          <UnOrderdList
            heading="Python Variable Name Rules"
            listData={pythonVariableNameRulesData}
          />
          <UnOrderdList
            heading="Assignment Statements"
            listData={assignmentStatementsData}
          />
          <UnOrderdList
            heading="Numeric Expressions"
            listData={numericExpressionsData}
          />
          <UnOrderdList
            heading="Order of Evaluation"
            listData={orderOfEvaluationData}
          />
          <UnOrderdList
            heading="Operator Precedence Rules"
            description={operatorPrecedenceRulesData.description}
            listData={operatorPrecedenceRulesData.list}
          />
          <UnOrderdList
            heading="Operator Precedence"
            listData={operatorPrecedenceData}
          />
          <UnOrderdList
            heading='What does "Type" Mean? '
            listData={whatDoesTypeMeanData}
          />
          <UnOrderdList heading="Type Matters" listData={typeMattersData} />
          <UnOrderdList
            heading="Several Types of Numbers"
            listData={severalTypesOfNumbersData}
          />
          <UnOrderdList
            heading="Type Conversions"
            listData={typeConversionsData}
          />
          <QA
            question="Integer Division"
            answer="Integer division produces a floating point result"
          />
          <UnOrderdList
            heading="String Conversions"
            listData={stringConversionsData}
          />
          <UnOrderdList heading="User Input" listData={userInputData} />
          <UnOrderdList
            heading="Comments in Python"
            listData={commentsInPythonData}
          />
          <QA
            question="Converting User Input"
            answer="If we want to read a number from the user, we must convert it from a string to a number using a type conversion function"
          />
        </>
      </Layout>
    </>
  );
};

export default Expressions;
