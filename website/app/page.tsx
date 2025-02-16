import { DropdownMenu, 
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import  Navbar  from "@/components/navbar"
import  Bottombar  from "@/components/bottombar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-screen min-h-screen divide-y-4 divide-lime-500 text-lime-500">
        <Navbar>
        </Navbar>
        <div className="flex self-stretch flex-1 items-center place-content-center">
          <iframe  className="flex max-w-[100vw] h-[60vh] aspect-video m-20 justify-center align-center" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=RoBg018ppdhJsHp2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="flex m-auto self-stretch flex-1 flex-wrap flex-col lg:flex-row sm:flex-row md:flex-row">
          <div className="flex-1 flex flex-wrap align-center border-solid border-lime-500 border-2">
            <strong className="m-2 flex w-full place-content-center text-lg">The following must be payed before athletes can practice:</strong>
            <strong className="m-2 flex w-full place-content-center text-lg">Fee: Lorem ipsum dolor sit amet</strong>
            <strong className="m-2 flex w-full place-content-center text-lg">Fee: Lorem ipsum dolor sit amet</strong>
            <strong className="m-2 flex w-full place-content-center text-lg">Fee: Lorem ipsum dolor sit amet</strong>
          </div>
          <div className="flex-1 flex flex-wrap place-content-center border-solid border-lime-500 border-2">
            <div className="m-2 flex place-content-center">
              <strong className="m-2 text-pretty text-lg">Communication Info:</strong>
            </div>
            <div className="m-2 flex place-content-center">
              <p className="m-2 text-pretty text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
          <Bottombar>
          </Bottombar>
      </div>
    </main>
  );
}
