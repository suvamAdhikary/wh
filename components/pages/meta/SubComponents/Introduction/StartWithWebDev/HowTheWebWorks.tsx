import React from "react";
import Heading5 from "../../../../../text/headings/Heading5";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import QA from "../../../../../QA";

const HowTheWebWorks = () => {
  const network = {
    title: "Network :",
    data: "A network is made up of at least two devices that connect and communicate via a wired or wireless connection. One network switch can connect to another switch to link two networks.",
  };

  const webServer = {
    title: "Web Server",
    description:
      "A server is a computer that runs applications and services ranging from websites to instant messaging. It's called a server because it provides a service to another computer and its user also known as the client.\nA web server has many functions which includes :",
    list: [
      "Web requests",
      "Website storage",
      "Administration",
      "Data storage",
      "Security",
      "Managing email",
      "Website hosting",
      "Databases",
      "Control panel",
      "CMS Software, etc.",
    ],
  };

  const webpages = {
    title: "Webpages",
    data: "A typical web page is one single page that consists of HTML, CSS, and JavaScript. It displays images, text, videos, and other content in the web browser.",
  };

  const websites = {
    title: "Websites",
    data: "If a web page is one single page then a website is a collection of web pages that link together under one domain name.",
  };

  const webApplications = {
    title: "Web Applications",
    list: [
      "The key difference between a website, and web application is the level of interactivity, and dynamic content.",
      "a website is more informative and a web application is more interactive.",
      "The web application displays content based on the user's input and interaction and  in case of the website, the user simply views the content and this content is the same for everyone who visits the website.",
    ],
  };

  const webpageEditing = {
    title: "Webpage Editing",
    description:
      "If you want to work with a webpage, you need to know about three technologies and understand how they interact. As a web developer you will work with these technologies every day and understand how they work together.\nTheir :",
    list: [
      "HTML structures the content you see.",
      "CSS controls the colors and style.",
      "JavaScript is responsible for the user interaction.",
    ],
  };

  const html = {
    title: "HTML",
    data: "HTML stands for hypertext markup language, it works by using something called markup tags. These tags describe the content that is displayed in the browser window, this content can be things like headings, paragraphs, images and even multimedia elements such as audio and video, the way html describes the content is known as markup.",
  };

  const css = {
    title: "CSS",
    data: "CSS is short for cascading style sheets and adds visual enhancements like colors and layout to the web page, this is commonly known as styling. It works by enhancing the HTML elements and telling them how to display.",
  };

  const javaScript = {
    title: "JavaScript",
    data: "JavaScript, which is a programming language built into the browser. JavaScript provides web developers with tools for interactivity, data processing, control and action.\nJavaScript is the powerhouse of a web page. It has the ability to manipulate the content that you see on the screen as you interact with it. In fact, without JavaScript websites would be kind of boring and very limited in terms of what you can do.",
  };

  const hyperlink = {
    data: "The technical term for a link, you click on a hyperlink. This is because they link to hypertext content. Remember that HTML is Hypertext Markup Language. However, links themselves, don't have to link to the same website. They can also link to other websites.",
  };

  const pageRendering = {
    title: "Page Rendering",
    data: "When a copy of that webpage is sent from the web server to your browser, each line of code is processed in sequential order from first to last. As each line is interpreted, the browser creates the building blocks, which is the visual representation you see on the screen. This creation process is known as page rendering.\nThe response from the web server must be a complete web page in order to fulfill the request, to show the page in the browser.",
  };

  const browser = {
    title: "Browser / Web Browser",
    list: [
      "A web browser, or browser for short, is a software application that you use to browse the World Wide Web.",
      "It works by sending a request to a web server and then receives a response containing the content that is to be displayed on the screen of your device.",
      "Once the browser is open on your device, there is the address bar where you input the address of the website that you want to visit. The address is commonly known as the Uniform Resource Locator or URL for short.",
      "The URL contains the protocol or the HTTP, the domain name, usually the name of the website, and the file path, or the path to the page that is displayed.",
      "When you make a request using this URL, the browser and server communicate using a protocol known as the Hypertext Transfer Protocol or HTTP.",
      "Once the web browser receives the content, it displays it on the screen of your device.",
      "This exchange of information is made possible by something known as the request response cycle.",
    ],
  };

  const webHosting = {
    title: "Web Hosting",
    description:
      "Web hosting is a service where you place your website and files on the hosting companies web server. You're essentially renting the space in return for stable and secure storage. You don't need to be accompanied to use a web host. Individuals can rent space too.\nSome of the different hosting options available, their :",
    list: [
      "Shared Hosting",
      "Virtual private hosting",
      "Dedicated hosting",
      "Cloud Hosting",
    ],
  };

  const sharedHosting = {
    title: "Shared Hosting",
    description: "Physical server",
    list: [
      "The cheapest form of web hosting is known as shared hosting.",
      "You pay for a location on a web server containing many web hosting accounts with shared hosting. This means that you also share the service processing power, memory, and bandwidth with other websites that might slow your performance.",
      "This option is best for a small website with a small number of visitors.",
      "Many developers also use this as a low-cost sandbox environment to practice deploying or hosting their personal websites. Some companies offer free shared hosting, but with limitations and often have advertisements embedded in the webpages.",
    ],
  };

  const vps = {
    title: "Virtual Private Surface or VPS",
    description: "Physical server",
    list: [
      "A VPS is a virtual server with dedicated CPU, memory, and bandwidth resources.",
      "It will be running on a hardware server with other VPS instances but as the resources are fixed per VPS instance, your website is unlikely to be impacted by the performance of other VPS instances.",
      "A VPS instance will be more expensive than shared hosting.",
    ],
  };

  const dedicatedHosting = {
    title: "Dedicated Hosting",
    description: "Dedicated physical server",
    list: [
      "This will be a hardware server that is dedicated to you only. All hardware, CPU, memory, and bandwidth resources are yours to use.",
      "Generally, this option is more expensive than a VPS hosting.",
    ],
  };

  const cloudHosting = {
    title: "Cloud Hosting",
    description: "Multiple Physical servers & Virtual Servers",
    list: [
      "With Cloud hosting, your website is run in something called a Cloud environment, which spans across multiple physical and virtual servers. If a physical or virtual server fails, your website will run on a different server and stay online.",
      "The main advantage of Cloud hosting is that you can use as many resources as you need without hardware limitations.",
      "However, you pay based on resource use. For example, if you transfer a file from the Cloud to a web browser, you'll pay for the bandwidth used for that transfer at a fractional cent cost per megabyte.",
      "While this can quickly become more expensive, is allows websites and web applications to scale their costs as popularity grows. This is how many of the major web applications operate.",
    ],
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "What is a Web Server? (NGINX)",
        link: "https://www.nginx.com/resources/glossary/web-server/",
      },
      {
        title: "What is a Web Browser? (Mozilla)",
        link: "https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/",
      },
      {
        title: "Who invented the Internet? And why? (Kurzgesagt)",
        link: "https://youtu.be/21eFwbb48sE",
      },
      {
        title: "What is Cloud Computing? (Amazon)",
        link: "https://youtu.be/mxT233EdY5c",
      },
      {
        title: "Browser Engines (Wikipedia)",
        link: "https://en.wikipedia.org/wiki/Browser_engine",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="How the web works" />
      <OneLiner>
        <Heading5 title={network.title} />
        {network.data}
      </OneLiner>
      <UnOrderdList
        heading={webServer.title}
        description={webServer.description}
        listData={webServer.list}
      />
      <QA question={webpages.title} answer={webpages.data} />
      <QA question={websites.title} answer={websites.data} />
      <UnOrderdList
        heading={webApplications.title}
        listData={webApplications.list}
      />
      <UnOrderdList
        heading={webpageEditing.title}
        description={webpageEditing.description}
        listData={webpageEditing.list}
      />
      <QA question={html.title} answer={html.data} />
      <QA question={css.title} answer={css.data} />
      <QA question={javaScript.title} answer={javaScript.data} />
      <OneLiner>{hyperlink.data}</OneLiner>
      <QA question={pageRendering.title} answer={pageRendering.data} />
      <UnOrderdList heading={browser.title} listData={browser.list} />
      <UnOrderdList
        heading={webHosting.title}
        description={webHosting.description}
        listData={webHosting.list}
      />
      <UnOrderdList
        heading={sharedHosting.title}
        description={sharedHosting.description}
        listData={sharedHosting.list}
      />
      <UnOrderdList
        heading={vps.title}
        description={vps.description}
        listData={vps.list}
      />
      <UnOrderdList
        heading={dedicatedHosting.title}
        description={dedicatedHosting.description}
        listData={dedicatedHosting.list}
      />
      <UnOrderdList
        heading={cloudHosting.title}
        description={cloudHosting.description}
        listData={cloudHosting.list}
      />
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default HowTheWebWorks;
