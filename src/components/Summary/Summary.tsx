import React from 'react'
import { useApp } from '../../contexts/App/useApp'

export const Summary = () => {
  const { selectedColor, selectedCar, selectedAccessories } = useApp()

  return (
    <div className="flex flex-col justify-center items-center px-12 pb-28">
      <div>
        <hr />
        <p>MODEL</p>
      </div>
      <img className="max-w-[700px]" src={selectedColor?.image} alt="" />
      <h2>{selectedCar}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione
        nulla atque molestias at explicabo aperiam reprehenderit culpa nihil,
        quis totam cupiditate dolores in quisquam magnam inventore nobis, rem
        adipisci eveniet illum.
      </p>
      <div>
        <hr />
        <p>COLOR</p>
      </div>
      <div>...color</div>
      <div></div>
      <div>
        <hr />
        <p>ACCESSORIES</p>
      </div>
      <ul>
        {selectedAccessories.map((accessory) => (
          <li className="list-disc marker:text-custom-grey">
            {accessory.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
