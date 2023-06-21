import { useState } from 'react'
import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

export const Header = () => {
  const [windowSize] = useState<number>(window.innerWidth)

  const customBreakpoint = 1024

  return (
    <>{windowSize > customBreakpoint ? <HeaderDesktop /> : <HeaderMobile />}</>
  )
}
