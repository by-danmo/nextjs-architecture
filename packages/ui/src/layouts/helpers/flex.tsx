import { cn } from "@prettyfull/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

export interface FlexRowProps extends HTMLAttributes<HTMLDivElement> {
	as?: "div" | "section" | "article" | "nav" | "aside" | "header" | "footer";
	settings?: {
		shouldWrap?: boolean;
		shouldReverse?: boolean;
		isColumn?: boolean;
		fullCenter?: boolean;
		shouldTakeSameSpace?: boolean;
		spacing?: string;
		justify?: "center" | "between" | "around" | "evenly" | "start" | "end" | "";
		align?: "center" | "stretch" | "baseline" | "start" | "end" | "";
		placeItems?: "center" | "stretch" | "baseline" | "start" | "end" | "";
	};
}

const styleConfig: Record<
	"justify" | "align" | "placeItems",
	{ [key: string]: string }
> = {
	justify: {
		center: "justify-center",
		between: "justify-between",
		around: "justify-around",
		evenly: "justify-evenly",
		start: "justify-start",
		end: "justify-end",
	},
	align: {
		center: "items-center",
		stretch: "items-stretch",
		baseline: "items-baseline",
		start: "items-start",
		end: "items-end",
	},
	placeItems: {
		center: "place-items-center",
		stretch: "place-items-stretch",
		baseline: "place-items-baseline",
		start: "place-items-start",
		end: "place-items-end",
	},
};

const Flex = ({
	children,
	as = "div",
	settings,
	className,
	...props
}: PropsWithChildren<FlexRowProps>) => {
	const Component = as;
	return (
		<Component
			className={cn(
				"flex   ",
				settings?.spacing ?? "gap-5",
				{
					[styleConfig.align[settings?.align ?? ""] ?? ""]: settings?.align,
					[styleConfig.justify[settings?.justify ?? ""] ?? ""]:
						settings?.justify,
					[styleConfig.placeItems[settings?.placeItems ?? ""] ?? ""]:
						settings?.placeItems,

					"flex-wrap": settings?.shouldWrap,
					"items-center justify-center": settings?.fullCenter,
					"flex-col": settings?.isColumn,
					"[&>*]:basis-0 [&>*]:flex-1": settings?.shouldTakeSameSpace,
					[`${
						(settings?.isColumn ?? false)
							? "flex-col-reverse"
							: "flex-row-reverse"
					}`]: settings?.shouldReverse,
				},
				className
			)}
			{...props}
		>
			<>{children}</>
		</Component>
	);
};

export default Flex;
