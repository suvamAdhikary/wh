import { NextPage } from "next";
import React from "react";
import Layout from "../../../../components/Layout";
import OneLiner from "../../../../components/OneLiner";
import QA from "../../../../components/QA";
import UnOrderdList from "../../../../components/UnOrderdList";

const Files: NextPage = () => {
  const openingAFile = {
    title: "Opening a File",
    list: [
      "Before we can read the contents off the file, we must tell Python which file we are going to work with and what we will be doing with the file",
      'This is done with the "open()" function',
      '"open()" returns a "file handle" - a variable used to perform operations on the file',
      'Similar to "File -> Open" in a Word Processor',
    ],
  };

  const usingOpen = {
    title: "Using open()",
    list: [
      "handle = open(filename, mode)",
      "returns a handle use to manipulate the file",
      "filename is a string",
      'mode is optional and should be "r" if we are planning to read the file and "w" if we are going to write to the file',
    ],
  };

  const theNewlineCharacter = {
    title: "The newline character",
    list: [
      'We use a special character called the "newline" to indicate when a line ends',
      `We represent it as 'backslash n' in strings`,
      "Newline is still one character not two",
    ],
  };

  const fileHandleAsASequence = {
    title: "File Handle as a Sequence",
    list: [
      "A file handle open for read can be treated as a sequence of strings where each line in the file is a string in the sequence",
      "We can use the for statement to iterate through a sequence",
      "Remember - a sequence is an ordered set",
    ],
  };

  const countingLinesInAFile = {
    title: "Counting Lines in a File",
    list: [
      "Open a file read-only",
      "Use a for loop to read each line",
      "Count the lines and print out the number of lines",
    ],
  };

  const readingTheWholeFile = {
    title: "Reading the *Whole* File",
    data: "We can read the whole file (bewlines and all) into a single string. filehandler.read()",
  };

  const searchingThroughAFile = {
    title: "Searching Through a File",
    data: "We can put an if statement in our for loop to only print lines that meet some criteria",
  };

  const searchingThroughAFileFixed = {
    title: "Searching Through a File (fixed)",
    list: [
      "Each line from the file has a newline at the end",
      "The print statement adds a newline to each line",
      "We can strip the whitespace from the right-hand side of the string using rstrip() from the string library",
      'The newline is considered "white space" and is stripped',
    ],
  };

  return (
    <>
      <Layout title="Python Data Structures - Files">
        <>
          <UnOrderdList
            heading={openingAFile.title}
            listData={openingAFile.list}
          />
          <UnOrderdList heading={usingOpen.title} listData={usingOpen.list} />
          <UnOrderdList
            heading={theNewlineCharacter.title}
            listData={theNewlineCharacter.list}
          />
          <UnOrderdList
            heading={fileHandleAsASequence.title}
            listData={fileHandleAsASequence.list}
          />
          <UnOrderdList
            heading={countingLinesInAFile.title}
            listData={countingLinesInAFile.list}
          />
          <QA
            question={readingTheWholeFile.title}
            answer={readingTheWholeFile.data}
          />
          <QA
            question={searchingThroughAFile.title}
            answer={searchingThroughAFile.data}
          />
          <UnOrderdList
            heading={searchingThroughAFileFixed.title}
            listData={searchingThroughAFileFixed.list}
          />
          <OneLiner>
            We can conveniently skip a line by using the continue statement
          </OneLiner>
          <OneLiner>
            if not line.startswith(&apos;searching string&apos;) : continue
          </OneLiner>
          <OneLiner>
            We can look for a string anywhere in a line as our selection
            criteria
          </OneLiner>
          <OneLiner>
            if not &apos;searching string&apos; in line : continue
          </OneLiner>
        </>
      </Layout>
    </>
  );
};

export default Files;
