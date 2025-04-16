'use client';
import  Navbar  from "@/components/navbar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  async function handleSubmit(event) {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;

      const formData = {
          access_key: "4fc73e2b-37b6-4e3f-be79-172dc36e95aa",
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      };

      try {
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
              },
              body: JSON.stringify(formData),
          });

          const result = await response.json();

          if (result.success) {
              toast.success("Form submitted successfully!");
              form.reset();
          } else {
              toast.error("Failed to submit the form.");
          }
      } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("An error occurred. Please try again.");
      }
  }


return (
  <>
    <Navbar>
    </Navbar>
      <form onSubmit={handleSubmit} className="flex flex-col items-center max-xl:pt-[23%]">
        <div className="w-full max-w-2xl space-y-8 p-6 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold ">Contact Us</h1>
          <p className=" ">Please fill in the form below to get in touch.</p>
        </div>
        <div className="space-y-4 ">
          <div className="space-y-2">
            <Label htmlFor="name" className=" ">Name:</Label>
            <Input className="placeholder:text-[#0A0F00] bg-[#7f7979]" id="name" name="name" placeholder="Enter your name" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className=" ">Email:</Label>
            <Input className="placeholder:text-[#0A0F00] bg-[#7f7979] " id="email" name="email" placeholder="Enter your email" type="email" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className=" ">Message:</Label>
            <Textarea  id="message" placeholder="Enter your message" name="message"  className="placeholder:text-[#0A0F00] bg-[#7f7979] min-h-[100px]" required />
          </div>
          <Button type="submit" className={buttonVariants({ variant: "ghost2" })}>Submit</Button>
        </div>
        </div>
      </form>
      <ToastContainer />
  </>
);
}