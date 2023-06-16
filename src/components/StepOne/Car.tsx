import { useApp } from '../../contexts/App/useApp'
import { CheckSvg } from '../Utility/Icons'

interface ICar {
  name: string
  starterPrice: string
  defaultImage: string
}

export const Car = ({ name, starterPrice, defaultImage }: ICar) => {
  const { selectedCar, setSelectedCar, setTotalPrice } = useApp()

  const isSelected =
    selectedCar === name
      ? 'bg-custom-yellow w-11 h-11'
      : 'scale-75 bg-white border border-light-grey'

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
  }

  return (
    <div
      className={`relative flex flex-col justify-center items-center py-11 ${
        selectedCar === name ? 'border-custom-yellow' : 'border-light-grey'
      } border-2 rounded cursor-pointer`}
      onClick={handleSelection}
    >
      <h2 className="text-4xl font-bold">{name}</h2>
      <img className="w-96 h-auto mx-12 my-5" src={defaultImage} alt="BMW i3" />
      <p className="mb-10 text-custom-grey">
        from ${Number(starterPrice).toLocaleString().replace(',', '.')}
      </p>
      <div
        className={`absolute bottom-8 transition-all duration-150 rounded-full ${isSelected}`}
      >
        <CheckSvg selectedCar={selectedCar} />
      </div>
    </div>
  )
}
