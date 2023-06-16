import bmwWhite from '../../assets/cars/bmw_i3/white.png'
import bmwOrange from '../../assets/cars/bmw_i3/orange.png'
import bmwBlack from '../../assets/cars/bmw_i3/black.png'
import { useEffect, useState } from 'react'
import { Tooltip } from '../Utility/Tooltip'

export const StepTwo = () => {
  const [img, setImg] = useState(bmwWhite)
  const [color, setColor] = useState<'white' | 'orange' | 'black'>('white')

  const handleColorSelection = (color: 'white' | 'orange' | 'black') => {
    setColor(color)
  }

  useEffect(() => {
    if (color === 'white') setImg(bmwWhite)
    else if (color === 'orange') setImg(bmwOrange)
    else if (color === 'black') setImg(bmwBlack)
  }, [color])

  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-[750px] h-auto" src={img} alt="" />
      <section className="flex gap-6 mt-8">
        <Tooltip message="White - $0">
          <div
            onClick={() => handleColorSelection('white')}
            className={`w-[50px] h-[50px] bg-white rounded-full ring-2 ring-offset-2 ${
              color === 'white' ? 'ring-custom-yellow' : 'ring-light-grey'
            } cursor-pointer
          `}
          ></div>
        </Tooltip>
        <Tooltip message="Mineral Grey - $550">
          <div
            onClick={() => handleColorSelection('black')}
            className={`w-[50px] h-[50px] bg-[#303539] rounded-full ring-2 ring-offset-2 ${
              color === 'black' ? 'ring-custom-yellow' : 'ring-light-grey'
            } cursor-pointer
          `}
          ></div>
        </Tooltip>
        <Tooltip message="Orange Metallic - $550">
          <div
            onClick={() => handleColorSelection('orange')}
            className={`w-[50px] h-[50px] bg-[#cf5a16] rounded-full ring-2 ring-offset-2 ${
              color === 'orange' ? 'ring-custom-yellow' : 'ring-light-grey'
            } cursor-pointer`}
          ></div>
        </Tooltip>
      </section>
    </div>
  )
}

// black #303539
// orange #cf5a16
