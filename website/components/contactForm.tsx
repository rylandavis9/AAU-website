/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oYvRX9AiaKF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <div className="w-full max-w-2xl space-y-8 p-6 text-lime-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-lime-500">Contact Us</h1>
        <p className="text-lime-500 ">Please fill in the form below to get in touch.</p>
      </div>
      <div className="space-y-4 text-lime-500">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-lime-500 ">Name</Label>
          <Input className="placeholder:text-lime-200 bg-zinc-800" id="name" placeholder="Enter your name" required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lime-500 ">Email</Label>
          <Input className="placeholder:text-lime-200 bg-zinc-800 " id="email" placeholder="Enter your email" type="email" required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-lime-500 ">Message</Label>
          <Textarea  id="message" placeholder="Enter your message" className="placeholder:text-lime-200 bg-zinc-800 min-h-[100px]" required />
        </div>
        <Button type="submit" className={buttonVariants({ variant: "ghost2" })}>Submit</Button>
      </div>
    </div>
  )
}