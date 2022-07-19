import { NextPage } from "next";
import React from "react";
import Heading5 from "../../../../components/headings/Heading5";
import Layout from "../../../../components/layout/Layout";
import OneLiner from "../../../../components/OneLiner";
import QA from "../../../../components/QA";
import UnOrderdList from "../../../../components/lists/UnOrderdList";

const Tuples: NextPage = () => {
  const moreEfficient = {
    title: "Tuples Are More Efficient",
    list: [
      "Since Python does not have to build tuple structures to be modifiable, they are simpler and more efficient in terms of memory use and performance than lists",
      'So in our program when we are making "temporary variables" we prefer tuples over lists',
    ],
  };

  const assignment = {
    title: "Tuples and Assignment",
    list: [
      "We can also put a tuple on the left-hand side of an assignment statement",
      "We can even omit the parentheses",
      "(x, y) = (4, 'fred'); print(y) => fred",
    ],
  };

  const tuplesAndDictionaries = {
    title: "Tuples and Dictionaries",
    data: "The items() method in dictionaries returns a list of (key, value) tuples",
  };

  const comparable = {
    title: "Tuples are Comparable",
    data: "The comparison operators work with tuples and other sequences, If the first item is equal, Python goes on to the next element, and so on, until it finds elements that differ.",
  };

  const sortingTuplesList = {
    title: "Sorting Lists of Tuples",
    list: [
      "We can take advantage of the ability to sort a list of tuples to get a sorted version of a dictionary",
      "First we sort the dictionary by the key using the items() method and sorted() function",
    ],
  };

  const sortByValues = {
    title: "Sort by Values Instead of Key",
    list: [
      "If we could construct a list of tuples of the form (value, key) we could sort by value",
      "We do this with a for loop that creates a list of tuples",
    ],
  };

  return (
    <>
      <Layout title="Tuples - Python Data Structures">
        <OneLiner>
          Tuples are a simple version of lists. We often use tuples in
          conjunction with dictionaries to accomplish multi-step tasks like
          sorting or looping through all of the data in a dictionary.
        </OneLiner>
        <OneLiner>
          Tuples are another kind of sequence that functions much like a list.
          They have elements which are indexed starting at 0
        </OneLiner>
        <OneLiner>
          Unlike a list, once you create a tuple, you cannot alter its contents
          - similar to a string
        </OneLiner>
        <UnOrderdList
          heading={moreEfficient.title}
          listData={moreEfficient.list}
        />
        <UnOrderdList heading={assignment.title} listData={assignment.list} />
        <QA
          question={tuplesAndDictionaries.title}
          answer={tuplesAndDictionaries.data}
        />
        <QA question={comparable.title} answer={comparable.data} />
        <UnOrderdList
          heading={sortingTuplesList.title}
          listData={sortingTuplesList.list}
        />
        <OneLiner>
          We can do this even more directly using the built-in function sorted
          that takes a sequence as a parameter and returns a sorted sequence
        </OneLiner>
        <UnOrderdList
          heading={sortByValues.title}
          listData={sortByValues.list}
        />
        <OneLiner>
          <Heading5 title="The top 10 most common words" />
          <p>fhand = open(&quot;romeo.txt&quot;)</p>
          <p>counts = dict()</p>
          <p>for line in fhand:</p>
          <p className="indent-4">words = line.split()</p>
          <p className="indent-4">for word in words:</p>
          <p className="indent-8">counts[word] = counts.get(word, 0) + 1</p>
          <br />
          <p>lst = list()</p>
          <p>for key, val in counts.items():</p>
          <p className="indent-4">newtup = (val, key)</p>
          <p className="indent-4">lst.append(newtup)</p>
          <br />
          <p>lst = sorted(lst, reverse=True)</p>
          <br />
          <p>for val, key in lst[:10]:</p>
          <p className="indent-4">print(key, val)</p>
        </OneLiner>
        <OneLiner>
          <Heading5 title="Even Shorter Version" />
          <p>c = {`{'a' :10, 'b' :1, 'c' :22}`}</p>
          <p>print( sorted( [ (v,k) for k,v in c.items() ] ) )</p>
          <p>[(1, &quot;b&quot;), (10, &quot;a&quot;), (22, &quot;c&quot;)]</p>
          <p>
            List comprehension creates a dynamic list. In this case, we make a
            list of reversed tuples and then sort it.
          </p>
        </OneLiner>
      </Layout>
    </>
  );
};

export default Tuples;
