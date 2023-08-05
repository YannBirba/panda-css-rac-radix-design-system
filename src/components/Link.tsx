import type { ComponentProps as StyledComponentProps } from "@styled-system/types/jsx";
import type { ComponentProps, ReactElement } from "react";

import { styled } from "@styled-system/jsx";
import { useMemo } from "react";
import { Link as RACLink } from "react-aria-components";

const StyledLink = styled(RACLink);

export type LinkProps = {
  readonly children: ReactElement<LinkChildrenType>;
} & ComponentProps<typeof StyledLink>;

export const Link = ({ children, ...props }: LinkProps) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export type LinkChildrenType = keyof Pick<
  JSX.IntrinsicElements,
  "a" | "button"
>;

export type LinkTypeProps<T> = {
  readonly as: T;
} & StyledComponentProps<T extends keyof JSX.IntrinsicElements ? T : never>;

const LinkType = <T extends LinkChildrenType>({
  as = "a" as T,
  children,
  ...props
}: LinkTypeProps<T>) => {
  const Tag = as;
  const StyledTag = useMemo(() => styled(Tag), [Tag]);
  // @ts-expect-error TODO: fix this
  return <StyledTag {...props}>{children}</StyledTag>;
};
Link.Type = LinkType;
