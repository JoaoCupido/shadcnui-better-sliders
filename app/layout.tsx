import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import {cn} from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/theme-toggle";
import {Button} from "@/components/ui/button";
import {FaGithub} from "react-icons/fa";
import React from "react";
import MainSlider from "@/components/main-slider";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Better Sliders",
    description: "Enhanced sliders with ShadCN UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <main className="flex min-h-screen flex-col items-center p-0 space-y-6">
                <div className="flex w-full h-dvh">
                    <div className="flex-col w-[200px] justify-center items-center p-6 space-y-4 md:flex hidden">
                        <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Better Sliders
                        </h1>
                        <MainSlider />
                        <div className={'flex flex-row space-x-2'}>
                            <ModeToggle/>
                            <a href="https://github.com/JoaoCupido/shadcnui-better-sliders" target="_blank">
                                <Button variant="ghost" size={'icon'}>
                                    <FaGithub className={'h-4 w-4'}/>
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 bg-secondary flex flex-col items-center justify-center p-8 space-y-2 relative">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className={"md:hidden absolute top-2 left-2"} size={'icon'}>
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className={"flex flex-col w-[250px] justify-center items-center"} side={"left"}>
                                <SheetHeader>
                                    <SheetTitle>Better Sliders</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col justify-center items-center p-6 space-y-4 h-full">
                                    <MainSlider/>
                                    <div className={'flex flex-row space-x-2'}>
                                        <ModeToggle/>
                                        <a href="https://github.com/JoaoCupido/shadcnui-better-sliders" target="_blank">
                                            <Button variant="ghost" size={'icon'}>
                                                <FaGithub className={'h-4 w-4'}/>
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                        {children}
                    </div>
                </div>
            </main>
        </ThemeProvider>
        </body>
    </html>
  );
}
