import React, { ReactNode } from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

import  Navbar  from "@/components/navbar"

export default function Home() {
  return (
      <main className="flex align-middle flex-col align-center justify-center" >
       <Navbar>
        </Navbar>
        <div className="grow shrink flex text-lime-500">
          <Link href="https://image.aausports.org/dnn/athletics/AT-Handbook.pdf" target="_blank"className={buttonVariants({ variant: "ghost" })}>For the full AAU rule document click here!</Link>
        </div>
        <div className="flex-1 flex flex-wrap align-center justify-center border-solid border-lime-500 text-lime-500 border-2">
            <h1 className="m-2 flex w-full place-content-center text-lg">Important Rules</h1>
            <h2 className="m-2 flex w-full place-content-center text-lg">Age Divisions</h2>
            <p className="hidden max-md:flex flex-col m-2 place-content-center align-center text-md w-full">
              <a href='#8u' className="underline">8-Under</a> <br></br>
              <a href='#910' className="underline">9 Years Old</a><br></br>
              <a href='#910' className="underline">10 Years Old</a><br></br>
              <a href='#1112' className="underline">11 Years Old</a><br></br>
              <a href='#1112' className="underline">12 Years Old</a><br></br>
              <a href='#1314' className="underline">13 Years Old</a><br></br>
              <a href="#1314" className="underline">14 Years Old</a><br></br>
              <a href="#1516" className="underline">15-16 Years Old</a><br></br>
              <a href='#1516' className="underline">17-18 Years Old</a><br></br>
            </p>
            <table className="shadow-lg bg-zinc-950 border-solid border-lime-500 max-md:hidden">
              <tr>
                <th className="border border-lime-500 bg-zinc-800 text-left px-6 py-1">Division (Girls & Boys)</th>
                <th className="border  border-lime-500 bg-zinc-800 text-left px-6 py-1">2024</th>
                <th className="border  border-lime-500 bg-zinc-800 text-left px-6 py-1" >2025</th>
                <th className="border  border-lime-500 bg-zinc-800 text-left px-6 py-1">2026</th>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href='#8u' className="underline">8-Under</a></td>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1">2016 & After</td>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1">2017 & After</td>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1">2018 & After</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href='#910' className="underline">9 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2015</td>
                <td className="border border-lime-500 text-left px-6 py-1">2016</td>
                <td className="border border-lime-500 text-left px-6 py-1">2017</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href='#910' className="underline">10 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2014</td>
                <td className="border border-lime-500 text-left px-6 py-1">2015</td>
                <td className="border border-lime-500 text-left px-6 py-1">2016</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href='#1112' className="underline">11 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2013</td>
                <td className="border border-lime-500 text-left px-6 py-1">2014</td>
                <td className="border border-lime-500 text-left px-6 py-1">2015</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href='#1112' className="underline">12 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2012</td>
                <td className="border border-lime-500 text-left px-6 py-1">2013</td>
                <td className="border border-lime-500 text-left px-6 py-1">2014</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href='#1314' className="underline">13 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2011</td>
                <td className="border border-lime-500 text-left px-6 py-1">2012</td>
                <td className="border border-lime-500 text-left px-6 py-1">2013</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href="#1314" className="underline">14 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2010</td>
                <td className="border border-lime-500 text-left px-6 py-1">2011</td>
                <td className="border border-lime-500 text-left px-6 py-1">2012</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href="#1516" className="underline">15-16 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2008-2009</td>
                <td className="border border-lime-500 text-left px-6 py-1">2009-2010</td>
                <td className="border border-lime-500 text-left px-6 py-1">2010-2011</td>
              </tr>
              <tr>
                <td className="border border-lime-500 bg-zinc-800 text-left px-6 py-1"><a href='#1516' className="underline">17-18 Years Old</a></td>
                <td className="border border-lime-500 text-left px-6 py-1">2006-2007</td>
                <td className="border border-lime-500 text-left px-6 py-1">2007-2009</td>
                <td className="border border-lime-500 text-left px-6 py-1">2008-2010</td>
              </tr>
            </table>
            <div className="" >
              <h2 className="mx-2 text-xl font-extrabold " >Proof Of Age</h2>
                <ul className="ml-8 mr-2 text-lg list-disc">
                    <li>a. Proof of age may be required at District, Regional Qualifier, and National Championship events and whenever required and/or challenged.</li>
                        <ul className="ml-8 mr-2 text-lg list-disc">
                            <li>Acceptable Forms:</li>
                            <ul className="ml-8 mr-2 text-lg list-disc">
                              <li>Original Birth Certificate;</li>
                              <li>A notarized original birth certificate from the appropriate visiting authority;</li>
                              <li>A US Military Government Identification Card;</li>
                              <li>A valid passport (not expired) and/or;</li>
                              <li>A valid US driver’s license</li>
                            </ul>
                            <li>NOTE: OTHER FORMS OF DOCUMENTATION, INCLUDING BUT NOT LIMITED TO: LETTERS FROM PUBLIC OR PRIVATE SCHOOLS AND/OR CITY/STATE PARKS & RECREATION DEPARTMENTS ARE NOT ACCEPTABLE.</li>
                        </ul>
                    
                </ul>
            </div>
            <div className="flex m-10 flex-col align-center justify-center">
              <a id="8u"></a>
              <h1 className="m-2 flex w-full place-content-center text-lg font-bold">8-U Events<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
                100m Dash, 200m Dash, 400m Dash, 800m Dash, Long Jump, Shot Put (4lbs), Turbo Javelin (300g), 1500m Run, 4x100m Relay
              </p>
              <table className="shadow-lg bg-zinc-950 border-solid border-lime-500 max-md:hidden">
                <tr>
                  <th className="border border-r-0  border-y-lime-500 border-l-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                  <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-left px-6 py-1"></th>
                  <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-center px-6 py-1">8-Under Division</th>
                  <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-left px-6 py-1"></th>
                  <th className="border border-l-0  border-y-lime-500 border-r-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">200m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">400m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">800m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (4lbs)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Turbo Javelin (300g)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">4x100m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                
              </table>
            </div>
            <div className="flex flex-col  m-10 align-center justify-center">
              <a id="910"></a>
              <h1 className="m-2 flex w-full place-content-center text-lg font-bold">9-10 Events<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
                100m Dash, 200m Dash, 400m Dash, 800m Dash, 1500m Run, 1500m Race Walk, 4x100m Relay, 4x400m Relay, Long Jump, High Jump,  Shot Put (6lbs), Turbo Javelin (400g)
              </p>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">9-10 Multi Events (Triathalon)<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
              Shot Put (6lbs), High Jump, 200m Dash, 400m Dash
              </p>
              <table className="shadow-lg bg-zinc-950 border-solid border-lime-500 max-md:hidden">
                  <tr>
                    <th className="border border-r-0  border-y-lime-500 border-l-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                    <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-center px-6 py-1">9 & 10 Divisions</th>
                    <th className="border border-l-0  border-y-lime-500 border-r-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                  </tr>
                  <tr>
                    <td className="border border-r-0 border-lime-500 text-left px-6 py-1 bg-zinc-800">Track & Field Events</td>
                    <td className="border border-l-0 border-lime-500 text-left px-6 py-1 bg-zinc-800"></td>
                    <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Multi-Events (Triathalon)</td>
                  </tr>
                  <tr>
                    <td className="border border-lime-500 text-left px-6 py-1">100m Dash</td>
                    <td className="border border-lime-500 text-left px-6 py-1">1500m Race-walk</td>
                    <td className="border border-lime-500 text-left px-6 py-1">Shot Put (6lbs)</td>
                  </tr>
                  <tr>
                    <td className="border border-lime-500 text-left px-6 py-1">200m Dash</td>
                    <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                    <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                  </tr>
                  <tr>
                    <td className="border border-lime-500 text-left px-6 py-1">400m Dash</td>
                    <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                    <td className="border border-lime-500 text-left px-6 py-1">200m Dash (Girls)</td>
                  </tr>
                  <tr>
                    <td className="border border-lime-500 text-left px-6 py-1">800m Run</td>
                    <td className="border border-lime-500 text-left px-6 py-1">Shot Put (6lbs)</td>
                    <td className="border border-lime-500 text-left px-6 py-1">400m Dash (Boys)</td>
                  </tr>
                  <tr>
                    <td className="border border-lime-500 text-left px-6 py-1">1500m Run</td>
                    <td className="border border-lime-500 text-left px-6 py-1">Turbo Javelin (400g)</td>
                    <td className="border border-lime-500 text-left px-6 py-1"></td>
                  </tr>
                  <tr>
                    <td className="border border-lime-500 text-left px-6 py-1">4x100m Relay</td>
                    <td className="border border-lime-500 text-left px-6 py-1">4x400m Relay</td>
                    <td className="border border-lime-500 text-left px-6 py-1"></td>
                  </tr>
                  
                </table>
            </div>
            <div className="flex m-10 flex-col align-center justify-center">
              <a id="1112"></a>
              <h1 className="m-2 flex w-full place-content-center text-lg font-bold">11-12 Events<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
                100m Dash, 200m Dash, 400m Dash, 800m Dash, 1500m Run, 3000m Run, 1500m Race Walk, 4x100m Relay, 4x400m Relay, 4x800m Relay, 80m Hurdles (8-30"), Long Jump, High Jump,  Shot Put (6lbs), Turbo Javelin (400g), Discus (1.0kg)
              </p>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">11-12 Multi Events (Pentathalon)<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
              80m Hurdles (8-30"), Shot Put (6lbs), High Jump, 800m Run (Girls), 1500m Run (Boys)
              </p>
              <table className="shadow-lg bg-zinc-950 border-solid border-lime-500 max-md:hidden">
                <tr>
                  <th className="border border-r-0  border-y-lime-500 border-l-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                  <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-center px-6 py-1">11 & 12 Divisions</th>
                  <th className="border border-l-0  border-y-lime-500 border-r-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                </tr>
                <tr>
                  <td className="border border-r-0 border-lime-500 text-left px-6 py-1 bg-zinc-800">Track & Field Events</td>
                  <td className="border border-l-0 border-lime-500 text-left px-6 py-1 bg-zinc-800"></td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Multi-Events (Pentathalon)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">80m Hurdles (8-30")</td>
                  <td className="border border-lime-500 text-left px-6 py-1">80m Hurdles (8-30")</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">200m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (6lbs)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">400m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">800m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Discus (1.0kg)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">800m Run (Girls)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (6lbs)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Run (Boys)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">3000m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Turbo Javelin (400g)</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Racewalk</td>
                  <td className="border border-lime-500 text-left px-6 py-1">4x100m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">4x400m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1">4x800m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                  
              </table>
            </div>
            <div className="flex flex-col m-10 align-center justify-center">
              <a id="1314"></a>
              <h1 className="m-2 flex w-full place-content-center text-lg font-bold">13-14 Events<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
                100m Dash, 200m Dash, 400m Dash, 800m Dash, 1500m Run, 3000m Run, 3000m Race Walk, 4x100m Relay, 4x400m Relay, 4x800m Relay, 100m Hurdles (10-30" Girls), 100m Hurdles (10-33" Boys), 200m Hurdles (5-30"), Long Jump, High Jump, Triple Jump, Pole Vault, Shot Put (6lbs Girls), Shot Put (4kg Boys), Javelin (600g), Discus (1.0kg)
              </p>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">13-14 Multi Events (Pentathalon)<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
              100m Hurdles (10-30" Girls), 100m Hurdles (10-33" Boys), Shot Put (6lbs Girls), Shot Put (4kg Boys), High Jump, 800m Run (Girls), 1500m Run (Boys)
              </p>
              <table className="shadow-lg bg-zinc-950 border-solid border-lime-500 max-md:hidden">
                <tr>
                  <th className="border border-r-0  border-y-lime-500 border-l-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                  <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-center px-6 py-1">13 & 14 Divisions</th>
                  <th className="border border-l-0  border-y-lime-500 border-r-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                </tr>
                <tr>
                  <td className="border border-r-0 border-lime-500 text-left px-6 py-1 bg-zinc-800">Track & Field Events</td>
                  <td className="border border-l-0 border-lime-500 text-left px-6 py-1 bg-zinc-800"></td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Multi-Events (Pentathalon)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">3000m Race-walk</td>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Hurdles (10-30" Girls)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">200m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Hurdles (10-33" Boys)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">400m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Triple Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (6lbs Girls)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">800m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (4kg Boys)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Pole Vault</td>
                  <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">3000m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (4kg Boys)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">200m Hurdles (5-30")</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (6lbs Girls)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">800m Run (Girls)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Hurdles (10-33" Boys)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Discus (1.0kg)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Run (Boys)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Hurdles (10-30" Girls)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Javelin (600g)</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">4x800m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1">4x100m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">4x400m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
              </table>
            </div>
            <a id="1516"></a>
            <div className="flex flex-col m-10 align-center justify-center">
              <a id="1516"></a>
              <h1 className="m-2 flex w-full place-content-center text-lg font-bold">15-16 & 17-18 Events<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
                100m Dash, 200m Dash, 400m Dash, 800m Dash, 1500m Run, 3000m Run, 3000m Race Walk, 4x100m Relay, 4x400m Relay, 4x800m Relay, 2000m Steeplechase (30” Girls/36” Boys) 18 Hurdle Jumps 5 Water Jumps, 110m Hurdles (10-39" Boys), 100m Hurdles (10-30" Girls), 400m Hurdles (10-30" Girls), Long Jump, High Jump, Triple Jump, Pole Vault, Shot Put (12lbs Boys), Shot Put (4kg Girls), Javelin (600g Girls), Javelin (800g Boys), Discus (1.0kg Girls), Discus (1.6kg Boys)
              </p>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">15-16 & 17-18 Boys Multi Events (Decathalon)<br></br></h1>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">Day 1<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
              100m Dash, Long Jump, Shot Put (12lbs), High Jump, 400m Dash
              </p>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">Day 2<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
              110m Hurdles (10-39"), Discus (1.6kg), Pole Vault, Javelin (800g), 1500m Run
              </p>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">15-16 & 17-18 Girls Multi Events (Heptathalon)<br></br></h1>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">Day 1<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
              100m Hurdles (10-33"), High Jump, Shot Put (4kg), 200m Dash
              </p>
              <h1 className="m-2 hidden max-md:flex w-full place-content-center text-lg font-bold">Day 2<br></br></h1>
              <p className="hidden max-md:flex flex-col m-2 place-content-right text-md w-full">
              Long Jump, Javelin (600g), 800m Run
              </p>
              <table className="shadow-lg bg-zinc-950 border-solid border-lime-500 max-md:hidden">
                <tr>
                  <th className="border border-r-0  border-y-lime-500 border-l-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                  <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-right px-1 py-1">15-16 Years and</th>
                  <th className="border border-y-lime-500 border-x-0 bg-zinc-800 text-left px-1 py-1">17-18 Divisions</th>
                  <th className="border border-l-0  border-y-lime-500 border-r-lime-500 bg-zinc-800 text-left px-6 py-1"></th>
                </tr>
                <tr>
                  <td className="border border-r-0 border-lime-500 text-left px-6 py-1 bg-zinc-800">Track & Field Events</td>
                  <td className="border border-l-0 border-lime-500 text-left px-6 py-1 bg-zinc-800"></td>
                  <td className="border border-y-lime-500 border-r-zinc-800 text-left px-6 py-1 bg-zinc-800">Multi-Events</td>
                  <td className="border border-y-lime-500 border-r-lime-500 border-l-zinc-800 text-left px-6 py-1 bg-zinc-800" ></td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Decathalon (Boys)</td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Heptathalon (Girls)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">200m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Triple Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Day 1</td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Day 1</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">400m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Hurdles (10-33")</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">800m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Pole Vault</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (4kg Girls)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (12lbs)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (4kg)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">3000m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Shot Put (12lbs Boys)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">High Jump</td>
                  <td className="border border-lime-500 text-left px-6 py-1">200m Dash</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">3000m Race-walk</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Discus (1.0kg Girls)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">400m Dash</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">110m Hurdles (10-39" Boys)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Discus (1.6kg Boys)</td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Day 2</td>
                  <td className="border border-lime-500 text-left px-6 py-1 bg-zinc-800">Day 2</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">100m Hurdles (10-30" Girls)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Javelin (600g Girls)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">110m Hurdles (10-39")</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Long Jump</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">400m Hurdles (10-30" Girls)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Javelin (800g Boys)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Discus (1.6kg)</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Javelin (600g)</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">4x100m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1">2000m Steeplechase (30" girls/36" Boys)<br></br> 18 Hurdle Jumps<br></br> 5 Water Jumps</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Pole Vault</td>
                  <td className="border border-lime-500 text-left px-6 py-1">800m run</td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1">4x800m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1">4x400m Relay</td>
                  <td className="border border-lime-500 text-left px-6 py-1">Javelin (800g)</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                <tr>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                  <td className="border border-lime-500 text-left px-6 py-1">1500m Run</td>
                  <td className="border border-lime-500 text-left px-6 py-1"></td>
                </tr>
                
              </table>
            </div>

          </div>

      </main>
    
  );
}
