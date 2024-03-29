import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderNewProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    showSteps?: string;
}

const SliderNew = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    SliderNewProps
>(({ className, showSteps = 'none', ...props }, ref) => {
    const { min = 0, max = 100, step = 1, orientation } = props;

    const numberOfSteps = Math.floor((max - min) / step);
    const stepLines = Array.from({ length: numberOfSteps }, (_, index) => index * step + min);

    return (
        <SliderPrimitive.Root
            ref={ref}
            className={cn(
                {'flex-col': orientation === 'vertical'},
                "relative flex w-full h-full touch-none select-none items-center cursor-pointer data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
            {...props}
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

                    // Calculate the position of the step mark relative to the min and max values
                    const positionPercentage = (value - min) / (max - min) * 100;

                    // Calculate the center position of the slider track
                    const centerPosition = 50;

                    // Calculate the difference between the current position and the center
                    const difference = positionPercentage - centerPosition;

                    // Adjust the position of the step mark closer to the center
                    const adjustedPosition = centerPosition + difference * (orientation === 'vertical' ? 0.85 : 0.95);

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
            {props.value?.map((_, index) => (
                <SliderPrimitive.Thumb
                    key={index}
                    className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
            ))}
        </SliderPrimitive.Root>
    )
})

SliderNew.displayName = SliderPrimitive.Root.displayName

export { SliderNew }
