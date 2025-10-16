import { cn } from './generics';

export const iconSharedStyles = (...className: any[]) => {
    return cn('size-9 text-current', ...className);
};
