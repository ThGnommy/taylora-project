import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/Layout/Layout'
import StepOne from './components/StepOne'
import StepThree from './components/StepThree'
import { StepTwo } from './components/StepTwo/StepTwo'
import Summary from './components/Summary'
import { useApp } from './contexts/App/useApp'

const App = () => {
  const { step } = useApp()

  return (
    <Layout>
      <AnimatePresence>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <Summary />}
      </AnimatePresence>
    </Layout>
  )
}

export default App
