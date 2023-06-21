import { Fragment } from 'react'
import bmwWhite from '../../assets/cars/bmw_i3/white.png'
import bmwOrange from '../../assets/cars/bmw_i3/orange.png'
import bmwBlack from '../../assets/cars/bmw_i3/black.png'
import bmw2Black from '../../assets/cars/bmw_i8/black.png'
import bmw2Grey from '../../assets/cars/bmw_i8/grey.png'
import { useEffect, useState } from 'react'
import { useApp } from '../../contexts/App/useApp'
import { ColorListProps, ColorType } from './types'
import { BMWi3Colors } from './BMWi3Colors'
import { BMWi8Colors } from './BMWi8Colors'
import { easeInOut, motion } from 'framer-motion'

export const StepTwo = () => {
  const { findSelectedCar, selectedCar, setTotalPrice, selectedColor } =
    useApp()

  const [img, setImg] = useState(
    selectedCar === 'BMW i3' ? bmwWhite : bmw2Black
  )
  const [color, setColor] = useState<ColorType>(
    selectedCar === 'BMW i3' ? 'white' : 'black'
  )
  const [colorList, setColorList] = useState([])

  const handleColorSelection = (color: ColorType) => {
    setColor(color)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const colors = findSelectedCar()[0]?.colors
    setColorList(colors)
  }, [findSelectedCar])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const defaultPrice = findSelectedCar()[0].starter_price

    setTotalPrice(Number(defaultPrice) + Number(selectedColor?.price))
  }, [findSelectedCar, selectedColor?.price, setTotalPrice])

  useEffect(() => {
    const handleImage = () => {
      if (selectedCar === 'BMW i3') {
        if (color === 'white') setImg(bmwWhite)
        else if (color === 'orange') setImg(bmwOrange)
        else if (color === 'black') setImg(bmwBlack)
      } else if (selectedCar === 'BMW i8') {
        if (color === 'grey') setImg(bmw2Grey)
        else if (color === 'black') setImg(bmw2Black)
      }
    }

    handleImage()
  }, [color, colorList, selectedCar])

  return (
    <motion.div
      key="step-two"
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.2, ease: easeInOut },
      }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.5 } }}
      className="flex flex-col justify-center items-center lg:mt-[170px]"
    >
      <motion.img className="w-[750px] h-auto" src={img} alt="" />
      <motion.section className="flex gap-6 mt-8">
        {colorList.map((c: ColorListProps) => {
          return (
            <Fragment key={c.name}>
              {selectedCar === 'BMW i3' && (
                <BMWi3Colors
                  colorState={color}
                  name={c.name}
                  tooltipText={`${c.name} - $${c.price}`}
                  handleColorSelection={handleColorSelection}
                />
              )}
              {selectedCar === 'BMW i8' && (
                <BMWi8Colors
                  colorState={color}
                  name={c.name}
                  tooltipText={`${c.name} - $${c.price}`}
                  handleColorSelection={handleColorSelection}
                />
              )}
            </Fragment>
          )
        })}
      </motion.section>
    </motion.div>
  )
}
