import CalendarPage from "@/components/ui/calendar";
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
        <Calendar {...calendarProps} />
      </main>
  
  );
}
