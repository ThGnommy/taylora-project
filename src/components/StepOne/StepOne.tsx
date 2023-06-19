import { Car } from './Car'
import carsData from '../../cars-data.json'
import bmwi3Image from '../../assets/cars/bmw_i3/white.png'
import bmwi8Image from '../../assets/cars/bmw_i8/black.png'

export const StepOne = () => {
  return (
    <div className="flex justify-center gap-11 items-center flex-wrap pb-28 mt-[170px]">
      {carsData.map((car, i) => (
        <Car
          key={car.name}
          name={car.name}
          defaultImage={i % 2 ? bmwi8Image : bmwi3Image}
          starterPrice={car.starter_price}
        />
      ))}
    </div>
  )
}
