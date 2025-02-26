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
          access_key: "d83481dc-7b52-481b-93eb-658c364426ca",
          name: event.target.name.value,
          email: form.email.value,
          message: form.message.value,
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
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full max-w-2xl space-y-8 p-6 text-lime-500">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-lime-500">Contact Us</h1>
          <p className="text-lime-500 ">Please fill in the form below to get in touch.</p>
        </div>
        <div className="space-y-4 text-lime-500">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lime-500 ">Name:</Label>
            <Input className="placeholder:text-lime-200 bg-zinc-800" id="name" placeholder="Enter your name" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lime-500 ">Email:</Label>
            <Input className="placeholder:text-lime-200 bg-zinc-800 " id="email" placeholder="Enter your email" type="email" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-lime-500 ">Message:</Label>
            <Textarea  id="message" placeholder="Enter your message" className="placeholder:text-lime-200 bg-zinc-800 min-h-[100px]" required />
          </div>
          <Button type="submit" className={buttonVariants({ variant: "ghost2" })}>Submit</Button>
        </div>
        </div>
      </form>
      <ToastContainer />
  </>
);
}