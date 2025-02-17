import React, { ReactNode } from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

import  Navbar  from "@/components/navbar"

export default function Home() {
  return (
      <main className="align-middle" >
       <Navbar>
        </Navbar>
        <div className="grow shrink flex text-lime-500">
          <Link href="https://image.aausports.org/dnn/athletics/AT-Handbook.pdf" target="_blank"className={buttonVariants({ variant: "ghost" })}>For the full AAU rule document click here!</Link>
        </div>
        <div className="flex-1 flex flex-wrap align-center justify-center border-solid border-lime-500 text-lime-500 border-2">
            <h1 className="m-2 flex w-full place-content-center text-lg">Important Rules</h1>
            <h2 className="m-2 flex w-full place-content-center text-lg">Age Divisions</h2>
            <table className="shadow-lg bg-zinc-950 border-solid border-lime-500">
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
            <p className="m-2 flex w-full place-content-center text-lg">2. Proof of Age
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;a. Proof of age may be required at District, Regional Qualifier, and National Championship
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;events and whenever required and/or challenged.
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. Acceptable Forms:
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Original Birth Certificate;
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. A notarized original birth certificate from the appropriate visiting authority;
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. A US Military Government Identification Card;
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. A valid passport (not expired) and/or;
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. A valid US driver’s license
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii. NOTE: OTHER FORMS OF DOCUMENTATION, INCLUDING BUT NOT LIMITED TO:
                                                                                <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LETTERS FROM PUBLIC OR PRIVATE SCHOOLS AND/OR CITY/STATE PARKS &
                                                                                RECREATION DEPARTMENTS ARE NOT ACCEPTABLE.</p>
            <a id="8u"></a>
            <p className="text-zinc-900">
              sephadbfuhgfuygdsyugfuhdsghufhsdgfhdshfghdsgfhjgsdhgfhdghfgdgfhdgfhdgfdhfghdfgd23 fhdgfh dhfghdgfhdgfhdgfhdgfhdgfhdfhdfhd fhdgfhd fhdgfhd f<br></br>
              sep<br></br>
              sep<br></br>
            </p>
              <table className="shadow-lg bg-zinc-950 border-solid border-lime-500">
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
            <a id="910"></a>
            <p className="text-zinc-900">
              sephadbfuhgfuygdsyugfuhdsghufhsdgfhdshfghdsgfhjgsdhgfhdghfgdgfhdgfhdgfdhfghdfgd fhdgfh dhfghdgfhdgfhdgfhdgfhdgfhdfhdfhd fhdgfhd fhdgfhd f<br></br>
              sep<br></br>
              sep<br></br>
            </p>
            <table className="shadow-lg bg-zinc-950 border-solid border-lime-500">
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
            <a id="1112"></a>
            <p className="text-zinc-900">
              sephadbfuhgfuygdsyugfuhdsghufhsdgfhdshfghdsgfhjgsdhgfhdghfgdgfhdgfhdgfdhfghdfgd fhdgfh dhfghdgfhdgfhdgfhdgfhdgfhdfhdfhd fhdgfhd fhdgfhd f<br></br>
              sep<br></br>
              sep<br></br>
            </p>
            <table className="shadow-lg bg-zinc-950 border-solid border-lime-500">
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
            <a id="1314"></a>
            <a id="1516"></a>

          </div>

      </main>
    
  );
}
