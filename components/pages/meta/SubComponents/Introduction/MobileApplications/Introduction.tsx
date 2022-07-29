import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";

const Introduction = () => {
  const intro = {
    data: "Mobile development, which encompasses the area of cross-platform development. This development area is best described as built-in software applications that can run on multiple mobile operating systems.",
  };

  const challenges = {
    title: "Project Challenges",
    list: [
      "Cross-platform, Compatibility",
      "User Interface, Design",
      "Code, Programming Testing and Debugging",
      "Connecting, Connect and Sync",
    ],
  };

  const crossPlatformDev = {
    title: "Cross-platform Development",
    description:
      "Cross-platform developers make software applications that are compatible with multiple operating systems.",
    list: [
      {
        heading:
          "Some of the common tasks and responsibilities shared by cross-platform developers include:",
        list: [
          "Writing code, always a prime requirement of a developer and it's especially important to have clean, readable, and error-free code when the aim is to create apps compatible with several operating systems.",
          "Dealing with bugs. Another tanks human issue that typically occurs involves finding and fixing bugs and attending to performance issues.",
          "Development of new app features and new UI or user interfaces for the app. Often this can entail upgrading existing code.",
          "Application monitoring to identify problems. You might do this by observing app performance or analyzing data.",
          "Developers are also involved in building clean and smooth animations and transitions. These are design techniques that help to provide an excellent UX or user experience.",
          "Application program interfaces or APIs to connect the app with other technologies or code.",
          "Writing tests.",
          "Releasing applications.",
          "Updates to the Apple and Google stores.",
        ],
      },
      {
        heading: "Cross-platform Languages and Skills",
        list: ["React Native - JavaScript", "Flutter - Dart", "Xamarin - C#"],
      },
      {
        heading: "Languages and Platform",
        list: [
          "Java and Kotlin ( Android )",
          "Objective-C and Swift ( iOS )",
          "HTML, CSS and JavaScript ( Web )",
        ],
      },
    ],
  };

  const teamworkTools = {
    title: "Teamwork Tools",
    list: ["Slack", "Zoom", "Jira", "Google Meet"],
  };

  return (
    <>
      <HeadingL3 title="Introduction" />
      <OneLiner>{intro.data}</OneLiner>
      <UnOrderdList heading={challenges.title} listData={challenges.list} />
      <OneLiner>
        <UnOrderdList
          heading={crossPlatformDev.title}
          description={crossPlatformDev.description}
          isMultiList={true}
          listData={crossPlatformDev.list}
        />
      </OneLiner>
      <UnOrderdList
        heading={teamworkTools.title}
        listData={teamworkTools.list}
      />
    </>
  );
};

export default Introduction;
