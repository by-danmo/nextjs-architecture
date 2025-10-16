import Flex from '@/components/layout/helpers/flex';
import { CartIcon, HeartIcon, Logo, SearchIcon } from '@/components/ui';
import { menuData } from '@/data/menu.data';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="py-20">
            <Flex
                as="nav"
                className="text-center"
                settings={{
                    align: 'center',
                    justify: 'between',
                    shouldTakeSameSpace: true
                }}
            >
                <Flex
                    as="nav"
                    settings={{
                        shouldTakeSameSpace: false,
                        spacing: 'gap-12'
                    }}
                >
                    {menuData.map((menu) => (
                        <Link
                            className="link text-[1.6rem] hover:opacity-80 transition-opacity"
                            key={menu.label}
                            href={menu.href}
                        >
                            {menu.label}
                        </Link>
                    ))}
                </Flex>

                <Logo />

                <Flex
                    as="div"
                    settings={{
                        shouldTakeSameSpace: false,
                        spacing: 'gap-12',
                        align: 'center',
                        justify: 'end'
                    }}
                >
                    <button
                        type="button"
                        className="text-[1.6rem] hover:opacity-80 transition-opacity"
                        aria-label="Search"
                    >
                        <SearchIcon />
                    </button>

                    <button
                        type="button"
                        className="text-[1.6rem] hover:opacity-80 transition-opacity"
                        aria-label="Wishlist"
                    >
                        <HeartIcon />
                    </button>

                    <button
                        type="button"
                        className="relative text-[1.6rem] hover:opacity-80 transition-opacity"
                        aria-label="Shopping cart"
                    >
                        <CartIcon />
                        <Flex
                            as="span"
                            settings={{
                                align: 'center',
                                justify: 'center'
                            }}
                            className="absolute -right-4 -top-2 size-8 rounded-full bg-black p-4 text-[1.1rem] text-white"
                        >
                            2
                        </Flex>
                    </button>
                </Flex>
            </Flex>
        </header>
    );
};

export { Header };
