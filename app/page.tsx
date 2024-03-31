'use client'

import {Slider} from "@/components/ui/slider"
import {SliderNew} from "@/components/ui/slider-new"
import React, {useState} from "react";
import {ModeToggle} from "@/components/theme-toggle";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import "./radix-slider.css"
import {Button} from "@/components/ui/button";
import { CircleX, CircleCheck, SquareArrowOutUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  enum SliderOrientation {
    Horizontal = "horizontal",
    Vertical = "vertical",
  }

  const [mainSlider, setMainSlider] = useState([{
    "title": "Main Slider",
    "value": [0],
    "disabled": false,
    "min": 0,
    "max": 8,
    "step": 1,
    "inverted": true,
    "orientation": SliderOrientation.Vertical,
  }])
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
  const [disabledSliders, setDisabledSliders] = useState([
    {
      "title": "Before",
      "value": [2],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "title": "After",
      "value": [2],
      "disabled": true,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    }
  ])
  const [cursorSliders, setCursorSliders] = useState([
    {
      "title": "Before",
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "title": "After",
      "value": [2],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    }
  ])
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
  const [multipleValuesSliders, setMultipleValuesSliders] = useState([
    {
      "title": "Before",
      "value": [1, 4],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    },
    {
      "title": "After",
      "value": [1, 4],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
    }
  ])
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
  const [formLabelSliders, setFormLabelSliders] = useState([
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
      "title": "After",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
      "showSteps": 'full',
    },
  ])
  const [formLabelSideSliders, setFormLabelSideSliders] = useState([
    {
      "title": "Top",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
      "showSteps": 'full',
      "formatLabelSide": 'top'
    },
    {
      "title": "Bottom",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
      "showSteps": 'full',
      "formatLabelSide": 'bottom'
    },
    {
      "title": "Left",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
      "showSteps": 'full',
      "formatLabelSide": 'left'
    },
    {
      "title": "Right",
      "value": [1],
      "disabled": false,
      "min": 0,
      "max": 5,
      "step": 1,
      "inverted": false,
      "orientation": SliderOrientation.Horizontal,
      "showSteps": 'full',
      "formatLabelSide": 'right'
    },
  ])

  const setMainValue = (newValue: number[], index: number) => {
    const updatedArray = [...mainSlider];
    updatedArray[index].value = newValue;
    setMainSlider(updatedArray)
  };

  const setIntroductionValue = (newValue: number[], index: number) => {
    const updatedArray = [...introductionSliders];
    updatedArray[index].value = newValue;
    setIntroductionSliders(updatedArray)
  };

  const setCursorValue = (newValue: number[], index: number) => {
    const updatedArray = [...cursorSliders];
    updatedArray[index].value = newValue;
    setCursorSliders(updatedArray)
  };

  const setVerticalValue = (newValue: number[], index: number) => {
    const updatedArray = [...verticalSliders];
    updatedArray[index].value = newValue;
    setVerticalSliders(updatedArray)
  };

  const setMultipleValues = (newValue: number[], index: number) => {
    const updatedArray = [...multipleValuesSliders];
    updatedArray[index].value = newValue;
    setMultipleValuesSliders(updatedArray)
  };

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

  const setFormLabelsValue = (newValue: number[], index: number) => {
    const updatedArray = [...formLabelSliders];
    updatedArray[index].value = newValue;
    setFormLabelSliders(updatedArray)
  };

  const setFormLabelSideValue = (newValue: number[], index: number) => {
    const updatedArray = [...formLabelSideSliders];
    updatedArray[index].value = newValue;
    setFormLabelSideSliders(updatedArray)
  };

  return (
      <main className="flex min-h-screen flex-col items-center p-0 space-y-6">
        <div className="flex w-full h-dvh">
          <div className="flex flex-col w-[200px] justify-center items-center p-6 space-y-4">
            <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Better Sliders
            </h1>
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
            <div className={'flex flex-row space-x-2'}>
              <ModeToggle/>
              <a href="https://github.com/JoaoCupido/shadcnui-better-sliders" target="_blank">
                <Button variant="ghost" size={'icon'}>
                  <FaGithub className={'h-4 w-4'}/>
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 bg-secondary flex flex-col items-center justify-center p-8 space-y-2">
            {mainSlider[0].value[0] === 0 &&
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
            }
            {mainSlider[0].value[0] === 1 &&
                <>
                  <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    Disabled
                  </h1>
                  <p className="text-center text-xl text-muted-foreground">
                    Fixed disabled Slider component to have less opacity
                  </p>
                  {disabledSliders.map((disabledSlider, index) => {
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
                                      //onValueChange={(newValue) => setIntroductionValue(newValue, index)}
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
                                      //onValueChange={(newValue) => setIntroductionValue(newValue, index)}
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
            }
            {mainSlider[0].value[0] === 2 &&
                <>
                  <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    Cursor Pointer
                  </h1>
                  <p className="text-center text-xl text-muted-foreground">
                    Added cursor pointer event when hovering Slider component
                  </p>
                  {cursorSliders.map((disabledSlider, index) => {
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
                                      onValueChange={(newValue) => setCursorValue(newValue, index)}
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
                                      onValueChange={(newValue) => setCursorValue(newValue, index)}
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
            }
            {mainSlider[0].value[0] === 3 &&
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
            }
            {mainSlider[0].value[0] === 4 &&
                <>
                  <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    Range Slider
                  </h1>
                  <p className="text-center text-xl text-muted-foreground">
                    Added range slider support
                  </p>
                  {multipleValuesSliders.map((disabledSlider, index) => {
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
                                      onValueChange={(newValue) => setMultipleValues(newValue, index)}
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
                                      onValueChange={(newValue) => setMultipleValues(newValue, index)}
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
            }
            {mainSlider[0].value[0] === 5 &&
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
            }
            {mainSlider[0].value[0] === 6 &&
                <>
                  <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    NEW: Format Labels
                  </h1>
                  <p className="text-center text-xl text-muted-foreground">
                    Added format labels support when it gets focus
                  </p>
                  <code className="relative rounded bg-card px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    formatLabel?: (value: number) =&gt; string
                  </code>
                  {formLabelSliders.map((disabledSlider, index) => {
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
                                      onValueChange={(newValue) => setFormLabelsValue(newValue, index)}
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
                                      onValueChange={(newValue) => setFormLabelsValue(newValue, index)}
                                      max={disabledSlider.max}
                                      min={disabledSlider.min}
                                      step={disabledSlider.step}
                                      disabled={disabledSlider.disabled}
                                      inverted={disabledSlider.inverted}
                                      orientation={disabledSlider.orientation}
                                      formatLabel={(value) => value === 1 ? `${value} point` : `${value} points`}
                                      showSteps={disabledSlider.showSteps}
                                  />
                              }
                            </CardContent>
                          </Card>
                        </div>
                    );
                  })}
                </>
            }
            {mainSlider[0].value[0] === 7 &&
                <>
                  <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    NEW: Format Labels Side
                  </h1>
                  <p className="text-center text-xl text-muted-foreground">
                    Added format labels side positioning
                  </p>
                  <code className="text-center relative rounded bg-card px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    formatLabelSide?: string = &apos;top&apos; | &apos;right&apos; | &apos;bottom&apos; | &apos;left&apos; | undefined
                    <br/>
                    default: &apos;top&apos;
                  </code>
                  {formLabelSideSliders.map((disabledSlider, index) => {
                    return (
                        <div key={index} className="w-full flex-grow justify-items-stretch flex space-x-2">
                          <Card className={'flex-grow'}>
                            <CardContent className={'flex flex-col items-center justify-center py-6 space-y-4 h-full'}>
                              <div className="flex flex-row text-lg font-semibold items-center">
                                <CircleCheck className={'h-5 w-5 mr-2'}/>
                                {disabledSlider.title}
                              </div>
                              <SliderNew
                                  value={disabledSlider.value}
                                  onValueChange={(newValue) => setFormLabelSideValue(newValue, index)}
                                  max={disabledSlider.max}
                                  min={disabledSlider.min}
                                  step={disabledSlider.step}
                                  disabled={disabledSlider.disabled}
                                  inverted={disabledSlider.inverted}
                                  orientation={disabledSlider.orientation}
                                  formatLabel={(value) => value === 1 ? `${value} point` : `${value} points`}
                                  showSteps={disabledSlider.showSteps}
                                  formatLabelSide={disabledSlider.formatLabelSide}
                              />
                            </CardContent>
                          </Card>
                          <Card className={'flex-grow'}>
                            <CardContent className={'flex flex-row items-center justify-center py-6 space-x-8 h-full'}>
                              <div className="flex flex-row text-lg font-semibold items-center">
                                <CircleCheck className={'h-5 w-5 mr-2'}/>
                                {disabledSlider.title}
                              </div>
                              <SliderNew
                                  value={disabledSlider.value}
                                  onValueChange={(newValue) => setFormLabelSideValue(newValue, index)}
                                  max={disabledSlider.max}
                                  min={disabledSlider.min}
                                  step={disabledSlider.step}
                                  disabled={disabledSlider.disabled}
                                  inverted={disabledSlider.inverted}
                                  orientation={'vertical'}
                                  formatLabel={(value) => value === 1 ? `${value} point` : `${value} points`}
                                  showSteps={disabledSlider.showSteps}
                                  formatLabelSide={disabledSlider.formatLabelSide}
                              />
                            </CardContent>
                          </Card>
                        </div>
                    );
                  })}
                </>
            }
            {mainSlider[0].value[0] === mainSlider[0].max &&
                <>
                  <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
                    Thank you!
                  </h1>
                  <div className="flex flex-col w-full flex-grow justify-items-stretch space-x-4 py-8">
                    <p className="text-xl text-muted-foreground">
                      Helpful Links:
                    </p>
                    <ul className="my-6 list-disc [&>li]:mt-2">
                      <li>
                        <a href="https://www.radix-ui.com/primitives/docs/components/slider" target="_blank">
                          <Button variant="link">https://www.radix-ui.com/primitives/docs/components/slider</Button>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/shadcn-ui/ui/issues/885" target="_blank">
                          <Button variant="link">https://github.com/shadcn-ui/ui/issues/885</Button>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/shadcn-ui/ui/pull/1448" target="_blank">
                          <Button variant="link">https://github.com/shadcn-ui/ui/issues/1448</Button>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/shadcn-ui/ui/pull/1449" target="_blank">
                          <Button variant="link">https://github.com/shadcn-ui/ui/pull/1449</Button>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/shadcn-ui/ui/pull/1965" target="_blank">
                          <Button variant="link">https://github.com/shadcn-ui/ui/pull/1965</Button>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/shadcn-ui/ui/pull/2586" target="_blank">
                          <Button variant="link">https://github.com/shadcn-ui/ui/pull/2586</Button>
                        </a>
                      </li>
                    </ul>

                    <a href="https://github.com/JoaoCupido/shadcnui-better-sliders/blob/master/components/ui/slider-new.tsx" target="_blank">
                      <Button variant="default">
                        View New Slider Component (TailwindCSS + Typescript)
                        <SquareArrowOutUpRight className={'ml-2 h-4 w-4'}/>
                      </Button>
                    </a>
                  </div>
                </>
            }
          </div>
        </div>
      </main>
  );

}
