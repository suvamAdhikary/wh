import React from "react";
import Gap from "../../../../../../Gap";
import UnOrderdList from "../../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../../OneLiner";
import QA from "../../../../../../QA";
import TwoColTable from "../../../../../../tables/TwoColTable";
import HeadingL4 from "../../../../../../text/headings/HeadingL4";

const DataTypes = () => {
  const dataTypes = {
    heading: "Data Types",
    description:
      "You have many different data types but coding efficiently starts with knowing when and where to use them.\nThere are seven primitive data types in JavaScript.",
    list: [
      "String",
      "Number",
      "Boolean",
      "Null",
      "Undefined",
      "BigInt",
      "Symbol",
    ],

    string: {
      title: "String",
      description:
        "A string in JavaScript is a collection of characters enclosed by single quotes, double quotes. Such a collection of characters is known as a string datatype.",
      list: [
        "In JavaScript, text values are known as the string data type.",
        "To build a string in JavaScript, the characters must be enclosed in either single or double quotes.",
        "The string data type practically has an unlimited number of combinations of characters. There is almost an infinite number of ways we can combine different characters into strings.",
        "Strings are one of the most common types of data you'll be working with.",
        "To code a string, type in a pair of single quotation marks. This piece of code with just an opening and closing single quote is referred to as an empty string.",
        "To build an empty string, I can also use double quotation marks.",
        "While empty strings have their place in JavaScript, they're not very versatile. But strings don't have to be empty.",
        "Besides letters and punctuation symbols, we can add almost any other character into a string, including numbers.",
        "There's one thing that strings can't do and that is break onto the next line.",
      ],
    },

    delimiter: {
      title: "Delimiter",
      data: "When you use single or double quotes to surround string values, these characters are referred to as delimiters. This is because I use them to delimit a given string value from the rest of my code.",
    },

    number: {
      title: "Number Data Type",
      description:
        "The number of data type is a foundational part of JavaScript as a programming language because it represents both integer and decimal point numbers.",
      list: [
        "In JavaScript, numerical values are referred to as the number data type.",
        "To build a number, you simply type in the numerical values.",
        "The number data type has a very wide range in JS enough for most common use cases. However, it is limited up to a point determined by JavaScript calculation capabilities.",
      ],
    },

    numStr: {
      cols: ["Data type", "Value"],
      data: [
        {
          "Data type": "Number",
          Value: 375,
        },
        {
          "Data type": "String",
          Value: '"Shredder X"',
        },
        {
          "Data type": "String",
          Value: '"The best guitar around!"',
        },
      ],
    },

    boolean: {
      title: "Boolean",
      description:
        "The Boolean data type is used to check if a statement is true or false, which makes it a foundational part of knowing how to use JavaScript.",
      list: [
        "The Boolean data type has only two values, true and false.",
        "This means that it is useful for making decisions.",
      ],
    },

    null: {
      title: "Null",
      list: [
        "The null data type which only has the value null and represents the absence of value.",
      ],
    },

    undefined: {
      title: "Undefined",
      list: [
        "The undefined data type which can only hold the value undefined and usually refers to a variable that has not yet been assigned a value.",
      ],
    },

    bigInt: {
      title: "BigInt",
      list: [
        "The BigInt data type which is like an extra large box that can accommodate a much greater range of numbers than the number data type.",
      ],
    },

    symbol: {
      title: "Symbol",
      list: [
        "The symbol data type which can be used as a unique identifier.",
        "Think of it as having multiple boxes with the same label and using different serial numbers to avoid mixing them up.",
      ],
    },
  };

  return (
    <>
      <OneLiner>
        <HeadingL4 title={dataTypes.heading} />
        <Gap />
        <UnOrderdList
          heading=""
          description={dataTypes.description}
          listData={dataTypes.list}
        />
        <Gap />
        <UnOrderdList
          heading={dataTypes.string.title}
          description={dataTypes.string.description}
          listData={dataTypes.string.list}
        />
        <Gap />
        <QA
          question={dataTypes.delimiter.title}
          answer={dataTypes.delimiter.data}
        />
        <Gap />
        <UnOrderdList
          heading={dataTypes.number.title}
          description={dataTypes.number.description}
          listData={dataTypes.number.list}
        />
        <Gap />
        <TwoColTable
          cols={dataTypes.numStr.cols}
          heading=""
          tableData={dataTypes.numStr.data}
        />
        <Gap />
        <UnOrderdList
          heading={dataTypes.boolean.title}
          description={dataTypes.boolean.description}
          listData={dataTypes.boolean.list}
        />
        <Gap />
        <UnOrderdList
          heading={dataTypes.null.title}
          listData={dataTypes.null.list}
        />
        <Gap />
        <UnOrderdList
          heading={dataTypes.undefined.title}
          listData={dataTypes.undefined.list}
        />
        <Gap />
        <UnOrderdList
          heading={dataTypes.bigInt.title}
          listData={dataTypes.bigInt.list}
        />
        <Gap />
        <UnOrderdList
          heading={dataTypes.symbol.title}
          listData={dataTypes.symbol.list}
        />
      </OneLiner>
    </>
  );
};

export default DataTypes;
