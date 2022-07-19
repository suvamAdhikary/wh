import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import OneLiner from "../../../../components/OneLiner";
import QA from "../../../../components/QA";
import UnOrderdList from "../../../../components/lists/UnOrderdList";

const Dictonaries: NextPage = () => {
  const collection = {
    title: "What is a Collection",
    list: [
      "A collection is nice because we can put more than one value in it and carry them all around in one conveninent package",
      'We have a bunch of values in a single "variable"',
      'We do this by having more than one place "in" the variable',
      "We have ways of finding the different places in the variable",
    ],
  };

  const twoCollection = {
    title: "A Story of Two Collections..",
    list: [
      "List:- A linear collection of values that stay in order",
      'Dictionary:- A "bag" of values, each with its own label',
    ],
  };

  const dictionaries = {
    title: "Dictionaries",
    list: [
      "Dictionaries are Python's most powerful data collection",
      "Dictionaries allow us to do fast database-like operations in Python",
      "Lists index their entries based on the position in the list",
      "Dictionaries are like bags - no order",
      'So we index the things we put in the dictionary with a "lookup tag"',
      "Dictionaries are like lists except that they use keys instead of numbers to look up values",
      "Dictionaries have different names in different languages",
      "Associative Arrays - Perl/PHP",
      "Properties or Map or HashMap - Java",
      "Property Bag - C#/.Net",
    ],
  };

  const dictionaryLiterals = {
    title: "Dictionary Literals (Constants)",
    list: [
      "Dictionary literals use curly braces and have a list of key : value pairs",
      "You can make an empty dictionary using empty curly braces",
    ],
  };

  const dictionaryTracebacks = {
    title: "Dictionary Tracebacks",
    list: [
      "It is an error to reference a key which is not in the dictionary",
      "We can use the in operator to see if a key is in the dictionary",
    ],
  };

  const getMethodForDictionary = {
    title: "The get Method for Dictionaries",
    list: [
      "The pattern of checking to see if a key is already in a dictionary and assuming a dedault value if the key is not there is so common that there is a method called get() that does this for us",
      "We can use get() and provide a default value of zero when the key is not yet in the dictionary - and then just add one, dictionaryName.get(name, 0) + 1",
    ],
  };

  const countingPattern = {
    title: "Counting Pattern",
    data: "The general pattern to count the words in a line of text is to split the line into words, then loop through the words and use a dictionary to track the count of each word independently.",
  };

  const definiteLoops = {
    title: "Definite Loops and Dictonaries",
    data: "Even though dictionaries are not stored in order, we can write a for loop that goes through all the entries in a dictionary - actually it goes through all of the keys in the dictionary and looks up the values",
  };

  const listOfKeysAndValues = {
    title: "Retriving list of keys and values",
    list: [
      "You can get a list of keys, values, or items (both) from a dictionary",
      'jjj = ["chuck": 1, "fred": 42, "jan": 100]',
      'list(jjj) => ["jan", "chuck", "fred"]',
      'jjj.keys() => ["jan", "chuck", "fred"]',
      "jjj.values() => [100, 1, 42]",
      'jjj.items() => [("jan", 100), ("chuck", 1), ("fred", 42)]',
    ],
  };

  const twoIterationVariables = {
    title: "Two Iteration Variables!",
    list: [
      "We loop through the key-value pairs in a dictionary using *two* iteration variables",
      "Each iteration, the first variable is the key and the second variable is the corresponding value for the key",
      'for key,value in jjj.items():'
    ],
  };

  return (
    <>
      <Layout title="Dictonaries - Python Data Structures">
        <OneLiner>
          The Python dictionary is one of its most powerful data structures.
          Instead of representing values in a linear list, dictionaries store
          data as key / value pairs. Using key / value pairs gives us a simple
          in-memory &quot;quotedatabase&quot; in a single Python variable.
        </OneLiner>
        <UnOrderdList heading={collection.title} listData={collection.list} />
        <UnOrderdList
          heading={twoCollection.title}
          listData={twoCollection.list}
        />
        <UnOrderdList
          heading={dictionaries.title}
          listData={dictionaries.list}
        />
        <UnOrderdList
          heading={dictionaryLiterals.title}
          listData={dictionaryLiterals.list}
        />
        <OneLiner>
          <p>
            One common use of dictionaries is counting how often we
            &quot;see&quot; something.
          </p>
          <p>
            When we encounter a new name, we need to add a new entry in the
            dictionary and if this the second or later time we have seen the
            name, we simply add one to the count in the dictionary under that
            name.
          </p>
        </OneLiner>
        <UnOrderdList
          heading={dictionaryTracebacks.title}
          listData={dictionaryTracebacks.list}
        />
        <UnOrderdList
          heading={getMethodForDictionary.title}
          listData={getMethodForDictionary.list}
        />
        <QA question={countingPattern.title} answer={countingPattern.data} />
        <QA question={definiteLoops.title} answer={definiteLoops.data} />
        <UnOrderdList
          heading={listOfKeysAndValues.title}
          listData={listOfKeysAndValues.list}
        />
        <UnOrderdList
          heading={twoIterationVariables.title}
          listData={twoIterationVariables.list}
        />
      </Layout>
    </>
  );
};

export default Dictonaries;
