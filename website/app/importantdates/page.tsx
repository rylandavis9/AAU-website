
import  Navbar  from "@/components/navbar"

export default function ImportantDates() {
  return (
      <main className="flex align-middle flex-col text-lime-500">
       <Navbar>
        </Navbar>
        <h1 className="m-2 text-pretty text-4xl self-center font-bold"> <br></br>Important Dates<br></br> </h1>
        <p className="m-2 text-pretty text-lg font-bold">
        <a href="/home" >Monday, March 10th 5:30pm (2025 Parent Meeting)<br></br><br></br></a>
        <a href="/calendar" >Saturday, April 26th Girard Meet<br></br><br></br></a>
        <a href="/calendar" >Saturday, May 3rd Neosho Meet<br></br><br></br></a>
        <a>Monday, May 19th Team Pictures <a href="" target="_blank" className="underline">Picture Order Form</a> <br></br><br></br></a>
        <a href="/calendar" >Districts TBA<br></br><br></br></a>
        <a href="/calendar" >Regionals TBA @ Springfield, Mo<br></br><br></br></a>
        </p>
      </main>
    
  );
}
