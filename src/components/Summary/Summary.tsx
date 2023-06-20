import { useApp } from '../../contexts/App/useApp'
import { easeInOut, motion } from 'framer-motion'

export const Summary = () => {
  const { selectedColor, selectedCar, selectedAccessories } = useApp()

  const handleColors =
    selectedColor?.name === 'White Perl Metallic'
      ? 'bg-[#d1d1d1]'
      : selectedColor?.name === 'Grey Metallic'
      ? 'bg-[#303539]'
      : selectedColor?.name === 'White'
      ? 'bg-white'
      : selectedColor?.name === 'Mineral Grey'
      ? 'bg-[#303539]'
      : selectedColor?.name === 'Orange Metallic'
      ? 'bg-[#cf5a16]'
      : 'bg-white'

  return (
    <motion.div
      key="summary"
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.2, ease: easeInOut },
      }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.5 } }}
      className="w-full max-w-[1000px] flex flex-col justify-center lg:items-center items-start px-12 pb-28 mt-[170px]"
    >
      <div className="flex flex-col justify-center items-center mb-9">
        <hr className="w-8 border mb-2" />
        <p className="text-lg font-bold tracking-widest">MODEL</p>
      </div>
      <img
        className="max-w-[700px] w-full h-auto mb-8"
        src={selectedColor?.image}
        alt=""
      />
      <h2 className="text-[40px] font-bold">{selectedCar}</h2>
      <p className="text-left lg:text-center text-custom-grey text-lg mb-16">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione
        nulla atque molestias at explicabo aperiam reprehenderit culpa nihil,
        quis totam cupiditate dolores in quisquam magnam inventore nobis, rem
        adipisci eveniet illum.
      </p>
      <div className="flex flex-col justify-center items-center mb-9">
        <hr className="w-8 border mb-2" />
        <p className="text-lg font-bold tracking-widest">COLOR</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div
          className={`${handleColors} lg:w-[50px] lg:h-[50px] w-10 h-10 rounded-full ring-2 ring-offset-2 ring-light-grey`}
        ></div>
        <p className="text-2xl">
          {selectedColor?.name} - ${selectedColor?.price}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mb-9 mt-16">
        <hr className="w-8 border mb-2" />
        <p className="text-lg font-bold tracking-widest">ACCESSORIES</p>
      </div>
      <ul className="flex flex-col justify-center lg:items-center items-start list-disc">
        {selectedAccessories.length > 0 ? (
          selectedAccessories.map((accessory) => (
            <li
              key={accessory.id}
              className="text-custom-grey text-lg list-disc marker:text-custom-grey"
            >
              {accessory.name}
            </li>
          ))
        ) : (
          <li className="text-custom-grey text-lg list-disc marker:text-custom-grey">
            No Accessories selected;
          </li>
        )}
      </ul>
    </motion.div>
  )
}
