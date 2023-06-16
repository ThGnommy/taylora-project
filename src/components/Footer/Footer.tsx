import React from 'react'
import { useApp } from '../../contexts/App/useApp'
import { Step } from '../../contexts/App/types'

export const Footer = () => {
  const { step, handleStep } = useApp()

  const ArrowSvg = ({
    width,
    height,
    viewBox,
    className,
  }: {
    width?: string
    height?: string
    viewBox?: string
    className?: string
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <g transform="translate(0, 8)">
        <polygon points="4.9,15.7 3.4,14.3 9.7,8 3.4,1.7 4.9,0.3 12.6,8 " />
      </g>
    </svg>
  )

  const nextStep = () => {
    if (step === 4) return

    const s = step + 1
    handleStep(s as Step)
  }

  const prevStep = () => {
    if (step === 1) return

    const s = step - 1
    handleStep(s as Step)
  }

  const handleButtonText =
    step === 1
      ? `translate-y-[18px]`
      : step === 2
      ? `-translate-y-[18px]`
      : step === 3
      ? `-translate-y-[54px]`
      : step === 4
      ? `-translate-y-[90px]`
      : `translate-y-[18px]`

  return (
    <footer className="w-full h-[100px] py-1 px-8 fixed bg-white bottom-0 flex justify-between items-center shadow-footer select-none">
      <section className="flex justify-center items-center">
        <img
          className="w-48 pr-7"
          src="	https://codyhouse.co/demo/product-builder/img/product01_col01.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center items-start border-l pl-7 h-full">
          <p className="text-custom-grey">Total</p>
          <p className="text-3xl">$42400</p>
        </div>
      </section>
      <section className="relative">
        {step !== 1 && (
          <div
            className="absolute -left-[70px] top-1/2 -translate-y-1/2 rotate-180 bg-[#ededed] fill-custom-grey hover:opacity-80 rounded-full p-3 cursor-pointer"
            onClick={prevStep}
          >
            <ArrowSvg height="32px" width="32px" viewBox="0 0 16 32" />
          </div>
        )}
        <div
          className="relative flex justify-center items-center w-48 h-14 rounded-full bg-custom-yellow cursor-pointer"
          onClick={nextStep}
        >
          <ul
            className={`absolute flex flex-col left-8 items-start gap-4 h-full w-full transition-transform ${handleButtonText}`}
          >
            <li className="text-white text-sm">COLORS</li>
            <li className="text-white text-sm">ACCESSORIES</li>
            <li className="text-white text-sm">SUMMARY</li>
            <li className="text-white text-sm">BUY NOW</li>
          </ul>
          <ArrowSvg
            height="32px"
            width="32px"
            viewBox="0 0 16 32"
            className="absolute top-1/2 -right-2 -translate-x-1/2 -translate-y-1/2 fill-white"
          />
        </div>
      </section>
    </footer>
  )
}
