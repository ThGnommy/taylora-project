import { useState } from 'react'
import { Car } from './Car'

export const StepOne = () => {
  const [selected, setSelected] = useState(false)

  return (
    <div className="flex justify-center gap-11 items-center flex-wrap">
      <Car />
      <Car />
    </div>
  )
}
