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
  const [stripesSliders, setStripesSliders] = useState([
    {
      "title": "Before",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "title": "After - Half Tick Marks",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
      "showSteps": 'half',
    },
    {
      "title": "After - Full Tick Marks",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
      "showSteps": 'full',
    }
  ])
  const [stripesVerticalSliders, setStripesVerticalSliders] = useState([
    {
      "title": "After - Half Tick Marks",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
      "showSteps": 'half',
    },
    {
      "title": "After - Full Tick Marks",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
      "showSteps": 'full',
    }
  ])

  const setStripesValue = (newValue: number[], index: number) => {
    const updatedArray = [...stripesSliders];
    updatedArray[index].value = newValue;
    setStripesSliders(updatedArray)
  };

  const setVerticalStripesValue = (newValue: number[], index: number) => {
    const updatedArray = [...stripesVerticalSliders];
    updatedArray[index].value = newValue;
    setStripesVerticalSliders(updatedArray)
  };

  return (
      <>
        <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
          NEW: Tick Marks
        </h1>
        <p className="text-center text-xl text-muted-foreground">
          Added tick marks support to each step
          <br />
          <span><b>WARNING:</b> The tick marks&apos; positions are not 100% accurate!</span>
        </p>
        <code className="text-center relative rounded bg-card px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          showSteps?: string = &apos;none&apos; | &apos;half&apos; | &apos;full&apos; | undefined
          <br/>
          default: &apos;none&apos;
        </code>
        {stripesSliders.map((disabledSlider, index) => {
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
                            onValueChange={(newValue) => setStripesValue(newValue, index)}
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
                            onValueChange={(newValue) => setStripesValue(newValue, index)}
                            max={disabledSlider.max}
                            min={disabledSlider.min}
                            step={disabledSlider.step}
                            disabled={disabledSlider.disabled}
                            inverted={disabledSlider.inverted}
                            orientation={disabledSlider.orientation}
                            showSteps={disabledSlider.showSteps}
                        />
                    }
                  </CardContent>
                </Card>
                {index !== 0 &&
                    <Card className={'flex-grow'}>
                      <CardContent className={'flex flex-col items-center justify-center py-6 space-y-4 h-full'}>
                        <div className="flex flex-row text-lg font-semibold items-center">
                          <CircleCheck className={'h-5 w-5 mr-2'}/>
                          {disabledSlider.title}
                        </div>
                        <SliderNew
                            value={stripesVerticalSliders[index - 1].value}
                            onValueChange={(newValue) => setVerticalStripesValue(newValue, index - 1)}
                            max={stripesVerticalSliders[index - 1].max}
                            min={stripesVerticalSliders[index - 1].min}
                            step={stripesVerticalSliders[index - 1].step}
                            disabled={stripesVerticalSliders[index - 1].disabled}
                            inverted={stripesVerticalSliders[index - 1].inverted}
                            orientation={stripesVerticalSliders[index - 1].orientation}
                            showSteps={stripesVerticalSliders[index - 1].showSteps}
                        />
                      </CardContent>
                    </Card>
                }
              </div>
          );
        })}
      </>
  );

}
