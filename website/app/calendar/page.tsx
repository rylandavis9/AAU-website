

import  Navbar  from "@/components/navbar"


export default function Calendar() {
  return (
      <main className="flex flex-col">
        <Navbar>
        </Navbar>
        <div className="flex place-content-center">
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=Y18yMmVhZTQ1MzRlZDZkNmQ2ZDVmODU2ODVhNmU2NGJmMWY5OGIwYzhmMjY1MDZhOGQ2MjkzMGQxNzYyNDhmZmIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%2333B679" className="flex  w-full h-screen p-12"></iframe>
        </div>
      </main>
  
  );
}
