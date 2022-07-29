import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";

const SettingUp = () => {
  const js = {
    title: "",
    list: [
      "When it comes to web development, the only available language is JavaScript, and that's what makes it so popular and common and important to learn when you're developing web applications.",
      "One of the unique things about JavaScript that no other language has is that it's a language that can be used for writing the front-end and the back-end.",
    ],
  };

  const programming = {
    title: "Introduction to programming",
    list: [
      "A computer program is just a series of instructions based on some rules. These instructions tell a computer what to do under some specific circumstances and they are written to perform a specific set of tasks.",
      "Programming is simply the process of writing the steps a computer needs to take to complete a certain task.",
      "To program these instructions, we use programming languages. A programming language is sort of like a bridge that we use to facilitate communication between computers and people.",
      "For a computer to understand a programming language, it needs to save it somewhere in its random access memory. RAM or on a disk in binary code, which is represented by a series of zeros and ones.",
      "The binary code is a representation of machine language. That a computer can understand all of the zeros and ones in binary language represent electrical switches.",
      "Finally, a computer's central processing unit, or CPU can comprehend these binary electrical signals and update itself accordingly.",
      "This machine language, with its series of zeros and ones, is known as a low level language because it's closer to being understood by a computer's CPU.",
      "There are also high level languages such as JavaScript, that needs to be interpreted, that is converted to binary code that a CPU will be able to work with.",
      "So we might think of JavaScript and other high level languages as a tool that helps us to communicate with the CPU.",
    ],
  };

  const whyJS = {
    title: "Why JavaScript?",
    list: [
      "JavaScript is a language that builds interactivity into web pages. It is literally the language of the web. Almost every website runs JavaScript in some form or another.",
      "The reason for this is the fact that since its very inception In 1995, JavaScript has been the main way to interact with web pages on the client side, the front end side of websites and web applications. Using JavaScript updates are displayed in real time on our devices.",
      "Some alternatives to JavaScript, such as VBScript and more recently TypeScript. But even typescript compiles down to JavaScript so browsers can understand it.",
      "JavaScript is currently the only computer language that allows us to directly interact with our web pages dynamically on the client. It's baked into the browser.",
      "JavaScript unique ecosystem is one of the main reasons for its popularity.",
      "It fuels a myriad of JavaScript frameworks such as React, Vue, and D3 and it's also used on the server as Node.js and more recently Dino.",
      "It's considered one of the more accessible programming languages. It also has a wide development community to offer help and guidance.",
    ],
  };

  const jsUses = {
    title: "Javascript is used in many scenarios.",
    list: [
      "Power up websites.",
      "Communicate with databases.",
      "Provide a native fields to web apps.",
      "It's used to build mobile apps using technologies like React Native.",
      "It's used to program devices known as the Internet of Things.",
    ],
  };

  const jsLibAndFrmwrks = {
    title: "Some JavaScript Libraries and Frameworks.",
    list: [
      "jQuery",
      "React",
      "Knockout",
      "Backbone",
      "Angular",
      "Ember",
      "Vue",
      "Alpine",
    ],
    closerLine:
      "With millions of websites containing JavaScript code from different versions and libraries, there is a lot of old code. This is known as a legacy code.",
  };

  return (
    <>
      <HeadingL3 title="Setting Up" />
      <UnOrderdList heading={js.title} listData={js.list} />
      <OneLiner>
        <UnOrderdList heading={programming.title} listData={programming.list} />
      </OneLiner>
      <UnOrderdList heading={whyJS.title} listData={whyJS.list} />
      <UnOrderdList heading={jsUses.title} listData={jsUses.list} />
      <UnOrderdList
        heading={jsLibAndFrmwrks.title}
        listData={jsLibAndFrmwrks.list}
        closerLine={jsLibAndFrmwrks.closerLine}
      />
    </>
  );
};

export default SettingUp;
