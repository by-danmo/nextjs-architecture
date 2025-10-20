import { type FC, type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const ArrowRightIcon: FC<IconProps> = (props) => (
	<svg
		{...props}
		fill="none"
		width={24}
		height={24}
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M14 5l7 7m0 0l-7 7m7-7H3"
		></path>
	</svg>
);
export default ArrowRightIcon;
