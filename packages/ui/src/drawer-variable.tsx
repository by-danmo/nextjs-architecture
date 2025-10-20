import { cn } from "@prettyfull/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import { CardProduct } from "./card-product";
import { ProductGallery } from "./components/products/products-galery";
import ProductInfos from "./components/products/products-infos";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from "./components/ui/drawer";
import { Separator } from "./components/ui/separator";
import { CloseIcon } from "./icons/close.icon";

const DrawerVariable = ({
	label,
	title,
	photos,
	productData,
	promotion,
}: {
	label: string;
	title: string;
	photos: string[] | StaticImport[] | undefined;
	promotion?: {
		reduced_price: number;
		pourcentage: number;
	};

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
}) => {
	const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
	};

	const [selectedSize, setSelectedSize] = useState<string>("M");
	const [selectedColor, setSelectedColor] = useState<string>("Black");
	const [promo, setPromo] = useState<typeof promotion | undefined>(promotion);

	console.log(promotion);
	return (
		<Drawer direction="bottom">
			<DrawerTrigger asChild>
				<button
					className={cn(
						" px-2 py-2 text-[1.2rem] size-10  text-black flex justify-center items-center rounded-full  duration-200 font-semibold bg-gray-100 cursor-pointer transition-all hover:bg-gray-200 whitespace-nowrap"
					)}
					onClick={(e) => handleClose(e)}
				>
					{label}
				</button>
			</DrawerTrigger>

			<DrawerContent
				title="Details du produit"
				className="flex justify-center border-none outline-none rounded-t-3xl"
			>
				<DrawerClose
					className="absolute z-30 p-2 text-2xl bg-white rounded-full cursor-pointer right-4 top-4"
					onClick={(e) => e.stopPropagation()}
				>
					<CloseIcon className="w-10 h-10" />
				</DrawerClose>

				<div className="h-[80vh] flex justify-around gap-10 lg:justify-center border-none">
					<div className="flex justify-around w-full gap-10 px-4 py-10 overflow-y-scroll sm:px-10 scrollbar-hide lg:justify-center">
						<div className="flex flex-col w-full gap-10 py-10 sm:w-3/5 lg:justify-center sm:flex-row ">
							<ProductGallery title={title} images={photos} />
							<ProductInfos
								productData={productData}
								selectedColor={selectedColor}
								setSelectedColor={setSelectedColor}
								selectedSize={selectedSize}
								setSelectedSize={setSelectedSize}
								promotion={promo || null}
							/>
						</div>

						<Separator
							orientation="vertical"
							className="h-full max-md:hidden "
						/>

						<div className="w-2/5 max-md:hidden ">
							<h2 className="!text-[3rem] font-semibold pb-8">
								Suggestion de produit
							</h2>
							<div className="grid w-full grid-cols-2 gap-4 h-4/6">
								<>
									{Array.from({ length: 2 }).map((_, index) => (
										<CardProduct
											variable={[
												{
													color: {
														label: "Rouge",
														code: "#FF0000",
													},
													size: ["S", "M", "L", "XL", "2XL", "3XL"],
													image: [
														"/assets/product5.webp",
														"/assets/product_2.jpg",
													],
													quantity: 1,
												},
												{
													color: {
														label: "Vert",
														code: "#00FF00",
													},
													size: ["S", "M", "L"],
													image: ["/assets/product_2.jpg", "image4.jpg"],
													quantity: 1,
												},
												{
													color: {
														label: "Rouge",
														code: "#FF0000",
													},
													size: ["S", "M", "L", "XL", "2XL", "3XL"],
													image: [
														"/assets/product5.webp",
														"/assets/product_2.jpg",
													],
													quantity: 1,
												},
												{
													color: {
														label: "Vert",
														code: "#00FF00",
													},
													size: ["S", "M", "L"],
													image: ["/assets/product_2.jpg", "image4.jpg"],
													quantity: 1,
												},
												{
													color: {
														label: "Rouge",
														code: "#FF0000",
													},
													size: ["S", "M", "L", "XL", "2XL", "3XL"],
													image: [
														"/assets/product5.webp",
														"/assets/product_2.jpg",
													],
													quantity: 1,
												},
												{
													color: {
														label: "Vert",
														code: "#00FF00",
													},
													size: ["S", "M", "L"],
													image: ["/assets/product_2.jpg", "image4.jpg"],
													quantity: 1,
												},
												{
													color: {
														label: "Vert",
														code: "#00FF00",
													},
													size: ["S", "M", "L"],
													image: ["/assets/product_2.jpg", "image4.jpg"],
													quantity: 1,
												},
												{
													color: {
														label: "Rouge",
														code: "#FF0000",
													},
													size: ["S", "M", "L", "XL", "2XL", "3XL"],
													image: [
														"/assets/product5.webp",
														"/assets/product_2.jpg",
													],
													quantity: 1,
												},
												{
													color: {
														label: "Vert",
														code: "#00FF00",
													},
													size: ["S", "M", "L"],
													image: ["/assets/product_2.jpg", "image4.jpg"],
													quantity: 1,
												},
											]}
											price={12000}
											promotion={{
												pourcentage: 50,
												reduced_price: 6000,
											}}
											small_description="Top polyvalente á Manche"
											title="Sweet-Top"
											// link={PRODUCT_PATHS.productDetail("SWEET-TOP")}
										/>
									))}
								</>
							</div>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default DrawerVariable;
