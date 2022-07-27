import React from "react";
import UnOrderdList from "../../../../lists/UnOrderdList";
import OneLiner from "../../../../OneLiner";

const ResponsiveIntro = () => {
  const responsiveDesign = {
    title: "Responsive design",
    description:
      "Responsive design is a set of three practices that allows a website to automatically change its visuals.\nIn other words, to respond based on the device it is displayed on.\nIt is the combination of three techniques,",
    list: ["Flexible grids", "Fluid images", "Media queries"],
  };

  const flexGrids = {
    title: "Flexible Grids",
    list: [
      "Flexible grids are made up of columns, gutters and margins.",
      "The space between the columns is called the gutter and the spaces between the content and the left and right edges of the screen are called margins.",
      "Instead of defining website Element sizes based on pixels, flexible grids are defined in percentage values, allowing them to adjust depending on screen size.",
    ],
  };

  const fluidImages = {
    title: "Fluid Image",
    list: [
      "Fluid images, by setting the CSS max width property of images to 100%. The images will scale down smaller if they're containing column becomes narrower than the images size but never grow larger.",
      "This enables an image to scale down to fit in a flexibly sized column rather than overflow it but not grow larger and become pixelated if the column becomes wider than the image.",
    ],
  };

  const mediaQuiries = {
    title: "Media Queries",
    list: [
      "Media queries allow developers to query the display size orientation and aspect ratio to conditionally apply CSS rules.",
      'For example, if you wanted your website background to appear blue on a screen size less than or equal to 700 pixels. Like on a mobile phone, you could use a media rule to set the background depending on the size of the screen. "@media only screen and (max-width: 700px){...css rules}"',
    ],
  };

  const responsive = {
    data: "Responsive design is the combination of flexible grids, fluid images and media queries. When these elements are used together, you build a website that will automatically adjust its layout based on the device, thus delivering a responsive grid.",
  };

  const breakPoint = {
    title: "Breakpoint",
    description:
      "In responsive design, the pixel value specified is often referred to as the breakpoint.\nA breakpoint is the point at which a website's content and layout will adapt to provide the best possible user experience.\nA Breakpoint can function in different ways across three different grids :",
    list: ["Fixed grid", "Fluid grid", "Hybrid grid"],
  };

  const fixedGrid = {
    title: "Fixed Grid",
    list: [
      "A fixed grid has fixed width columns and flexible margins.",
      "The fixed grid has a fixed content width that doesn't change in a specific breakpoint range while the flexible margins occupy the remaining space on screen.",
    ],
  };

  const fluidGrid = {
    title: "Fluid Grid",
    list: [
      "A fluid or full width grids with fluid width columns and fixed gutters and side margins.",
      "The fluid grid has a flexible content width that goes edge to edge as per the screen size. In a fluid grid, columns either grow or shrink to adapt to the available space.",
    ],
  };

  const hybridGrid = {
    title: "Hybrid Grid",
    list: [
      "A hybrid grids, that have both fluid width and fixed width components.",
    ],
  };

  return (
    <>
      <OneLiner>
        <UnOrderdList
          heading={responsiveDesign.title}
          description={responsiveDesign.description}
          listData={responsiveDesign.list}
        />
        <UnOrderdList heading={flexGrids.title} listData={flexGrids.list} />
        <UnOrderdList heading={fluidImages.title} listData={fluidImages.list} />
        <UnOrderdList
          heading={mediaQuiries.title}
          listData={mediaQuiries.list}
        />
        <OneLiner>{responsive.data}</OneLiner>
        <UnOrderdList
          heading={breakPoint.title}
          description={breakPoint.description}
          listData={breakPoint.list}
        />
        <UnOrderdList heading={fixedGrid.title} listData={fixedGrid.list} />
        <UnOrderdList heading={fluidGrid.title} listData={fluidGrid.list} />
        <UnOrderdList heading={hybridGrid.title} listData={hybridGrid.list} />
      </OneLiner>
    </>
  );
};

export default ResponsiveIntro;
