import { cn } from '@/lib/utils/generics';

type OverlayLayer = 'overlay' | 'overlay-gradient';

type OverlayProps = {
    overlayLayers?: (
        | OverlayLayer
        | {
              layer: OverlayLayer;
              className?: string;
          }
    )[];
};

const sharedOverlayStyles = 'absolute inset-0 pointer-events-none';
const overlayStyles: Record<OverlayLayer, string> = {
    overlay: `${sharedOverlayStyles} bg-black/40`,
    'overlay-gradient': `${sharedOverlayStyles} bg-gradient-to-t from-black/70 via-black/30 to-transparent`
};

const OverlayLayer = ({ overlayLayers }: OverlayProps) => {
    return (
        <>
            {overlayLayers?.map((layer, index) => {
                const layerType = typeof layer === 'string';
                const layerName = layerType ? layer : layer.layer;
                const layerClassName = layerType ? '' : layer.className;

                return (
                    <div
                        key={index}
                        className={cn(overlayStyles[layerName], layerClassName)}
                    ></div>
                );
            })}
        </>
    );
};

export default OverlayLayer;
