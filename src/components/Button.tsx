import { styled } from "@styled-system/jsx";
import { type ComponentProps, type ReactElement, useMemo } from "react";
import {
  type ButtonRenderProps,
  Button as RACButton,
} from "react-aria-components";

import { Icon } from "./Icon";

const StyledButton = styled(RACButton);

export type ButtonProps = {
  readonly displayLoader?: boolean;
  readonly icon?: ReactElement<typeof Icon>;
  readonly iconPosition?: "left" | "right";
  readonly isLoading?: boolean;
} & ComponentProps<typeof StyledButton>;

export const Button = ({
  children,
  displayLoader = true,
  icon,
  iconPosition = "left",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const isDisabled = (props.isDisabled ?? false) || isLoading;
  const ariaLabel =
    props["aria-label"] ??
    (typeof children === "string" ? children : undefined);
  const childrenContent =
    typeof children === "function"
      ? children({ isDisabled, isLoading })
      : children;
  const childrenToDisplay = useMemo(() => {
    if (icon === undefined) {
      return childrenContent;
    }
    if (iconPosition === "left") {
      return (
        <>
          <span>{icon}</span>
          <span>{children}</span>
        </>
      );
    }
    if (iconPosition === "right") {
      return (
        <>
          <span>{children}</span>
          <span>{icon}</span>
        </>
      );
    }
    return children;
  }, [children, icon, iconPosition]);

  console.log(typeof children);

  return (
    <StyledButton
      aria-label={ariaLabel}
      className="group"
      isDisabled={isDisabled}
      type={props.type ?? "button"}
      {...props}
    >
      {icon !== undefined ? <span>{icon}</span> : null}
      {typeof children === "function" ? children() : childrenToDisplay}
      {displayLoader && isLoading ? (
        <Icon name="loader-2" size="small" />
      ) : null}
    </StyledButton>
  );
};
