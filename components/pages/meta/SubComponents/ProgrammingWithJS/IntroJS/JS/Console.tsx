import React from "react";
import Gap from "../../../../../../Gap";
import ImageFW from "../../../../../../images/ImageFW";
import ULItem from "../../../../../../lists/ULItem";
import UnOrderdList from "../../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../../OneLiner";
import Code from "../../../../../../text/code/Code";
import Sample from "../../../../../../text/code/Sample";
import Heading5 from "../../../../../../text/headings/Heading5";
import HeadingL4 from "../../../../../../text/headings/HeadingL4";
import Mark from "../../../../../../text/Mark";
import Para from "../../../../../../text/Para";

const Console = () => {
  const console = {
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
  };

  return (
    <>
      <OneLiner>
        <HeadingL4 title={console.heading} />
        <Gap />
        <UnOrderdList isChildren heading={console.consoleInDevTool.title}>
          <>
            <ULItem>{console.consoleInDevTool.list[0]}</ULItem>
            <ULItem>{console.consoleInDevTool.list[1]}</ULItem>
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
            <ULItem>{console.consoleInDevTool.list[2]}</ULItem>
          </>
        </UnOrderdList>
        <Gap />
        <Heading5 title={console.nextLine.title} />
        <Para>
          <>
            Notice the distinction between pressing the <kbd>ENTER</kbd> key to
            run the JavaScript code you&apos;ve typed, versus pressing the{" "}
            <kbd>SHIFT + ENTER</kbd> shortcut to move onto the next line of code
            (rather than running the code you&apos;ve already typed up).
          </>
        </Para>
        <Gap />
        <UnOrderdList isChildren heading={console.consoleOP.title}>
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
            <ULItem>{console.consoleOP.list[0]}</ULItem>
            <ULItem>
              <>
                You can use the <Mark>console.log</Mark> function to output the
                words &quot;Hello, World&quot;.
              </>
            </ULItem>
            <ULItem>{console.consoleOP.list[1]}</ULItem>
            <ULItem>{console.consoleOP.list[2]}</ULItem>
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
        <Code>{console.consoleOP.code}</Code>
        <ImageFW
          src={"/consoleLog.png"}
          alt="Console Log example"
          width={100}
          height={14}
        />
        <Gap />
        <UnOrderdList heading={console.multiWord.title} isChildren>
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
    </>
  );
};

export default Console;
