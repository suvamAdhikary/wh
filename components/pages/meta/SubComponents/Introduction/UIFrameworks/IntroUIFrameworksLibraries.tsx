import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import ResponsiveIntro from "../ResponsiveIntro";

const IntroUIFrameworksLibraries = () => {
  const dependency = {
    data: "you know you write code in your application and that this code interacts with APIs provided by libraries and frameworks. Since you'll be deploying your application to a web server in the end, you must include these libraries and frameworks with it. If you do not include them, your application won't be able to call the API functions it needs to execute when you run it. That is why the libraries and frameworks are often referred to as dependencies. Your application depends on them.",
  };

  const packageManager = {
    title: "Package Manager",
    description:
      "what happens if your dependency also depends on other libraries and frameworks? This is known as a dependency tree.",
    list: [
      "A project could have hundreds of dependencies and its tree, it will take a very long time to download, setup, and configure all of them.",
      "How do you make sure you're using the same versions the rest of your team is using? This is where package managers come in.",
      "A package manager is a tool that automatically downloads and installs dependencies.",
      "We also refer to dependencies as packages.",
      "A package manager also provides the capability to publish your own packages.",
      "For each dependency, you can specify a version of that dependency and the package manager will download it for you.",
      "If there is a dependency tree, the package manager takes care of that for you. It will automatically download all of the dependency tree so that you can use APIs without dependency issues.",
      'The most common package manager for front end development is the "Node Package Manager or npm".',
    ],
  };

  const bundler = {
    title: "Bundler",
    description:
      "You have all your downloaded dependencies, now you need to include them in your HTML file. But adding all of them into an HTML file would take forever.\nThis is where you will use a bundling tool or bundler.",
    list: [
      "The purpose of a bundler is to automatically combine them into a single file.",
      "If you're bundle is significantly large, many bundles can split your dependencies into multiple bundles.",
      'There are many bundle is available such as "Gulp" and "Webpack".',
    ],
  };

  const bootstrap = {
    title: "Getting started with Bootstrap",
    description:
      "Bootstrap is a collection of pre-written code chunks in CSS and JavaScript that allows you to create websites more quickly than if you had to create every bit of code from scratch. Building websites from scratch every time will be quite time-consuming. This is where Bootstrap comes in.",
    list: [
      `Add this in head: <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />`,
      `Add this at the end of body: <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
    crossorigin="anonymous"
  ></script>`,
      "The first element you need to add when setting up a Bootstrap website is the container elements. You need it before you can use the Bootstrap grid system. You add HTML div element and apply the container CSS class provided by Bootstrap.",
    ],
  };

  const infixesAndModifiers = {
    title: "Bootstrap Class infix and Modifiers",
    description:
      "Breakpoints are the triggers in bootstrap for how your layout changes across device or viewpoint sizes. Here are the responsive breakpoints available in bootstrap and how we use them.",
    list: [
      "Extra small is for screens less than 576 pixels wide. Extra small is the default breakpoint in Bootstrap CSS rules. As bootstrap is mobile first.",
      "Small is for screens greater than or equal to 576 pixels wide. In bootstrap CSS rules, this is abbreviated as SM.",
      "Medium is for screens greater than or equal to 768 pixels wide. In Bootstrap CSS rules, this is abbreviated as MD.",
      "Large is for screens greater than or equal to 992 pixels wide. In Bootstrap CSS rules, this is abbreviated as LG.",
      "Extra large is for screens greater than or equal to 1200 pixels wide. In bootstrap CSS rules this is abbreviated as XL.",
      "Extra extra large is the screen is greater than or equal to 1400 pixels wide. In bootstrap CSS rules, this is abbreviated as XXL.",
    ],
  };

  const bootstrapGrid = {
    title: "Bootstrap Grid",
    description:
      "As you have previously learned building a website using responsive design requires a responsive grid and responsive breakpoints. Bootstrap provides both of these as part of its library.",
    list: [
      "The bootstrap grid system helps us to create web page layouts through a series of rows and columns that house our content.",
      "For the grid, bootstrap uses a 12 column grid system that can be fluid or fixed.",
      "The bootstrap grid system always has a container, rows and columns.The container is the root element of your grid.",
      "Bootstraps grid system always starts with the container.",
      "The container contains pads and aligns your content.",
      "Its width is determined based on the current responsive breakpoint.",
      "You can add rows and inside each row you can add columns.",
    ],
  };

  const bootstrapComponents = {
    data: "Boot trap includes a pre made set of UI elements and styles to help you build your website. They range from alert messages to navigation menus. These are called bootstrap components.",
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "Bootstrap Official Website",
        link: "https://getbootstrap.com/",
      },
      {
        title: "Bootstrap 5 Foundations by Daniel Foreman",
        link: "https://www.amazon.com/Bootstrap-Foundations-Mr-Daniel-Foreman/dp/B0948GRS8W/",
      },
      {
        title: "Responsive Web Design with HTML5 and CSS  by Ben Frain",
        link: "https://www.amazon.com/Responsive-Web-Design-HTML5-CSS/dp/1839211563/",
      },
      {
        title: "Bootstrap Themes",
        link: "https://themes.getbootstrap.com/",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Intro to UI Frameworks and Libraries" />
      <OneLiner>{dependency.data}</OneLiner>
      <UnOrderdList
        heading={packageManager.title}
        description={packageManager.description}
        listData={packageManager.list}
      />
      <UnOrderdList
        heading={bundler.title}
        description={bundler.description}
        listData={bundler.list}
      />
      <ResponsiveIntro />
      <OneLiner>
        <UnOrderdList
          heading={bootstrap.title}
          description={bootstrap.description}
          listData={bootstrap.list}
        />
      </OneLiner>
      <UnOrderdList
        heading={infixesAndModifiers.title}
        description={infixesAndModifiers.description}
        listData={infixesAndModifiers.list}
      />
      <UnOrderdList
        heading={bootstrapGrid.title}
        description={bootstrapGrid.description}
        listData={bootstrapGrid.list}
      />
      <OneLiner>{bootstrapComponents.data}</OneLiner>
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default IntroUIFrameworksLibraries;
