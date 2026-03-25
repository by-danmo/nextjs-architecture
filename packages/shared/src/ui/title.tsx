import type { ComponentProps } from 'react';

export type TitleProps = ComponentProps<'div'> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Title = ({ as = 'h1', ...props }: TitleProps) => {
    const Component = as;
    return <Component {...props}>{props.children}</Component>;
};

export default Title;
