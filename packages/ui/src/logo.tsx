import Image from "next/image";
import { ComponentProps } from "react";
import { cn } from "../../utils";

export const Logo = (props: ComponentProps<"div">) => {
  return (
    <div {...props} className={cn("w-[20rem]  relative", props.className)}>
      <Image
        className="-ml-4"
        src="/assets/logo.png"
        alt="Logo"
        width={200}
        height={100}
        priority
      />
    </div>
  );
};
