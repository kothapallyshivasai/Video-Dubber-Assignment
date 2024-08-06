import React from 'react'

const PathComponent = () => {
  return (
    <div className="ml-9 my-5 flex flex-row w-full xl:w-10/12 xl:ml-1/12 justify-between">
      <ol className="flex list-none flex-row flex-wrap gap-2">
        <li className="flex flex-row items-center gap-2">
          <a className="text-14 font-normal text-dark-gray hover:text-blue opacity-70" href="#">Home</a>
        </li>
        <li className="flex flex-row items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" className="mt-0.5 h-2 fill-light-gray"><path fillRule="evenodd" d="M6.744 5.502a1 1 0 0 1-.292.703l-4.247 4.247a1.003 1.003 0 0 1-1.412-.002.996.996 0 0 1-.003-1.412L4.33 5.5.79 1.962A1.004 1.004 0 0 1 .794.55a.995.995 0 0 1 1.41-.002l4.248 4.247c.192.192.29.447.29.702z"></path></svg>
          <a className="text-14 font-normal text-dark-gray hover:text-blue opacity-70" href="#">Product</a>
        </li>
        <li className="flex flex-row items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" className="mt-0.5 h-2 fill-light-gray"><path fillRule="evenodd" d="M6.744 5.502a1 1 0 0 1-.292.703l-4.247 4.247a1.003 1.003 0 0 1-1.412-.002.996.996 0 0 1-.003-1.412L4.33 5.5.79 1.962A1.004 1.004 0 0 1 .794.55a.995.995 0 0 1 1.41-.002l4.248 4.247c.192.192.29.447.29.702z"></path></svg>
          <a className="text-14 font-normal text-dark-gray hover:text-blue pointer-events-none" href="#">VideoDubber - Fast Video Translator</a>
        </li>
      </ol>
    </div>
  )
}

export default PathComponent