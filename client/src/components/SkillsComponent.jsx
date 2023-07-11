import React from 'react'

const SkillsComponent = () => {
  return (
    <div>
      <div className='relative min-h-[25rem] min-w-[25rem] border text-3xl p-10 after:content-[""] after:bg-slate-600 after:h-[12rem] after:w-[2px] after:absolute after:top-[40%] after:left-[15%]'>
            <div className="flex gap-5 justify-evenly items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
              >
                <path
                  d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z"
                  transform="translate(-2 -2)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <header className="favFont">
                <span className="z-0 relative after:content-[''] after:absolute after:bottom-[13.5%] after:z-[-1] after:left-0 after:w-[104%] after:h-[20%] after:bg-pink-700">
                  Software
                </span>{" "}
                <br /> Development
              </header>
            </div>
            <div className='mt-2 text-lg relative h-[200px] w-[300px] font-mono pt-10 pl-10 before:content-["<h3>-Proficient"] before:absolute before:left-0 before:top-0 before:text-slate-600 after:content-["<h3>-Familiar"] after:absolute after:left-0 after:bottom-[-30%] after:text-slate-600 '>
              <ul className="flex flex-wrap">
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  C++
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  C
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Python
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Java
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  JavaScript
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Solidity
                </span>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default SkillsComponent
