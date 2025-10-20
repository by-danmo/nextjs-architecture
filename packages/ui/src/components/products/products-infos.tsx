import { formatCurrency_FR } from "@prettyfull/utils";

import { Button } from "../../button";
import { Heart } from "../../icons/heart.icon";
import { ProductOptions } from "./product-options";
// import { Button } from "@/button";

type ProductInfosProps = {
	productData: {
		category?: string;
		title: string;
		price: number;
		description: string;
		sizes: {
			label: string;
			value: string;
		}[];
		colors: {
			name: string;
			code: string;
		}[];

		images: string[];
	};
	promotion: {
		reduced_price: number;
		pourcentage: number;
	} | null;
	selectedColor: string;
	setSelectedColor: (color: string) => void;
	selectedSize: string;
	setSelectedSize: (size: string) => void;
};

const ProductInfos = ({
	productData,
	selectedColor,
	setSelectedColor,
	selectedSize,
	setSelectedSize,
	promotion,
}: ProductInfosProps) => {
	const classNames = "!font-light font-manrope !text-[1.8rem]";
	return (
		<div className="w-full lg:w-2/5 ">
			<div className="space-y-6">
				{/* Catégorie */}
				<h4 className="tracking-wide text-gray-500 uppercase !text-[2.1rem] font-bebas-neue">
					{productData.category}
				</h4>

				{/* Titre et prix */}
				<div className="space-y-2">
					<h1 className=" max-md:text-[3rem] md:!text-[4.8rem] font-bold">
						{productData.title}
					</h1>

					{promotion ? (
						<div className="block text-start ">
							<h4 className="  !text-3xl whitespace-nowrap">
								{" "}
								{formatCurrency_FR(promotion?.reduced_price || 0)}
							</h4>
							<h4 className="text-grey/50  line-through !text-[2.5rem]   whitespace-nowrap">
								{formatCurrency_FR(productData.price)}
							</h4>
						</div>
					) : (
						<h4 className="!text-3xl font-medium font-bebas-neue">
							{formatCurrency_FR(productData.price)}
						</h4>
					)}
				</div>

				{/* Options de produit */}
				<ProductOptions
					sizes={productData.sizes}
					colors={productData.colors}
					selectedSize={selectedSize}
					selectedColor={selectedColor}
					onSizeChange={(size) => setSelectedSize(size)}
					onColorChange={(color) => setSelectedColor(color)}
				/>

				{/* Boutons d'action */}
				<div className="flex gap-8 mt-15 w-[100%] items-center py-8">
					<Button variant="default" className="flex-1 py-6 text-lg">
						Acheter
					</Button>

					<Button
						variant="outline"
						className="p-4 text-2xl rounded-full cursor-pointer w-fit h-fit "
					>
						<Heart />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductInfos;
