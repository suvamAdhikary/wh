import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import QA from "../../../../../QA";
import TwoColTable from "../../../../../tables/TwoColTable";

const CoreInternetTech = () => {
  const IPAddress = {
    title: "IP Address ( Internet Protocol Address )",
    description:
      "IP addresses is that they function much like addresses in a postal system that make it possible for packets of information to be delivered to you. And like with the postal system things can go wrong.",
    list: [
      "Every computer on a network is assigned an IP address. Version four and version six are currently the two most widely used standards of internet protocol.",
      "In protocol version four an IP address contains four octet. It's separated by periods or dots. For example 192.0.2.235.",
      "In protocol version six. An IP address contains eight groups of hexadecimal digits separated by a colon. For example 4527:0a00:1567:0200:ff00:0042:8329:0102.",
    ],
  };

  const IPPackets = {
    title: "IP Packets",
    description:
      "When you send data across a network, you send the data as a series of messages called IP packets.",
    list: [
      "IP Packets also known as data grams at a high level IP packets contain a header and a payload or the data.",
      "They include the destination IP address and source IP address. These addresses are in the header along with some additional information to help deliver the packet.",
      "And the payload contains the data of the packet and some of the other protocols.",
    ],
  };

  const otherProtocols = {
    title: "Some Other Protocols",
    description:
      "IP packets can arrive out of order, become damaged or corrupted to in transit or be dropped or lost during transit. To solve these problems, the payload part of the packets contains other protocols too. You can think of them as another message inside the payload of the IP packet. The two most common protocols are :",
    list: [
      "The Transmission Control Protocol referred to as TCP",
      "The User Datagram Protocol, also known as UDP",
    ],
  };

  const tcp = {
    title: "TCP ( Transmission Control Protocol )",
    data: "TCP can solve all three of the previously mentioned issues but at the cost of a small delay when sending the data.\nThis protocol is used for sending the data that must arrive correctly and in order such as a text or image files.",
  };

  const moreAboutProtocols = {
    title: "TCP & UDP",
    list: [
      "Both of these protocols contain payloads that contain further protocols inside of them and there you have it.",
      "These protocols can help to make sure that data arrives in order does not become corrupted or lost or dropped during transit.",
    ],
  };

  const udp = {
    title: "UDP ( User Datagram Protocol )",
    data: "UDP solves the corrupt packet issue but packets can still arrive out of order or not arrive at all.\nThis protocol is used for sending data that can tolerate some data loss such as voice calls or live video streaming.",
  };

  const http = {
    title: "HTTP",
    description:
      "HTTP stands for Hypertext Transfer Protocol is a protocol used for transferring web resources such as HTML documents, images, styles, and other files.",
    list: [
      "HTTP is a core operational protocol of the world wide web. It is what enables your web browser to communicate with a web server that hosts a website.",
      "HTTP is the communication protocol you use whenever you browse the web.",
      "HTTP is a request response based protocol. A web browser or client sends an HTTP request to a server, and the webserver sends the HTTP response back to the browser.",
    ],
  };

  const httpRequest = {
    title: "HTTP Request",
    description:
      "line 1 => GET / HTTP /1.1\nline 2 => Host: developer.mozilla.org\nline 3 => Accept-Language: en\nAn HTTP requests consists of :",
    list: [
      'Method : "GET" (line 1).',
      'Path : "/" (line 1).',
      'Version : "HTTP /1.1" (line 1).',
      "And headers : (line 2 & 3 in the above example).",
    ],
  };

  const method = {
    title: "HTTP Method",
    description: "The primary or the most commonly used HTTP methods are :",
    list: [
      "The GET method is used to retrieve information from the given server.",
      "The POST request is used to send data to the server.",
      "The PUT method updates whatever currently exist on the website with something else.",
      "The DELETE method removes the resource.",
    ],
  };

  const path = {
    title: "Path",
    data: 'The path is the representation of where the resource is stored on the webserver.\nFor example, if you requested an image at https://example.com/images/image.jpg, the path would be "example.com/images/image.jpg".',
  };

  const version = {
    title: "Version",
    data: "There are multiple versions of the HTTP protocol.\nVersion 1.1 and 2.0 are the most used",
  };

  const headers = {
    title: "Headers",
    data: "Headers contain additional information about the request, and the client that is making the request.",
  };

  const requestBody = {
    data: "For certain requests methods, the requests will also contain a body of content that the client is sending.",
  };

  const httpResponse = {
    title: "HTTP Response",
    description:
      'line 1 => HTTP/1.1 200 OK\nDate: Sat, 09 Oct 2010 14:28:02 GMT\nServer: Apache\nLast-Modified: Tue, 01 Dec 2009 20:18:22 GMT\nETag: "51142bc1-7449-479b075b2891b"\nAccept-Ranges: bytes\nContent-Length: 29769\nContent-Type: text/html',
    list: [
      "HTTP responses follow a format similar to the request format.",
      "Following the header, the response will optionally contain a message body consisting of the response contents such as the HTML document, the image file, and so forth.",
      'HTTP status codes indicate if the HTTP requests successfully completed. The code values are in the range of a 100-599 and a grouped by purpose : "200" (line 1).',
      'The status message is a text representation of the status code : "OK" (line 1).',
    ],
  };

  const statusCodes = {
    heading: "Status Code",
    description:
      "There are five groups of status codes. They're grouped by the first digit of their number.",
    cols: ["Group", "Range"],
    tableData: [
      {
        Group: "Informational",
        Range: "100 - 199",
      },
      {
        Group: "Successful",
        Range: "200 - 299",
      },
      {
        Group: "Redirection",
        Range: "300 - 399",
      },
      {
        Group: "Client error",
        Range: "400 - 499",
      },
      {
        Group: "Server error",
        Range: "500 - 599",
      },
    ],
  };

  const informationalRes = {
    title: "Informational Responses ( 100 - 199 )",
    list: [
      "Information responses are provisional responses sent by the server. These responses are interim before the actual response.",
      "The most common information response is 100 Continue, which indicates that the web client should continue to request or ignore the response if the request is already finished.",
    ],
  };

  const successfulRes = {
    title: "Successful Responses ( 200 - 299 )",
    list: [
      "Successful responses indicate that the request was successfully processed by the web server.",
      "The most common success response being 200 Ok. You're receiving these responses every day when you receive content successfully from a website. The meaning of Ok depends on the HTTP method.",
      "If the method is GET, it means that the resource is found and is included in the body of the HTTP response.",
      "If it's POST, it means that the resource was successfully transmitted to the webserver.",
      "If it's PUT, the resource was successfully transmitted to the webserver.",
      "Finally, if the method is DELETE, it means the resource was deleted.",
    ],
  };

  const redirectionRes = {
    title: "Redirection Responses ( 300 - 399 ) ",
    list: [
      "Redirection responses indicate to the web client that the requested resource has been moved to a different path.",
      "The most common response codes used are 301 Moved Permanently and 302 Found.",
      "The difference between the redirection messages 301 and 302 is that 302 indicates a temporary redirection. The resource has been temporarily moved. When web browsers receive these responses, they will automatically submit the request for the resource at the new path.",
    ],
  };

  const clientErrorRes = {
    title: "Client Error Responses ( 400 - 499 )",
    list: [
      "Client error responses indicate that the requests contained bad syntax or content and cannot be processed by the webserver.",
      "The most common codes used are, 400 is used where the web browser or client submitted bad data to the webserver.",
      "401 is used to indicate that the user must log into an account before the request can be processed.",
      "403 is used to indicate the request was valid, but that the webserver is refusing to process it. This is often used to indicate that a user does not have sufficient permissions to execute an action in a web application.",
      "404 is used to indicate that the request resource was not found on the webserver.",
    ],
  };

  const serverErrorRes = {
    title: "Server Error Responses ( 500 - 599 )",
    list: [
      "Server error responses indicate that a failure occurred on the webserver while trying to process the request.",
      "The most common code used is 500 Internal Server Error, which is a generic error status indicating that the server fail to process the request.",
    ],
  };

  const https = {
    title: "HTTPS",
    description: "HTTPS is the secure version of HTTP.",
    list: [
      "It is used for secure communication between two computers so that nobody else can see the information being sent and received.",
      "It does this by using something called encryption.",
      "In HTTPS, before the content is sent, it is turned into a secret code. Only the other computer can turn the secret code back into its original content. If someone else was to look at the code, it wouldn't be understandable.",
    ],
  };

  const developerTools = {
    title: "Developer Tools",
    description:
      "Most web browsers come equipped with a set of developer tools that allow developers to inspect their HTML, CSS and Javascript code. Also, to trace http request to the web server, investigate performance issues and review web page security.\nThe Web browser developer tools are a valuable part of your development toolkit to help you investigate and diagnose problems.\nThere are various tabs on the top row of developer tools that provide different functionality.",
    list: [
      "Console tab : This tab outputs, javascript logs and errors from your web application.",
      "Sources tab : This tab shows all content resolved for the current page. It includes HTML, CSS, Javascript, images and videos.",
      "Network tab : This tab shows the timeline and details of http requests and responses for the web page.",
      "Performance tab : This tab shows what the web browser is doing over time. It is useful if your web application is running slow because you can pinpoint the functions that are taking the most time.",
      "Memory tab : This tab shows the parts of your code that are consuming the most resources.",
      "Elements tab : This tab shows the documents, HTML elements and their properties. For example, when I hover over an element in the elements tab, it highlights that element in the browser pane. On the other side of the panel, there are tabs for inspecting the details of the elements further. This panel shows us what CSS is applied to an element and the result of the element displayed in the browser.",
    ],
  };

  const frameworksAndLibraries = {
    title: "Frameworks and libraries",
    description:
      "To speed up development, developers use already developed frameworks and libraries in their application development.\nThese might be open source, meaning that the source code is freely-available for anyone to modify and build from.\nThere are thousands of open source libraries and frameworks available or there might be proprietary, ones that are licensed or developed internally.",
    list: [
      "Libraries are reusable pieces of code that can be used by your application. They are purpose-built to provide a specific functionality.",
      "Frameworks on the other hand provide a structure for developers to build with. It's act as a structure where the developer provides their own code that the framework interacts with.",
      "Most frameworks use many libraries. The libraries that the framework uses can be used for your application. Your application can also use other libraries.",
      "Frameworks are considered opinionated and libraries are considered unopinionated. This is defined as the degree of freedom available to the developer to choose how to code a feature.",
      "Frameworks are a great way to reduce development time and to enforce a structure on how code is written. They have many best practices already in place and contain most of what is needed to develop an application, however, sometimes you may find that the way you need to code something doesn't fit into the structure of the framework. Other times you may find that some of the libraries the framework uses may conflict with a library that you are required to use and cause compatibility issues.",
      "If an application is built without a framework, the developer will need to decide on the set of libraries they wish to use to achieve the functionality they must deliver. They will also need to take care that the selected libraries can work together. The upside to this is that they can replace libraries as needed.",
      "Frameworks and libraries give you the opportunity to reuse existing web app functions. This can result in faster development, fewer errors, and more time for you to spend on the essential features of your application. Instead of reinventing the wheel, you can use frameworks and libraries that are designed specifically to help your web app development processes.",
    ],
  };

  const api = {
    title: "API ( Application Programming Interface )",
    description:
      "A service, application, or interface offering advanced functionality with simple syntax.",
    list: [
      "An API is a set of functions and procedures for creating applications that access the features or data of an operating system, application or other service.",
      "Some common API's that web developers work with include Browser API, REST API and Sensor-Based API.",
      "In Software development, API's are often the bridge between different components or systems. This earns them names like gateway or middleware. The term is used widely to represent many different tools and systems.",
    ],
  };

  const apiExamples = {
    title: "Some examples of different API use cases",
    description:
      "This kind of API provides data for popular web and mobile apps. these are also called web servers.",
    list: [
      "The Browser or Web APIs, which are built into the browser itself. They extend the functionality of the browser by adding new services and are designed to simplify complex functions and provide easy syntax for building advanced features.",
      "The DOM API turns the html document into a tree of nodes that are represented as JavaScript objects.",
      "The geolocation API that returns coordinates of where the browser is located.",
      "The Fetch API used for fetching data.",
      "The Canvas API for drawing, graphics.",
      "The History API keeping history.",
      "The Web Storage API for client side storage.",
      "The Sensor-Based API. This is what the internet of things also known as IOT is based on. These are actual physical senses that are interconnected with each other. The sensors can communicate through API and track and respond to physical data. Some examples are Philips hue, smart lights and node bots.",
      "The RESTful or REST API",
    ],
  };

  const restApi = {
    title: "REST ( Representational State Transfer )",
    description: "A set of principles used to build highly efficient APIs.",
    list: [
      "REST or representational state transfer, is a set of principles that help build highly efficient API's. One of the main responsibilities of these kinds of API's is sending and receiving data to and from a centralized database.",
      "We can query our own REST API or third party ones.",
    ],
  };

  const apiCloser = {
    data1:
      "These API's use endpoints to specify how different resources can be accessed. The endpoint is built into the URL when accessing the API. Once the endpoint is hit, the API performs whatever service side processing is needed to build the response. Two common forms of response are full web page is a data form based on JavaScript called Jason.",
    data2:
      "you will frequently work with many different types of API's. You will often use API's to extend the abilities of systems or to act as a bridge between different components.",
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "HTTP Overview (Mozilla)",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
      },
      {
        title: "Introduction to Networking by Dr.Charles R Severance",
        link: "https://www.amazon.com/Introduction-Networking-How-Internet-Works/dp/1511654945/",
      },
      {
        title: "Chrome Developer Tools Overview (Google)",
        link: "https://developer.chrome.com/docs/devtools/overview/",
      },
      {
        title: "Firefox Developer Tools User Docs (Mozilla)",
        link: "https://firefox-source-docs.mozilla.org/devtools-user/index.html",
      },
      {
        title: "Getting Started with Visual Studio Code (Microsoft)",
        link: "https://code.visualstudio.com/docs",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Core Internet technologies" />
      <UnOrderdList
        heading={IPAddress.title}
        description={IPAddress.description}
        listData={IPAddress.list}
      />
      <UnOrderdList
        heading={IPPackets.title}
        description={IPPackets.description}
        listData={IPPackets.list}
      />
      <UnOrderdList
        heading={otherProtocols.title}
        description={otherProtocols.description}
        listData={otherProtocols.list}
      />
      <UnOrderdList
        heading={moreAboutProtocols.title}
        listData={moreAboutProtocols.list}
      />
      <QA question={tcp.title} answer={tcp.data} />
      <QA question={udp.title} answer={udp.data} />
      <UnOrderdList
        heading={http.title}
        description={http.description}
        listData={http.list}
      />
      <UnOrderdList
        heading={httpRequest.title}
        description={httpRequest.description}
        listData={httpRequest.list}
      />
      <UnOrderdList
        heading={method.title}
        description={method.description}
        listData={method.list}
      />
      <QA question={path.title} answer={path.data} />
      <QA question={version.title} answer={version.data} />
      <QA question={headers.title} answer={headers.data} />
      <OneLiner>{requestBody.data}</OneLiner>
      <UnOrderdList
        heading={httpResponse.title}
        description={httpResponse.description}
        listData={httpResponse.list}
      />
      <TwoColTable
        heading={statusCodes.heading}
        description={statusCodes.description}
        cols={statusCodes.cols}
        tableData={statusCodes.tableData}
      />
      <UnOrderdList
        heading={informationalRes.title}
        listData={informationalRes.list}
      />
      <UnOrderdList
        heading={successfulRes.title}
        listData={successfulRes.list}
      />
      <UnOrderdList
        heading={redirectionRes.title}
        listData={redirectionRes.list}
      />
      <UnOrderdList
        heading={clientErrorRes.title}
        listData={clientErrorRes.list}
      />
      <UnOrderdList
        heading={serverErrorRes.title}
        listData={serverErrorRes.list}
      />
      <UnOrderdList
        heading={https.title}
        description={https.description}
        listData={https.list}
      />
      <UnOrderdList
        heading={developerTools.title}
        description={developerTools.description}
        listData={developerTools.list}
      />
      <UnOrderdList
        heading={frameworksAndLibraries.title}
        description={frameworksAndLibraries.description}
        listData={frameworksAndLibraries.list}
      />
      <UnOrderdList
        heading={api.title}
        description={api.description}
        listData={api.list}
      />
      <UnOrderdList
        heading={apiExamples.title}
        description={apiExamples.description}
        listData={apiExamples.list}
      />
      <UnOrderdList
        heading={restApi.title}
        description={restApi.description}
        listData={restApi.list}
      />
      <OneLiner>
        <p>{apiCloser.data1}</p>
        <p>{apiCloser.data2}</p>
      </OneLiner>
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default CoreInternetTech;
