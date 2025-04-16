
import  Navbar  from "@/components/navbar"
import  Bottombar  from "@/components/bottombar"
import SvgComponent from "@/components/icon";


export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col max-xl:pt-[23%]">
      <Navbar>
      </Navbar>
      <div className="w-screen min-h-screen 3divide-y-4 divide-foreground ">
        <div className="flex self-stretch flex-1 items-center place-content-center">
          <SvgComponent className="flex max-xl:hidden grow shrink px-[5%] py-[10%] h-full w-full "></SvgComponent>
        </div>
        <div className="flex m-auto self-stretch flex-1 flex-wrap flex-col lg:flex-row sm:flex-row md:flex-row">
          <div className="flex-1 flex flex-wrap justify-items-start border-solid border-foreground border-y-4 border-2">
            <div className="m-2 flex flex-col place-content-center">
              <p className="m-2 text-pretty text-lg font-bold">Welcome to SWMO Track Club!<br></br></p>
              <p className="m-2 text-pretty text-lg">We’re thrilled to kick off the inaugural season of SWMO Track Club, 
                a competitive AAU Track and Field club dedicated to developing athletes of all skill levels. Whether you're sprinting towards personal bests, 
                aiming for the podium, or just discovering your passion for the sport, this is the place for you!
                <br></br>
                <br></br>
                Our mission is to include athletes from all southwest Missouri schools. We aim to foster a supportive, disciplined, 
                and high-energy environment where athletes can grow, compete, and achieve their goals— on and off the track. 
                Our experienced coaching staff will offer training at a variety of levels, and emphasize the team aspect of track & field. 
                We’re here to help you learn and grow in your track and field experience. 
              </p>
              <a id="pm"></a>
              <p className="m-2 text-pretty text-lg font-bold"><br></br>2025 Parent Meeting!<br></br></p>
              <p className="m-2 text-pretty text-lg">Monday, March 24th<br></br>5:30pm<br></br>Park in the WCHS pool parking lot
                <br></br>Meet in Cardinal Theatre<br></br>
              </p>
              <a href="https://calendar.google.com/calendar/u/0?cid=Y18yMmVhZTQ1MzRlZDZkNmQ2ZDVmODU2ODVhNmU2NGJmMWY5OGIwYzhmMjY1MDZhOGQ2MjkzMGQxNzYyNDhmZmIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank" className="underline">Get the sharable calendar link here!</a>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap align-center border-solid border-foreground border-y-4 border-2">
          <h2 className=" text-xl m-3 font-extrabold " >Follow the instructions to get registered</h2>
                <ol className="ml-5 text-lg list-decimal">
                    <li className="ml-5 text-lg list-decimal">Join AAU- <a href="https://aausports.org" target="_blank" className="underline">aausports.org</a>. This supplies us with the insurance we need to be able to offer this program.</li>
                    <ul className="ml-5 text-lg list-disc">
                      <li className="ml-5 text-lg list-disc">Create an account</li>
                      <li className="ml-5 text-lg list-disc">Register for a membership</li>
                      <ul className="ml-10 text-lg list-disc">
                        <li>Youth Membership Application</li>
                        <li>Track and Field (X-Country, Multi-Events)</li>
                        <li>Extended Coverage if you plan on competing in the Neosho or Girard meets.</li>
                        <li>Choose 1 year or 2 year membership ($22 or $44 per athlete)</li>
                        <li>Choose your club: SWMO Track Club - W4TTA4</li>
                      </ul>
                    </ul>
                    <li className="ml-5 text-lg list-decimal">Register for the SWMO Track Club</li>
                    <ul className="ml-5 text-lg list-disc">
                      <li className="ml-5 text-lg list-disc">$75 Club fee joining in March or April.</li>
                      <li className="ml-5 text-lg list-disc">$50 Club fee joining in May or June.</li>
                      <li className="ml-5 text-lg list-disc">This pays for our equipment, club fees, and other miscellaneous expenses.</li>
                    </ul>
                    <li className="ml-5 text-lg list-decimal">Download the Band app</li>
                    <ul className="ml-5 text-lg list-disc">
                      <li className="ml-5 text-lg list-disc">Join the SWMO Track Club 25</li>
                      <li className="ml-5 text-lg list-disc">This will be our primary way of making announcements with a large group.</li>
                      <ul className="ml-10 text-lg list-disc">
                        <li>Ex: Practice cancellation, meet information, meet entry deadlines, etc.</li>
                      </ul>
                    </ul>
                    <li className="ml-5 text-lg list-decimal">Uniform Store</li>
                    <ul className="ml-5 text-lg list-disc">
                      <li className="ml-5 text-lg list-disc"><a href="https://swmotrackclub.itemorder.com/shop/sale/" target="_blank" className="underline">Link</a></li>
                    </ul>    
                </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
