import { useState } from 'react'
import bmwi3Image from '../../assets/cars/bmw_i3/white.png'

export const Car = () => {
  const [selected, setSelected] = useState(false)

  const CheckSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="44px"
      height="44px"
      viewBox="0 0 44 44"
      className={`inline transition-opacity duration-150 ${
        selected ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <g transform="translate(10, 10)">
        <polyline
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="square"
          stroke-miterlimit="10"
          points="2,12 9,19 22,6 &#10;&#9;"
          stroke-linejoin="miter"
        />
      </g>
    </svg>
  )

  return (
    <div
      className={`relative flex flex-col justify-center items-center py-11 ${
        selected ? 'border-custom-yellow' : 'border-[#ededed]'
      } border-2 rounded cursor-pointer`}
      onClick={() => setSelected((prevState) => !prevState)}
    >
      <h2 className="text-4xl font-bold">BMW i3</h2>
      <img className="w-96 h-auto mx-12 my-5" src={bmwi3Image} alt="BMW i3" />
      <p className="mb-10 text-custom-grey">from $42.400</p>
      <div
        className={`absolute bottom-8 transition-all duration-150 rounded-full ${
          selected
            ? 'bg-custom-yellow w-11 h-11'
            : 'scale-75 bg-white border border-[#ededed]'
        }`}
      >
        <CheckSvg />
      </div>
    </div>
  )
}
