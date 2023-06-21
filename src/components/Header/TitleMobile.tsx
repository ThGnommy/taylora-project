import { easeInOut, motion } from 'framer-motion'
import { useApp } from '../../contexts/App/useApp'

export const TitleMobile = ({ text }: { text: string }) => {
  const { step } = useApp()

  return (
    <motion.div
      key={text}
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.5, ease: easeInOut },
      }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
      className="top-0 z-20 w-full bg-white flex justify-between items-center px-5 py-7"
    >
      <h1 className="text-2xl md:text-4xl">{text}</h1>
      <p className="text-custom-grey">Step {step} of 4</p>
    </motion.div>
  )
}
