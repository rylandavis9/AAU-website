import { Button } from "@/components/ui/button"
import  Navbar  from "@/components/navbar"
import ContactForm from "@/components/contactForm"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Contact() {
  return (
      <main>
       <Navbar>
        </Navbar>
        <div className="flex justify-center">
          <ContactForm >

          </ContactForm>
        </div>
      </main>
    
  );
}
