import React from "react";
import Code from "../../../../../text/code/Code";
import Gap from "../../../../../Gap";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import HeadingL4 from "../../../../../text/headings/HeadingL4";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import Para from "../../../../../text/Para";
import Mark from "../../../../../text/Mark";

const WelcomeToProgramming = () => {
  const jsCode = {
    title: "Writing First Javascript Code",
    comments: {
      heading: "Comments in JavaScript",
      title: "Comments in JavaScript: The Syntax",
      description:
        "Their syntax - the way comments are written is easy to understand.\nWriting comments can empower you as a developer.\nThere are two varieties of comments in JavaScript:",
      list: ["Single-line comments", "Multi-line comments"],
      singleLine: {
        title: "Single-line Comments",
        description:
          "A single-line comment is created when you add two forward-slash characters one after the other, without spaces.",
        list: [
          "Anything that follows a single-line comment in JavaScript is ignored by the browser.",
          "This means that, essentially, you can write any kind of text, code, characters, emojis, whatever - and the browser will ignore it.",
        ],
        code: `// this is a comment!`,
      },
      multiLine: {
        title: "Multi-line Comments",
        description:
          "A multi-line comment, as its name says, spans for several lines of code and is created with a forward slash and a star.",
        list: [
          "You can also use the multi-line comment syntax on a single line of code.",
        ],
        code: `
        /*
        this
        is
        a
        multi-line
        comment
        */

        /* this is a multi-line comment on a single line */`,
      },
    },
    empowering: {
      title: "Why writing comments is empowering",
      description:
        'Comments are empowering because they facilitate communication with your future self or with your team members, allowing you to ask questions about the code, mark the code as "to do", or as "to improve", or just simply explain what a given piece of code does.\nAdditionally, you can even comment out some working code in a JavaScript file - to prevent it from running.\nEffectively, comments allow you to "switch off" pieces of JavaScript code.\nThere can be many reasons for that:',
      list: [
        "Trying to understand how a given piece of code works.",
        "Testing different solutions to a coding problem - while not having to delete existing code.",
        "Debugging - trying to pin-point why your code is broken or behaving unprediticably.",
      ],
    },
    semicolon: {
      heading: "The semi-colon in JavaScript",
      list: [],
    },
  };

  return (
    <>
      <HeadingL3 title="Welcome to Programming" />
      <HeadingL3 title={jsCode.title} />
      <OneLiner>
        <HeadingL4 title={jsCode.comments.heading} />
        <Gap />
        <UnOrderdList
          heading={jsCode.comments.title}
          description={jsCode.comments.description}
          listData={jsCode.comments.list}
        />
        <Gap />
        <UnOrderdList
          heading={jsCode.comments.singleLine.title}
          description={jsCode.comments.singleLine.description}
          listData={jsCode.comments.singleLine.list}
        />
        <Code>{jsCode.comments.singleLine.code}</Code>
        <Gap />
        <UnOrderdList
          heading={jsCode.comments.multiLine.title}
          description={jsCode.comments.multiLine.description}
          listData={jsCode.comments.multiLine.list}
        />
        <Code>{jsCode.comments.multiLine.code}</Code>
        <Gap />
        <UnOrderdList
          heading={jsCode.empowering.title}
          description={jsCode.empowering.description}
          listData={jsCode.empowering.list}
        />
      </OneLiner>
      <OneLiner>
        <HeadingL4 title={jsCode.semicolon.heading} />
        <Para>
          <>
            In the English language, the fullstop or period - the <Mark>.</Mark>{" "}
            character - is used to separate thoughts into sentences.
          </>
        </Para>
      </OneLiner>
    </>
  );
};

export default WelcomeToProgramming;
