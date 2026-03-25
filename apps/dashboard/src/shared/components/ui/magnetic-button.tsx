import { motion } from 'motion/react';
import type { PropsWithChildren } from 'react';
import { useRef, useState } from 'react';

interface MouseMoveEvent {
    clientX: number;
    clientY: number;
}

export interface MagneticButtonProps {
    /**
     * Strength of the magnetic effect
     * @default 1
     */
    strength?: number;

    /**
     * Animation stiffness
     * @default 200
     */
    stiffness?: number;

    /**
     * Animation damping
     * @default 13
     */
    damping?: number;

    /**
     * Animation mass
     * @default 0.2
     */
    mass?: number;
}

const MagneticButton = ({
    children,
    strength = 1,
    stiffness = 200,
    damping = 13,
    mass = 0.2
}: PropsWithChildren<MagneticButtonProps>) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseMoveEvent) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();

        if (!rect) return;

        const { height, width, left, top } = rect;
        const middleX = (clientX - (left + width / 2)) * strength;
        const middleY = (clientY - (top + height / 2)) * strength;

        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse as any}
            onMouseLeave={reset}
            animate={position}
            transition={{
                type: 'spring',
                stiffness,
                damping,
                mass
            }}
            style={{ position: 'relative' }}
        >
            {children}
        </motion.div>
    );
};

export { MagneticButton };
