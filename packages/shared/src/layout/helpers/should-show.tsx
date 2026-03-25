/**
 * ShouldShow Component:
 * Ce composant permet d'afficher un composant si une condition est vraie.
 * Il prend en paramètre une condition (when) et un composant à afficher dans (show ou children).
 * Si la condition est vraie, le composant est affiché, sinon il n'est pas affiché.
 * Il prend également un paramètre elseShow qui permet d'afficher un autre composant si la condition est fausse.
 * Il permet de réduire la duplication de code dans les composants en se passant de la syntaxe {condition && <Component />}
 */

import type { ReactNode } from 'react';

interface ShouldShowProps {
    when: boolean;
    children?: ReactNode;
    show?: ReactNode;
    elseShow?: ReactNode;
}

const ShouldShow = ({ when, children, show, elseShow }: ShouldShowProps) => {
    if (when) return <>{show || children}</>;
    return <>{elseShow}</>;
};

export { ShouldShow };
export type { ShouldShowProps };

