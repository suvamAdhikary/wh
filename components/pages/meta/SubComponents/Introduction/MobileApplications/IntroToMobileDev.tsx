import React from "react";
import Gap from "../../../../../Gap";
import HeadingL3 from "../../../../../headings/HeadingL3";
import ListOfLinks from "../../../../../lists/ListOfLinks";
import UnOrderdList from "../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../OneLiner";
import QA from "../../../../../QA";
import ResponsiveIntro from "../ResponsiveIntro";

const IntroToMobileDev = () => {
  const mobileAppEvolution = {
    title: "Mobile Application Evolution",
    list: [
      {
        heading: "",
        list: [
          "1973 - It all started when the first handheld cellular phone was invented in 1973 by Martin Cooper.",
          "1970's - Another major event in the 1970s was the development of cellular networks that connected mobile phones to the Internet.",
          "1980's - The public, however, only got access to mobile phones in the 80s.",
          "1990's - The public, however, only got access to mobile phones in the 80s. But in the '90s, when the first smartphone went public, it turned the world on its head.",
          "1994 - The IBM Simon was built by IBM and was one of the first instances of a handheld touchscreen device. Released in 1994, the IBM Simon went on to sell around 50,000 units in total.",
          "2000's - The early 2000s bought two important dimensions to the evolution of mobile apps. The consumer demand for a computer experience on a mobile device drove the development of the technology. One particular area that accelerated rapidly was touchscreen technology. All of this meant that operating systems had to provide more and more sophisticated platforms for apps to run on.",
          "2000's - And app stores were created to give users access to thousands of apps.",
          "2003 - The game change in operating system, Android made its appearance in 2003 and competed with the two giants of the time, Symbian and Blackberry.",
          "2005 - 2005 was a big year in the mobile world. It was a year when Google bought Android for about $50 million.",
          "2007 - The long-awaited iPhone was launched in 2007. This event marked an important growth in the Apple fan base.",
          "2008 - A year later, in 2008, the first Android operating system was released to the public. Android is the leading operating system used today.",
        ],
      },
      {
        heading: "History of the main app stores",
        list: [
          "2008 - In 2008, Apple's app store went online with over 500 apps.",
          "2009 - In 2009, Samsung announced their app store for mobile devices manufactured by Samsung Electronics.",
          "2010 - In 2010, Apple released the iPad with over 3,000 apps on their store.",
          "2012 - 2012 was another defining moment for app stores, were in Google, re-branded that App Store as Google Play.",
          "2015 - In 2015, Google revolutionized its app store. They introduce a system that allowed them to review apps before they are published on Google Play.",
          "Today the mobile operating system market is largely dominated by two major tech companies, Google and Apple. Millions of developers around the world are building apps that run on their operation systems, Android and iOS.",
        ],
      },
    ],
  };

  const ios = {
    title: "iPhone Operating System ( iOS )",
    list: [
      "IOS is based on older Apple operating system called Darwin, which itself is based on Unix. All Apple's mobile devices run iOS.",
      "A prominent feature introduced on iOS devices is touch gesturing, which allows users to perform actions through such movements as swiping, pulling, and tapping.",
      "Apple devices also make use of accelerometers and gyroscopes, enabling users to switch between the orientation of applications.",
      "They can also react to the tilting of a device. This means that your app can detect if the user's device is placed vertically or horizontally and adjust itself to give the best view.",
    ],
    history: {
      title: "History of iPhone",
      list: [
        "iPhone OS 1 - Launched in 2007.",
        "iPhone OS 2 - SDK introduction. From iPhone OS 2.0, developers had access to an SDK or software development kit. An SDK is like a box filled with tools that mobile developers use to build apps for iOS.",
        "iPhone OS 2 - Core Location and Push Notifications. Version three brought huge improvements such as core location for identifying where a device is and push notifications to allow easy updates.",
        "iOS 4 - Multitasking. IOS four was the first version to allow multitasking.",
        "Now - More improvements!",
      ],
    },
    IDEs: {
      title:
        "Best Integrated Development Environments or IDEs for iOS Development",
      list: [
        {
          heading: "Xcode",
          list: [
            "Xcode was developed by Apple to create software or apps for various operating systems, such as mac OS, iOS, watch OS, and tv OS.",
            "There's also the only Apple supported tool that can be used to create and publish apps to the Apple store.",
            "Xcode supports a wide variety of programming languages, including C++, Objective C, Objective C ++, Java, Apple Script, Python, Ruby, and Swift.",
            "Xcode can help you code faster by completing code lines automatically.",
            "It also has complete syntax highlighted for swift.",
            "By using this IDE, you'll be able to develop, test, and deploy your app easily in an intuitive and seamless way.",
          ],
        },
        {
          heading: "Appcode",
          list: [
            "This IDE from a company called JetBrains, has a development environment that ensures fast and accurate execution of code.",
          ],
        },
        {
          heading: "Atom",
          list: [
            "Atom was designed and developed by GitHub. Atom is notable for its customizable environment and easy to install add-on packages.",
          ],
        },
        {
          heading: "Sublime Text",
          list: [
            "This is a code editor, rather than a full IDE, it's functional, clean and fast and features helpful built-in tools.",
          ],
        },
        {
          heading: "CodeRunner",
          list: [
            "This is an easy to use programming editor for Mac OS.",
            "It's quite a flexible IDE that supports a wide range of languages.",
          ],
        },
      ],
    },
    swift: {
      title: "Swift",
      description:
        "The most efficient languages for iOS development, which is Swift.",
      list: [
        "Swift is a language created by Apple.",
        "It gives developers a single platform to create apps for the wide range of Apple devices.",
        "Xcode has supported Swift since the release of version 6 in 2014, making the two a popular combination for app development.",
        "With a support of Xcode, mobile developers can use Swift language to develop engaging apps for Apple devices. Devices such as that the iphone, MacBook, and Apple Watch.",
      ],
    },
  };

  const android = {
    title: "Android",
    list: [
      "It's a mobile operating system that was first launched in 2008 and is the base system of many phones and tablets worldwide.",
      "Android is the largest installed base of any mobile platform.",
    ],
    ide: {
      title: "Integrated Development Environment or IDE",
      list: [
        {
          heading: "Android Studio",
          list: [
            "Android Studio, which is great for building your app in a more productive way at scale.",
            "A powerful and sophisticated IDE designed to develop, test, and deploy applications to the Play Store.",
            "It's the only officially supported IDE for Android development.",
            "It's an easy IDE for beginners to use, but it's also powerful enough for more experienced developers.",
            "Android Studio is comprised of a software development kit or SDK, a collection of tools and other components.",
            "Android Studio supports two major programming languages, Java and Kotlin.",
          ],
        },
        {
          heading: "NetBeans IDE",
          list: ["NetBeans IDE, which allows for development with Java."],
        },
        {
          heading: "Visual Studio Code",
          list: [
            "Visual Studio Code, also known as VS Code, which is source code editor from Microsoft for Windows, Linux, and macOS.",
          ],
        },
        {
          heading: "AIDE",
          list: [
            "AIDE enables developers to create Java or XML-based Android apps using the Android SDK.",
          ],
        },
      ],
    },
    kotlin: {
      title: "Kotlin",
      description:
        "Kotlin is a cross-platform language, which means it will work on multiple computing platforms. It was designed to replace Java for Android app development.\nAdditionally, there are certain features that make Kotlin the best fit for Android developers. This includes :",
      list: [
        "Compatibility - Kotlin developed apps can run on older devices",
        "Interoperability - Meaning like Kotlin and Java can both be used in the same project.",
        "Faster Compilation - Shorter code compilation time, which allows faster work when adding code and testing code in small increments.",
        "Easy to Learn - The language has a reputation of being easy to learn, especially for developers who already familiar with other modern programming languages.",
      ],
    },
  };

  const js = {
    title: "JavaScript",
    description: "JavaScript is a language of the web.",
    list: [
      "The American entrepreneur and founder of Netscape Communications, Marc Lowell Andreessen, believed that webpages could be manipulated by using a scripting language, making web content interactive and dynamic for users. The idea to build a language such as JavaScript was born.",
      "In the beginning, developers mainly use JavaScript to add interactivity to websites.",
      "Technological advancements allow developers to now use JavaScript for a wide range of applications, such as web and mobile development, streaming services, and even games.",
      "One of the main places you will find JavaScript. That's in the web browser.",
    ],

    jsEngine: {
      title: "JavaScript Engine",
      list: [
        {
          heading: "",
          list: [
            "Typically in programming, once you write some code, that code needs to be run or compiled into something called machine code to be understood by the computer.",
            "Browsers have a specific software component called a JavaScript engine that executes the JavaScript code and sends it back to the browser for rendering.",
            "When a webpage loads, the JavaScript browser engine does all compiling in the background. Then the web page is loaded successfully and users can interact with it.",
            "The JavaScript engine can also be referred to as the ECMAScript engine.",
            "Typically the companies that make web browsers have their own built-in JavaScript engine.",
          ],
        },
        {
          heading: "ECMAScript Engine",
          list: [
            "V8 ( Google Chrome )",
            "SpiderMonkey ( Mozilla Firefox )",
            "JavaScriptCore ( Apple Safari )",
          ],
        },
        {
          heading: "V8",
          list: [
            "V8 is Google's open source high-speed JavaScript engine.",
            "It is written in the C++ programming language and used in the Chrome web browser.",
            "This engine works with the most popular operating systems such as Windows, macOS, and Linux.",
          ],
        },
        {
          heading: "SpiderMonkey",
          list: [
            "SpiderMonkey is the JavaScript engine of the Mozilla Firefox web browser.",
            "Is also developed in C++ and used to power Mozilla Firefox and other products.",
          ],
        },
        {
          heading: "JavaScriptCore",
          list: [
            "JavaScriptCore is an open source web browser engine that allows developers to build a browser using its code.",
            "This engine powers apps such as the Safari browser used on macOS.",
          ],
        },
      ],
    },
    oneOfTheReasonsWhyJavaScriptIsSoPopularAndThatSpeed: {
      title: "One of the reasons why JavaScript is so popular and that speed",
      data: "Modern browsers can run JavaScript code much faster. Thanks to something called just-in-time compilation. This feature takes advantage of both compilation and interpretation of the JavaScript code.",
    },
  };

  const majorDifferencesBetweenMobileAndDesktopBrowsers = {
    title: "Major Differences Between Mobile and Desktop Browsers",
    list: [
      {
        heading: "Mobile Browser",
        list: [
          "Quicker Access",
          "Easier Multitasking",
          "Portability",
          "Regular Updates",
          "Less Bandwidth",
        ],
      },
      {
        heading: "Desktop Browser",
        list: [
          "More Stable",
          "Larger View",
          "Full Access",
          "Easier Navigation",
        ],
      },
    ],
  };

  const ux = {
    title: "User Experience",
    list: ["CSS media queries", "Fluid images", "Fixed and fluid grids"],
  };

  const framework = {
    title: "Cross-platform Mobile Development Frameworks",
    list: ["React Native", "Angular", "Flutter", "Appcelerator"],
  };

  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "Mobile Application Evolution",
        link: "https://www.appverticals.com/blog/evolution-of-mobile-apps/",
      },
      {
        title: "IOS Platform and Language",
        link: "https://developer.apple.com/swift/#:~:text=Swift%20is%20a%20powerful%20and,includes%20modern%20features%20developers%20love.",
      },
      {
        title: "Android and Kotlin",
        link: "https://developer.android.com/kotlin",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Introduction to Mobile Development" />
      <UnOrderdList
        heading={mobileAppEvolution.title}
        isMultiList={true}
        listData={mobileAppEvolution.list}
      />
      <OneLiner>
        <UnOrderdList heading={ios.title} listData={ios.list} />
        <Gap />
        <UnOrderdList heading={ios.history.title} listData={ios.history.list} />
        <Gap />
        <UnOrderdList
          heading={ios.IDEs.title}
          isMultiList={true}
          listData={ios.IDEs.list}
        />
        <Gap />
        <UnOrderdList
          heading={ios.swift.title}
          description={ios.swift.description}
          listData={ios.swift.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList heading={android.title} listData={android.list} />
        <Gap />
        <UnOrderdList
          heading={android.ide.title}
          isMultiList={true}
          listData={android.ide.list}
        />
        <Gap />
        <UnOrderdList
          heading={android.kotlin.title}
          description={android.kotlin.description}
          listData={android.kotlin.list}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={js.title}
          description={js.description}
          listData={js.list}
        />
        <Gap />
        <UnOrderdList
          heading={js.jsEngine.title}
          isMultiList={true}
          listData={js.jsEngine.list}
        />
        <Gap />
        <QA
          question={
            js.oneOfTheReasonsWhyJavaScriptIsSoPopularAndThatSpeed.title
          }
          answer={js.oneOfTheReasonsWhyJavaScriptIsSoPopularAndThatSpeed.data}
        />
      </OneLiner>
      <OneLiner>
        <UnOrderdList
          heading={majorDifferencesBetweenMobileAndDesktopBrowsers.title}
          isMultiList={true}
          listData={majorDifferencesBetweenMobileAndDesktopBrowsers.list}
        />
      </OneLiner>
      <UnOrderdList heading={ux.title} listData={ux.list} />
      <ResponsiveIntro />
      <UnOrderdList heading={framework.title} listData={framework.list} />
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default IntroToMobileDev;
