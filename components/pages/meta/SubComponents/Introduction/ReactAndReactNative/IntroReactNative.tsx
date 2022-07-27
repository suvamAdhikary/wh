import React from "react";
import HeadingL3 from "../../../../../headings/HeadingL3";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";

const IntroReactNative = () => {
  const reactNative = {
    title: "React Native",
    description:
      "React Native can reduce the number of resources required to build mobile applications. Instead of creating two different versions of the same app, you can save time and money by building real native apps for iOS and Android using a common code base.",
    list: [
      "2013 when React Native began its life as a hackathon project back then, if you wanted to develop a mobile version based on your app. You needed to wrap it in a component browser on the mobile device using specific third party tools and software.",
      "React Native is a JavaScript framework that combines the best parts of Native development with React.",
      "React Native developers have a saying with React Native one team can maintain two platforms and share common technology, React.",
    ],
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "What is React Native",
        link: "https://reactnative.dev/",
      },
      {
        title: "Benefits of React Native",
        link: "https://icapps.com/blog/5-advantages-react-native",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Introduction to React Native" />
      <OneLiner>
        <UnOrderdList
          heading={reactNative.title}
          description={reactNative.description}
          listData={reactNative.list}
        />
      </OneLiner>
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default IntroReactNative;
