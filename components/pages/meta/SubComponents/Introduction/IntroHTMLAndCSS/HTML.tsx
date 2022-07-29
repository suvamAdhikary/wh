import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import QA from "../../../../../QA";

const HTML = () => {
  const htmlStart = {
    data: 'The basic structure of HTML assembled with different components such as "HTML tags" and "HTML elements".',
  };

  const firstWebPage = {
    data: "The first web page was created in 1999 by Sir Tim Berners-Lee. He worked at the European Organization for Nuclear Research or CERN, and originally proposed HTML. The first version of HTML was released in 1991 along with the first web browser and web server.",
  };

  const html = {
    title: "HTML ( Hypertext Markup Language )",
    description: "A text file with a specific structure.",
    list: [
      "Hypertext is text which contains links to other text.",
      "Markup refers to tags and elements used within a document.",
      "HTML is simply a text file with a specific structure that consists of elements and tags.",
      "HTML files usually have a dot HTML suffix. For instance, when you visit a website, the first page that is returned to the browser is often called index.html.",
    ],
  };

  const tangsAndElements = {
    title: "HTML Tags and Elements",
    list: [
      "Each HTML element consists of an opening tag enclosed in angle brackets. For example, to create a paragraph, you type <p> for paragraph.",
      "Most elements are paired with a closing tag, which has a forward slash off to the left angle bracket. For example, you close the paragraph element with </p>.",
      "HTML elements usually have some content inside them. For example, between the opening and closing tags of a paragraph, you add the text of the paragraph you want to write. => <p>This is a paragraph</p>",
      "HTML elements can also contain other elements. For example, you can add an italics element inside a paragraph element to make texts appear in italics. => <p>This is a <i>paragraph</i></p>",
      "Elements can also be empty or self-closing, meaning they do not have a closing HTML tag. One example of a self-closing element is the line break tag. You can add a line break tag in a paragraph tag to move content to the following line by typing <br>. At the end of a self-closing tag, you simply add a right angle bracket. => <p>This is a <br>paragraph</p>",
      "You can also close the right angle bracket by typing a forward slash right before it.",
    ],
  };

  const htmlSpecification = {
    title: "HTML Specification",
    list: [
      "The rules and structure for elements and tags are known as the HTML specification.",
      "The HTML specification is maintained by the World Wide Web Consortium, or W3C as it is commonly known.",
      "Whenever the HTML specification changes a new version of HTML is standardized, the current version is HTML5.",
    ],
  };

  const summery = {
    data: "HTML elements with their opening and closing tags in angle brackets build up an HTML document. These elements form the structure of a web page and describe to the web browser what to display.",
  };

  const htmlDocuments = {
    title: "HTML Documents",
    description:
      "<DOCTYPE html>\n<html>\n<head>\n<title>Little Lemon</title>\n</head>\n<body>\n<h1>Our Menu</h1>\n</body>\n</html>",
    list: [
      "A text document containing simple webpage formatting",
      "First create a standard HTML structure which starts with the DOCTYPE declaration. This notifies the web browser that is a HTML documents.",
      "Next, create the HTML tag, which is also known as the HTML root element.",
      "Inside the HTML tag, add two main elements. The head and the body elements.",
      "Important to note that nothing inside the head element is displayed on the webpage in the web browser. In the head element, you add information or metadata about the HTML documents. It is not part of the content of the webpage.",
      "Inside the head tag, you always create the title elements. This is the title that is displayed in the web browser tab.",
      "You can also link to CSS files and define Meta tags in the head section.",
      "Meta tags can, for instance, specify the description of the web page, keywords for search engines and the order of the web page.",
      "Add the content of the webpage inside the body tag. The body can contain elements such as headings, paragraphs, images, and videos.",
    ],
  };

  const anchorTags = {
    title: "Anchor tags",
    description: "Create hyperlinks to link pages together",
  };

  const imgTag = {
    title: "Adding images to a webpage with HTML",
    list: [
      "We use image tags in HTML to link to image files. The image tag then creates a placeholder for the image on the web page.",
      "To add an image tag, we type img and inside it then add the src attribute or source attribute as it is known.",
      "Right after the sourcing in the image tag, you can specify the dimensions of an image using width and height attributes.",
      "One important attribute that you should always include with image tags. It is good practice to add a short description for images. It helps improve accessibility for people using assistive technologies and it can also improve search engine rankings.",
      "You can add image descriptions with the alternative text attribute also known as the altar tribute.",
      "The alt text is not displayed anywhere on the site but will be read by assistive technologies such as screen readers. Screen readers and other accessibility tools use the altar tribute to provide information to their users.",
      'Eg. => "<img src="salad.jpeg" width="240" height="135" alt="A pasta Salad" />"',
    ],
  };

  const tableTags = {
    title: "HTML tables ( Use HTML to work with data in tables )",
    description: "Allow you to neatly organize content in rows and columns",
    list: [
      "HTML tables allow you to neatly organize content in rows and columns.",
      "The table tag: <table> </table>, The table tag is the first tag that you need to insert in order to add a table to a webpage.",
      "The table row tag: <tr> </tr>, You need to add table row tags for each line of information in your table.",
      "The table header tags: <th> </th>, You use the table header tags to add headings to the table which makes it easier to understand the data.",
      "The table data tags: <td> </td>, You need to add table data tags for each cell in each row.",
    ],
  };

  const formElement = {
    title: "HTML Form",
    list: [
      'You define forms with the html form tags. <form action="/registration" method="POST"></form>',
      "When a user enters data on a website an HTML form submits an HTTP request containing the data to the server.",
      "Forms have an optional form attribute called action. Actions specifies the URL or path that the form should submit the request to. When the action attribute is not specified, it submits the request to the same path as the current web page.",
      "There is also the FORM method, with the FORM method you can specify the HTTP method to use for the HTTP request. There are two HTTP methods to submit the form data, GET and POST.",
    ],
  };

  const formTags = {
    title: "",
    list: ["Text", "Password", "Checkbox", "Radio", "Textarea", "Select"],
  };

  const dom = {
    title: "DOM ( Document Object Model )",
    description: "Building a DOM from HTML document.",
    list: [
      "When your web browser receives an HTML page, it constructs a DOM to represent it. DOM stands for Document Object Model and it is simply a tree, structure or model of the objects in your HTML file.",
      "To understand the DOM, I want you to think of a simple HTML page, remember that an HTML document has opening and closing tags for the document and the head. And inside the head tags you have title tags, then you have the body and inside the body there might be elements such as div tags.",
      "The DOM has a series of objects each representing a single HTML element. At the root of the DOM is the html object and it contains the head and body object.",
      "From there, the head object houses the title object and the title object contains its text object.",
      "The body object contains the two div objects, the first div houses, the h1 object which again houses its text object. The second div object contains the paragraph object which contains its text object.",
    ],
  };
  const domSummery = {
    data: "All the elements in the HTML file are represented as objects in the document object model.",
  };

  const domAndJs = {
    title: "How JavaScript uses the DOM",
    list: [
      "For each element, you can access the HTML attributes and content, this means you can update the existing content that is displayed in the web browser.",
      "For instance, you could write some JavaScript to update the seconds, minutes and hours of a digital clock on a website.",
      "If you develop a movie streaming website, you can write code that responds to user actions such as clicking mouse over scrolling and so on. In this way you can allow a preview of the movie to play when the user hovers the mouse over the movie's poster.",
      "In a log in page, when users click the Login button, you can disable the button so that it cannot be clicked again. The web application would bring them to a new web page or would re-enable the button, if a log in error occurred.",
      "You can even add DOM objects to dynamically add new HTML content to a live web page. For instance, you can add an error message to a form if the user inserts invalid data.",
      "DOM objects can also be deleted which will remove the corresponding HTML displayed in the browser. Think of a to-do list on a website, you can remove an item from the list when the user clicks on it.",
      "A major use of JavaScript and the DOM is to animate the HTML elements. This can be quite complex depending on the animation but there are many libraries available that aim to simplify this.",
      "When a page first loads, you can fade in the page contents.",
      "When a user receives an instant message, a notification can pop up in the web browser.",
      "Many JavaScript libraries and frameworks rely on the DOM, one of these libraries is the react library.",
    ],
  };

  const wai = {
    title: "WAI ( Web Accessibility Initiative )",
    data: "The Web accessibility Initiative or W. A. I. was launched in 1997.\nOne of the tasks of the WAI is to define the accessible rich internet application or aria specification.",
  };

  const aria = {
    title: "ARIA ( Accessible Rich Internet Application )",
    data: "The aria specification outlines different techniques to improve accessibility for complex web apps.",
  };

  const webAccessibility = {
    title: "Web accessibility",
    description:
      "When W. A. I. was launched in 1997. The creator of the World Wide Web. Sir, tim Berners lee said the power of the Web is in its universality access by everyone regardless of disability is an essential aspect. Web accessibility aims to allow people with disabilities to understand navigate and interact with websites.",
    list: [
      "It includes all disabilities that affect interaction with websites such as audio and visual disabilities, cognitive and neurological disabilities and physical and speech disabilities.",
      "The W3C Web accessibility Initiative ( WAI ) developed specifications and supporting resources for accessibility. These are considered international standards for web accessibility.",
      "The European Union approved the web accessibility directive which requires websites and mobile applications of public section bodies to be accessible to those with disabilities.",
      "The web screen reader software can read the content of websites and everything that is happening on the device. Screen readers are used not only by blind and vision impaired users but also by those with reading or learning difficulties.",
      "Speech recognition software can turn spoken words into computer commands or dictate inputting text. This is useful for people who may not be able to use a mouse or keyboard due to physical or neurological disabilities.",
      "Subtitles and video scripts and videos provide assistance to those with audio and visual disabilities.",
    ],
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "HTML Elements Reference (Mozilla)",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      },
      {
        title: "The Form Element (Mozilla)",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
      },
      {
        title: "What is the Document Object Model? (W3C)",
        link: "https://www.w3.org/TR/WD-DOM/introduction.html",
      },
      {
        title: "ARIA in HTML (W3C via Github)",
        link: "https://w3c.github.io/html-aria/",
      },
      {
        title: "ARIA Authoring Practices (W3C)",
        link: "https://www.w3.org/TR/wai-aria-practices-1.2/",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Getting started with HTML" />
      <OneLiner>{htmlStart.data}</OneLiner>
      <OneLiner>{firstWebPage.data}</OneLiner>
      <UnOrderdList
        heading={html.title}
        description={html.description}
        listData={html.list}
      />
      <UnOrderdList
        heading={tangsAndElements.title}
        listData={tangsAndElements.list}
      />
      <UnOrderdList
        heading={htmlSpecification.title}
        listData={htmlSpecification.list}
      />
      <OneLiner>{summery.data}</OneLiner>
      <UnOrderdList
        heading={htmlDocuments.title}
        description={htmlDocuments.description}
        listData={htmlDocuments.list}
      />
      <QA question={anchorTags.title} answer={anchorTags.description} />
      <UnOrderdList heading={imgTag.title} listData={imgTag.list} />
      <UnOrderdList
        heading={tableTags.title}
        description={tableTags.description}
        listData={tableTags.list}
      />
      <UnOrderdList heading={formElement.title} listData={formElement.list} />
      <UnOrderdList heading={formTags.title} listData={formTags.list} />
      <UnOrderdList
        heading={dom.title}
        description={dom.description}
        listData={dom.list}
      />
      <OneLiner>{domSummery.data}</OneLiner>
      <UnOrderdList heading={domAndJs.title} listData={domAndJs.list} />
      <QA question={wai.title} answer={wai.data} />
      <QA question={aria.title} answer={aria.data} />
      <UnOrderdList
        heading={webAccessibility.title}
        description={webAccessibility.description}
        listData={webAccessibility.list}
      />
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default HTML;
