import { Logo } from '@/shared/components/ui';
import { siteConfig } from '@/config';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Logo />
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        © {currentYear} {siteConfig.meta.title}. Tous droits
                        réservés.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                        {siteConfig.meta.description}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
