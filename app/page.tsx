'use client'

import {Slider} from "@/components/ui/slider"
import {SliderNew} from "@/components/ui/slider-new"
import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {ModeToggle} from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import "./radix-slider.css"
import {Separator} from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from "@/components/ui/button";

export default function Home() {
  enum SliderOrientation {
    Horizontal = "horizontal",
    Vertical = "vertical",
  }

  const [indexChosenArray, setIndexChosenArray] = useState([
    //HORIZONTAL SLIDERS - 1 VALUE
    {
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "value": [2],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "value": [2],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Horizontal,
    },

    //VERTICAL SLIDERS - 1 VALUE
    {
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "value": [2],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "value": [2],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Vertical,
    },

    //HORIZONTAL SLIDERS - 2 VALUES
    {
      "value": [1, 4],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "value": [1, 4],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "value": [1, 4],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "value": [1, 4],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Horizontal,
    },

      //VERTICAL SLIDERS - 2 VALUES
    {
      "value": [1, 4],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "value": [1, 4],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "value": [1, 4],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Vertical,
    },
    {
      "value": [1, 4],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": true,
      "orientation": SliderOrientation.Vertical,
    },
  ])
  const [tickMarks, setTickMarks] = useState('none');

  function changedTickMarkedType() {
    switch (tickMarks) {
      case 'none':
        setTickMarks('half');
        break;
      case 'half':
        setTickMarks('full');
        break;
      case 'full':
        setTickMarks('none');
        break;
      default:
        break;
    }
  }

  return (
      <main className="flex min-h-screen flex-col items-center p-24 space-y-6">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mt-0">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            You can change all sliders&apos; data in&nbsp;
            <code className="font-mono font-bold">app/page.tsx</code>
          </p>
          <ModeToggle/>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-items-center gap-8 h-full">
          <Card className="w-[1000px] flex-grow">
            <CardHeader>
              <CardTitle className={'flex flex-row justify-between items-center w-full'}>
                Slider
                <Button variant={'secondary'}
                        className={'capitalize'}
                        onClick={changedTickMarkedType}
                >
                  {'Show Tick Marks: ' + tickMarks}
                </Button>
              </CardTitle>
              <CardDescription>Before vs After</CardDescription>
            </CardHeader>
            <CardContent className={'flex flex-col space-y-6 justify-center items-center'}>
              <Separator/>
              {indexChosenArray.map((sliderData, index) => {
                const setValue = (newValue: number[]) => {
                  const updatedArray = [...indexChosenArray];
                  updatedArray[index].value = newValue;
                  setIndexChosenArray(updatedArray)
                };

                return (
                    <>
                      {index % 2 === 0 && (
                          <div className="flex flex-row justify-between items-center w-full">
                            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                              Test #{Math.floor(index / 2) + 1}
                            </h2>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline">
                                  Slider Data
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                {JSON.stringify({ ...sliderData, disabled: undefined }, null, 2)}
                              </PopoverContent>
                            </Popover>
                          </div>
                      )}
                      {index % 2 === 1 && (
                          <div className="flex flex-row justify-between items-center w-full">
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground">
                              Disabled:
                            </h4>
                          </div>
                      )}
                      <div className={'flex flex-row justify-between items-center w-full space-x-12'}>
                        <Slider
                            key={`slider-${index}`}
                            value={sliderData.value}
                            onValueChange={(newValue) => setValue(newValue)}
                            max={sliderData.max}
                            min={sliderData.min}
                            step={sliderData.step}
                            disabled={sliderData.disabled}
                            inverted={sliderData.inverted}
                            orientation={sliderData.orientation}
                        />
                        <p className="text-sm text-muted-foreground">
                          vs
                        </p>
                        <SliderNew
                            key={`sliderNew-${index}`}
                            value={sliderData.value}
                            onValueChange={(newValue) => setValue(newValue)}
                            max={sliderData.max}
                            min={sliderData.min}
                            step={sliderData.step}
                            className={cn(`${sliderData.orientation === SliderOrientation.Vertical ? 'h-[9.25rem]' : ''}`)}
                            disabled={sliderData.disabled}
                            inverted={sliderData.inverted}
                            orientation={sliderData.orientation}
                            showSteps={tickMarks}
                        />
                      </div>
                      {index % 2 === 1 && <Separator />}
                    </>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </main>
  );
}
