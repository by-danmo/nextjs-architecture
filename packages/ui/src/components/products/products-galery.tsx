"use client";

import { cn } from "@prettyfull/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
	images?: string[] | StaticImport[];
	title: string;
	className?: string;
}

export function ProductGallery({
	images,
	title,
	className,
}: ProductGalleryProps) {
	const [activeImage, setActiveImage] = useState<number>(0);

	// if (images?.length === 0) {
	// 	return (
	// 		<div
	// 			className={cn("relative w-full aspect-square bg-gray-100", className)}
	// 		>
	// 			<div className="flex items-center justify-center h-full text-gray-500">
	// 				Aucune image disponible
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<div
			className={cn(
				"flex flex-row gap-4 relative justify-center items-start",
				className
			)}
		>
			{/* <h2>{title}</h2> */}
			{/* Thumbnails */}
			<div className="flex-col hidden gap-4 sm:flex ">
				{images?.map((image, index) => (
					<div
						key={index}
						onClick={() => setActiveImage(index)}
						className={cn(
							"w-20 h-20 cursor-pointer border hover:border-black rounded-sm overflow-hidden transition-all hidden sm:flex",
							activeImage === index
								? "border-black shadow-md"
								: "border-gray-200"
						)}
					>
						<div className="relative w-full h-full overflow-hidden">
							<Image
								src={image}
								alt={`${title} - vue ${index + 1}`}
								width={80}
								height={80}
								className="object-cover"
							/>
						</div>
					</div>
				))}
			</div>

			{/* Image principale */}
			<div className="relative max-xs:h-[25vh] xs:h-[70vh] bg-gray-100 min-h-[350px] hidden w-[40rem]  sm:flex">
				<Image
					src={images?.[activeImage] as string | StaticImport}
					alt={title}
					fill
					className="object-cover"
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			{/* Mobile thumbnails (dots) */}
			<div className="flex w-full overflow-x-auto h-fit scrolbarRecomandation sm:hidden">
				<div className="flex gap-x-4 md:gap-x-16 max-sm:snap-x md:w-full  h-[30rem] md:overflow-hidden overflow-y-hidden  lg:overflow-visible  lg:gap-x-6  sm:h-[35rem]  lg:space-y-0  lg:space-x-0  lg:scrollbar-hide  lg:scroll-smooth  lg:snap-x  lg:snap-mandatory scrolbarRecomandation ">
					{images?.map((image, index) => (
						<div
							key={index}
							// onClick={() => setActiveImage(index)}
							className={cn(
								"bg-gray-100 relative h-full w-[17rem] sm:w-[25rem] aspect-square pointer-cursor overflow-hidden flex-shrink-0 snap-center"
							)}
						>
							<div className="relative w-full h-full overflow-hidden">
								<Image
									src={image}
									alt={`${title} - vue ${index + 1}`}
									fill
									className="object-cover"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
