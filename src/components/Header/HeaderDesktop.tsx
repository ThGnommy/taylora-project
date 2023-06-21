import { useApp } from '../../contexts/App/useApp'
import { Step } from '../../contexts/App/types'

export const HeaderDesktop = () => {
  const { step, handleStep, selectedCar } = useApp()

  const handleSelection = (step: Step) => {
    if (selectedCar === null) return
    handleStep(step)
  }

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

  const disabledColor =
    '!text-[rgb(93,124,137)]/50 !hover:text-[rgb(93,124,137)]/50'

  return (
    <div
      className="fixed top-0 z-10 w-full bg-white flex flex-col
      after:w-full after:h-[70px] after:bg-white-fadeout after:top-full after:absolute
      "
    >
      <h1 className="text-4xl font-bold mt-10 mb-7">Product Builder</h1>
      <nav className="flex justify-center">
        <ul className="flex text-sm font-semibold gap-2 box-border tracking-[0.1em]">
          <li
            onClick={() => handleSelection(1)}
            className={`transition-colors px-3 py-2 border-custom-yellow ${modelsColor} hover:text-custom-yellow`}
          >
            <a href="#">MODELS</a>
          </li>
          <li
            onClick={() => handleSelection(2)}
            className={`${
              selectedCar === null && disabledColor
            } transition-colors px-3 py-2 border-custom-yellow ${colorsColor} hover:text-custom-yellow`}
          >
            <a href="#">COLORS</a>
          </li>
          <li
            onClick={() => handleSelection(3)}
            className={`${
              selectedCar === null && disabledColor
            } transition-colors px-3 py-2 border-custom-yellow ${accessoriesColor} hover:text-custom-yellow`}
          >
            <a href="#">ACCESSORIES</a>
          </li>
          <li
            onClick={() => handleSelection(4)}
            className={`${
              selectedCar === null && disabledColor
            } transition-colors px-3 py-2 border-custom-yellow ${summaryColor} hover:text-custom-yellow`}
          >
            <a href="#">SUMMARY</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
