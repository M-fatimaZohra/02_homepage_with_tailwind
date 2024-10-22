import React from 'react'

function Header() {
  return (
    <div id='color' className="fixed inline top-0 left-0 z-10 shadow-zinc-500 my-0 shadow-lg text-center bg-opacity-15 p-4 bg-white border-b-white border-b-2 w-full">
      <span className=" text-xs md:text-lg md:px-8 my-0   hover:bg-gradient-to-b from-slate-600 from-30% via-slate-500 via-50%  duration-700 p-4 px-2 rounded-md" ><a href='#home'>Home</a></span>
      <span className=" text-xs md:text-lg md:px-8 my-0   hover:bg-gradient-to-b from-slate-600 from-30% via-slate-500 via-50%  duration-700 p-4 px-2 rounded-md"><a href='#about' >About</a></span>
      <span className=" text-xs md:text-lg md:px-8 my-0   hover:bg-gradient-to-b from-slate-600 from-30% via-slate-500 via-50%  duration-700 p-4 px-2 rounded-md"><a href='#product'>Products</a></span>
      <span className=" text-xs md:text-lg md:px-8 my-0   hover:bg-gradient-to-b from-slate-600 from-30% via-slate-500 via-50%  duration-700 p-4 px-2 rounded-md"><a href='#search'>Explore</a></span>
    </div>
  )
}

export default Header


