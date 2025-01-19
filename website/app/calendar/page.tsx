import { Button } from "@/components/ui/button"
import  Navbar  from "@/components/navbar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Calendar() {
  return (
      <main>
        <Navbar>
        </Navbar>
        <iframe className="flex  w-full h-screen p-16"  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&src=ZGU4YmNkYjgwZWE1MDhkMTk4NWJkNTAzNjY1YjYyZWUzNzg1NDAzMjg5YWQ1ZGRkNTc2NDkzZTRmMzU5OGUwN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E" ></iframe>
      </main>
    
  );
}
