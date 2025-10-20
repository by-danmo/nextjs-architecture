import { cn } from "@prettyfull/utils";
import type { PropsWithChildren } from "react";
import Flex from "./helpers/flex";

// TODO: Add Settings for reverse layout
interface AuthLayout {
  settings?: {
    leftClassname?: string;
    rightClassname?: string;
  };
  rightChildren?: React.ReactNode;
}

const AuthLayout = ({
  children,
  rightChildren,
  settings,
}: PropsWithChildren<AuthLayout>) => {
  // Extract Settings

  return (
    <Flex
      as="section"
      settings={{ shouldTakeSameSpace: true }}
      className="h-screen"
    >
      <div className={cn("relative", settings?.leftClassname)}>{children}</div>
      <div className={cn("relative", settings?.rightClassname)}>
        {rightChildren}
      </div>
    </Flex>
  );
};
export default AuthLayout;
