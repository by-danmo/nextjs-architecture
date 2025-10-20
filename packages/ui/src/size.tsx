import { Button } from "./button";

const Size = ({
	size,
	onclose,
}: {
	size: string[];
	onclose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	const sizeOptions = [
		{
			label: "XS",
			code: "XS",
		},
		{
			label: "S",
			code: "S",
		},
		{
			label: "M",
			code: "M",
		},
		{
			label: "L",
			code: "L",
		},
		{
			label: "XL",
			code: "XL",
		},
		{
			label: "2XL",
			code: "2XL",
		},
		{
			label: "3XL",
			code: "3XL",
		},
	];

	return (
		<div className="grid grid-cols-4 gap-y-10 gap-x-8 ">
			{sizeOptions.map((items, i) => (
				<Button
					key={i}
					onClick={(e) => onclose && onclose(e)}
					disabled={!size.includes(items.label)}
					className="flex  items-center justify-center w-full h-14 px-6 py-4 mx-auto font-normal text-gray-600 uppercase bg-white border border-gray-300 rounded-sm text-[1.3rem] hover:border-black hover:text-white transition-all duration-200 cursor-pointer"
				>
					{items.label}
				</Button>
			))}
		</div>
	);
};

export default Size;
