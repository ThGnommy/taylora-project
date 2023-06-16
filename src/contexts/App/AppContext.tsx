import { createContext, useState } from 'react'
import { Step } from './types'

interface AppContextProps {
  step: Step
  handleStep: (n: Step) => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<Step>(1)
  const [selectedCar, setSelectedCar] = useState<string>()

  const handleStep = (n: Step) => {
    setStep(n)
  }

  const values = {
    step,
    handleStep,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
