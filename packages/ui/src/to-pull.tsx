"use client";

import { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { ArrowIcon } from "./icons/arrow-top.icon";

const constantByFilter = {
	mise_en_avant: "All Products",
	meilleures_ventes: "Best Sellers",
	prix_croissant: "Price: Low to High",
	prix_décroissant: "Price: High to Low",
	nouveautés: "New Arrivals",
};

const ToPull = () => {
	const [activeItem, setActiveItem] = useState<string>(
		constantByFilter.mise_en_avant
	);

	const handleChange = (item: string) => {
		setActiveItem(item);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-1 outline-black/20 flex items-end !justify-between px-4 py-2 min-w-[25rem] rounded-md  h-fit hover:bg-black hover:text-white cursor-pointer">
				<span className="text-[1.5rem] font-light">
					Trier par:{" "}
					<span className="font-semibold  text-[1.4rem]">{activeItem}</span>
				</span>
				<span className="">
					<ArrowIcon />
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="bg-white text-black min-w-[25rem] space-y-4 p-4 border-black/20"
				align="start"
			>
				{Object.entries(constantByFilter).map(([key, value]) => (
					<>
						<DropdownMenuItem key={key} onClick={() => handleChange(value)}>
							<Checkbox className="rounded-full size-6" />
							<span className="h-full truncate line-clamp-1 whitespace-nowrap ">
								{value}
							</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator className="mb-4" />
					</>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ToPull;
