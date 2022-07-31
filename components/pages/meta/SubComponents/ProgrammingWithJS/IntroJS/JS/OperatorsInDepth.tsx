import React from "react";
import Gap from "../../../../../../Gap";
import ULItem from "../../../../../../lists/ULItem";
import UnOrderdList from "../../../../../../lists/UnOrderdList";
import OneLiner from "../../../../../../OneLiner";
import Code from "../../../../../../text/code/Code";
import Heading5 from "../../../../../../text/headings/Heading5";
import HeadingL4 from "../../../../../../text/headings/HeadingL4";
import Mark from "../../../../../../text/Mark";
import Para from "../../../../../../text/Para";

const OperatorsInDepth = () => {
  const operatorsInDepth = {
    heading: "Operators in Depth",
    additional: {
      title: "Additional Operators",
    },

    and: {
      c1: `
          var currentTime = 10;
          console.log(currentTime > 9 && currentTime < 17);
              `,
      c2: `console.log(10 > 9 && 10 < 17);`,
      c3: `console.log(true && true);`,
    },

    or: {
      c1: `
          var currentTime = 7;
          console.log(currentTime < 9 || currentTime > 17);
              `,
      c2: `
          var currentTime = 7;
          console.log(true || false);
              `,
    },

    not: {
      c1: `
          var petHungry = true;
          console.log("Pet is hungry: ", petHungry);  // Pet is hungry: true
          console.log('Feeding the pet'); // Feeding the pet
          console.log("Pet is hungry: ", !petHungry); // Pet is hungry: false
          console.log(petHungry); // true
              `,
      c2: `
          var petHungry = true;
          petHungry = !petHungry;
              `,
    },

    mod: {
      list: [
        "The modulus operator is another mathematical operator in JavaScript. It returns the remainder of division.",
        "To demonstrate how it works, imagine that a small restaurant that has 4 chairs per table, and a total of 5 tables, suddenly receives 22 guests.",
        "How many guests will not be able to sit down in the restaurant?",
        "You can use the modulus operator to solve this.",
      ],
      code: `console.log(22 % 5); // 2`,
    },

    eq: {
      list: [
        "The equality operator checks if two values are equal.",
        "This means that the equality operator compares only the values, but not the types.",
      ],
    },
  };

  const plus = {
    heading: "Using the + operators on strings and numbers",

    code: {
      c1: `
    "inter" + "net" // "internet"
    "note" + "book" // "notebook"
      `,

      c2: `
    365 + " days" // "365 days"
    12 + " months" // "12 months"
      `,

      c3: `1 + "2"`,
    },

    adAsgn: {
      list: [
        "The addition assignment operator is used when one wants to accumulate the values stored in a variable.",
        "Here's an example: You are counting the number of overtime hours worked in a week.",
        "You don't have to specify the type of work, you just want to count total hours.",
        "You might code a program to track it, like this:",
        "You can simplify the above code by using the addition assignment operator, as follows:",
        "Using the addition assignment operator reduces the lines of your code.",
      ],

      code: {
        c1: `
    var mon = 1;
    var tue = 2;
    var wed = 1;
    var thu = 2;
    var fri = 3;
    console.log(mon + tue + wed + thu + fri); // 9
        `,

        c2: `
    var overtime = 1;
    overtime += 2;
    overtime += 1;
    overtime += 2;
    overtime += 3;
    console.log(overtime); // 9
        `,
      },
    },

    cnCtAsgn: {
      list: [
        "This operator's syntax is exactly the same as the addition assignment operator. The difference is in the data type used:",
      ],
      code: `
    var longString = "";
    longString += "Once";
    longString += " upon";
    longString += " a";
    longString += " time";
    longString += "...";
    console.log(longString); // "Once upon a time..."
      `,
    },
  };

  const precedenceAssociativity = {
    heading: "Operator Precedence and Associativity",

    list: [
      "Operator precedence is a set of rules that determines which operator should be evaluated first.",
      "Operator associativity determines how the precedence works when the code uses operators with the same precedence.",
    ],

    precedence: {
      title: "There are two precedence:",
      list: ["Left-to-right associativity", "Right-to-left associativity"],
    },

    code: {
      c1: `1 * 2 + 3`,

      c2: `        
    var num = 10; // the value on the right is assigned to the variable name on the left
    5 > 4 > 3;
    // the 5 > 4 is evaluated first (to "true"), then true > 3 is evaluated to "false", because the "true" value is coerced to "1"
      `,
    },

    data: [
      "The result of the above code is 5, because the multiplication operator has precedence over the addition operator.",
      "For example, the assignment operator is right-to-left associative, while the greater than operator is left-to-right associative:",
    ],
  };

  return (
    <>
      <OneLiner>
        <HeadingL4 title={operatorsInDepth.heading} />
        <Gap />
        <UnOrderdList heading={operatorsInDepth.additional.title} isChildren>
          <>
            <ULItem>
              <>
                Logical AND operator: <Mark>&&</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                Logical OR operator: <Mark>||</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                Logical NOT operator: <Mark>!</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                The modulus operator: <Mark>%</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                The equality operator: <Mark>==</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                The strict equality operator: <Mark>===</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                The inequality operator: <Mark>!=</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                The strict inequality operator: <Mark>!==</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                The addition assignment operator: <Mark>+=</Mark>
              </>
            </ULItem>
            <ULItem>
              <>
                The concatenation assignment operator: <Mark>+=</Mark>
              </>
            </ULItem>
          </>
        </UnOrderdList>
        <Gap />
        {/* The logical AND operator */}
        <Heading5 isChildren>
          <>
            The logical AND operator in JavaScript: <Mark>&&</Mark>
          </>
        </Heading5>
        <Para>
          <>
            The <b>logical AND operator</b> is, for example, used to confirm if
            multiple comparisons will return true.
          </>
        </Para>
        <Para>
          <>
            In JavaScript, this operator consists of two ampersand symbols
            together: <Mark>&&</Mark>.
          </>
        </Para>
        <Para>
          <>
            Let&#39;s say you&#39;re tasked with coming up with some code that
            will check if the <Mark>currentTime</Mark> variable is between{" "}
            <Mark>9 a.m.</Mark> and <Mark>5 p.m.</Mark> The code needs to
            console.log <Mark>true</Mark> if <Mark>currentTime &#62; 9</Mark>{" "}
            <b>and</b> if <Mark>currentTime &#60; 17</Mark>.
          </>
        </Para>
        <Code>{operatorsInDepth.and.c1}</Code>
        <Para>
          <>
            First, on line one, set the <Mark>currentTime</Mark> variable, and
            assign the value of <Mark>10</Mark> to it.
          </>
        </Para>
        <Para>Next, on line two console log two comparisons: </Para>
        <Para>
          <Mark>currentTime &#62; 9 </Mark>
        </Para>
        <Para>
          <Mark>currentTime &#60; 17</Mark>
        </Para>
        <Para>
          <>
            Also use the <Mark>&&</Mark> logical operator to join the two
            comparisons. Effectively, code is interpretted as the following:
          </>
        </Para>
        <Code>{operatorsInDepth.and.c2}</Code>
        <Para>
          <>
            The comparison of <Mark>10 &#62; 9</Mark> will return{" "}
            <Mark>true</Mark>.
          </>
        </Para>
        <Para>
          <>
            Also, the comparison of <Mark>10 &#60; 17</Mark> will return{" "}
            <Mark>true</Mark>.
          </>
        </Para>
        <Para>
          <>
            This means you can further re-write the line two of solution as
            follows:{" "}
          </>
        </Para>
        <Code>{operatorsInDepth.and.c3}</Code>
        <Gap />
        <Heading5 isChildren>
          <>
            The behavior of the <Mark>&&</Mark> logical operator
          </>
        </Heading5>
        <Para>
          <>
            The <Mark>&&</Mark> logical operator returns a single value: the
            boolean <Mark>true</Mark> or <Mark>false</Mark>, based on the
            following rules:
          </>
        </Para>
        <UnOrderdList isChildren>
          <>
            <ULItem>
              <>
                It returns <Mark>true</Mark> if both the values on its right and
                on its left are evaluated to <Mark>true</Mark>.
              </>
            </ULItem>
            <ULItem>
              <>
                It returns <Mark>false</Mark> in all the other instances.
              </>
            </ULItem>
          </>
        </UnOrderdList>
        <Para>
          <>
            <Mark>console.log(true && true)</Mark> will output:{" "}
            <Mark>true</Mark>
          </>
        </Para>
        <Para>
          <>
            <Mark>console.log(true && false)</Mark> will output:{" "}
            <Mark>false</Mark>
          </>
        </Para>
        <Para>
          <>
            <Mark>console.log(false && true)</Mark> will output:{" "}
            <Mark>false</Mark>
          </>
        </Para>
        <Para>
          <>
            <Mark>console.log(false && false)</Mark> will output:{" "}
            <Mark>false</Mark>
          </>
        </Para>
        <Gap />
        {/* The logical OR operator */}
        <Heading5 isChildren>
          <>
            The logical OR operator in JavaScript: <Mark>||</Mark>
          </>
        </Heading5>
        <Para>
          <>
            The logical OR operator in JavaScript consists of two pipe symbols
            together: <Mark>||</Mark>.
          </>
        </Para>
        <Para>
          <>
            It is used when you want to check if at least one of the given
            comparisons evaluates to <Mark>true</Mark>.
          </>
        </Para>
        <Para>
          <>
            Consider the following task: You need to write a program in
            JavaScript which will return <Mark>true</Mark> if the value of the
            <Mark>currentTime</Mark> variable is not between <Mark>9</Mark> and{" "}
            <Mark>17</Mark>. Put differently, your code needs to console.log
            <Mark>true</Mark> if the value of the variable{" "}
            <Mark>currentTime</Mark> is either less than <Mark>9</Mark> or
            greater than <Mark>17</Mark>.
          </>
        </Para>
        <Code>{operatorsInDepth.or.c1}</Code>
        <Para>
          <>
            In line one of the code you assign the number 7 to the variable
            <Mark>currentTime</Mark>.
          </>
        </Para>
        <Para>
          <>
            On line two, I console log the result of checking if either
            <Mark>currentTime &#60; 9</Mark> or{" "}
            <Mark>currentTime &#62; 17</Mark> will evaluate to <Mark>true</Mark>
            .
          </>
        </Para>
        <Code>{operatorsInDepth.or.c2}</Code>
        <Para>
          <>
            The only time you will get <Mark>false</Mark> is when the value
            stored in the
            <Mark>currentTime</Mark> variable is greater than <Mark>9</Mark> and
            less then <Mark>17</Mark>.
          </>
        </Para>
        <Gap />
        <Heading5 isChildren>
          <>
            The behavior of the <Mark>||</Mark> logical operator
          </>
        </Heading5>
        <UnOrderdList isChildren>
          <>
            <ULItem>
              <>
                The logical OR operator will always return <Mark>true</Mark>,
                except when both sides evaluate to <Mark>false</Mark>.
              </>
            </ULItem>
            <ULItem>
              <>
                In other words, for the logical OR operator to return{" "}
                <Mark>false</Mark>, the results of both comparisons{" "}
                <Mark>must</Mark> return false.
              </>
            </ULItem>
          </>
        </UnOrderdList>
        <Para>
          <>
            <Mark>console.log(true || true)</Mark> will output:{" "}
            <Mark>true</Mark>
          </>
        </Para>
        <Para>
          <>
            <Mark>console.log(true || false)</Mark> will output:{" "}
            <Mark>true</Mark>
          </>
        </Para>
        <Para>
          <>
            <Mark>console.log(false || true)</Mark> will output:{" "}
            <Mark>true</Mark>
          </>
        </Para>
        <Para>
          <>
            <Mark>console.log(false || false)</Mark> will output:{" "}
            <Mark>false</Mark>
          </>
        </Para>
        <Gap />
        {/* The logical NOT operator */}
        <Heading5 isChildren>
          <>
            The logical NOT operator: <Mark>!</Mark>
          </>
        </Heading5>
        <Para>
          <>
            In JavaScript, the logical NOT operator&#39;s symbol is the
            exclamation mark: <mark>!</mark>.
          </>
        </Para>
        <Para>
          <>
            You can think of the <mark>!</mark> operator as a switch, which
            flips the evaluated boolean value from <Mark>true</Mark> to{" "}
            <Mark>false</Mark> and from <Mark>false</Mark>
            to <Mark>true</Mark>.
          </>
        </Para>
        <Para>
          <>
            For example if you assign the boolean value of <Mark>true</Mark> to
            the <Mark>petHungry</Mark>
            variable: <Mark>var petHungry = true;</Mark>
          </>
        </Para>
        <Para>
          <>
            ...then I can console log the fact that the pet is no longer hungry
            by using the ! operator to flip the boolean value stored inside of
            the <Mark>petHungry</Mark> variable, like so:
          </>
        </Para>
        <Code>{operatorsInDepth.not.c1}</Code>
        <Para>
          <>
            The reason for the changed output in the console is because you have
            flipped the value stored inside the <Mark>petHungry</Mark> variable,
            from <Mark>true</Mark> to <Mark>false</Mark>.
          </>
        </Para>
        <Para>
          <>
            Notice, however, that the code on line five of the example above
            still outputs <Mark>true</Mark> - that&#39;s due to the fact that
            you didn&#39;t reassign the value of the <Mark>petHungry</Mark>{" "}
            variable.
          </>
        </Para>
        <Para>
          <>
            <>
              Here&#39;s how you could permanently change the value stored in
              the <Mark>petHungry</Mark> variable from <Mark>true</Mark> to{" "}
              <Mark>false</Mark>:
            </>
          </>
        </Para>
        <Code>{operatorsInDepth.not.c2}</Code>
        <Para>
          <>
            In this example, first assign the value of <Mark>true</Mark> to the
            new variable of <Mark>petHungry</Mark>. Then, on line two, assign
            the opposite value, the
            <Mark>!true</Mark> - read: not true - to the existing{" "}
            <Mark>petHungry</Mark>
            variable.
          </>
        </Para>
        <Gap />
        {/* The modulus operator % */}
        <Heading5 isChildren>
          <>
            The modulus operator: <Mark>%</Mark>
          </>
        </Heading5>
        <Para>{operatorsInDepth.mod.list[0]}</Para>
        <Para>{operatorsInDepth.mod.list[1]}</Para>
        <Para>{operatorsInDepth.mod.list[2]}</Para>
        <Para>{operatorsInDepth.mod.list[3]}</Para>
        <Code>{operatorsInDepth.mod.code}</Code>
        <Para>
          <>
            The output is <Mark>2</Mark>, meaning, when you divide{" "}
            <Mark>22</Mark> and <Mark>5</Mark>, you get a <Mark>4</Mark>, and
            the remainder is <Mark>2</Mark>, meaning, there are <Mark>2</Mark>{" "}
            people who couldn&#39;t get a place in this restaurant.
          </>
        </Para>
        <Gap />
        {/* The equality operator % */}
        <Heading5 isChildren>
          <>
            The equality operator: <Mark>==</Mark>
          </>
        </Heading5>
        <Para>{operatorsInDepth.eq.list[0]}</Para>
        <Para>
          <>
            For example, this comparison returns <Mark>true</Mark>:{" "}
            <Mark>5 == 5</Mark>. Indeed, it is true that 5 is equal to 5.
          </>
        </Para>
        <Para>
          <>
            Here&#39;s an example of the equality operator returning{" "}
            <Mark>false</Mark>: <Mark>5 == 6</Mark>. Indeed, it is true that 5
            is not equal to 6.
          </>
        </Para>
        <Para>
          <>
            Additionally, even if one of the compared values is of the number
            type, and the other is of the string type, the returned value is
            still <Mark>true</Mark>: <Mark>5 == &quot;5&quot;</Mark>.
          </>
        </Para>
        <Para>{operatorsInDepth.eq.list[1]}</Para>
        <Gap />
        {/* The strict equality operator % */}
        <Heading5 isChildren>
          <>
            The strict equality operator: <Mark>===</Mark>
          </>
        </Heading5>
        <Para>
          The strict equality operator compares for both the values and the data
          types.
        </Para>
        <Para>
          <>
            With the strict equality operator, comparing <Mark>5 === 5</Mark>{" "}
            still returns true. The values on each side of the strict equality
            operator have the same value and the same type. However, comparing{" "}
            <Mark>5 === &quot;5&quot;</Mark> now returns <Mark>false</Mark>,
            because the values are equal, but the data type is different.
          </>
        </Para>
        <Gap />
        {/* The inequality operator % */}
        <Heading5 isChildren>
          <>
            The inequality operator: <Mark>!=</Mark>
          </>
        </Heading5>
        <Para>
          The inequality operator checks if two values are not the same, but it
          does not check against the difference in types.
        </Para>
        <Para>
          <>
            For example, <Mark>5 != &quot;5&quot;</Mark> returns false, because
            it&#39;s false to claim that the number 5 is not equal to number 5,
            even though this other number is of the string data type.
          </>
        </Para>
        <Gap />
        {/* The strict inequality operator % */}
        <Heading5 isChildren>
          <>
            The strict inequality operator: <Mark>!==</Mark>
          </>
        </Heading5>
        <Para>
          <>
            For the strict inequality operator to return <Mark>false</Mark>, the
            compared values have to have the same value and the same data type.
          </>
        </Para>
        <Para>
          <>
            For example, <Mark>5 !== 5</Mark> returns <Mark>false</Mark> because
            it is false to say that the number 5 is not of the same value and
            data type and another number 5.
          </>
        </Para>
        <Para>
          <>
            However, comparing the number 5 and the string 5, using the strict
            inequality operator, returns <Mark>true</Mark>.
          </>
        </Para>
        <Code>{`console.log(5 !== "5")`}</Code>
      </OneLiner>

      {/* Using the + operators on strings and numbers */}

      <OneLiner>
        <HeadingL4 isChildren>
          <>
            Using the <Mark>+</Mark> operators on strings and numbers
          </>
        </HeadingL4>
        <Gap />
        {/* Combining two strings using the + operator */}
        <Heading5 isChildren>
          <>
            Combining two strings using the <Mark>+</Mark> operator
          </>
        </Heading5>
        <Para>
          <>
            The <Mark>+</Mark> operator, when used with number data type, adds
            those values together.
          </>
        </Para>
        <Para>
          <>
            However, the <Mark>+</Mark> operator is also used to join string
            data type together.
          </>
        </Para>
        <Code>{plus.code.c1}</Code>
        <Para>
          <>
            If the <Mark>+</Mark> operator is used to join strings, then it is
            referred to as the concatenation operator, and you&#39;ll say that
            it&#39;s used to concatenate strings.
          </>
        </Para>
        <Para>
          <>
            When used with numbers, the <Mark>+</Mark> operator is the{" "}
            <b>addition operator</b>, and when used with strings, the{" "}
            <Mark>+</Mark> operator is the <b>concatenation operator</b>.
          </>
        </Para>
        <Gap />
        {/* Combining strings and numbers using the + operator */}
        <Heading5 isChildren>
          <>
            Combining strings and numbers using the <Mark>+</Mark> operator
          </>
        </Heading5>
        <Code>{plus.code.c2}</Code>
        <Para>
          <>
            Here, JavaScript tries to help by converting the numbers to strings,
            and then <b>concatenating the number and the string together</b>,
            ending up with <b>a string value</b>.
          </>
        </Para>
        <Para>
          <>
            The process of this &quot;under-the-hood&quot; conversion of values
            in JavaScript is referred to as &quot;coercion&quot;. JavaScript
            coerces a number value to a string value - so that it can run the{" "}
            <Mark>+</Mark>
            operator on disparate data types.
          </>
        </Para>
        <Para>The process of coercion can sometimes be a bit unexpected.</Para>
        <Code>{plus.code.c3}</Code>
        <Para>
          <>
            Note that the value of <Mark>1</Mark> is of the number data type,
            and the value of <Mark>&#34;2&#34;</Mark> is of the string data
            type, and so JavaScript will coerce the number <Mark>1</Mark> to a
            string of <Mark>&#34;1&#34;</Mark>, and then concatenate it with the
            string of
            <Mark>&#34;2&#34;</Mark>, so the result is a string of{" "}
            <Mark>&#34;12&#34;</Mark>.
          </>
        </Para>
        <Gap />
        {/* The addition assignment operator, += */}
        <Heading5 isChildren>
          <>
            The addition assignment operator, <Mark>+=</Mark>
          </>
        </Heading5>
        <Para>{plus.adAsgn.list[0]}</Para>
        <Para>{plus.adAsgn.list[1]}</Para>
        <Para>{plus.adAsgn.list[2]}</Para>
        <Para>{plus.adAsgn.list[3]}</Para>
        <Code>{plus.adAsgn.code.c1}</Code>
        <Para>{plus.adAsgn.list[4]}</Para>
        <Code>{plus.adAsgn.code.c2}</Code>
        <Para>{plus.adAsgn.list[5]}</Para>
        <Gap />
        {/* The concatenation assignment operator, += */}
        <Heading5 isChildren>
          <>
            The concatenation assignment operator, <Mark>+=</Mark>
          </>
        </Heading5>
        <Para>{plus.cnCtAsgn.list[0]}</Para>
        <Code>{plus.cnCtAsgn.code}</Code>
      </OneLiner>

      {/* Operator precedence and associativity */}

      <OneLiner>
        <HeadingL4 isChildren>{precedenceAssociativity.heading}</HeadingL4>
        <UnOrderdList listData={precedenceAssociativity.list} />
        <Code>{precedenceAssociativity.code.c1}</Code>
        <Para>{precedenceAssociativity.data[0]}</Para>
        <UnOrderdList
          heading={precedenceAssociativity.precedence.title}
          listData={precedenceAssociativity.precedence.list}
        />
        <Para>{precedenceAssociativity.data[1]}</Para>
        <Code>{precedenceAssociativity.code.c2}</Code>
      </OneLiner>
    </>
  );
};

export default OperatorsInDepth;
