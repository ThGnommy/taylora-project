import { useCallback, useEffect } from 'react'
import { Tooltip } from '../Utility/Tooltip'
import { ColorListProps, ColorType } from './types'
import { useApp } from '../../contexts/App/useApp'

export const BMWi3Colors = ({
  name,
  tooltipText,
  colorState,
  handleColorSelection,
}: {
  name: string
  tooltipText: string
  colorState: ColorType
  handleColorSelection: (color: ColorType) => void
}) => {
  const { findSelectedCar, setSelectedPriceColor } = useApp()

  const colorName =
    name === 'White'
      ? 'white'
      : name === 'Mineral Grey'
      ? 'black'
      : name === 'Orange Metallic'
      ? 'orange'
      : 'white'

  const handleColors =
    name === 'White'
      ? 'bg-white'
      : name === 'Mineral Grey'
      ? 'bg-[#303539]'
      : name === 'Orange Metallic'
      ? 'bg-[#cf5a16]'
      : 'bg-white'

  const colorSelection = useCallback(() => {
    // prevent reselection
    if (colorName === colorState) return

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const colors = findSelectedCar()[0]?.colors
    const selectedColor = colors.find(
      (color: ColorListProps) => color.variant === colorState
    )
    setSelectedPriceColor(Number(selectedColor.price))
  }, [colorName, colorState, findSelectedCar, setSelectedPriceColor])

  useEffect(() => {
    colorSelection()
  }, [colorSelection])

  return (
    <Tooltip message={tooltipText}>
      <div
        onClick={() => handleColorSelection(colorName)}
        className={`w-[50px] h-[50px] rounded-full ring-2 ring-offset-2 ${handleColors} ${
          colorName === colorState ? 'ring-custom-yellow' : 'ring-light-grey'
        } cursor-pointer
  `}
      ></div>
    </Tooltip>
  )
}

// black #303539
// orange #cf5a16
