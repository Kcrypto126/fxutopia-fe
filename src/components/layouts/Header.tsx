"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const mainMenu: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Marketplace",
    link: "/marketplace",
  },
  {
    title: "Signals",
    link: "/signals",
  },
  {
    title: "Education",
    link: "/education",
  },
  {
    title: "Community",
    link: "/community",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Header = () => {
  return (
    <div className="w-full h-[64px] lg:h-[112px] fixed left-0 top-0 flex items-center z-50 px-3 bg-[#00000040] backdrop-blur-sm">
      <div className="max-w-[1440px] w-full m-auto flex gap-2 items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={56}
            alt="logo"
            className="max-w-[170px] lg:max-w-[200px]"
          />
        </Link>
        <NavigationMenu viewport={false} className="hidden lg:block">
          <NavigationMenuList>
            {mainMenu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink href={item.link}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="!p-0 !w-8 !h-8 cursor-pointer"
              >
                <Image
                  src="/assets/icon/toggle.svg"
                  width={16}
                  height={16}
                  alt="toggle"
                />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="px-4 py-6 border-none w-full sm:w-[282px] bg-[url('/assets/home/mobile-menu-bg.png')] bg-cover bg-no-repeat"
            >
              <SheetHeader className="z-20">
                <SheetTitle className="flex justify-center">
                  <Image src="/logo.png" width={200} height={56} alt="logo" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                {mainMenu.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      //   e.preventDefault;
                      const sheetClose = document.querySelector(
                        '[data-slot="sheet-close"]'
                      ) as HTMLButtonElement;
                      if (sheetClose) {
                        sheetClose.click();
                      }
                    }}
                    className="py-2 px-4 flex items-center gap-4 rounded-[8px] hover:bg-gradient-to-b from-[#9387E3] to-[#6C5DD3] transition-all duration-200 hover:scale-105"
                  >
                    {/* {item.icon} */}
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex gap-3 justify-end items-center py-1">
          <Button variant="login" className="login-button">
            Login
          </Button>
          <Button variant="signup">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
