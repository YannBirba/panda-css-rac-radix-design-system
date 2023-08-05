/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import type { LucideProps } from "lucide-react";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { styled } from "@styled-system/jsx";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense, lazy } from "react";

const fallback = <div style={{ background: "#ddd", height: 24, width: 24 }} />;

type IconProps = {
  readonly name: keyof typeof dynamicIconImports;
} & Omit<LucideProps, "ref">;

export const Icon = ({ name, ...props }: IconProps) => {
  // eslint-disable-next-line security/detect-object-injection
  const LucideIcon = lazy(dynamicIconImports[name]);

  const Container = styled(AccessibleIcon.Root);

  return (
    <Suspense fallback={fallback}>
      <Container label={name}>
        <LucideIcon {...props} />
      </Container>
    </Suspense>
  );
};
