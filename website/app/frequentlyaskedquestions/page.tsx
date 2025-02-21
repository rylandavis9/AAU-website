
import  Navbar  from "@/components/navbar"


export default function Faq() {
  return (
      <main className="flex flex-col text-lime-500">
       <Navbar>
        </Navbar>
        <div className="ml-10" >
          <h1 className="w-full text-center text-4xl font-extrabold " >FAQ</h1>
              <h2 className="ml-5 text-xl font-extrabold " ><br></br>1. When can my child get started?</h2>
                <ul className="ml-10 text-lg list-disc">
                    <li className="ml-10 text-lg list-disc">2025 season will run from Monday, March 31st through Saturday, June 28th or until you are finished competing. This gives us 8 potential practices before the first meet and goes through regionals. </li>
                    <li className="ml-10 text-lg list-disc">K-6th 3/31/25</li>
                    <li className="ml-10 text-lg list-disc">JH & HS can join after their seasons end</li>    
                </ul>
              <h2 className="ml-5 text-xl font-extrabold " ><br></br>2. What is the required commitment?</h2>
                <ul className="ml-10 text-lg list-disc">
                    <li className="ml-10 text-lg list-disc">The commitment you have to the team is completely up to you as a family.</li>
                    <li className="ml-10 text-lg list-disc">No one is required to be at practice and no one is required to attend meets. While meets are good for the athletes, we totally understand that some families have other commitments.  </li>
                    <ul className="ml-10 text-lg list-disc">
                      <li className="ml-10 text-lg list-disc">Requirements</li>
                      <ul className="ml-20 text-lg list-disc">
                        <li>AAU membership for each athlete (provides liability insurance)</li>
                        <li>Athlete registration form filled out for each athlete</li>
                        <li>SWMO Track Club fee $75</li>
                      </ul>
                    </ul>    
                </ul>
              <h2 className="ml-5 text-xl font-extrabold " ><br></br>3. What is the cost breakdown</h2>
                <ul className="ml-10 text-lg list-disc">
                    <li className="ml-10 text-lg list-disc">AAU membership $22</li>
                    <li className="ml-10 text-lg list-disc">SWMO Track Club fee $75</li>
                    <li className="ml-10 text-lg list-disc">Meets entry fees as of 2024</li>
                    <ul className="ml-20 text-lg list-disc">
                      <li>Girard $25</li>
                      <li>Neosho $25</li>
                      <li>AAU districts $50</li>
                      <li>AAU regionals (if you qualify) $50</li>
                    </ul>    
                </ul>
              <h2 className="ml-5 text-xl font-extrabold " ><br></br>4. What events can my athlete compete in?</h2>
                <ul className="ml-10 text-lg list-disc">
                    <li className="ml-10 text-lg list-disc">AAU offers a variety of events per age group (listed on the AAU rules tab)</li>
                    <li className="ml-10 text-lg list-disc">SWMO Track Club will only coach the events that we can safely cover. This will depend on how many parent volunteer coaches sign up.  </li>
                </ul>
                
              </div>
              <h1><br></br><br></br><br></br><br></br><br></br></h1>
      </main>
    
  );
}
