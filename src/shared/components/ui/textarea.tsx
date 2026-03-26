'use client';
import { cn } from '@/lib/utils/generics';
import { cva, type VariantProps } from 'class-variance-authority';
import { type InputHTMLAttributes } from 'react';
import { InputError } from '../feedback/input-error';
import { ShouldShow } from '../layout/helpers/should-show';

const textareaVariants = cva(
    [
        'w-full',
        'outline-none focus-visible:ring-1 ',
        'disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none min-h-[17rem] max-h-[17rem]'
    ],
    {
        variants: {
            variant: {
                default: 'bg-gray-50 rounded-3xl border border-gray-200  w-full'
            },
            sizes: {
                default: 'pl-[2rem] py-[1.6rem] '
            }
        },
        defaultVariants: {
            variant: 'default',
            sizes: 'default'
        }
    }
);

interface InputProps
    extends InputHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof textareaVariants> {
    label?: string;
    error?: string;
}

export const TextArea = ({
    className,
    label,
    variant,
    error,
    ...props
}: InputProps) => {
    return (
        <div className="w-full ">
            <div className="relative">
                <ShouldShow when={!!label && props.placeholder !== ''}>
                    <label
                        className={cn(
                            'mb-2 block font-medium text-gray-500 transition-all duration-200'
                        )}
                    >
                        {label}
                    </label>
                </ShouldShow>
                <textarea
                    className={cn(textareaVariants({ variant }), className, {
                        'border-destructive focus:ring-destructive': !!error,
                        'cursor-not-allowed': props.disabled
                    })}
                    // autoComplete="off"
                    placeholder={props.placeholder}
                    {...props}
                />

                {/* Show Icon Password and is Action */}
            </div>

            <InputError error={error} />
        </div>
    );
};
