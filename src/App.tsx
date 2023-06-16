import { Layout } from './components/Layout/Layout'
import StepOne from './components/StepOne'
import { StepTwo } from './components/StepTwo/StepTwo'
import { useApp } from './contexts/App/useApp'

const App = () => {
  const { step } = useApp()

  return (
    <Layout>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
    </Layout>
  )
}

export default App
