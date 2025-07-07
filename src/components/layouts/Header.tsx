"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ToggleIcon } from "../ui/icon";

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
            className="max-w-[170px] lg:max-w-[200px] w-full h-auto"
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
                <ToggleIcon />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="px-4 py-6 border-none w-full sm:w-[282px] bg-[url('/assets/home/mobile-menu-bg.png')] bg-cover bg-no-repeat"
            >
              <SheetHeader className="z-20">
                <SheetTitle className="flex justify-center">
                  <Link href="/">
                    <Image src="/logo.png" width={200} height={56} alt="logo" />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                {mainMenu.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={() => {
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
          <Link href="/account/signin">
            <Button
              variant="login"
              className="login-button !bg-transparent hover:!bg-transparent"
            >
              Login
            </Button>
          </Link>
          <Link href="/account/signup">
            <Button
              variant="login"
              className="text-[#000] bg-[#fff] hover:bg-[#fff]"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
