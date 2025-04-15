
import  Navbar  from "@/components/navbar"

export default function ImportantDates() {
  return (
      <main className="flex align-middle flex-col">
        <Navbar>
        </Navbar>
          <h1 className="m-2 text-pretty text-4xl self-center font-bold"> <br></br>Important Dates<br></br> </h1>
          <p className="m-2 text-pretty text-lg font-bold">
            <a href="/" >Monday, March 24th 5:30pm (2025 Parent Meeting)<br></br><br></br></a>
            <a href="/calendar" >Saturday, April 26th Girard Meet<br></br><br></br></a>
            <a href="/calendar" >Saturday, May 3rd Neosho Meet<br></br><br></br></a>
            <a>Monday, May 19th Team Pictures <a href="https://www.canva.com/design/DAGeV0mKrG4/Fft2ZSL1_CLZNX3hVx7xHg/view?utm_content=DAGeV0mKrG4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd9249e7883" target="_blank" className="underline">Picture Order Form</a> <br></br><br></br></a>
            <a href="/calendar" >Districts TBA<br></br><br></br></a>
            <a href="/calendar" >Regionals TBA @ Springfield, Mo<br></br><br></br></a>
          </p>
      </main>
    
  );
}
