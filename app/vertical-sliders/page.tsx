'use client'

import {Slider} from "@/components/ui/slider"
import {SliderNew} from "@/components/ui/slider-new"
import React, {useState} from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import "@/app/radix-slider.css"
import { CircleX, CircleCheck } from 'lucide-react';
import {SliderOrientation} from "@/components/SliderOrientationEnum";

export default function Home() {
  const [verticalSliders, setVerticalSliders] = useState([
    {
      "title": "Before",
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "title": "After",
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
    }
  ])

  const setVerticalValue = (newValue: number[], index: number) => {
    const updatedArray = [...verticalSliders];
    updatedArray[index].value = newValue;
    setVerticalSliders(updatedArray)
  };

  return (
      <>
        <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
          Vertical Sliders
        </h1>
        <p className="text-center text-xl text-muted-foreground">
          Added vertical orientation support
        </p>
        {verticalSliders.map((disabledSlider, index) => {
          return (
              <div key={index} className="w-full flex-grow justify-items-stretch flex space-x-2">
                <Card className={'flex-grow'}>
                  <CardContent className={'flex flex-col items-center justify-center py-6 space-y-4 h-full'}>
                    <div className="flex flex-row text-lg font-semibold items-center">
                      {index === 0 ?
                          <CircleX className={'h-5 w-5 mr-2'}/>
                          :
                          <CircleCheck className={'h-5 w-5 mr-2'}/>
                      }
                      {disabledSlider.title}
                    </div>
                    {index === 0 ?
                        <Slider
                            value={disabledSlider.value}
                            onValueChange={(newValue) => setVerticalValue(newValue, index)}
                            max={disabledSlider.max}
                            min={disabledSlider.min}
                            step={disabledSlider.step}
                            disabled={disabledSlider.disabled}
                            inverted={disabledSlider.inverted}
                            orientation={disabledSlider.orientation}
                        />
                        :
                        <SliderNew
                            value={disabledSlider.value}
                            onValueChange={(newValue) => setVerticalValue(newValue, index)}
                            max={disabledSlider.max}
                            min={disabledSlider.min}
                            step={disabledSlider.step}
                            disabled={disabledSlider.disabled}
                            inverted={disabledSlider.inverted}
                            orientation={disabledSlider.orientation}
                        />
                    }
                  </CardContent>
                </Card>
              </div>
          );
        })}
      </>
  );

}
