import { cn } from "@prettyfull/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import * as React from "react";

function Checkbox({
	className,
	children,

	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				"outline-none  peer flex items-center justify-center border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-4 dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:[&>p]:hidden focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-8 shrink-0 rounded-[4px] border shadow-xs transition-shadow focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer outline-hidden",
				className
			)}
			{...props}
		>
			<p className="">{children}</p>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="flex items-center justify-center text-current transition-none"
			>
				{children ? <span>{children}</span> : <CheckIcon className="size-7 " />}
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
