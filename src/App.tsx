import type { AccordionItems } from "@components/Accordion";

import { Accordion } from "@components/Accordion";
import { styled } from "@styled-system/jsx";
import { useState } from "react";

import { Breadcrumbs } from "./components/Breadcrumbs";
import { Button } from "./components/Button";
import { Link } from "./components/Link";

const defaultValueAccordion1 = ["test", "test3"];

const itemsAccordion1 = [
  {
    content: "test content",
    header: "test header",
    id: "test",
  },
  {
    content: "test2 content",
    disabled: true,
    header: "test2 header",
    id: "test2",
  },
  {
    content: "test3 content",
    header: "test3 header",
    id: "test3",
  },
  {
    content: "test4 content",
    header: "test4 header",
    id: "test4",
  },
] satisfies AccordionItems[];

const initialValueAccordion2 = "test";

const itemsAccordion2 = [
  {
    content: "test content",
    header: "test header",
    id: "test",
  },
  {
    content: "test2 content",
    header: "test2 header",
    id: "test2",
  },
] satisfies AccordionItems[];

const handleOnPress = () => {
  alert("test");
};

export const App = () => {
  const [value, setValue] = useState<string>(initialValueAccordion2);
  return (
    <>
      <section>
        <styled.h2>Accordion</styled.h2>
        <styled.h3>Multiple uncontrolled</styled.h3>
        <Accordion
          defaultValue={defaultValueAccordion1}
          items={itemsAccordion1}
          type="multiple"
        />
        <styled.h3>Single uncontrolled</styled.h3>
        <Accordion
          items={itemsAccordion2}
          onValueChange={setValue}
          type="single"
          value={value}
        />
        <pre>
          <code>{JSON.stringify(value, null, 2)}</code>
        </pre>
      </section>
      <section>
        <styled.h2>Breadcrumbs</styled.h2>
        <Breadcrumbs>
          <Link>
            <Link.Type as="a" href="/">
              Home
            </Link.Type>
          </Link>
          <Link>
            <Link.Type as="a" href="/test">
              Test
            </Link.Type>
          </Link>
        </Breadcrumbs>
      </section>
      {/* <section>
        <styled.h2>Button</styled.h2>
        <Button onPress={handleOnPress}>
          {({ isPressed }) => (
            <>
              {isPressed ? "<PressHighlight /> " : null}
              Press me
            </>
          )}
        </Button>
      </section> */}
    </>
  );
};
