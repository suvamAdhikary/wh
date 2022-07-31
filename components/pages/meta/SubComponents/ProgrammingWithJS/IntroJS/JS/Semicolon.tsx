import React from "react";
import Gap from "../../../../../../Gap";
import ULItem from "../../../../../../lists/ULItem";
import UnOrderdList from "../../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../../OneLiner";
import HeadingL4 from "../../../../../../text/headings/HeadingL4";
import Mark from "../../../../../../text/Mark";

const Semicolon = () => {
  const semicolon = {
    heading: "The semi-colon in JavaScript",
    asi: {
      title: "Automatic Semi-Colon Insertion (ASI)",
      list: [
        'Interestingly, the browser has a feature known as "Automatic Semi-colon Insertion" - meaning, it does a pretty good job of "filling in the blanks" in case there is a missing semi-colon where there should be one.',
        "Effectively, what that means for developers is that most of the time, it makes no difference if a semi-colon is added or not, since the browser is likely to figure it out anyway.",
        "That's why some developers say that you shouldn't bother with adding semi-colons at all.",
        "However, other developers argue that it's better to use it wherever it's needed - for the sake of clarity.",
        "The truth is that most of the time, you can think of adding semi-colons in JavaScript as optional - and somewhat of a stylistic preference.",
      ],
    },
  };

  return (
    <>
      <OneLiner>
        <HeadingL4 title={semicolon.heading} />
        <Gap />
        <UnOrderdList isChildren>
          <>
            <ULItem>
              <>
                In the English language, the fullstop or period - the{" "}
                <Mark>.</Mark> character - is used to separate thoughts into
                sentences.
              </>
            </ULItem>
            <ULItem>
              By clearly separating thoughts with the fullstop, you avoid being
              misunderstood.
            </ULItem>
            <ULItem>
              <>
                In JavaScript, the semi-colon - the <Mark>;</Mark> character -
                has a similar purpose: it is used to clearly delimit parts of
                the code from some other parts of the code.
              </>
            </ULItem>
          </>
        </UnOrderdList>
        <Gap />
        <UnOrderdList
          heading={semicolon.asi.title}
          listData={semicolon.asi.list}
        />
      </OneLiner>
    </>
  );
};

export default Semicolon;
