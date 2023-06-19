import { Accessory } from './Accessory'
import { useApp } from '../../contexts/App/useApp'
import { useEffect, useState } from 'react'
import { AccessoryProps } from './types'

export const StepThree = () => {
  const { findSelectedCar, setSelectedAccessories } = useApp()

  const [accessoriesList, setAccessoriesList] = useState<AccessoryProps[]>([])

  // const updateTotalPrice = () => {
  //   const priceConverted = Number(selectedColor?.price)
  //   setTotalPrice(totalPrice + priceConverted)
  // }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessories = findSelectedCar()[0]?.accessories
    setAccessoriesList(accessories)
  }, [findSelectedCar, setSelectedAccessories])

  return (
    <div className="w-full max-w-[1000px] flex flex-col gap-5 mb-[200px]">
      {accessoriesList.map((accessory) => (
        <Accessory
          id={accessory.id}
          key={accessory.id}
          name={accessory.name}
          price={accessory.price}
        />
      ))}
    </div>
  )
}
