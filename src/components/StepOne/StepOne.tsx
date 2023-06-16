import { useState } from 'react'
import bmwi3Image from '../../assets/cars/bmw_i3/white.png'

export const StepOne = () => {
  const [selected, setSelected] = useState(false)

  const radioUnselected =
    'w-[30px] h-[30px] border border-[#ededed] rounded-full'
  const radioSelected =
    'absolute top-[18px] left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center w-3 h-5 border-b-2 border-r-2 border-white rotate-45'

  const CheckSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="44px"
      height="44px"
      viewBox="0 0 44 44"
      className={`transition-opacity duration-150 ${
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
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center py-11 border-custom-yellow border-2 rounded">
        <h2 className="text-4xl font-bold">BMW i3</h2>
        <img className="w-96 h-auto mx-12 my-5" src={bmwi3Image} alt="BMW i3" />
        <p className="mb-2 text-custom-grey">from $42.400</p>
        <div
          onClick={() => setSelected((prevState) => !prevState)}
          className={`cursor-pointer transition-all duration-150 rounded-full ${
            selected
              ? 'bg-custom-yellow w-11 h-11'
              : 'w-[30px] h-[30px] bg-white border border-[#ededed]'
          }`}
        >
          <CheckSvg />
        </div>
      </div>
    </div>
  )
}
