import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { ReactNode } from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import SvgComponent from "./icon";
interface Props {
  children?: ReactNode
  // any props that come into the component
}

  const Navbar = ({children, ...props}: Props) => {
    return (
      <main>
        <div className="hidden fixed top-0 max-xl:flex grow shrink bg-white/80 backdrop-blur-md items-center justify-center shadow-md border-solid border-[#1d252b] border-y-4 text-[#88c65a] space box-content w-screen h-1/5 min-h-14 max-h-20">
          <div className="flex-1"></div>
          <div className="">
            <div className="m-2"><SvgComponent className="h-12 w-auto max-w-screen px-2"></SvgComponent></div>
          </div>
          <Drawer>
            <DrawerTrigger className="font-bold ml-auto flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-[#88c65a] stroke-[#88c65a]" viewBox="0 0 24 24" ><path d="M4 18L20 18" stroke="#51cb20" stroke-width="2" stroke-linecap="round"/><path d="M4 12L20 12" stroke="#51cb20" stroke-width="2" stroke-linecap="round"/><path d="M4 6L20 6" stroke="#51cb20" stroke-width="2" stroke-linecap="round"/></svg>
            </DrawerTrigger>
            <DrawerContent className="bg-white/70 backdrop-blur-sm items-center">
              <div className="grow shrink"><Link href="/" className={buttonVariants({ variant: "ghost2" })}>Home</Link></div>
              <div className="grow shrink"><Link href="/calendar" className={buttonVariants({ variant: "ghost2" })}>Calendar</Link></div>
              <div className="grow shrink"><Link href="/importantdates" className={buttonVariants({ variant: "ghost2" })}>Important Dates</Link></div>
              <div className="grow shrink"><Link href="/rules" className={buttonVariants({ variant: "ghost2" })}>AAU Rules</Link></div>
              <div className="grow shrink"><Link href="/register" className={buttonVariants({ variant: "ghost2" })}>Athlete Registration</Link></div>
              <div className="grow shrink"><Link href="/coach" className={buttonVariants({ variant: "ghost2" })}>Volunteer Coach Form</Link></div>
              <div className="grow shrink"><Link href="/frequentlyaskedquestions" className={buttonVariants({ variant: "ghost2" })}>FAQ</Link></div>
              <div className="grow shrink"><Link href="/meetthecoaches" className={buttonVariants({ variant: "ghost2" })}>Meet The Coaches</Link></div>
              <div className="grow shrink"><Link href="/contact" className={buttonVariants({ variant: "ghost2" })}>Contact Us</Link></div>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="max-xl:hidden">
          <div className=" fixed top-0 grid grid-cols-9  bg-white/80 backdrop-blur-md shadow-md border-solid border-[#1d252b] border-y-4 text-[#51cb20] items-center place-content-center box-content w-screen h-1/5 min-h-14 max-h-20">
            <div className="items-center flex justify-center text-center "><SvgComponent className="h-12 w-auto max-w-full px-2"></SvgComponent></div>
            <div className="items-center justify-center text-center "><Link href="/" className={buttonVariants({ variant: "ghost" })}>Home</Link></div>
            <div className="items-center justify-center text-center "><Link href="/calendar" className={buttonVariants({ variant: "ghost" })}>Calendar</Link></div>
            <div className="items-center justify-center text-center "><Link href="/importantdates" className={buttonVariants({ variant: "ghost" })}>Important Dates</Link></div>
            <div className="items-center justify-center text-center ">
              <DropdownMenu>
                <DropdownMenuTrigger className="font-bold">Register</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/80 backdrop-blur-md shadow-md">
                  <DropdownMenuItem className="transparent"><Link href="/register">Athlete Registration</Link></DropdownMenuItem>
                  <DropdownMenuItem className="transparent"><Link href="/coach">Volunteer Coach Form</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="items-center justify-center text-center "><Link href="/rules" className={buttonVariants({ variant: "ghost" })}>AAU Rules</Link></div>
            <div className="items-center justify-center text-center "><Link href="/frequentlyaskedquestions" className={buttonVariants({ variant: "ghost" })}>FAQ</Link></div>
            <div className="items-center justify-center text-center "><Link href="/meetthecoaches" className={buttonVariants({ variant: "ghost" })}>Meet The Coaches</Link></div>
            <div className="items-center justify-center text-center "><Link href="/contact" className={buttonVariants({ variant: "ghost" })}>Contact Us</Link></div>
          </div>  
        </div>
      </main>     
    );
  };
  
  export default Navbar;
