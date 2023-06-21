import { Accessory } from './Accessory'
import { useApp } from '../../contexts/App/useApp'
import { useEffect, useState } from 'react'
import { AccessoryProps } from './types'
import { easeInOut, motion } from 'framer-motion'

export const StepThree = () => {
  const { findSelectedCar, setSelectedAccessories } = useApp()

  const [accessoriesList, setAccessoriesList] = useState<AccessoryProps[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessories = findSelectedCar()[0]?.accessories
    setAccessoriesList(accessories)
  }, [findSelectedCar, setSelectedAccessories])

  return (
    <motion.div
      key="step-three"
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.2, ease: easeInOut },
      }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.5 } }}
      className="w-full max-w-[1000px] flex flex-col gap-5 mb-[200px] lg:mt-[170px] px-6"
    >
      {accessoriesList.map((accessory) => (
        <Accessory
          id={accessory.id}
          key={accessory.id}
          name={accessory.name}
          price={accessory.price}
        />
      ))}
    </motion.div>
  )
}
