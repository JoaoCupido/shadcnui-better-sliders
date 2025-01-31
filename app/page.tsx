'use client'

import {Slider} from "@/components/ui/slider"
import React, {useState} from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import "@/app/radix-slider.css"
import { CircleX, CircleCheck } from 'lucide-react';
import {SliderOrientation} from "@/components/SliderOrientationEnum";

export default function Introduction() {
  const [introductionSliders, setIntroductionSliders] = useState([
    {
      "title": "Default",
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "title": "Disabled",
      "value": [2],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "title": "Vertical",
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "title": "Multiple Values",
      "value": [1, 4],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
  ])

  const setIntroductionValue = (newValue: number[], index: number) => {
    const updatedArray = [...introductionSliders];
    updatedArray[index].value = newValue;
    setIntroductionSliders(updatedArray)
  };

  return (
      <>
        <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
          Introduction
        </h1>
        <p className="text-center text-xl text-muted-foreground">
          Since March 2024 (@0.8.0), shadcn-ui has major flaws and require new features in the Slider component.
        </p>
        {introductionSliders.map((introductionSlider, index) => {
          return (
              <div key={index} className="w-full flex-grow justify-items-stretch flex space-x-2">
                <Card className={'flex-grow'}>
                  <CardContent className={'flex flex-col items-center justify-center py-6 space-y-4 h-full'}>
                    <div className="flex flex-row text-lg font-semibold items-center">
                      {index === 0 ?
                          <CircleCheck className={'h-5 w-5 mr-2'}/>
                          :
                          <CircleX className={'h-5 w-5 mr-2'}/>
                      }
                      {introductionSlider.title}
                    </div>
                    <Slider
                        value={introductionSlider.value}
                        onValueChange={(newValue) => setIntroductionValue(newValue, index)}
                        max={introductionSlider.max}
                        min={introductionSlider.min}
                        step={introductionSlider.step}
                        disabled={introductionSlider.disabled}
                        inverted={introductionSlider.inverted}
                        orientation={introductionSlider.orientation}
                    />
                  </CardContent>
                </Card>
              </div>
          );
        })}
        <p className="mt-auto text-center text-xl text-muted-foreground">
          Let&apos;s fix all of that!
        </p>
      </>
  );

}
