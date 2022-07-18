import React from "react";
import { metaTableRowProps } from "../../../../interfaces/meta";
import TransparentLinkBtn from "../../../buttons/TransparentLinkBtn";
import HeadCell from "./HeadCell";
import TBodyCell from "./TBodyCell";

const MetaHome = () => {
  const colList = [
    {
      title: "Front-End",
      icon: "/front-end.png",
    },
    {
      title: "Back-End",
      icon: "/back-end.png",
    },
    {
      title: "iOS",
      icon: "/ios.png",
    },
    {
      title: "Android",
      icon: "/android.png",
    },
    {
      title: "Database",
      icon: "/database.png",
    },
  ];

  const data: metaTableRowProps[] = [
    {
      key: "if you",
      data: [
        {
          title: "If you:",
          description:
            "Think creatively, like building better experiences, are interested in visual design",
        },
        {
          title: "If you:",
          description:
            "Think logically, like to fix things, enjoy solving complex problems",
        },
        {
          title: "If you:",
          description:
            "Like creative challenges, like building better experiences, prefer Apple products",
        },
        {
          title: "If you:",
          description:
            "Like creative challenges, like building better experiences, prefer Android products",
        },
        {
          title: "If you:",
          description:
            "Think analytically, like improving processes, enjoy solving complex problems",
        },
      ],
    },
    {
      key: "role",
      data: [
        {
          title: "Role",
          description:
            "Work closely with designers to make websites beautiful, functional and fast",
        },
        {
          title: "Role",
          description:
            "Build the technology that enables the user-facing side of a website to exist",
        },
        {
          title: "Role",
          description:
            "Build and write code for mobile apps that are powered by the Apple operating system",
        },
        {
          title: "Role",
          description:
            "Build and write code for mobile apps that are hosted on Android devices",
        },
        {
          title: "Role",
          description:
            "Create databases and design the processes for sorting information",
        },
      ],
    },
    {
      key: "skills",
      data: [
        {
          title: "Skills",
          description:
            "HTML, CSS, Javascript, React, Version Control, Wireframes, Content Management Systems",
        },
        {
          title: "Skills",
          description:
            "Python, SQL, APIs, HTML, CSS, XML, JSON, Web Server Software, Cloud Hosting, Version Control",
        },
        {
          title: "Skills",
          description:
            "Swift, XCode, React, UI/UX, Data Structures, App Lifecycles, Programming Fundamentals",
        },
        {
          title: "Skills",
          description:
            "Kotlin, Javascript, React, UI/UX, Data Structures, App Lifecycles, Android Studio, Programming Fundamentals",
        },
        {
          title: "Skills",
          description:
            "SQL, PostgreSQL, Python, Data Modeling, OlAP Cubes, Data Pipelines, Build Databases",
        },
      ],
    },
    {
      key: "linkBtn",
      data: [
        {
          linkButton: true,
          link: "/meta/front-end",
        },
        {
          linkButton: true,
          link: "/meta/back-end",
        },
        {
          linkButton: true,
          link: "#",
        },
        {
          linkButton: true,
          link: "/meta/android",
        },
        {
          linkButton: true,
          link: "#",
        },
      ],
    },
  ];

  return (
    <>
      <section className="meta-home-wrapper">
        <table className="meta-home__table">
          <thead className="meta-home__table-head">
            <tr>
              {colList.map((col) => (
                <th key={col.title} className="meta-home__table-head--wrapper">
                  <HeadCell title={col.title} icon={col.icon} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="meta-home__table-body">
            {data.map((row) => (
              <tr key={row.key} className="meta-home__tbody-row">
                {row.data.map((cell) => (
                  <td
                    key={cell.description ? cell.description : cell.link}
                    className="meta-home__tbody-cell--wrapper"
                  >
                    {cell.linkButton ? (
                      <>
                        <TransparentLinkBtn
                          link={cell.link ? cell.link : "#"}
                          text="Get Started"
                        />
                      </>
                    ) : (
                      <>
                        <TBodyCell
                          title={cell.title}
                          description={cell.description}
                        />
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default MetaHome;
