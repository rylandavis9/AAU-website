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
      <div className="w-screen min-h-screen divide-y-4 divide-zinc-500">
        <Navbar>
        </Navbar>
        <div className="flex self-stretch flex-1 items-center place-content-center">
          <iframe  className="flex max-w-[100vw] h-[60vh] aspect-video m-20 justify-center align-center" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=RoBg018ppdhJsHp2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="flex m-auto self-stretch flex-1 flex-wrap flex-col lg:flex-row sm:flex-row md:flex-row">
          <div className="flex-1 flex flex-wrap align-center border-solid border-zinc-500 border-2">
            <strong className="m-2 flex w-full place-content-center text-lg">The following must be payed before athletes can practice:</strong>
            <strong className="m-2 flex w-full place-content-center text-lg">Fee: ashjdfhashdfhasdhfdsaf</strong>
            <strong className="m-2 flex w-full place-content-center text-lg">Fee: asdfasdfdsafasfasdf </strong>
            <strong className="m-2 flex w-full place-content-center text-lg">Fee: asdfassdfasdfsadf </strong>
          </div>
          <div className="flex-1 flex flex-wrap place-content-center border-solid border-zinc-500 border-2">
            <div className="m-2 flex place-content-center">
              <strong className="m-2 text-pretty text-lg">Communication Info:</strong>
            </div>
            <div className="m-2 flex place-content-center">
              <p className="m-2 text-pretty text-lg">We use the BAND app as our clubs form of communication.  It is a one stop spot for club information, such as updates on practices, calendar of events, photo sharing, and even the capability of doing some live streaming. There are two different levels of involvement with Band.  Option one is downloading the Band app to your smart phone, creating an account, and then joining the Girard Warriors Youth Track Club group.  You can also do this from your desktop computer by accessing Band's website.  Option two simply requires you provide us with a cell phone number, an email, or both.</p>
            </div>
          </div>
        </div>
          <Bottombar>
          </Bottombar>
      </div>
    </main>
  );
}
