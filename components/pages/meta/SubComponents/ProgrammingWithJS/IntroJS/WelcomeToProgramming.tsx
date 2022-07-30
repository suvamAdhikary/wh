import React from "react";
import Code from "../../../../../text/code/Code";
import Gap from "../../../../../Gap";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import HeadingL4 from "../../../../../text/headings/HeadingL4";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import Para from "../../../../../text/Para";
import Mark from "../../../../../text/Mark";
import ULItem from "../../../../../lists/ULItem";
import Heading5 from "../../../../../text/headings/Heading5";
import ImageFW from "../../../../../images/ImageFW";
import Sample from "../../../../../text/code/Sample";
import KeyBD from "../../../../../text/KeyBD";
import Emphasis from "../../../../../text/Emphasis";
import CodeWithOP from "../../../../../text/code/CodeWithOP";

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
      asi: {
        title: "Automatic Semi-Colon Insertion (ASI)",
        list: [
          'Interestingly, the browser has a feature known as "Automatic Semi-colon Insertion" - meaning, it does a pretty good job of "filling in the blanks" in case there is a missing semi-colon where there should be one.',
          "Effectively, what that means for developers is that most of the time, it makes no difference if a semi-colon is added or not, since the browser is likely to figure it out anyway.",
          "That's why some developers say that you shouldn't bother with adding semi-colons at all.",
          "However, other developers argue that it's better to use it wherever it's needed - for the sake of clarity.",
          "The truth is that most of the time, you can think of adding semi-colons in JavaScript as optional - and somewhat of a stylistic preference.",
        ],
      },
    },

    console: {
      heading: "The Console",
      consoleInDevTool: {
        title:
          "A note on using the console in the developer tools in your browser",
        list: [
          "As already mentioned earlier on in this course, one of the reasons why JavaScript is so popular is because it's so approachable.",
          "To get started with JavaScript, all you need is a browser. In this course I'll be using Google Chrome.",
          "You can type any JavaScript command you like into the DevTools console.",
        ],
      },
      nextLine: {
        title:
          "If you need to type multiple lines of code before you run them, make sure to press the SHIFT + ENTER shortcut key to get onto the next line.",
      },
      consoleOP: {
        title: "Output a greeting into the console",
        list: [
          "If you type valid JavaScript code, it will be executed, meaning: it will be processed and it might result in some kind of output.",
          `If you've done everything as instructed, the words "Hello, World" should be output in the console.`,
          "You also can style the output in the console.",
        ],
        code: `
  console.log("Hello, World");
          
  console.log("%cHello, World", "color: blue; font-size: 40px");
        `,
      },
      multiWord: {
        title: "Output multiple words into the console",
        list: [],
      },
    },
  };

  const variables = {
    heading: "Variables",
    title: "Variable with an example",
    list: [
      "By using a variable, I can save the name John, so that I can reuse it in the future.",
      "You still haven't given a name to the person variable. In programming jargon, the person variable hasn't been assigned a value yet.",
      "Now, the value of the variable, person, is James.",
      "",
    ],
    code: `
  var petDog = "Rex";
  var petCat = "Pepper";
  console.log(petDog);
  console.log(petCat);
  var catSound = "purr";
  var dogSound = "woof";
  console.log(petDog, " says ", dogSound);
  console.log(petCat, " says ", catSound);
  catSound = "meow";
  console.log(petCat, " now says ", catSound);
    `,
    codeOP: `
  Rex
  Pepper
  Rex  says  woof
  Pepper  says  purr
  Pepper  now says  meow
    `,
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
        <Gap />
        <UnOrderdList isChildren>
          <>
            <ULItem>
              <>
                In the English language, the fullstop or period - the{" "}
                <Mark>.</Mark> character - is used to separate thoughts into
                sentences.
              </>
            </ULItem>
            <ULItem>
              By clearly separating thoughts with the fullstop, you avoid being
              misunderstood.
            </ULItem>
            <ULItem>
              <>
                In JavaScript, the semi-colon - the <Mark>;</Mark> character -
                has a similar purpose: it is used to clearly delimit parts of
                the code from some other parts of the code.
              </>
            </ULItem>
          </>
        </UnOrderdList>
        <Gap />
        <UnOrderdList
          heading={jsCode.semicolon.asi.title}
          listData={jsCode.semicolon.asi.list}
        />
      </OneLiner>
      <OneLiner>
        <HeadingL4 title={jsCode.console.heading} />
        <Gap />
        <UnOrderdList
          isChildren
          heading={jsCode.console.consoleInDevTool.title}
        >
          <>
            <ULItem>{jsCode.console.consoleInDevTool.list[0]}</ULItem>
            <ULItem>{jsCode.console.consoleInDevTool.list[1]}</ULItem>
            <ULItem>
              <>
                Once you&apos;ve installed the browser and run it, right-click
                on the currently active web page and click the{" "}
                <Mark>Inspect</Mark> command on the right-click contextual menu.
              </>
            </ULItem>
            <ULItem>
              <>
                This will open the Developer Tools and then you can click on the
                Console tab to open the console, or alternatively, pressing the
                <Mark>ESC</Mark> key will toggle on and off the console
                regardless of the currently active Developer Tools panel.
              </>
            </ULItem>
            <ULItem>{jsCode.console.consoleInDevTool.list[2]}</ULItem>
          </>
        </UnOrderdList>
        <Gap />
        <Heading5 title={jsCode.console.nextLine.title} />
        <Para>
          <>
            Notice the distinction between pressing the <kbd>ENTER</kbd> key to
            run the JavaScript code you&apos;ve typed, versus pressing the{" "}
            <kbd>SHIFT + ENTER</kbd> shortcut to move onto the next line of code
            (rather than running the code you&apos;ve already typed up).
          </>
        </Para>
        <Gap />
        <UnOrderdList isChildren heading={jsCode.console.consoleOP.title}>
          <>
            <ULItem>
              <>
                In Chrome, with the Developer Tools open, click into the empty
                space in the console tab, just to the right of the blue{" "}
                <Mark>&gt;</Mark>
                character. You should see a blinking vertical line (also
                referred to as &quot;the cursor&quot;). The cursor indicates
                that you can type into the console.
              </>
            </ULItem>
            <ULItem>{jsCode.console.consoleOP.list[0]}</ULItem>
            <ULItem>
              <>
                You can use the <Mark>console.log</Mark> function to output the
                words &quot;Hello, World&quot;.
              </>
            </ULItem>
            <ULItem>{jsCode.console.consoleOP.list[1]}</ULItem>
            <ULItem>{jsCode.console.consoleOP.list[2]}</ULItem>
            <ULItem>
              <>
                If you add the <Mark>%c</Mark> right after the{" "}
                <Mark>&quot;</Mark> character, you can then style the console
                output by adding the <Mark>,</Mark> character after the second{" "}
                <Mark>&quot;</Mark>, and then, inside another pair of{" "}
                <Mark>&quot;</Mark> and <Mark>&quot;</Mark>
                characters, use valid CSS code to style the words you want to
                output in the console.
              </>
            </ULItem>
          </>
        </UnOrderdList>
        <Code>{jsCode.console.consoleOP.code}</Code>
        <ImageFW
          src={"/consoleLog.png"}
          alt="Console Log example"
          width={100}
          height={14}
        />
        <Gap />
        <UnOrderdList heading={jsCode.console.multiWord.title} isChildren>
          <>
            <ULItem>
              <>
                To output multiple words into the console, you can join them
                using the <Mark>+</Mark> character, formally known as the
                &quot;concatenation operator&quot; when we&apos;re joining
                pieces of text, or the &quot;addition operator&quot;, for
                performing the mathematical operation of adding two numbers.
              </>
            </ULItem>
            <ULItem>
              <>
                Here is an example of joining three separate pieces of text:
                <Mark>
                  console.log(&quot;Hello &quot; + &quot;there, &quot; +
                  &quot;World&quot;)
                </Mark>
                .
                <br />
                The output of this command will be:{" "}
                <Sample>Hello there, World</Sample>.
              </>
            </ULItem>
            <ULItem>
              <>
                Here is an example of outputting three separate pieces of text
                using the , character instead:{" "}
                <Mark>
                  console.log(&quot;Hello &quot;, &quot;there, &quot;,
                  &quot;World&quot;)
                </Mark>
                .
                <br />
                The output of this command will be:{" "}
                <Sample>Hello there, World</Sample>.
              </>
            </ULItem>
          </>
        </UnOrderdList>
      </OneLiner>
      <OneLiner>
        <HeadingL4 title={variables.heading} />
        <Gap />
        <UnOrderdList heading={variables.title} isChildren>
          <>
            <ULItem>{variables.list[0]}</ULItem>
            <ULItem>
              <>
                To save this name in a variable, start with the keyword,{" "}
                <Mark>var</Mark>, and use it to signal to JavaScript that you
                are giving it a value that you wanted to reuse.
              </>
            </ULItem>
            <ULItem>
              <>
                To declare a variable, type the keyword, <Mark>var</Mark>. Now,
                need to declare a fact about this world that you are building,
                so type, person semicolon and press <KeyBD>Enter</KeyBD>. ({" "}
                <Mark>var person;</Mark> )
              </>
            </ULItem>
            <ULItem>
              <>
                The fact that there is a reuseable value and that this value is
                accessible using the word <Mark>person</Mark>. Thus you have
                completed the <Mark>variable declaration</Mark>.
              </>
            </ULItem>
            <ULItem>{variables.list[1]}</ULItem>
            <ULItem>
              <>
                The person variable is still <Mark>undefined</Mark>. In other
                words, for the person variable to hold the value of John, I need
                to <Mark>assign</Mark> the value of John to the person variable.
              </>
            </ULItem>
            <ULItem>
              <>
                To do this, you will use the <Mark>assignment operator</Mark>,
                the equals sign ( <Mark>=</Mark> ).
              </>
            </ULItem>
            <ULItem>
              <>
                <Emphasis>
                  <>
                    Operators perform certain operations, and the{" "}
                    <Mark>assignment operator</Mark>&apos;s purpose is to{" "}
                    <Mark>
                      take the value that is on its right and put it into what
                      it&apos;s on its left
                    </Mark>
                    .
                  </>
                </Emphasis>
              </>
            </ULItem>
            <ULItem>
              <>
                To assign the name John to the variable person, type{" "}
                <Mark>var person = &quot;John&quot;</Mark>. You&apos;ve taken
                the value John and assigned it to the person variable using the
                assignment operator.
              </>
            </ULItem>
            <ULItem>
              <>
                The <Mark>console.log()</Mark> method can accept one or more
                values separated by commas. So, I type{" "}
                <Mark>console.log(&quot;Hello &quot;, person)</Mark>.<br />
                The output of this command will be: &quot;Hello John&quot;.
                <br />
                This is an example of combining static text with a dynamic
                variable where the value can change.
              </>
            </ULItem>
            <ULItem>
              <>
                Now that you have the person variable, you can{" "}
                <Mark>reassign</Mark> them, replacing their stored value
              </>
            </ULItem>
            <ULItem>
              <>
                You can change the value of the variable from John to James by
                typing <Mark>person = &quot;James&quot;</Mark>.
              </>
            </ULItem>
            <ULItem>{variables.list[2]}</ULItem>
            <ULItem>
              <>
                Notice that now You haven&apos;t used the <Mark>var</Mark>{" "}
                keyword when <Mark>reassigned</Mark> the values to the variable
                that You created earlier. That&apos;s because JavaScript already
                knows that these variables exist in the world that You&apos;re
                building. But the variables don&apos;t have to be static and
                unchangeable.
              </>
            </ULItem>
            <CodeWithOP code={variables.code} op={variables.codeOP} />
          </>
        </UnOrderdList>
      </OneLiner>
    </>
  );
};

export default WelcomeToProgramming;
