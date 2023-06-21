import { createContext, useState } from 'react'
import { Step } from './types'
import carsData from '../../cars-data.json'
import { AccessoryProps } from '../../components/StepThree/types'
import { ColorListProps } from '../../components/StepTwo/types'
interface AppContextProps {
  step: Step
  setStep: (n: Step) => void
  selectedCar: string | null
  setSelectedCar: (n: string | null) => void
  totalPrice: number
  setTotalPrice: (n: number) => void
  findSelectedCar: () => void
  selectedColor: ColorListProps | null
  setSelectedColor: (n: ColorListProps | null) => void
  selectedAccessories: AccessoryProps[]
  setSelectedAccessories: (acc: AccessoryProps[]) => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<Step>(1)
  const [selectedCar, setSelectedCar] = useState<string | null>(null)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [selectedColor, setSelectedColor] = useState<ColorListProps | null>(
    null
  )
  const [selectedAccessories, setSelectedAccessories] = useState<
    AccessoryProps[]
  >([])

  const findSelectedCar = () =>
    carsData.filter((car) => car.name === selectedCar)

  const values = {
    step,
    setStep,
    selectedCar,
    setSelectedCar,
    totalPrice,
    setTotalPrice,
    findSelectedCar,
    selectedColor,
    setSelectedColor,
    selectedAccessories,
    setSelectedAccessories,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
