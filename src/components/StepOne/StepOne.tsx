import { Car } from './Car'
import carsData from '../../cars-data.json'
import bmwi3Image from '../../assets/cars/bmw_i3/white.png'
import bmwi8Image from '../../assets/cars/bmw_i8/black.png'
import { motion, easeInOut } from 'framer-motion'
import { useEffect } from 'react'
import { useApp } from '../../contexts/App/useApp'

export const StepOne = () => {
  const {
    setSelectedAccessories,
    setTotalPrice,
    findSelectedCar,
    selectedCar,
  } = useApp()

  useEffect(() => {
    setSelectedAccessories([])

    if (selectedCar) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const defaultPrice = findSelectedCar()[0].starter_price
      setTotalPrice(Number(defaultPrice))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      key="step-one"
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.5, ease: easeInOut },
      }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
      className="absolute flex justify-center gap-11 items-center flex-wrap pb-28 lg:mt-[170px] px-6"
    >
      {carsData.map((car, i) => (
        <Car
          key={car.name}
          name={car.name}
          defaultImage={i % 2 ? bmwi8Image : bmwi3Image}
          starterPrice={car.starter_price}
        />
      ))}
    </motion.div>
  )
}
