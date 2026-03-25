"use client";

import { APP_ROUTES } from "@multi-app/lib/constants/routes.constants";
import { cn } from "@multi-app/lib/utils/generics";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  SendIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { LinkedInIcon } from "../../icons/socials.icons";
import { Button, buttonVariants } from "../../ui/button";
import { Input } from "../../ui/input";
import { Logo } from "../../ui/logo";
import { Container } from "../helpers/container";

const Footer = () => {
  const footerLinks = {
    pageLinks: [
      { label: "Marketplace", href: APP_ROUTES.marketplace.href },
      { label: "Vendeuses", href: APP_ROUTES.vendeuse.href },
      { label: "A propos", href: APP_ROUTES.about.href },
      { label: "F.A.Q", href: APP_ROUTES.faq.href },
    ],
    social: [
      {
        icon: <FacebookIcon className="size-7" />,
        href: "#",
        label: "Facebook",
      },
      {
        icon: <XIcon className="size-7" />,
        href: "#",
        label: "X (Twitter)",
      },
      {
        icon: <InstagramIcon className="size-7" />,
        href: "#",
        label: "Instagram",
      },
      {
        icon: <LinkedInIcon className="size-7" />,
        href: "#",
        label: "LinkedIn",
      },
    ],
  };

  return (
    <footer
      className="relative  bg-primary-900 h-240  text-white overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed  left-0 bottom-0 w-full px-10 sm:px-0 py-12">
        <Container maxWidth="120rem">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 mb-8 md:mb-12 lg:mb-24">
            {/* Newsletter Section */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h5 className="mb-2">Join Our Newsletter</h5>
                <p className="text-white/80 text-sm md:text-base">
                  Only updates and special offers. No spams.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row w-full gap-3 md:gap-4">
                <Input
                  type="email"
                  placeholder="Adresse mail..."
                  className="flex-1 bg-white text-black"
                />
                <Button
                  invertIconPosition
                  variant="secondary"
                  className="w-full sm:w-auto"
                  icon={<SendIcon className="size-5 md:size-6" />}
                >
                  Envoyer
                </Button>
              </form>
            </div>

            {/* Links Section */}
            <div className="flex justify-start md:justify-end items-start">
              <nav className="space-y-[1.2rem] md:space-y-[1.5rem]">
                {footerLinks.pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex justify-between items-baseline gap-6 md:gap-8 w-[15rem] text-lg md:text-base text-white hover:text-white transition-colors"
                  >
                    {link.label}{" "}
                    <ArrowRightIcon className="-rotate-45 shrink-0 size-5" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 md:mb-8 mb-0">
            <div className="flex gap-[0.8rem] md:gap-[1rem]">
              {footerLinks.social.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={cn(
                    buttonVariants({
                      variant: "only-icon",
                    }),
                    "text-white size-[2.8rem] md:size-[3.2rem] hover:opacity-80 transition-opacity",
                  )}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[2rem] relative z-20 text-sm text-white/80">
              <Link
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Conditions d'utilisations
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link
                href="/confidentialite"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>

          {/* Bottom Section - Logo */}
          <div className="hidden lg:flex relative z-10 mt-52 -mb-30 md:-ml-8 lg:-ml-20">
            <Logo size="xxl" textColor="white" dotColor="yellow" />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
