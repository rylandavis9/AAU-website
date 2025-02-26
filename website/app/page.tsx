
import  Navbar  from "@/components/navbar"
import  Bottombar  from "@/components/bottombar"


export default function Home() {
  return (
    <main className="w-screen flex flex-col">
      <div className="w-screen min-h-screen divide-y-4 divide-lime-500 text-lime-500">
        <Navbar>
        </Navbar>
        <div className="flex flex-col self-stretch flex-1 items-center place-content-center">
          <div>
            <h1 className="m-2 text-pretty text-4xl self-center font-bold"> <br></br>SWMO Track Club<br></br> </h1>
          </div>
          <div className="grow shrink"><svg xmlns="http://www.w3.org/2000/svg" className="px-[10%] py-[10%] min-h-10 min-w-10 max-h-128 aspect-video fill-lime-500" viewBox="0 0 247.872 205.466"><path d="M47.076 204.886c-13.365-2.58-33.305-9.922-40.228-14.81-6.737-4.756-8.432-9.752-5.399-15.919 2.448-4.974 6.815-6.748 15.56-6.32 17.854.877 19.622.714 23.462-2.16 1.989-1.488 11.062-9.719 20.163-18.29 9.101-8.573 19.383-17.814 22.849-20.536 3.465-2.723 7.596-6.893 9.18-9.266l2.88-4.316-4.094-9.557c-3.517-8.21-4.092-10.579-4.082-16.812.022-13.412 3.19-21.818 11.009-29.207 6.815-6.442 16.145-10.312 36.211-15.02 26.038-6.11 34.045-8.694 41.705-13.46 10.07-6.267 25.277-17.24 31.264-22.56 8.91-7.92 14.03-8.736 16.438-2.624 1.604 4.07.693 8.035-3.544 15.43-1.902 3.32-3.443 6.336-3.424 6.702.018.365.948 1.82 2.067 3.233 2.03 2.564 2.04 2.565 5.243.608 1.764-1.079 5.064-3.543 7.333-5.476 5.922-5.045 9.83-6.292 12.96-4.136 4.77 3.285 4.28 9.434-1.479 18.55-2.934 4.645-2.951 4.755-1.084 6.867 2.315 2.62 3.501 8.742 2.563 13.234-.383 1.831-2.067 4.972-3.744 6.98-2.974 3.56-3.003 3.7-1.21 5.784 2.68 3.113 2.326 8.526-.843 12.894-3.563 4.91-11.226 10.7-16.815 12.706-3.738 1.34-4.475 2.035-4.252 4.001.652 5.727-1.76 9.425-10.755 16.49-.24.188.1.905.754 1.592 3.68 3.869-.583 11.339-7.76 13.6-2.784.876-3.997 2.067-5.252 5.155-3.153 7.762-15.385 12.87-26.209 10.943-3.476-.62-6.39-1.07-6.475-1-.085.068-.606 4.07-1.157 8.894-1.311 11.476-4.152 16.205-12.077 20.11-5.399 2.661-6.57 2.818-21.844 2.913l-16.14.1-6.974 3.879c-3.836 2.133-10.14 6.251-14.009 9.152-12.354 9.263-18.144 11.7-28.857 12.15-5.132.215-11.402-.008-13.934-.498zm18.04-6.448c7.552-1.289 11.398-3.218 21.408-10.738 4.088-3.072 9.114-6.525 11.167-7.674 3.466-1.94 3.733-2.43 3.727-6.867-.008-6.71-1.536-11.745-5.356-17.646-3.487-5.386-14.518-14.07-17.874-14.07-1.088 0-8.94 6.56-17.747 14.823-8.688 8.153-17.605 15.74-19.816 16.86-4.675 2.368-7.419 2.566-21.237 1.527-10.181-.765-10.183-.765-11.88 1.957-1.32 2.117-1.452 3.201-.6 4.877 2.256 4.43 27.703 14.775 41.423 16.84 8.867 1.335 9.581 1.34 16.785.11zm81.565-27.48c6.258-3.608 8.117-7.86 7.773-17.782-.262-7.565-.385-7.91-3.902-10.897-5.004-4.25-15.366-6.914-25.357-6.518-8.223.326-12.094 1.974-19.249 8.196-2.794 2.43-2.91 2.8-1.592 5.072 3.77 6.492 6.165 12.735 6.868 17.901.765 5.617.816 5.685 4.784 6.381 2.205.388 9 .599 15.098.47 9.625-.205 11.682-.577 15.577-2.823zm37.64-30.937c2.204-1.266 4.16-3.128 4.344-4.137.285-1.552-.488-1.842-5.013-1.881-2.943-.025-7.36-.454-9.816-.952-4.236-.86-4.683-.708-8.697 2.951-2.328 2.121-4.056 4.048-3.842 4.28.215.233 2.546 1.05 5.18 1.818 5.927 1.725 12.57.952 17.843-2.079zm-82.243-6.093c3.735-2.972 7.836-5.903 9.113-6.515 2.463-1.18 2.437-1.833-.353-8.854-1.198-3.014-1.896-3.525-4.812-3.525-2.902 0-4.044.825-7.671 5.546-2.344 3.05-5.89 7.102-7.882 9.003-3.077 2.938-3.38 3.605-2.023 4.447.88.545 2.688 1.945 4.02 3.11 1.332 1.167 2.511 2.136 2.62 2.156.109.02 3.254-2.396 6.988-5.368zm60.874-4.734c.803-1.851.746-2.893-.225-4.122-1.08-1.37-3.586-1.596-14.97-1.352-13.131.282-13.685.383-13.98 2.568-.37 2.718 2.304 3.83 14.377 5.985 9.175 1.637 13.109.819 14.798-3.079zm-35.4-4.122c0-3.977-.571-5.389-3.509-8.662-4.226-4.71-5.157-9.055-3.64-16.994 1.349-7.06 4.978-13.245 9.45-16.109 6.766-4.33 20.192-8.47 36.208-11.164 30.75-5.173 52.742-15.027 66.443-29.772 5.01-5.392 10.357-15.285 8.595-15.902-.584-.205-3.421 1.525-6.304 3.844-2.882 2.32-9.311 6.79-14.285 9.934-24.2 15.298-29.157 17.267-53.911 21.423-41.602 6.984-49.238 11.294-52.992 29.911-.62 3.079-1.13 7.12-1.132 8.98-.005 5.098 7.953 28.007 9.92 28.558 4.614 1.292 5.157.865 5.157-4.047zm71.886 1.108c3.573-1.57 4.597-4.133 2.06-5.156-.783-.316-7.238-.676-14.345-.799-13.052-.226-17.393.77-17.393 3.994 0 3.02 23.702 4.586 29.678 1.96zm-31.494-10.276c4.671-1.47 6.407-4.113 4.79-7.29-.758-1.488-1.66-1.96-2.8-1.466-.925.402-10.5.948-21.278 1.215-10.778.267-20.237.704-21.021.972-1.032.352-.476 1.49 2.01 4.116l3.435 3.629 15.46.033c9.04.02 17.097-.482 19.404-1.209zm38.658-5.73c2.372-2.014 3.98-4.354 4.176-6.075.383-3.37.47-3.364-16.397-1.225-6.633.842-13.037 1.545-14.233 1.563-2 .03-2.088.308-1.104 3.466.589 1.888 1.229 4.07 1.423 4.847.274 1.1 2.785 1.335 11.314 1.057 10.53-.344 11.114-.487 14.82-3.633zm-99.148-2.39c0-.5-1.32-2.656-2.933-4.79-3.551-4.697-4.504-9.897-3.162-17.249 1.71-9.36 5.127-13.485 15.565-18.79 9.446-4.8 11.376-5.425 35.835-11.587 22.29-5.615 35.554-11.996 49.558-23.838 7.315-6.185 12.062-12.55 15.143-20.3 2.18-5.484.326-5.22-6.527.93-10.463 9.388-33.702 24.884-42.596 28.403-3.38 1.337-13.825 4.165-23.213 6.285-34.648 7.824-43.47 12.13-48.556 23.704-2.142 4.874-2.608 7.514-2.633 14.903-.028 8.083.304 9.69 3.321 16.11 3.158 6.717 3.55 7.13 6.775 7.13 1.883 0 3.423-.41 3.423-.91zm61.87-7.566c1.62-.648 3.72-1.915 4.668-2.816 1.56-1.485 1.581-1.928.225-4.686-1.415-2.874-1.628-2.956-3.8-1.46-2.457 1.692-20.521 3.66-33.87 3.69-8.192.018-10 .948-10 5.148v2.596l19.917-.648c10.954-.356 21.241-1.177 22.86-1.824zm31.46-4.77c18.038-2.75 23.268-4.853 31.031-12.48 3.472-3.412 4.11-6.026 1.932-7.926-1.007-.879-3.042-.272-8.291 2.471-8.293 4.335-21.865 8.295-34.76 10.143-5.159.74-9.521 1.449-9.695 1.577-.174.127-.01 1.944.363 4.037.646 3.618.877 3.805 4.71 3.805 2.216 0 8.836-.732 14.71-1.628zm-46.6-7.958c6.632-.646 12.654-1.69 13.381-2.32.727-.63 2-2.521 2.826-4.203l1.504-3.056-4.836.718c-13.732 2.039-31.48 7.452-33.02 10.072-.316.538 1.322.738 3.762.46 2.378-.273 9.75-1.024 16.382-1.67zm-44.292-6.26c.467-1.836.388-2.158-.259-1.057-.512.871-1.234 2.773-1.603 4.225-.467 1.836-.388 2.158.26 1.057.511-.872 1.233-2.773 1.602-4.226zm90.5-2.204c13.396-2.971 21.753-6.374 29.86-12.158 7.49-5.342 9.732-9.47 7.899-14.537-.556-1.537-1.446-2.794-1.979-2.794-.533 0-4.5 2.666-8.818 5.925-4.317 3.258-10.337 7.245-13.377 8.859-7.244 3.845-22.08 9.334-29.582 10.943-5.148 1.104-6.064 1.664-6.68 4.084-.392 1.542-.533 2.993-.313 3.224.62.652 11.92-1.09 22.99-3.546zm-2.494-33.037c14.232-7.635 17.124-9.564 16.833-11.23-.533-3.055-3.71-2.199-9.163 2.47-3.034 2.599-8.376 6.48-11.87 8.625-7.41 4.549-7.646 4.743-5.765 4.728.783-.006 5.267-2.073 9.965-4.593z"/></svg></div>
        </div>
        <div className="flex m-auto self-stretch flex-1 flex-wrap flex-col lg:flex-row sm:flex-row md:flex-row">
          <div className="flex-1 flex flex-wrap justify-items-startstart border-solid border-lime-500 border-2">
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
              <p className="m-2 text-pretty text-lg">Monday, March 10th<br></br>5:30pm<br></br>Park in the WCHS pool parking lot
                <br></br>Meet in Cardinal Theatre<br></br>
              </p>
              <a href="https://calendar.google.com/calendar/u/0?cid=Y18yMmVhZTQ1MzRlZDZkNmQ2ZDVmODU2ODVhNmU2NGJmMWY5OGIwYzhmMjY1MDZhOGQ2MjkzMGQxNzYyNDhmZmIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank" className="underline">Get the sharable calendar link here!</a>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap align-center border-solid border-lime-500 border-2">
          <h2 className=" text-xl font-extrabold " >Follow the instructions to get registered</h2>
                <ol className="ml-5 text-lg list-decimal">
                    <li className="ml-10 text-lg list-decimal">Join AAU- <a href="https://aausports.org" target="_blank" className="underline">aausports.org</a>. This supplies us with the insurance we need to be able to offer this program.</li>
                    <ul className="ml-10 text-lg list-disc">
                      <li className="ml-10 text-lg list-disc">Create an account</li>
                      <li className="ml-10 text-lg list-disc">Register for a membership</li>
                      <ul className="ml-20 text-lg list-disc">
                        <li>Youth Membership Application</li>
                        <li>Track and Field (X-Country, Multi-Events)</li>
                        <li>Extended Coverage if you plan on competing in the Neosho or Girard meets.</li>
                        <li>Choose 1 year or 2 year membership ($22 or $44 per athlete)</li>
                        <li>Choose your club: SWMO Track Club - W4TTA4</li>
                      </ul>
                    </ul>
                    <li className="ml-10 text-lg list-decimal">Register for the SWMO Track Club</li>
                    <ul className="ml-10 text-lg list-disc">
                      <li className="ml-10 text-lg list-disc">Cost is $75. This pays for our equiptment, club fees, and other miscellaneous expenses.</li>
                    </ul>
                    <li className="ml-10 text-lg list-decimal">Download the Band app</li>
                    <ul className="ml-10 text-lg list-disc">
                      <li className="ml-10 text-lg list-disc">Join the SWMO Track Club 25</li>
                      <li className="ml-10 text-lg list-disc">This will be our primary way of making announcements with a large group.</li>
                      <ul className="ml-20 text-lg list-disc">
                        <li>Ex: Practice cancellation, meet information, meet entry deadlines, etc.</li>
                      </ul>
                    </ul>
                    <li className="ml-10 text-lg list-decimal">Order your complementary t-shirt</li>
                    <ul className="ml-10 text-lg list-disc">
                      <li className="ml-10 text-lg list-disc"><a href="https://swmotrackclubuniforms.itemorder.com/shop/sale/" target="_blank" className="underline">Link</a></li>
                    </ul>    
                </ol>
          </div>
        </div>
          <Bottombar>
          </Bottombar>
      </div>
    </main>
  );
}
