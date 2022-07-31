import React from "react";
import Gap from "../../../../../../Gap";
import ULItem from "../../../../../../lists/ULItem";
import UnOrderdList from "../../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../../OneLiner";
import CodeWithOP from "../../../../../../text/code/CodeWithOP";
import Emphasis from "../../../../../../text/Emphasis";
import HeadingL4 from "../../../../../../text/headings/HeadingL4";
import KeyBD from "../../../../../../text/KeyBD";
import Mark from "../../../../../../text/Mark";

const Variables = () => {
  const variables = {
    heading: "Variables",
    title: "Variable with an example",
    list: [
      "By using a variable, I can save the name John, so that I can reuse it in the future.",
      "You still haven't given a name to the person variable. In programming jargon, the person variable hasn't been assigned a value yet.",
      "Now, the value of the variable, person, is James.",
      "",
    ],
    code: `
      var petDog = "Rex";
      var petCat = "Pepper";
      console.log(petDog);
      console.log(petCat);
      var catSound = "purr";
      var dogSound = "woof";
      console.log(petDog, " says ", dogSound);
      console.log(petCat, " says ", catSound);
      catSound = "meow";
      console.log(petCat, " now says ", catSound);
        `,
    codeOP: `
      Rex
      Pepper
      Rex  says  woof
      Pepper  says  purr
      Pepper  now says  meow
        `,
  };

  return (
    <>
      <OneLiner>
        <HeadingL4 title={variables.heading} />
        <Gap />
        <UnOrderdList heading={variables.title} isChildren>
          <>
            <ULItem>{variables.list[0]}</ULItem>
            <ULItem>
              <>
                To save this name in a variable, start with the keyword,{" "}
                <Mark>var</Mark>, and use it to signal to JavaScript that you
                are giving it a value that you wanted to reuse.
              </>
            </ULItem>
            <ULItem>
              <>
                To declare a variable, type the keyword, <Mark>var</Mark>. Now,
                need to declare a fact about this world that you are building,
                so type, person semicolon and press <KeyBD>Enter</KeyBD>. ({" "}
                <Mark>var person;</Mark> )
              </>
            </ULItem>
            <ULItem>
              <>
                The fact that there is a reuseable value and that this value is
                accessible using the word <Mark>person</Mark>. Thus you have
                completed the <Mark>variable declaration</Mark>.
              </>
            </ULItem>
            <ULItem>{variables.list[1]}</ULItem>
            <ULItem>
              <>
                The person variable is still <Mark>undefined</Mark>. In other
                words, for the person variable to hold the value of John, I need
                to <Mark>assign</Mark> the value of John to the person variable.
              </>
            </ULItem>
            <ULItem>
              <>
                To do this, you will use the <Mark>assignment operator</Mark>,
                the equals sign ( <Mark>=</Mark> ).
              </>
            </ULItem>
            <ULItem>
              <>
                <Emphasis>
                  <>
                    Operators perform certain operations, and the{" "}
                    <Mark>assignment operator</Mark>&apos;s purpose is to{" "}
                    <Mark>
                      take the value that is on its right and put it into what
                      it&apos;s on its left
                    </Mark>
                    .
                  </>
                </Emphasis>
              </>
            </ULItem>
            <ULItem>
              <>
                To assign the name John to the variable person, type{" "}
                <Mark>var person = &quot;John&quot;</Mark>. You&apos;ve taken
                the value John and assigned it to the person variable using the
                assignment operator.
              </>
            </ULItem>
            <ULItem>
              <>
                The <Mark>console.log()</Mark> method can accept one or more
                values separated by commas. So, I type{" "}
                <Mark>console.log(&quot;Hello &quot;, person)</Mark>.<br />
                The output of this command will be: &quot;Hello John&quot;.
                <br />
                This is an example of combining static text with a dynamic
                variable where the value can change.
              </>
            </ULItem>
            <ULItem>
              <>
                Now that you have the person variable, you can{" "}
                <Mark>reassign</Mark> them, replacing their stored value
              </>
            </ULItem>
            <ULItem>
              <>
                You can change the value of the variable from John to James by
                typing <Mark>person = &quot;James&quot;</Mark>.
              </>
            </ULItem>
            <ULItem>{variables.list[2]}</ULItem>
            <ULItem>
              <>
                Notice that now You haven&apos;t used the <Mark>var</Mark>{" "}
                keyword when <Mark>reassigned</Mark> the values to the variable
                that You created earlier. That&apos;s because JavaScript already
                knows that these variables exist in the world that You&apos;re
                building. But the variables don&apos;t have to be static and
                unchangeable.
              </>
            </ULItem>
            <CodeWithOP code={variables.code} op={variables.codeOP} />
          </>
        </UnOrderdList>
      </OneLiner>
    </>
  );
};

export default Variables;
