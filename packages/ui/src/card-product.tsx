"use client";
import { cn, data_url, formatCurrency_FR } from "@prettyfull/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { Button } from "./button";
import DrawerCart from "./drawer-cart";
import DrawerVariable from "./drawer-variable";
import { CloseIcon } from "./icons/close.icon";
import { Heart } from "./icons/heart.icon";
import Size from "./size";

const cardVariants = cva(["space-y-3 w-[100%] h-full relative"], {
	variants: {
		variant: {
			default: "tracking-wide  cursor-pointer",
		},
		size: {
			default: " ",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

const INITIAL_DRAWER_STATES = {
	showSizes: false,
	showVariable: false,
};

type DrawerStatesProps = typeof INITIAL_DRAWER_STATES;

export interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {
	title: string;
	link?: string;
	variable?: {
		color: { label: string; code: string };
		size: string[];
		image: Array<string>;
		quantity: number;
	}[];
	notVariable?: {
		color?: { label: string; code: string };
		size: string[];
		image: string;
		 quantity?: number;
	};
	small_description?: string;
	price: number;
	solde?: boolean;
	promotion?: {
		reduced_price: number;
		pourcentage: number;
	};
	isLoading?: boolean;
	label?: string;
}
export function CardProduct({
	title,
	className,
	small_description,
	price,
	children,
	promotion,
	solde,
	variable,
	notVariable,
	isLoading,
	link,
	...props
}: CardProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	const router = useRouter();

	const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

	const [drawerStates, setDrawerStates] = useState<DrawerStatesProps>(
		INITIAL_DRAWER_STATES
	);

	// Fonction utilitaire pour mettre à jour les états des tiroirs
	const updateDrawerState = useCallback(
		(key: keyof DrawerStatesProps, value: SetStateAction<boolean>) => {
			setDrawerStates((prev) => ({ ...prev, [key]: value }));
		},
		[]
	);

	const [size, setSize] = useState<string[]>([]);

	const handleRoutes = (link?: string) => {
		if (link) {
			router.push(link);
		}
	};

	// Gestion de l'affichage des tailles
	const handleShowSizes = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			updateDrawerState("showSizes", !drawerStates.showSizes);

			if (variable && variable[activeIndex]) {
				setSize(variable[activeIndex].size as string[]);
			}

			if (notVariable) {
				setSize(notVariable.size as string[]);
			}
		},
		[activeIndex, notVariable, drawerStates.showSizes, variable]
	);

	const handleVariantClick = ({
		e,
		index,
	}: {
		e: React.MouseEvent<HTMLButtonElement>;
		index: number;
	}) => {
		setActiveIndex(index);
		e.stopPropagation();
	};

	// Préchargement des images
	useEffect(() => {
		if (variable) {
			const loadImages = async () => {
				const loadPromises = variable.map((variant, index) => {
					return new Promise<boolean>((resolve) => {
						const img = new window.Image();
						img.onload = () => resolve(true);
						img.onerror = () => resolve(false);
						img.src =
							typeof variant.image[0] === "string" ? variant.image[0] : "src";
					});
				});

				const results = await Promise.all(loadPromises);
				setImagesLoaded(results);
			};

			loadImages();
		}
	}, [variable]);

	return (
		<article className={cn(cardVariants(), className)} {...props}>
			<div
				className="bg-sky-200 h-[100%] md:hover:[&>div]:opacity-100 flex   justify-center items-center relative"
				onClick={() => handleRoutes(link)}
			>
				{/* L'affichage d'un produit avec un produits variable */}
				{variable?.map((variant, i) => (
					<Image
						key={i}
						src={variant.image[0] as string}
						alt={`Product Image ${i + 1}`}
						width={800}
						height={800}
						className={cn(
							"object-cover  w-full h-full absolute inset-0 transition-opacity duration-300",
							i === activeIndex ? "opacity-100" : "opacity-0"
						)}
						priority={i === 0}
						placeholder="blur"
						blurDataURL={data_url}
						style={
							{
								"--aspect-ratio-hack": "149.70059880239518%",
							} as React.CSSProperties
						}
					/>
				))}
				{/* Fallback si pas de produit */}
				{!variable && notVariable?.image && (
					<Image
						src={notVariable.image}
						alt="Product Image"
						width={400}
						height={400}
						className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300"
						priority
						placeholder="blur"
						blurDataURL={data_url}
						style={
							{
								"--aspect-ratio-hack": "149.70059880239518%",
							} as React.CSSProperties
						}
					/>
				)}

				{!drawerStates.showSizes && (
					<div className="absolute flex items-center justify-between w-full gap-8 px-4 transition-all duration-300 ease-in-out opacity-0 bottom-5 max-md:hidden md:flex">
						<Button
							className="pt-4 pb-5 px-4 w-2/3 text-[1.4rem] font-medium"
							onClick={(e) => handleShowSizes(e)}
						>
							Ajouter au panier
						</Button>
						<button
							className="p-4 text-2xl rounded-full cursor-pointer w-fit bg-secondary"
							onClick={(e) => e.stopPropagation()}
						>
							<Heart />
						</button>
					</div>
				)}

				<DrawerCart
					size={size}
					handleClick={(e) => handleShowSizes(e)}
					close={() => updateDrawerState("showSizes", false)}
				/>
			</div>

			<div className="space-y-3">
				<p className="text-sm  max-sm:hidden capitalize text-grey  tracking-[0.03em] font-light">
					{small_description}
				</p>
			</div>
			<div className="flex justify-between items-start text-[#000] ">
				<h4 className="tracking-[0.03em] !text-2xl  max-md:!text-[2rem]  md:!text-[2.2rem] truncate line-clamp-1">
					{" "}
					{title}
				</h4>

				{/* Correction de l'affichage des promotions */}
				{!promotion && (
					<h4 className="!text-2xl  max-md:!text-[2rem]  md:!text-[2.2rem]">
						{" "}
						{formatCurrency_FR(price)}
					</h4>
				)}
				{promotion && (
					<>
						<div className="block text-end ">
							<h4 className="!text-2xl  max-md:!text-[2rem]  md:!text-[2.2rem] whitespace-nowrap">
								{" "}
								{formatCurrency_FR(promotion.reduced_price || 0)}
							</h4>
							<h4 className="text-grey/50 !text-2xl line-through max-md:!text-[2rem]  md:!text-[2.2rem]  whitespace-nowrap">
								{formatCurrency_FR(price)}
							</h4>
						</div>
						<span className="text-black font-semibold !text-[1rem] lg:!text-xs bg-light absolute top-4 right-4 px-4 py-2 rounded-full">
							{promotion.pourcentage}% OFF
						</span>
					</>
				)}
			</div>

			<div className="flex items-center justify-start gap-2">
				{variable?.slice(0, 3)?.map((variant, i) => (
					<button
						key={i}
						className={cn(
							"h-fit w-fit p-[2px] border bg-white flex justify-center items-center rounded-full transition-all duration-200",
							i === activeIndex ? "border-black shadow-md" : "border-gray-300"
						)}
						onClick={(e) => handleVariantClick({ e, index: i })}
						disabled={drawerStates.showSizes}
					>
						<span
							className={cn("h-5 w-5 rounded-full cursor-pointer")}
							style={{ backgroundColor: variant.color.code }}
						></span>
					</button>
				))}

				{variable && (
					<DrawerVariable
						label={`+ ${variable.length - 4}`}
						title={title}
						photos={variable?.map((v) => v.image[0]) as string[]}
						promotion={promotion}
						productData={{
							title,
							price,

							description: small_description || "",

							sizes: variable[0]
								? variable[0].size.map((s) => ({ label: s, value: s }))
								: [],
							colors: variable.map((v) => ({
								name: v.color.label,
								code: v.color.code,
							})),
							images: variable.flatMap((v) => v.image),
						}}
					/>
				)}
			</div>
			{(notVariable?.size || variable) &&
				(drawerStates.showSizes ? (
					<div className="absolute  w-[80%] left-1/2 right-1/2  -translate-x-1/2 bg-white border-2 border-gray-200 bottom-15 text-black  text-center rounded-md text-sm font-light  p-8 shadow-lg max-md:hidden md:block">
						<div className="flex items-center justify-between mb-6">
							<p className="font-semibold text-[1.4rem]">Size</p>
							<button
								onClick={() => updateDrawerState("showSizes", false)}
								className="cursor-pointer"
							>
								<CloseIcon className="w-8 h-8" />
							</button>
						</div>
						<Size
							size={size}
							onclose={() => updateDrawerState("showSizes", false)}
						/>
					</div>
				) : null)}
		</article>
	);
}
