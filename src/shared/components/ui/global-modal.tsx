'use client';

import { cn } from '@/lib/utils/generics';
import * as React from 'react';
import { Dialog, DialogContent, DialogTitle } from './dialog';
import { Spinner } from '../icons/spinner.icon';

export interface GlobalModalProps {
    isOpen: boolean;
    views?: React.ReactNode[];
    title?: string;
    className?: string;
    isOverlayCanClosed?: boolean;
    isLoading?: boolean;
    onClose: () => void;
}

export const GlobalModal = ({
    isOpen,
    views = [],
    title,
    className,
    isOverlayCanClosed = true,
    isLoading = false,
    onClose
}: GlobalModalProps) => {
    // Prevent body scroll when modal is open
    React.useEffect(() => {
        const html = document.documentElement;
        if (isOpen) {
            html.style.overflowY = 'hidden';
        } else {
            html.style.overflowY = '';
        }

        return () => {
            html.style.overflowY = '';
            html.style.paddingRight = '';
        };
    }, [isOpen]);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={isOverlayCanClosed ? onClose : undefined}
        >
            {/* Pile de modales */}
            {views.map((view, index) => {
                const isTop = index === views.length - 1;

                return (
                    <DialogContent
                        key={index}
                        overlayClassName={cn('backdrop-blur-[3px]', {
                            '!pointer-events-none': !isOverlayCanClosed
                        })}
                        closeModal={onClose}
                        className={cn(
                            'w-11/12 !max-w-[50rem] rounded-2xl overflow-hidden overflow-y-auto transition-all duration-300 p-[3.2rem] pt-[5rem] max-h-[80vh]',
                            {
                                'pointer-events-none scale-[0.97] opacity-70 blur-[1px]':
                                    !isTop,
                                'pt-[8rem]': title
                            },
                            className
                        )}
                    >
                        {/* Just for fix error on nextjs */}
                        <DialogTitle className="absolute text-[2.2rem] font-bold top-5 left-[3.1rem]">
                            {title}
                        </DialogTitle>

                        {view}

                        {/* Loading Overlay */}
                        {isLoading && isTop && (
                            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl">
                                <Spinner />
                            </div>
                        )}
                    </DialogContent>
                );
            })}
        </Dialog>
    );
};

export default GlobalModal;
