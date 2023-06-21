import { useApp } from '../../contexts/App/useApp'
import { Step } from '../../contexts/App/types'
import { ArrowSvg } from '../Utility/Icons'
import { useCallback, useEffect, useState } from 'react'

export const DesktopFooter = () => {
  const { step, handleStep, totalPrice, selectedCar, findSelectedCar } =
    useApp()

  const [currentCarImage, setCurrentCarImage] = useState<string>('')

  const nextStep = () => {
    if (step === 4 || selectedCar === null) return

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

  const disabledColor = '!bg-[rgb(93,124,137)]/50'

  const handleButtonBackground = selectedCar === null && disabledColor

  const getDefaultImage = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    const defaultImage = findSelectedCar()[0]?.default_image

    if (defaultImage !== undefined) {
      const publicString: string = import.meta.env.DEV ? '/public' : ''

      const img = `${publicString}${
        import.meta.env.VITE_BASE_URL
      }${defaultImage}`
      setCurrentCarImage(img)
    }
  }, [findSelectedCar])

  useEffect(() => {
    getDefaultImage()
  }, [getDefaultImage])

  return (
    <footer className="w-full h-[100px] py-1 px-8 z-20 fixed bg-white bottom-0 flex justify-between items-center shadow-footer select-none">
      <section className="flex items-center h-full">
        <img
          className={`w-48 pr-7 transition-transform duration-200 ${
            selectedCar === null && '-translate-x-48'
          }`}
          src={currentCarImage}
          alt=""
        />
        <div
          className={`flex flex-col justify-center items-start border-l pl-7 h-full transition-transform duration-200 ${
            selectedCar === null && '-translate-x-56'
          }`}
        >
          <p className="text-custom-grey">Total</p>
          <p className="text-3xl">${totalPrice}</p>
        </div>
      </section>
      <section className="relative">
        {step !== 1 && (
          <div
            className={`absolute -left-[70px] top-1/2 -translate-y-1/2 rotate-180 bg-[#ededed] fill-custom-grey hover:opacity-80 rounded-full p-3 cursor-pointer transition-all duration-200`}
            onClick={prevStep}
          >
            <ArrowSvg height="32px" width="32px" viewBox="0 0 16 32" />
          </div>
        )}
        <div
          className={`relative flex justify-center items-center w-48 h-14 rounded-full bg-custom-yellow cursor-pointer ${
            selectedCar === null && disabledColor
          } ${handleButtonBackground}`}
          onClick={nextStep}
        >
          <ul
            className={`absolute flex flex-col left-8 items-start gap-4 h-full w-full transition-transform ${handleButtonText} duration-200`}
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
