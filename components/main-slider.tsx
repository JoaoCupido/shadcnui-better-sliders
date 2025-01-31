'use client'

import { SliderNew } from "@/components/ui/slider-new";
import React, { useState, useEffect } from "react";
import "@/app/radix-slider.css";
import { SliderOrientation } from "@/components/SliderOrientationEnum";
import { useRouter, usePathname } from "next/navigation";

export default function MainSlider() {
    const router = useRouter();
    const pathname = usePathname();

    const paths = [
        '/', '/disabled', '/cursor-pointer', '/vertical-sliders', '/range-slider',
        '/tick-marks', '/format-labels', '/format-labels-side', '/thank-you'
    ];

    const getCurrentValue = () => {
        const index = paths.indexOf(pathname);
        return index !== -1 ? index : 0;
    };

    const [mainSlider, setMainSlider] = useState([{
        "title": "Main Slider",
        "value": [getCurrentValue()],
        "disabled": false,
        "min": 0,
        "max": 8,
        "step": 1,
        "inverted": true,
        "orientation": SliderOrientation.Vertical,
    }]);

    useEffect(() => {
        setMainSlider((prev) => [{ ...prev[0], value: [getCurrentValue()] }]);
    }, [pathname]);

    const setMainValue = (newValue: number[], index: number) => {
        const updatedArray = [...mainSlider];
        updatedArray[index].value = newValue;
        setMainSlider(updatedArray);

        router.push(paths[newValue[0]] ?? '/');
    };

    return (
        <div className="flex-grow py-10">
            <SliderNew
                value={mainSlider[0].value}
                onValueChange={(newValue) => setMainValue(newValue, 0)}
                max={mainSlider[0].max}
                min={mainSlider[0].min}
                step={mainSlider[0].step}
                disabled={mainSlider[0].disabled}
                inverted={mainSlider[0].inverted}
                orientation={mainSlider[0].orientation}
                showSteps={'full'}
                formatLabel={(value) => {
                    if (value === 0) {
                        return 'Introduction';
                    } else if (value === mainSlider[0].max) {
                        return 'Thank you';
                    } else {
                        return `Change #${value}`;
                    }
                }}
            />
        </div>
    );
}