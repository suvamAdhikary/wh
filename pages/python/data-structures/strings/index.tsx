import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import OneLiner from "../../../../components/OneLiner";
import QA from "../../../../components/QA";
import UnOrderdList from "../../../../components/lists/UnOrderdList";

const Strings: NextPage = () => {
  const list = [
    {
      name: "String type",
      link: "#string-type",
    },
    {
      name: "Read/Convert",
      link: "#read-or-convert",
    },
    {
      name: "Indexing strings[]",
      link: "#indexing-strings[]",
    },
    {
      name: "Slicing strings[2:4]",
      link: "#slicing-strings[2:4]",
    },
    {
      name: "Looping through strings with for and while",
      link: "#looping-through-strings-with-for-and-while",
    },
    {
      name: "Concatenating strings with +",
      link: "#concatenating-strings-with+",
    },
    {
      name: "String operations",
      link: "#string-operations",
    },
    {
      name: "String library",
      link: "#string-library",
    },
    {
      name: "Searching in strings",
      link: "#searching-in-strings",
    },
    {
      name: "Replacing text",
      link: "#replacing-text",
    },
    {
      name: "Stripping white space",
      link: "#stripping-white-space",
    },
  ];

  const stringDataType = {
    id: "string-type",
    title: "String Data Type",
    list: [
      "A string is a sequence of characters",
      `A string literal uses quotes 'Hello' or "Hello"`,
      'For strings, + means "concatenate"',
      "When a string contains numbers, it is still a string",
      "We can convert numbers in a string into a number usng int()",
    ],
  };

  const readingAndConverting = {
    id: "read-or-convert",
    title: "Reading and Converting",
    list: [
      "We prefer to read data in using string and then parse and convert the data as we need",
      "This gives us more control over error situations and/or bad user input",
      "Input numbers must be converted from strings",
    ],
  };

  const lookingInsideStrings = {
    id: "indexing-strings[]",
    title: "Looking Inside Strings",
    list: [
      "We can get at any single character in a string using an index specified in square brackets",
      "The index value must be an integer and starts at zero",
      "The index value can be an eexpression that is computed",
    ],
  };

  const aCharacterTooFar = {
    title: "A Character Too Far",
    list: [
      "You will get a python error if you attempt to index beyond the end of a string.",
      "So be careful when constructing index values and slices",
    ],
  };

  const stringLength = {
    title: "String Length",
    list: [
      'The built-in function "len" gives us the length of a string',
      'print(len("apple")) => it prints "5"',
    ],
  };

  const loopingThroughStrings = {
    id: "looping-through-strings-with-for-and-while",
    title: "Looping Through Strings",
    list: [
      'Using a "while" statement and an iteration variable, and the "len" function, we can construct a loop to look at each of the letters in a string individually',
      ' A definite loop using a "for" statement is much more elegant',
      "The iteration variable is completely taken care of by the for loop",
    ],
  };

  const lookingDeeperIntoIn = {
    title: 'Looking Deeper into "in"',
    list: [
      'The iteration variable "iterates" through the "sequence" (ordered set)',
      'The "block (body)" of code is executed once for each value "in" the "sequence"',
      'The iteration variable moves through all of the values "in" the "sequence"',
    ],
  };

  const slicingStrings = {
    id: "slicing-strings[2:4]",
    title: "Slicing Strings",
    list: [
      'We can also look at any continuous section of a string using a "colon operator"',
      'The second number is one beyond the end of the slice - "up to but not including"',
      "If the second number is beyond the end of the string, it stops at the end",
      "If we leave off the first number or the last number of the slice, it is assumed to be the beginning or end of the string respectively",
    ],
  };

  const stringConcatenation = {
    id: "concatenating-strings-with+",
    title: "String Concatenation",
    data: 'When the "+" operator is applied to strings, it means "concatenation"',
  };

  const usingInAsALogiclOperator = {
    id: "string-operations",
    title: 'Using "in" as a Logical Operator',
    list: [
      'The "in" keyword can also be used to check to see if one string is "in" another string',
      'The "in" expression is a logical expression that returns "True" or "False" and can be used in an "if" statement',
    ],
  };

  const stringLibrary = {
    id: "string-library",
    title: "String Library",
    list: [
      "Python has a number of string functions which are in the string library",
      "These functions are already built into every string - we invoke them by appending the function to the string variable",
      "These functions do not modify the original string, instead they return a new string that has been altered",
    ],
  };

  const searchingAString = {
    id: "searching-in-strings",
    title: "Searching in a String",
    list: [
      'We use the "find()" function to search for a substring within another string',
      '"find()" finds the first occurrence of the substring',
      'If the substring is not found, "find()" returns "-1"',
      "Remember that string position starts at zero",
    ],
  };

  const upperCaseAndLowerCase = {
    title: "Upper Case and Lower Case",
    list: [
      'You can make a copy of a string in lower case ("lower()") or upper case ("upper()")',
      'Often when we are searching for a string using "find()" we first convert the string to lower case so we can search a string regardless of case',
    ],
  };

  const searchAndReplace = {
    id: "replacing-text",
    title: "Search and Replace",
    list: [
      'The "replace("to be replaced", "replacing string")" function is like a "search and replace" operation in a word processor',
      "It replaces all occurrences of the search string with the replacement string",
    ],
  };

  const strippingWhitespace = {
    id: "stripping-white-space",
    title: "Stripping Whitespace",
    list: [
      "Sometimes we want to take a string and remove whitespace at the beginning and/or end",
      '"lstrip()" and "rstrip()" remove whitespace at the left or right',
      '"strip()" removes both beginning and ending whitespace',
    ],
  };

  return (
    <>
      <Layout title="Python Data Structures - Strings" accessTagsList={list}>
        <>
          <UnOrderdList
            id={stringDataType.id}
            heading={stringDataType.title}
            listData={stringDataType.list}
          />
          <UnOrderdList
            id={readingAndConverting.id}
            heading={readingAndConverting.title}
            listData={readingAndConverting.list}
          />
          <UnOrderdList
            id={lookingInsideStrings.id}
            heading={lookingInsideStrings.title}
            listData={lookingInsideStrings.list}
          />
          <UnOrderdList
            heading={aCharacterTooFar.title}
            listData={aCharacterTooFar.list}
          />
          <UnOrderdList
            heading={stringLength.title}
            listData={stringLength.list}
          />
          <UnOrderdList
            id={loopingThroughStrings.id}
            heading={loopingThroughStrings.title}
            listData={loopingThroughStrings.list}
          />
          <UnOrderdList
            heading={lookingDeeperIntoIn.title}
            listData={lookingDeeperIntoIn.list}
          />
          <UnOrderdList
            id={slicingStrings.id}
            heading={slicingStrings.title}
            listData={slicingStrings.list}
          />
          <QA
            id={stringConcatenation.id}
            question={stringConcatenation.title}
            answer={stringConcatenation.data}
          />
          <UnOrderdList
            id={usingInAsALogiclOperator.id}
            heading={usingInAsALogiclOperator.title}
            listData={usingInAsALogiclOperator.list}
          />
          <UnOrderdList
            id={stringLibrary.id}
            heading={stringLibrary.title}
            listData={stringLibrary.list}
          />
          <UnOrderdList
            id={searchingAString.id}
            heading={searchingAString.title}
            listData={searchingAString.list}
          />
          <UnOrderdList
            heading={upperCaseAndLowerCase.title}
            listData={upperCaseAndLowerCase.list}
          />
          <UnOrderdList
            id={searchAndReplace.id}
            heading={searchAndReplace.title}
            listData={searchAndReplace.list}
          />
          <UnOrderdList
            id={strippingWhitespace.id}
            heading={strippingWhitespace.title}
            listData={strippingWhitespace.list}
          />
          <OneLiner>
            Prefixes : &quot;startswith(&apos;any string&apos;)&quot; it return
            boolean
          </OneLiner>
        </>
      </Layout>
    </>
  );
};

export default Strings;
