import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import HeadingL4 from "../../../../../text/headings/HeadingL4";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import QA from "../../../../../QA";

const IntroReact = () => {
  const staticAndDynamic = {
    title: "Static and dynamic content",
    list: [
      "When you open a website, a web server sends the website's content to your browser. The content can be static or dynamic.",
      "Static content is files that the server transfers just as they are stored on the web server, such as videos or images.",
      "Dynamic content is generated when the HTTP request is made.",
      "For example, the content may be generated based on input from a user, or when you visit a news website, it would be based on the current date.",
      "What actually happens, is that the web server communicates with another kind of server, called an application server or a back-end.",
      "The application server generates the dynamic content that the web server sends back to the user's browser.",
      "Because dynamic content is generated while you use a website, it typically takes longer to generate than it takes to send back static content.",
      "For example, when you log into this course, the web server communicates with an application server to check that you are in fact enrolled. The application server confirms your enrollment and specifies what content should show for your profile specifically.",
      "Application servers perform more complex processing than web servers. For instance, they have to run the application logic, communicate with the database, and check permissions.",
      "To improve performance, different application servers have specific purposes.",
      "There are application servers for every type of content out there, from music streaming to creating your own blog. You can even create your own application servers, such as building a back-end for a web application.",
    ],
  };

  const caching = {
    title: "Caching",
    description:
      "A saved copy of dynamic content readily available upon request.",
    list: [
      "Application servers typically have a limited capacity on how many requests they can process per second. This is where the web server can help out. Web servers use a process called caching instead of generating content dynamically for every request.",
      "Caching means the web server keeps a copy of dynamic content.",
      "If the content is requested again, the web server can immediately send this cached version instead of passing the request again to the application server.",
      "On the first request for dynamic content, the web server checks if the content exists in the cache. If it does not exist, the content is requested from the application server and stored in the cache.",
      "The web server then sends back the dynamic content to the browser. On subsequent requests, the web server immediately sends back the content stored in the cache.",
      "This reduces the amount of dynamic content that the application server has to generate.",
      "Then, after a period of time or with the next user interaction, the web server updates the cache with the latest content.",
    ],
  };

  const traditionalWebsite = {
    title: "Traditional Website",
    list: [
      "Before the advent of modern JavaScript frameworks, most websites were implemented as multi-page applications.",
      "Traditional applications resource intensive to web servers because sending entire web pages for every request consumes excessive bandwidth and uses CPU time to generate dynamic pages.",
      "If your website is complex, the site browsing experience may appear slow to users. It will be even slower if they have a poor or limited internet connection.",
      "In traditional website the web browser sends the request to the web server. The web server generates the entire HTML page and sends it back to the web browser. The web browser then renders a new web page.",
    ],
  };

  const spa = {
    title: "SPA ( Single Page Application )",
    list: [
      "It's called single-page, but that doesn't mean your website has only one page of content.",
      "What it means is that there is only one HTML page that gets sent from the server to the browser, but that page will update its content as your users interact with your website.",
      "A SPA allows the user to interact with the website without the application needing to download entire new web pages.",
      "Instead, it rewrites the current web page as the user interacts with it. The result is a browsing experience that feels faster and more responsive to user input.",
      "In a single-page application, different pages are broken into templates, also known as views. Each view will have HTML code that can be updated by the application.",
      "In SPA the web browser sends the request to the web server and the web server sends back a file called a JavaScript Object Notation or JSON object.",
      "This contains only the data to be displayed, and the SPA will update the HTML.",
      "This is much smaller than sending an entire web page. The web browser then updates the web page by inserting the template with items replaced by the values in the JSON object.",
    ],
  };

  const spaApproches = {
    title: "",
    description: "A SPA has two approaches to serving code and resources.",
    list: [
      "The first is called bundling",
      "The second approach is known as lazy loading or code splitting.",
    ],
  };

  const bundling = {
    title: "Bundling",
    data: "With bundling, when the browser requests the application, the server returns and loads all necessary HTML, CSS, and JavaScript immediately.",
  };

  const lazyLoading = {
    title: "Lazy Loading",
    data: "With lazy loading, the browser requests the application and the server returns only the minimum HTML, CSS, and JavaScript needed to load the application. Additional resources are downloaded as required.",
  };

  const react = {
    title: "React",
    list: [
      "React is focused on working with components, which makes it simple to build functional user interfaces on web and mobile.",
      "Available since 2013 React is an open source library with a community of core contributors and companies that maintain it.",
      "Developers use React to develop single page applications and you can also develop mobile applications with React native.",
      "React is used in conjunction with other JavaScript libraries during development.",
      "It allows developers to write less code to create functionality.",
      "This in turn makes it easier to maintain code in the long term and simplifies testing.",
    ],
  };

  const reactsComponents = {
    title: "Reacts Components",
    list: [
      "The key concept behind React is that it allows you to define components that you can combine to build a web application.",
      "A component is basically a small piece of user interface, such as a music player or photo gallery.",
      "This component model allows you to do several things, such as developing and testing parts of their application in isolation and it also allows you to reuse components across multiple sections of the application as well.",
      "Many open source libraries that provide pre made components for React projects.",
    ],
  };

  const howReactWorks = {
    title: "How React Works",
    list: [
      "A reality component, has a one to one relationship to an HTML element that is displayed on the webpage.",
      "When React builds out its tree of components, it builds out its own dome in memory called the virtual DOM.",
      "The virtual DOM is a representation of the browser DOM that is kept in memory.",
      "React uses this virtual DOM to update the browser DOM, only when it needs to. This ensures that your application is fast and responsive to user input.",
      "React checks to see if the HTML components in the virtual DOM matches the browser DOM. If a change is required, the browser dome is updated. If nothing has changed, then no update is performed. This process is called reconciliation.",
      "When you update a component in React. Firstly, the virtual DOM is updated.",
      "Then React, compares the virtual DOM to the previous version of the virtual DOM, and determines which elements have changed. The changed elements, and only those elements are updated in the browser DOM.",
      "Changes on the browser DOM, cause the displayed web page to change.",
    ],
  };

  const virtualDOM = {
    title: "The Virtual DOM",
    reconciliation: {
      title: "",
      list: [
        "Step 1: The virtual DOM is updated.",
        "Step 2: The virtual DOM is compared to the previous version of the virtual DOM and checks which elements have changed.",
        "Step 3: The changed elements are updated in the browser DOM.",
        "Step 4: The displayed webpage updates to match the browser DOM.",
      ],
    },
    data1: [
      "As updating the browser DOM can be a slow operation, this process helps to reduce the number of updates to the browser DOM by only updating when it is necessary.",
      "But even with this process, if a lot of elements are updated by an event, pushing the update to the browser DOM can still be expensive and cause slow performance in the web application.",
      "The React team invested many years of research into solving this problem. The outcome of that research is what’s known as the React Fiber Architecture.",
    ],
    fiberArchitecture: {
      title: "Fiber Architecture",
      list: [
        'The Fiber Architecture allows React to incrementally render the web page. What this means is that instead of immediately updating the browser DOM with all virtual DOM changes, React can spread the update over time. But what does "over time" mean?',
        "Imagine a really long web page in the web browser. If the user scrolls to the bottom, the top of the web page is no longer visible. The user then clicks a button on the bottom of the web page that updates some text on the top of the web page.",
        "But the top of the page isn’t visible. Therefore, why update it immediately?",
        "Perhaps there is text currently displayed on the bottom of the page that also updates when the button is clicked. Wouldn’t that be a higher priority to update than the non-visible text?",
        "This is the principle of the React Fiber Architecture. React can optimize when and where updates occur to the browser DOM to significantly improve application performance and responsiveness to user input. Think of it as a priority system. The highest priority changes, the elements visible to the user, are updated first. While lower priority changes, the elements not currently displayed, are updated later.",
      ],
    },
    data2: [
      "While you’re unlikely to interact with the virtual DOM and Fiber Architecture yourself, it’s good to know what’s going on if issues occur during the development of your web application.",
      "There are many tools available to help you investigate how React is processing your webpage. The official React Developer Tools web browser plugin developed by Meta will be one of the key tools in your developer toolbox. So, if you do have to look deeper into the code, you’ll have the right toolbox available to help you.",
    ],
  };

  const componentHierarchy = {
    title: "Component Hierarchy",
    data: "Every React application contains at least one component, the root component or app component. Components are added to the app component to build out a tree structure of components that make up the application.",
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "React Official Website",
        link: "https://reactjs.org/",
      },
      {
        title:
          "Choosing between Traditional Web Apps and Single Page Apps (Microsoft)",
        link: "https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/choose-between-traditional-web-and-single-page-apps",
      },
      {
        title: "React Source Code (Github)",
        link: "https://github.com/facebook/react",
      },
      {
        title: "Introduction to React.js",
        description: "The original video recorded at Facebook in 2013.",
        link: "https://youtu.be/XxVg_s8xAms",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Introduction to React" />
      <UnOrderdList
        heading={staticAndDynamic.title}
        listData={staticAndDynamic.list}
      />
      <UnOrderdList
        heading={caching.title}
        description={caching.description}
        listData={caching.list}
      />
      <UnOrderdList
        heading={traditionalWebsite.title}
        listData={traditionalWebsite.list}
      />
      <UnOrderdList heading={spa.title} listData={spa.list} />
      <UnOrderdList
        heading={spaApproches.title}
        description={spaApproches.description}
        listData={spaApproches.list}
      />
      <QA question={bundling.title} answer={bundling.data} />
      <QA question={lazyLoading.title} answer={lazyLoading.data} />
      <OneLiner>
        <UnOrderdList heading={react.title} listData={react.list} />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={reactsComponents.title}
          listData={reactsComponents.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={howReactWorks.title}
          listData={howReactWorks.list}
        />
      </OneLiner>
      <OneLiner>
        <section className="vdom-container">
          <HeadingL4 title={virtualDOM.title} />
          <p>
            React builds a representation of the browser Document Object Model
            or DOM in memory called the virtual DOM. As components are updated,
            React checks to see if the component’s HTML code in the virtual DOM
            matches the browser DOM. If a change is required, the browser DOM is
            updated. If nothing has changed, then no update is performed.
          </p>
          <p>
            As you know, this is called the <b>reconciliation</b> process and
            can be broken down into the following steps:
          </p>
          <UnOrderdList
            heading={virtualDOM.reconciliation.title}
            listData={virtualDOM.reconciliation.list}
          />
          {virtualDOM.data1.map((data) => (
            <p key={data}>{data}</p>
          ))}
          <UnOrderdList
            heading={virtualDOM.fiberArchitecture.title}
            listData={virtualDOM.fiberArchitecture.list}
          />
          {virtualDOM.data2.map((data) => (
            <p key={data}>{data}</p>
          ))}
        </section>
      </OneLiner>
      <QA
        question={componentHierarchy.title}
        answer={componentHierarchy.data}
      />
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default IntroReact;
