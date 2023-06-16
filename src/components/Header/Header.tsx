import React from 'react'
import { useApp } from '../../contexts/App/useApp'

export const Header = () => {
  const { step, handleStep } = useApp()

  const modelsColor =
    step === 1
      ? 'text-custom-yellow border-custom-yellow border-b-2'
      : 'text-custom-grey border-custom-grey'
  const colorsColor =
    step === 2
      ? 'text-custom-yellow border-custom-yellow border-b-2'
      : 'text-custom-grey'
  const accessoriesColor =
    step === 3
      ? 'text-custom-yellow border-custom-yellow border-b-2'
      : 'text-custom-grey'
  const summaryColor =
    step === 4
      ? 'text-custom-yellow border-custom-yellow border-b-2'
      : 'text-custom-grey'

  return (
    <div className="flex flex-col mb-[70px]">
      <h1 className="text-4xl font-bold mt-10 mb-7">Product Builder</h1>
      <nav className="flex justify-center">
        <ul className="flex text-sm font-semibold gap-2 box-border tracking-[0.1em]">
          <li
            onClick={() => handleStep(1)}
            className={`transition-colors px-3 py-2 border-custom-yellow ${modelsColor} hover:text-custom-yellow`}
          >
            <a href="#">MODELS</a>
          </li>
          <li
            onClick={() => handleStep(2)}
            className={`transition-colors px-3 py-2 border-custom-yellow ${colorsColor} hover:text-custom-yellow`}
          >
            <a href="#">COLORS</a>
          </li>
          <li
            onClick={() => handleStep(3)}
            className={`transition-colors px-3 py-2 border-custom-yellow ${accessoriesColor} hover:text-custom-yellow`}
          >
            <a href="#">ACCESSORIES</a>
          </li>
          <li
            onClick={() => handleStep(4)}
            className={`transition-colors px-3 py-2 border-custom-yellow ${summaryColor} hover:text-custom-yellow`}
          >
            <a href="#">SUMMARY</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
