import React from "react";
import Gap from "../../../../../Gap";
import HeadingL3 from "../../../../../headings/HeadingL3";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import QA from "../../../../../QA";

const IntroCrossPlatformDev = () => {
  const pwa = {
    title: "Progressive Web App ( PWA )",
    data: "This allows for greater integration with the device. PWAs can be installed on multiple types of devices and they can access most of the built-in features of the device.\nHowever, PWAs still use web technologies and require the browser's engine to run.",
  };

  const crossPlatform = {
    title: "Cross-Platform",
    description:
      "Cross-platform development provides a way to access hardware or operating system specific components through a common developmental approach using a single codebase like react.js and React Native. This is streamline the mobile software development cycle and made it easier and more cost effective to create apps that work the same across different devices.\nThere are existing frameworks in the market such as Flutter and React Native.",
    list: [],
    pros: {
      title: "Pros of Cross-platform Development",
      list: [
        {
          heading: "Development Time",
          list: [
            "If you want to go to market quickly, cross-platform is usually the preferred option for most developers.",
            "With this approach, developers can create apps for multiple platforms with a single codebase, which will significantly reduce the time and cost of development.",
          ],
        },
        {
          heading: "Development Cost",
          list: [
            "Creating a team to build an app for each platform available in the market can be extremely expensive. This method allows you to cut down on costs as much as possible.",
          ],
        },
        {
          heading: "Code maintenance",
          list: [
            "Using a single codebase will significantly reduce the time and cost of code maintenance.",
            "Once apps have been released to the market, maintenance of the codebase for multiple apps can be daunting.",
            "Each platform will have its own specific issues, while developers will need to resolve fixes and updates for each app.",
            "The costs of maintenance increase even further with the releases of new updates for the platforms your app is targeting.",
          ],
        },
      ],
    },
    advantages: {
      title: "Cross-platform Advantages",
      list: [
        {
          heading: "Cost Reduction",
          list: [
            "Only one development team is required, which significantly reduces cost.",
            "Apps can move to market quicker because they take less time to develop.",
            "Apps are developed using the one common language, which also reduces required resources.",
            "There's no need to write unique code for both iOS and Android, the same code can be used for multiple platforms.",
            "Bug fixes for code only need to happen once. The use of common development tools across platforms also leads to a more uniformed and seamless user experience.",
          ],
        },
        {
          heading: "Marketing Efforts",
          list: [
            "Cross-platform apps only require one marketing campaign, but native apps require a separate campaign for the users of each platform.",
            "Apps developed for multiple platforms can launch across all operating systems on the same date with maximum exposure. A unified release date means that all users can be reached at the same time.",
          ],
        },
        {
          heading: "After The Initial App Development has Completed",
          list: [
            "Cross-platform development means that you can synchronize maintenance. You only need one update for both platforms.",
            "The increase of bring your own device or BYOD culture, means workplaces can increase the early adoption of work apps.",
          ],
        },
      ],
    },
    disAdvantages: {
      title: "Cross-platform Disadvantages",
      list: [
        "Generalized Features - An app built for multiple platforms might mean the exclusion of some platform specific features that a native app could take advantage of because a common code base must be used.",
        "Power Consumption - The use of advanced features might negatively impact battery life and other system resources.",
        "Integration - Integrating with platform-specific and uses specific local settings, preferences, storage, and notifications can be a time-consuming effort.",
        "User Exeperience - Loss of native features leads to lower quality exeperience.",
        "If you were to avoid a cross-platform approach and develop using each platform's defined native code base, then you could utilize all its features and focus more on UI and UX design.",
        "Developing specifically for a particular platform means that you don't reach the user base of other platforms with your app.",
      ],
    },
  };

  const nativeApp = {
    title: "Native App Development",
    description:
      "There are existing native languages in the market such as Kotlin for Android and Swift for iOS.",
    list: [],
    pros: {
      title: "Pros of Native App Development",
      list: [
        {
          heading: "Best Performance",
          list: [
            "Apps built using a native language are created and optimized for a specific platform and this results in faster performance.",
            "Native apps are very fast and responsive because they are developed for a specific platform and are seamlessly compiled using the platform's native programming language and APIs.",
          ],
        },
        {
          heading: "Access to Device OS Features",
          list: [
            "Having full control of the device features is essential especially if you want your app to deliver a seamless experience to your users.",
            "With native development, your app can directly access the hardware of the device such as the GPS, camera, microphone and more.",
          ],
        },
      ],
    },
  };

  const emulator = {
    title: "Emulator",
    description:
      "An emulator is a piece of hardware or software that enables one computer system to imitate another. This gives the host computer the ability to run software or devices designed for the emulated system.",
    list: [
      {
        heading: "",
        list: [
          "Mobile emulators used the existing computer hardware to replicate the environment needed to execute iOS or Android.",
          "The emulator provides access to any required system level capability to replicate the mobile device, including the amount of RAM or working memory, the processor type. And speed the screen size and resolution and the amount of local file storage available.",
          "Emulators save the development team time and money by allowing them to implement different test environments that reliably replicate the end user's devices.",
          "Much of the initial testing is carried out on the emulated device, especially for developers building cross platform apps.",
          "Emulation is preferred if the app will be deployed to a platform like the App Store or Google Play.",
        ],
      },
      {
        heading: "Limitations",
        list: [
          "While you can emulate the iOS environment on a PC, even the best programs cannot emulate some aspects of the native mobile environment.",
          "Emulators can also put a bigger strain on resources such as the processor, battery and storage.",
          "The size of that will also be bigger with a larger code footprint overall making the functioning of the app slightly slower than true native.",
          "As a result, it's standard practice for developers to test apps on both the emulated environment and physical devices whenever possible.",
        ],
      },
      {
        heading: "Exapmles",
        list: [
          "Android Studio for Android",
          "XCode for IOS",
          "Online emulation services like Appetizer.io",
        ],
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Introduction to Cross-platform Development" />
      <QA question={pwa.title} answer={pwa.data} />
      <OneLiner>
        <UnOrderdList
          heading={crossPlatform.title}
          description={crossPlatform.description}
          listData={crossPlatform.list}
        />
        <UnOrderdList
          heading={crossPlatform.pros.title}
          isMultiList
          listData={crossPlatform.pros.list}
        />
        <Gap />
        <UnOrderdList
          heading={crossPlatform.advantages.title}
          isMultiList
          listData={crossPlatform.advantages.list}
        />
        <Gap />
        <UnOrderdList
          heading={crossPlatform.disAdvantages.title}
          listData={crossPlatform.disAdvantages.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={nativeApp.title}
          description={nativeApp.description}
          listData={nativeApp.list}
        />
        <UnOrderdList
          heading={nativeApp.pros.title}
          isMultiList
          listData={nativeApp.pros.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={emulator.title}
          description={emulator.description}
          isMultiList
          listData={emulator.list}
        />
      </OneLiner>
    </>
  );
};

export default IntroCrossPlatformDev;
