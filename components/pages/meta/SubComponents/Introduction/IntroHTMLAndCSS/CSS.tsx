import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";

const CSS = () => {
  const cssStart = {
    data: "CSS tells the web browser how to display html elements on screen.",
  };

  const cssRules = {
    title: "CSS rule",
    description:
      "When using CSS, there are five elements you need to understand.",
    list: [
      "A declaration block starts with a left curly bracket and ends with the matching right curly bracket.",
      "In between these curly brackets are the style declarations.",
    ],
  };

  const selector = {
    title: "Selector",
    list: [
      "The first element of the CSS rule is the selector. This indicates which html element or elements we want to style.",
      "For example, you can create a rule that uses the h1 selector to change the color of all heading one tags in a web page to gray.",
      "In this case, hi is the selector. Color is property and gray is the value of the property.",
    ],
  };

  const declarationBlock = {
    title: "Declaration block",
    list: [
      "A declaration block starts with a left curly bracket and ends with the matching right curly bracket.",
      "In between these curly brackets are the style declarations.",
    ],
  };

  const propertyAndValue = {
    title: "Property and value",
    list: [
      "Each declaration is made up of two parts a property and a value which will be applind on the selector.",
      "For example, in this case the properties that you want to change are the color and the background color of the header or selector. Once you have decided which properties you want to define, then you must assign each property of value.",
      "The color property gets a value of blue and the background color property gets a value of gray. This will result in all heading one tags displaying blue text on a gray background in the browser.",
      'This Property value pair ends with a semicolon ";" .',
    ],
  };

  const boxModel = {
    title: "Box Model",
    description:
      "When an HTML document and CSS style sheet are downloaded, the web browser needs to know how to display the elements on the screen. To do this, it allocates a rectangle or box to each element. CSS rules are applied to the boxes of the elements. This is known as the box model.\nEvery box consists of four parts.",
    list: ["The content", "The padding", "The border", "The margin."],
  };

  const content = {
    title: "The Content",
    list: [
      "The content is the actual content of the element, like the text or the image. Its size is known as the content width and content height. Browsers are clever and by default, they will calculate the width and height based on the content itself.",
      "Developers can control the size to manipulate the layout. You can do this by applying CSS rules to the content, such as width, minimum width, maximum width, height, minimum height, and maximum height.",
    ],
  };

  const padding = {
    title: "The Padding",
    list: [
      "The padding extends the content size. Its size is known as the padding box width and the padding box height.",
      "The thickness of the padding is determined by the padding top, padding bottom, padding left and padding right.",
      "The padding box width can be calculated as content width plus padding left side plus padding right side.",
      "You can calculate the padding box height by adding the content height, the padding top side and padding bottom side together.",
    ],
  };

  const border = {
    title: "The Border",
    list: [
      "The border goes around the padding and content. Its size is known as the border box width and border-box height.",
      "You can set different types of borders, such as solid border or a dash border.",
      "To set the border, you can write border width thin, border width medium, and border width thick.",
    ],
  };

  const margin = {
    title: "The Margin",
    list: [
      "The margin extends the border area to separate the element from its neighboring elements. Its size is known as the margin box width, a margin box height.",
      "To specify the margin sides, you write, margin top, followed by the value, the margin bottom, margin-left, and margin-right follow the exact same notation.",
      "The margin box width can be calculated by adding the border box width, the margin left side and the margin right-side together.",
      "To get the margin box height add the border box height, margin top side and margin bottom side together.",
    ],
  };

  const sizeCalculation = {
    title: "Calculate The Size of HTML element",
    description: "An HTML element is equal to the size of the border box.",
    list: [
      "To get the border-box width, add the padding box width plus the border left side plus the border right side.",
      "To get the border-box height, add the padding box height and the border top side, as well as the border bottom side.",
    ],
  };

  const shorthandProperties = {
    title: "CSS Shorthand properties",
    list: [
      "Padding: 4px 2px 1px 5px",
      "Border-width: 2px 3px 1px 4px",
      "Margin: 1px 2px 4px 5px",
    ],
  };

  const documentFlow = {
    title: "Document Flow",
    description:
      "The web browsers normal way of calculating the position of html elements on the screen is called document flow.\nBy default, nearly all html elements are organized into one of two categories namely : ",
    list: ["Block Element", "Inline Element"],
  };

  const block = {
    title: "Block Level Element",
    list: [
      "A block level element will occupy the full horizontal width of its parent element and the vertical height of its content.",
      "Each block level element will have a new line before and after. Therefore, multiple block level elements will stack on top of each other like a stack of boxes.",
      "Some examples of common block level elements include the tags, div form and heading.",
      "It's important to remember that block elements begin on a new line and take up the full width of the page.",
    ],
  };

  const inline = {
    title: "Inline Elements",
    list: [
      "Inline elements only occupy the width and height of their content.",
      "They don't appear on a new line, hence the name in line. Therefore, multiple in line elements can form a row of elements.",
      "Some examples of common inline elements include the tags anchor, image, input label, bold, italics, emphasis and span.",
      "It's important to remember that inline elements work within the flow of surrounding content rather than breaking onto their own line.",
    ],
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "CSS Reference (Mozilla)",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
      },
      {
        title: "HTML and CSS: Design and build websites by Jon Duckett",
        link: "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/",
      },
      {
        title: "CSS Definitive Guide  by Eric Meyer",
        link: "https://www.amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195/",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="CSS Basics" />
      <OneLiner>{cssStart.data}</OneLiner>
      <UnOrderdList
        heading={cssRules.title}
        description={cssRules.description}
        listData={cssRules.list}
      />
      <UnOrderdList heading={selector.title} listData={selector.list} />
      <UnOrderdList
        heading={declarationBlock.title}
        listData={declarationBlock.list}
      />
      <UnOrderdList
        heading={propertyAndValue.title}
        listData={propertyAndValue.list}
      />
      <UnOrderdList
        heading={boxModel.title}
        description={boxModel.description}
        listData={boxModel.list}
      />
      <UnOrderdList heading={content.title} listData={content.list} />
      <UnOrderdList heading={padding.title} listData={padding.list} />
      <UnOrderdList heading={border.title} listData={border.list} />
      <UnOrderdList heading={margin.title} listData={margin.list} />
      <OneLiner>
        <UnOrderdList
          heading={sizeCalculation.title}
          description={sizeCalculation.description}
          listData={sizeCalculation.list}
        />
      </OneLiner>
      <UnOrderdList
        heading={shorthandProperties.title}
        listData={shorthandProperties.list}
      />
      <UnOrderdList
        heading={documentFlow.title}
        description={documentFlow.description}
        listData={documentFlow.list}
      />
      <UnOrderdList heading={block.title} listData={block.list} />
      <UnOrderdList heading={inline.title} listData={inline.list} />
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default CSS;
