import type { ComponentProps } from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

import { Icon } from "./Icon";

const Root = styled(AccordionPrimitive.Root);
const Item = styled(AccordionPrimitive.Item);
const Header = styled(AccordionPrimitive.Header);
const Trigger = styled(AccordionPrimitive.Trigger);
const Content = styled(AccordionPrimitive.Content);

export type AccordionItems = {
  content: string;
  disabled?: boolean;
  header: string;
  id: number | string;
};

export type AccordionProps<T> = {
  readonly collapsible?: T extends "single" ? boolean : never;
  readonly defaultValue?: T extends "multiple" ? string[] : string;
  readonly items: AccordionItems[];
  readonly type: T;
  readonly value?: T extends "multiple" ? string[] : string;
} & Pick<
  ComponentProps<typeof AccordionPrimitive.Root>,
  "dir" | "disabled" | "onValueChange" | "orientation"
>;

export const Accordion = <
  T extends ComponentProps<typeof AccordionPrimitive.Root>["type"],
>({
  collapsible,
  defaultValue,
  dir,
  disabled,
  items,
  onValueChange,
  orientation,
  type,
  value,
}: AccordionProps<T>) => {
  return (
    <Root
      collapsible={collapsible}
      defaultValue={defaultValue}
      dir={dir}
      disabled={disabled}
      onValueChange={onValueChange}
      orientation={orientation}
      type={type}
      value={value}
    >
      {items.map(({ content, disabled, header, id }) => (
        <Item className="group" disabled={disabled} key={id} value={String(id)}>
          <Header>
            <Trigger alignItems="center" display="flex">
              {header}
              <Icon
                className={css({
                  _groupClosed: {
                    transform: "rotate(0deg)",
                  },
                  _groupOpen: {
                    transform: "rotate(180deg)",
                  },
                  transition: "transform 0.2s ease-in-out",
                })}
                name="chevron-down"
                width={20}
              />
            </Trigger>
          </Header>
          <Content>{content}</Content>
        </Item>
      ))}
    </Root>
  );
};
