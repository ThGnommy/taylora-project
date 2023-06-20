import { useApp } from '../../contexts/App/useApp'
import { Step } from '../../contexts/App/types'
import { ArrowSvg } from '../Utility/Icons'

export const MobileFooter = () => {
  const { step, selectedCar, handleStep } = useApp()

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

  return (
    <footer className="fixed bottom-0 left-0 flex w-full h-14 shadow-footer">
      <nav className="relative flex justify-between items-start w-full">
        <div
          className={`absolute left-0 transition-all overflow-hidden ${
            step === 1 ? 'w-full' : 'w-1/2'
          } bg-white `}
        >
          <ul
            className={`transition-transform duration-300 ${handleButtonText} h-full flex flex-col gap-4 cursor-pointer`}
          >
            <li className="text-sm" onClick={prevStep}>
              MODELS
            </li>
            <li className="text-sm" onClick={prevStep}>
              MODELS
            </li>
            <li className="text-sm" onClick={prevStep}>
              COLORS
            </li>
            <li className="text-sm" onClick={prevStep}>
              ACCESSORIES
            </li>
          </ul>
          <ArrowSvg
            className="absolute top-3 left-1 rotate-180"
            height="32px"
            width="32px"
            viewBox="0 0 16 32"
          />
        </div>
        <div
          className={`absolute right-0 transition-all overflow-hidden ${
            step === 1 ? 'w-full' : 'w-1/2'
          } bg-custom-yellow `}
        >
          <ul
            className={`transition-transform duration-300 ${handleButtonText} h-full flex flex-col gap-4 cursor-pointer`}
          >
            <li className="text-white text-sm" onClick={nextStep}>
              COLORS
            </li>
            <li className="text-white text-sm" onClick={nextStep}>
              ACCESSORIES
            </li>
            <li className="text-white text-sm" onClick={nextStep}>
              SUMMARY
            </li>
            <li className="text-white text-sm">BUY NOW</li>
          </ul>
          <ArrowSvg
            className="absolute top-3 right-1 fill-white"
            height="32px"
            width="32px"
            viewBox="0 0 16 32"
          />
        </div>
      </nav>
    </footer>
  )
}
