"use client";

import { cn } from "@multi-app/lib/utils/generics";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface BlogCardProps {
  image: string | StaticImageData;
  title: string;
  link: string;
  className?: string;
}

export const BlogCard = ({ image, title, link, className }: BlogCardProps) => {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-[1.2rem] md:gap-[1.4rem] rounded-[6px]",
        className,
      )}
    >
      {/* Image Container */}
      <div className="relative h-[28rem] sm:h-[30rem] md:h-[33rem] w-full overflow-hidden rounded-[6px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <p className="text-lg md:text-xl font-medium leading-relaxed">{title}</p>

      {/* Read More Button */}
      <Link href={link}>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-gray-400 text-sm md:text-base font-semibold"
        >
          Lire plus
        </Button>
      </Link>
    </article>
  );
};
