// --- Fonctions et Icônes Utilitaires (pour la prévisualisation) ---

import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode, SVGProps } from "react";

// NOTE: Dans votre projet, vous importeriez 'cn' et vos icônes.
const cn = (...args: any[]) => args.filter(Boolean).join(" ");

interface IconProps extends SVGProps<SVGSVGElement> {}

// --- Composants de Style (CVA) ---
const navLinkVariants = cva(
	"transition-colors duration-300 text-sm whitespace-nowrap",
	{
		variants: {
			variant: {
				default: "text-[#262626] hover:text-black text-[16px]",
				mobile:
					"block py-2 px-4 text-base text-gray-600 hover:bg-gray-100 rounded",
				icon: "text-[#262626] hover:text-black",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

interface NavLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof navLinkVariants> {
	href: string;
	children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({
	className,
	variant,
	href,
	children,
	...props
}) => {
	// NOTE: Remplacé par <a> pour la prévisualisation. Utilisez <Link> de Next.js dans votre projet.
	return (
		<a
			href={href}
			className={cn(navLinkVariants({ variant, className }))}
			{...props}
		>
			{children}
		</a>
	);
};

export { NavLink };
