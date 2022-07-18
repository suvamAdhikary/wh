import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import QA from "../../../../components/QA";
import UnOrderdList from "../../../../components/UnOrderdList";

const Lists: NextPage = () => {
  const programming = {
    title: "Programming",
    list: [
      "Algorithms:- A set of rules or steps used to solve a problem",
      "Data Structures:- A particular way of organizing data in a computer",
    ],
  };

  const notCollection = {
    title: 'What is Not A "Collection"?',
    data: "Most of our variables have one value in them - when we put a new value in the variable, the old value is overwritten",
  };

  const collection = {
    title: "A List Is a Kind of Collection",
    list: [
      'A collection allows us to put many values in a single "variable"',
      "A collection is nice because we can carry many values around in one convenient package.",
    ],
  };

  const listConstants = {
    title: "List Constants",
    list: [
      "List constants are surrounded by square brackets and the elements in the list are separated by commas",
      "A list element can be any Python object - even another list",
      "A list can be empty",
    ],
  };

  const lookingInsideLists = {
    title: "Looking Inside Lists",
    data: "Just like strings, we can get at any single element in a list using an index specified in square brackets",
  };

  const listAreMutable = {
    title: "Lists Are Mutable",
    list: [
      'Strings are "immutable" - we cannot change the contents of a string - we must make a new string to make any change',
      'Lists are "mutable" - we can change an element of a list using the index operator',
    ],
  };

  const listLength = {
    title: "How Long is a List?",
    list: [
      "The len() function takes a list as a parameter and returns the number of elements in the list",
      "Actually len() tells us the number of elements of any set or sequence (such as a string...)",
    ],
  };

  const usingRangeFunction = {
    title: "Using the Range Function",
    list: [
      "The range function returns a list of numbers that range from zero to one less than the parameter",
      "We can construct an index loop using for and an integer iterator",
    ],
  };

  const concatenatingList = {
    title: "Concatenating Lists Using +",
    list: [
      "We can create a new list by adding two existing lists together",
      "a = [1, 2, 3]; b = [4, 5, 6]; c = a + b, print(c) => [1, 2, 3, 4, 5, 6]",
    ],
  };

  const sliceList = {
    title: 'Lists Can Be Sliced Using ":"',
    list: [
      'Remember: Just like inn strings, the second number is "up to but not includding"',
    ],
  };

  const buildingList = {
    title: "Building a List from Scratch",
    list: [
      "We can create an empty list and add elements using the append(element) method",
      "The list stays in order and new elements are added at the end of the list",
    ],
  };

  const isInList = {
    title: "Is Something in a List ?",
    list: [
      "Python provides two operators that let you check if an item is in a list",
      "These are logical operators that return true or False",
      "They ydo not modify the list",
      "nums = [1, 4, 5]; 9 in nums => False; 6 not in nums => True",
    ],
  };

  const listInOrder = {
    title: "Lists are in Order",
    list: [
      "A list can hold many items and keeps those items in the order until we do something to change the order",
      "A list can be sorted (i.e., change its order)",
      'The sort method (unlike in strings) means "sort yourself"',
      "list.sort()",
    ],
  };

  const builtInAndList = {
    title: "Built-in Functions and Lists",
    list: [
      "There are a number of functions built into Python that take lists as parameters",
      "Remember the loops we built? These are much simpler.",
      "nums = [1, 2, 3]; len(nums) => 6; max(nums) => 3; min(nums) => 1; sum(nums) => 6",
    ],
  };

  const stringsAndList = {
    title: "Best Friends: Strings and Lists",
    list: [
      "Split breaks a string into parts and produces a list of strings. We think of these as words. We can access a particular word or loop through all the words.",
      "When you do not specify a delimiter, multiple spaces are treated like one delimiter",
      "You can specify what delimiter character to use in the splitting",
      '"a string line".split(); "astringline@mail".split("@")',
      "Sometimes we split a line one way, and thenn grab one of the pieces of the line and split that piece again",
    ],
  };

  return (
    <>
      <Layout title="List - Python Data Structures">
        <UnOrderdList heading={programming.title} listData={programming.list} />
        <QA question={notCollection.title} answer={notCollection.data} />
        <UnOrderdList heading={collection.title} listData={collection.list} />
        <UnOrderdList
          heading={listConstants.title}
          listData={listConstants.list}
        />
        <QA
          question={lookingInsideLists.title}
          answer={lookingInsideLists.data}
        />
        <UnOrderdList
          heading={listAreMutable.title}
          listData={listAreMutable.list}
        />
        <UnOrderdList heading={listLength.title} listData={listLength.list} />
        <UnOrderdList
          heading={usingRangeFunction.title}
          listData={usingRangeFunction.list}
        />
        <UnOrderdList
          heading={concatenatingList.title}
          listData={concatenatingList.list}
        />
        <UnOrderdList heading={sliceList.title} listData={sliceList.list} />
        <UnOrderdList
          heading={buildingList.title}
          listData={buildingList.list}
        />
        <UnOrderdList heading={isInList.title} listData={isInList.list} />
        <UnOrderdList heading={listInOrder.title} listData={listInOrder.list} />
        <UnOrderdList
          heading={builtInAndList.title}
          listData={builtInAndList.list}
        />
        <UnOrderdList
          heading={stringsAndList.title}
          listData={stringsAndList.list}
        />
      </Layout>
    </>
  );
};

export default Lists;
