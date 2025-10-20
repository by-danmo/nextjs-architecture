import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from "./components/ui/drawer";
import { F7CartFillBadgePlus } from "./icons/add-cart.icon";
import { CloseIcon } from "./icons/close.icon";
import Size from "./size";

const DrawerCart = ({
	size,
	handleClick,
	close,
}: {
	size: string[];
	handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	close: () => void;
}) => {
	const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		close();
	};
	return (
		<Drawer onClose={close}>
			<DrawerTrigger asChild>
				<button
					className="absolute p-2 text-2xl bg-white rounded-full cursor-pointer right-2 bottom-5 w-fit md:hidden"
					onClick={(e) => handleClick(e)}
				>
					<F7CartFillBadgePlus />
				</button>
			</DrawerTrigger>

			<DrawerContent
				title="Size"
				className="w-full p-5 border-none outline-none  md:hidden lg:hidden xl:hidden 2xl:hidden max-h-[90%] "
			>
				<DrawerClose
					className="absolute p-2 text-2xl bg-white rounded-full cursor-pointer right-4 top-4"
					onClick={(e) => e.stopPropagation()}
				>
					<CloseIcon className="w-10 h-10" />
				</DrawerClose>
				<div className="p-4 overflow-x-scroll rounded-lg scrollbar-hide h-[20vh]">
					<Size size={size} onclose={(e) => handleClose(e)} />
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default DrawerCart;
