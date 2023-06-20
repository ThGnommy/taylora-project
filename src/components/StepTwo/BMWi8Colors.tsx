import { useCallback, useEffect } from 'react'
import { Tooltip } from '../Utility/Tooltip'
import { ColorListProps, ColorType } from './types'
import { useApp } from '../../contexts/App/useApp'

export const BMWi8Colors = ({
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
  const { findSelectedCar, setSelectedColor } = useApp()

  const colorName =
    name === 'Grey Metallic'
      ? 'black'
      : name === 'White Perl Metallic'
      ? 'grey'
      : 'black'

  const handleColors =
    name === 'White Perl Metallic'
      ? 'bg-[#d1d1d1]'
      : name === 'Grey Metallic'
      ? 'bg-[#303539]'
      : 'bg-[#d1d1d1]'

  const colorSelection = useCallback(() => {
    // prevent reselection
    if (colorName === colorState) return

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const colors = findSelectedCar()[0]?.colors
    const currentColor = colors.find(
      (color: ColorListProps) => color.variant === colorState
    )

    setSelectedColor(currentColor)
  }, [colorName, colorState, findSelectedCar, setSelectedColor])

  useEffect(() => {
    colorSelection()
  }, [colorSelection])

  return (
    <Tooltip message={tooltipText}>
      <div
        onClick={() => handleColorSelection(colorName)}
        className={`lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full ring-2 ring-offset-2 ${handleColors} ${
          colorName === colorState ? 'ring-custom-yellow' : 'ring-light-grey'
        } cursor-pointer
  `}
      ></div>
    </Tooltip>
  )
}
