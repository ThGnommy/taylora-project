import { useApp } from '../../contexts/App/useApp'

export const HeaderMobile = () => {
  const { step } = useApp()

  return (
    <div className="top-0 z-20 w-full bg-white flex justify-between items-center px-5 py-7">
      {step === 1 && <h1 className="text-2xl md:text-4xl">Select Model</h1>}
      {step === 2 && <h1 className="text-2xl md:text-4xl">Select Color</h1>}
      {step === 3 && <h1 className="text-2xl md:text-4xl">Accessories</h1>}
      {step === 4 && <h1 className="text-2xl md:text-4xl">Summary</h1>}
      <p className="text-custom-grey">Step {step} of 4</p>
    </div>
  )
}
