import { useEffect } from 'react'
import { useApp } from '../../contexts/App/useApp'
import { ColorListProps } from '../StepTwo/types'
import { CarCheckSvg } from '../Utility/Icons'

interface ICar {
  name: string
  starterPrice: string
  defaultImage: string
}

export const Car = ({ name, starterPrice, defaultImage }: ICar) => {
  const {
    selectedCar,
    setSelectedColor,
    setSelectedCar,
    setTotalPrice,
    setSelectedAccessories,
    findSelectedCar,
  } = useApp()

  const isSelected =
    selectedCar === name
      ? 'bg-custom-yellow animate-custom-bounce'
      : 'scale-[0.60] bg-white border-4 border-light-grey'

  const handleSelection = () => {
    if (typeof selectedCar === 'string' && selectedCar.includes(name)) {
      setSelectedCar(null)
      // reset starter price
      setTotalPrice(0)
    } else {
      setSelectedCar(name)

      // add starter price
      const toNumber = Number(starterPrice)
      setTotalPrice(toNumber)
    }

    setSelectedAccessories([])
  }

  useEffect(() => {
    if (typeof selectedCar === 'string' && selectedCar.length !== 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const color = findSelectedCar()[0]?.colors[0]

      setSelectedColor(color)
    } else {
      setSelectedColor(null)
    }
  }, [findSelectedCar, name, selectedCar, setSelectedColor])

  const formattedPrice = Number(starterPrice).toLocaleString().replace(',', '.')

  return (
    <div
      className={`relative flex flex-col justify-center items-center py-11 ${
        selectedCar === name ? 'border-custom-yellow' : 'border-light-grey'
      } border-2 rounded cursor-pointer`}
      onClick={handleSelection}
    >
      <h2 className="text-4xl font-bold">{name}</h2>
      <img className="w-96 h-auto mx-12 my-5" src={defaultImage} alt="BMW i3" />
      <p className="mb-10 text-custom-grey">from ${formattedPrice}</p>
      <div
        className={`absolute -translate-y-1/2 origin-center bottom-2 rounded-full ${isSelected}`}
      >
        <CarCheckSvg selectedCar={selectedCar} />
      </div>
    </div>
  )
}
