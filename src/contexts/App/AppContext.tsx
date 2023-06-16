import { createContext, useState } from 'react'
import { Step } from './types'

interface AppContextProps {
  step: Step
  handleStep: (n: Step) => void
  selectedCar: string | null
  setSelectedCar: (n: string | null) => void
  totalPrice: number
  setTotalPrice: (n: number) => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<Step>(1)
  const [selectedCar, setSelectedCar] = useState<string | null>(null)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const handleStep = (n: Step) => {
    setStep(n)
  }

  const values = {
    step,
    handleStep,
    selectedCar,
    setSelectedCar,
    totalPrice,
    setTotalPrice,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
