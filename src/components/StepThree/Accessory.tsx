import { useApp } from '../../contexts/App/useApp'
import { AccessoryCheckSvg } from '../Utility/Icons'
import { AccessoryProps } from './types'

export const Accessory = ({ id, name, price }: AccessoryProps) => {
  const {
    findSelectedCar,
    selectedAccessories,
    setSelectedAccessories,
    totalPrice,
    setTotalPrice,
  } = useApp()

  const isSelected = selectedAccessories.some((acc) => acc.id === id)

  const checkStyles = isSelected
    ? 'bg-custom-yellow animate-custom-bounce-2'
    : 'scale-[0.65] bg-white border-2 border-light-grey'

  const formattedPrice = Number(price).toLocaleString().replace(',', '.')

  const handleAccessory = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessories = findSelectedCar()[0]?.accessories

    const findAccessory: AccessoryProps = accessories.find(
      (acc: { name: string }) => name === acc.name
    )

    const accessoryExistedInState = selectedAccessories?.some(
      (acc) => id === acc.id
    )

    if (accessoryExistedInState) {
      const updated = selectedAccessories.filter((acc) => acc.id !== id)
      setSelectedAccessories(updated)

      // update total price
      const updatedPrice: number = totalPrice - Number(findAccessory.price)
      setTotalPrice(updatedPrice)
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setSelectedAccessories((prev) => [...prev, findAccessory])
      // update total price
      const updatedPrice: number = totalPrice + Number(findAccessory.price)

      setTotalPrice(updatedPrice)
    }
  }

  return (
    <div
      className={`relative flex lg:flex-row flex-col lg:justify-start justify-start lg:h-auto h-44 items-center p-9 w-full border-2 rounded cursor-pointer transition ${
        isSelected ? 'border-custom-yellow' : 'border-light-grey'
      }`}
      onClick={handleAccessory}
    >
      <p className="lg:text-[26px] text-lg font-bold">{name}</p>
      <div>
        <p className="lg:absolute relative lg:-translate-y-1/2 lg:origin-center lg:top-1/2 lg:right-[102px] lg:text-[26px] text-base lg:font-bold font-normal">
          ${formattedPrice}
        </p>
        <div
          className={`absolute -translate-y-1/2 translate-x-1/2 lg:right-12 right-1/2 lg:top-1/2 top-32 rounded-md transition-all duration-150 ${checkStyles}`}
        >
          <AccessoryCheckSvg accessorySelected={isSelected} />
        </div>
      </div>
    </div>
  )
}
