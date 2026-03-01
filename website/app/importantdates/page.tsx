
import  Navbar  from "@/components/navbar"

export default function ImportantDates() {
  return (
      <main className="flex align-middle flex-col pt-24">
        <Navbar>
        </Navbar>
          <h1 className="m-2 text-pretty text-4xl self-center font-bold"> <br></br>Important Dates<br></br> </h1>
          <p className="m-2 text-pretty text-lg font-bold">
            <a href="/" >Monday, March 23rd 5:30pm (2026 Parent Meeting)<br></br><br></br></a>
            <a href="/calendar" >Saturday, April 18th Girard Meet<br></br><br></br></a>
            <a href="/calendar" >Saturday, May 2nd Neosho Meet<br></br><br></br></a>
            <a>Monday, May 18th Team Pictures <a href="https://www.canva.com/design/DAGeV0mKrG4/Fft2ZSL1_CLZNX3hVx7xHg/view?utm_content=DAGeV0mKrG4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd9249e7883" target="_blank" className="underline">Picture Order Form</a> <br></br><br></br></a>
              <a href="/calendar" >Districts 28 Missouri Qualifying Meets (you can only attend one)
                  <br></br>
                    <p className="m-2 text-pretty text-md font-bold">June 6th Topeka<br></br>June 12-13th Ray Pec</p>
                  <br></br>
              </a>
            <a href="/calendar" >Region 16 Qualifier<br></br>
                <br></br>
                    <p className="m-2 text-pretty text-md font-bold">June 23-26th Oklahoma City</p>
                <br></br>
            </a>
          </p>
      </main>
    
  );
}
