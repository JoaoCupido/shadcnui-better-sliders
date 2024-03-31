import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderNewProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    showSteps?: string;
    formatLabel?: (value: number) => string;
    formatLabelSide?: string;
}

const SliderNew = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    SliderNewProps
>(({ className, showSteps = 'none', formatLabel, formatLabelSide = 'top', ...props }, ref) => {
    const { min = 0, max = 100, step = 1, orientation } = props;
    const [hoveredThumbIndex, setHoveredThumbIndex] = React.useState<boolean>(false);
    const numberOfSteps = Math.floor((max - min) / step);
    const stepLines = Array.from({ length: numberOfSteps }, (_, index) => index * step + min);

    return (
        <SliderPrimitive.Root
            ref={ref}
            className={cn(
                {'flex-col h-full': orientation === 'vertical', 'w-full': orientation !== 'vertical'},
                "relative flex touch-none select-none items-center cursor-pointer data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
            {...props}
            onFocus={() => setHoveredThumbIndex(true)}
            onBlur={() => setHoveredThumbIndex(false)}
        >
            <SliderPrimitive.Track className={cn(
                {'h-full w-2': orientation === 'vertical', 'w-full h-2': orientation !== 'vertical'},
                "relative grow overflow-hidden rounded-full bg-secondary"
            )}>
                <SliderPrimitive.Range className={cn(
                    {'h-full': orientation !== 'vertical', 'w-full': orientation === 'vertical'},
                    "absolute bg-primary"
                )} />
                {showSteps !== undefined && showSteps !== 'none' && stepLines.map((value, index) => {
                    if (value === min || value === max) {
                        return null;
                    }
                    const positionPercentage = ((value - min) / (max - min)) * 100;
                    const adjustedPosition = 50 + (positionPercentage - 50) * 0.96;
                    return (
                        <div
                            key={index}
                            className={cn(
                                {'w-0.5 h-2': orientation !== 'vertical', 'w-2 h-0.5': orientation === 'vertical'},
                                'absolute bg-muted-foreground',
                                {
                                    'left-1': orientation === 'vertical' && showSteps === 'half',
                                    'top-1': orientation !== 'vertical' && showSteps === 'half',
                                    'left-0': orientation === 'vertical' && showSteps === 'full',
                                    'top-0': orientation !== 'vertical' && showSteps === 'full',
                                    'transform -translate-x-1/2': orientation !== 'vertical',
                                    'transform -translate-y-1/2': orientation === 'vertical',
                                }
                            )}
                            style={{
                                [orientation === 'vertical' ? 'bottom' : 'left']: `${adjustedPosition}%`
                            }}
                        />
                    );
                })}

            </SliderPrimitive.Track>
            {props.value?.map((numberStep, index) => (
                <SliderPrimitive.Thumb
                    key={index}
                    className={cn(
                        "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    )}>
                    {hoveredThumbIndex && formatLabel && (
                        <div
                            className={cn(
                                {'bottom-8 left-1/2 transform -translate-x-1/2': formatLabelSide === 'top'},
                                {'top-8 left-1/2 transform -translate-x-1/2': formatLabelSide === 'bottom'},
                                {'right-8 transform -translate-y-1/4': formatLabelSide === 'left'},
                                {'left-8 transform -translate-y-1/4': formatLabelSide === 'right'},
                                "absolute z-30 rounded-md border bg-popover text-popover-foreground shadow-sm px-2 text-center items-center justify-items-center w-max py-1",
                            )}
                        >
                            {formatLabel(numberStep)}
                        </div>
                    )}
                </SliderPrimitive.Thumb>
            ))}
        </SliderPrimitive.Root>
    )
})

SliderNew.displayName = SliderPrimitive.Root.displayName

export { SliderNew }
