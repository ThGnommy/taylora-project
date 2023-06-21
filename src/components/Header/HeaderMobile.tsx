import { useApp } from '../../contexts/App/useApp'
import { TitleMobile } from './TitleMobile'

export const HeaderMobile = () => {
  const { step } = useApp()

  return (
    <>
      {step === 1 && <TitleMobile key="1" text="Select Model" />}
      {step === 2 && <TitleMobile key="2" text="Select Color" />}
      {step === 3 && <TitleMobile key="3" text="Accessories" />}
      {step === 4 && <TitleMobile key="4" text="Summary" />}
    </>
  )
}
