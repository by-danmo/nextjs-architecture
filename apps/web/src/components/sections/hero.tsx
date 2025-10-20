'use client';

import { MagneticButton } from '@/components/ui/magnetic-button';
import { cn } from '@/lib/utils/generics';
import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Cloud images data
const clouds = [
    {
        positions: '-bottom-[60%]',
        src: '/assets/nuage1.png',
        duration: 15,
        size: undefined
    },
    {
        positions: '-bottom-[60%]',
        src: '/assets/nuage2.png',
        size: { width: 1419, height: 946 },
        duration: 9
    },
    {
        positions: '-bottom-[45%]',
        src: '/assets/nuage3.png',
        size: { width: 1419, height: 946 },
        duration: 8
    },
    {
        positions: '-bottom-[65%]',
        src: '/assets/nuage4.png',
        size: { width: 1419, height: 946 },
        duration: 5
    }
] as const;

// Animation configurations
const DEFAULT_Y = 100;

const notFromZeroText = [
    { x: -DEFAULT_Y, y: undefined, text: '<' },
    { x: undefined, y: DEFAULT_Y, text: 'Not' },
    { x: undefined, y: DEFAULT_Y, text: 'From' },
    { x: undefined, y: DEFAULT_Y, text: 'Zero' },
    { x: DEFAULT_Y, y: undefined, text: '/' },
    { x: DEFAULT_Y, y: undefined, text: '>' },
    { x: DEFAULT_Y, y: undefined, text: ';' }
] as const;

const buildAmazingThingsText = [
    { x: undefined, y: -DEFAULT_Y, text: 'Build' },
    { x: undefined, y: DEFAULT_Y, text: 'Amazing' },
    { x: undefined, y: DEFAULT_Y, text: 'Things' }
] as const;

// Framer Motion Variants
const parentVariants: Variants = {
    animate: {
        transition: { staggerChildren: 0.4 }
    }
};

const textVariants: Variants = {
    initial: ({ x, y }: { x?: number; y?: number }) => ({
        ...(x !== undefined ? { x, opacity: 0 } : { y: y || 0 }),
        filter: 'blur(5px)'
    }),
    animate: {
        y: 0,
        x: 0,
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            type: 'spring',
            duration: 0.8,
            stiffness: 300
        }
    }
};

const cloudVariants: Variants = {
    initial: { x: '-100%' },
    animate: { x: '100%' }
};

export interface HeroProps {
    /**
     * Custom company name
     * @default "everest"
     */
    companyName?: string;

    /**
     * Custom tagline
     * @default "We are everest."
     */
    tagline?: string;

    /**
     * Custom copyright text
     * @default "Build with 💖 by core team."
     */
    copyright?: string;

    /**
     * Button text
     * @default "DOCS"
     */
    buttonText?: string;

    /**
     * Button click handler
     */
    onButtonClick?: () => void;

    /**
     * Whether to show clouds animation
     * @default true
     */
    showClouds?: boolean;
}

const Hero = ({
    companyName = 'everest',
    tagline = 'We are',
    copyright = 'Build with 💖 by core team.',
    buttonText = 'DOCS',
    onButtonClick,
    showClouds = true
}: HeroProps) => {
    const buildAmazingThingsAnimation = useAnimation();
    const notFromZeroAnimation = useAnimation();
    const [shouldAnimateClouds, setShouldAnimateClouds] = useState(false);

    useEffect(() => {
        const runAnimations = async () => {
            await buildAmazingThingsAnimation.start('animate');
            await notFromZeroAnimation.start('animate');
            setShouldAnimateClouds(true);
        };

        void runAnimations();
    }, [buildAmazingThingsAnimation, notFromZeroAnimation]);

    return (
        <section className="bg-tweak hero-bg h-screen items-center">
            {/* Header */}
            <header>
                <p className="absolute left-32 top-5 tracking-wider text-white">
                    {`${tagline} ${companyName}.`}
                </p>
                <p className="absolute right-32 top-5 tracking-wider text-white">
                    &copy; {copyright}
                </p>
            </header>

            {/* Main Content */}
            <div className="relative z-10 pt-12 text-center uppercase leading-[1.2] text-white">
                {/* Not From Zero Text */}
                <motion.div
                    initial="initial"
                    animate={notFromZeroAnimation}
                    variants={parentVariants}
                >
                    <p className="overflow-hidden text-[5rem] font-extralight capitalize">
                        {notFromZeroText.map((item, index) => (
                            <span key={index}>
                                <motion.span
                                    variants={textVariants}
                                    custom={{ x: item.x, y: item.y }}
                                    className="inline-block bg-error"
                                >
                                    {item.text}
                                </motion.span>{' '}
                            </span>
                        ))}
                    </p>
                </motion.div>

                {/* Build Amazing Things */}
                <motion.div
                    initial="initial"
                    animate={buildAmazingThingsAnimation}
                    variants={parentVariants}
                >
                    <h1 className="overflow-hidden text-[9rem] font-normal capitalize">
                        {buildAmazingThingsText.map((item, index) => (
                            <span key={index}>
                                <motion.span
                                    variants={textVariants}
                                    custom={{ y: item.y }}
                                    className="inline-block"
                                >
                                    {item.text}
                                </motion.span>{' '}
                            </span>
                        ))}
                    </h1>
                </motion.div>

                {/* Vertical Line */}
                <div className="mx-auto mt-12 h-48 w-0.5 bg-[#FCFDEC]" />

                {/* Circle Button */}
                <div className="mt-12 flex justify-center">
                    <MagneticButton>
                        <button
                            className="flex aspect-square items-center justify-center rounded-full border border-[#FCFDEC] p-14 hover:bg-[#FCFDEC]/10 transition-colors"
                            onClick={onButtonClick}
                            type="button"
                        >
                            <span className="text-[1.6rem] tracking-wider text-[#FCFDEC]">
                                {buttonText}
                            </span>
                        </button>
                    </MagneticButton>
                </div>
            </div>

            {/* Mountain Background */}
            <Image
                className="absolute -bottom-20 w-full"
                src="/assets/montain.png"
                alt="Mountain landscape"
                width={1920}
                height={1080}
                priority
            />

            {/* Animated Clouds */}
            {showClouds &&
                clouds.map((cloud, index) => (
                    <motion.img
                        key={index}
                        initial="initial"
                        animate={shouldAnimateClouds ? 'animate' : 'initial'}
                        variants={cloudVariants}
                        transition={{
                            duration: 10 + cloud.duration,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear'
                        }}
                        className={cn('absolute w-full', cloud.positions)}
                        width={cloud.size?.width}
                        height={cloud.size?.height}
                        src={cloud.src}
                        alt={`Cloud ${index + 1}`}
                    />
                ))}
        </section>
    );
};

export { Hero };
