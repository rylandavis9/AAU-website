import { Button } from "@/components/ui/button"
import  Navbar  from "@/components/navbar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Register() {
  return (
      <main className="items-center">
       <Navbar>
        </Navbar>
        <div className="flex items-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefY_jR7funQ752alP5MfRGj5iPbDcb80SHQ7BAo_mlTZ88LA/viewform?embedded=true" className="w-screen h-lvh">Loading…</iframe>
        </div>
      </main>
    
  );
}
