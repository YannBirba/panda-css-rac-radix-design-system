import type { ReactElement } from "react";

import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Item, Breadcrumbs as RACBreadcrumbs } from "react-aria-components";
import { generateUniqueId } from "src/helpers/string";

import type { Link } from "./Link";

const StyledBreadcrumbs = styled(RACBreadcrumbs);
const StyledItem = styled(Item);

export type BreadcrumbsProps = {
  readonly children: ReactElement<typeof Link>[];
};

export const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbs
      className={css({
        "& > ol": {
          columnGap: "1.5",
          display: "flex",
          listStyle: "none",
          padding: 0,
        },
      })}
    >
      {children.map((child) => (
        <StyledItem key={generateUniqueId()}>{child}</StyledItem>
      ))}
    </StyledBreadcrumbs>
  );
};
