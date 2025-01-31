'use client'

import React from "react";
import "@/app/radix-slider.css"
import {Button} from "@/components/ui/button";
import { CircleX, CircleCheck, SquareArrowOutUpRight } from 'lucide-react';

export default function Home() {
  return (
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
  );

}
