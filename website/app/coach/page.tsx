import { Button } from "@/components/ui/button"
import  Navbar  from "@/components/navbar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Coach() {
  return (
      <main className="items-center">
       <Navbar>
        </Navbar>
        <div className="flex items-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYKwHpFYr9OSEailMObZ65X1tyAupuyiYMh7_jP5s-G6RW5g/viewform?embedded=true" className="w-screen h-lvh">Loading…</iframe>
        </div>
      </main>
    
  );
}
