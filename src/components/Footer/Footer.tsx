import { useState } from 'react'
import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'
import { useApp } from '../../contexts/App/useApp'

export const Footer = () => {
  const [windowSize] = useState<number>(window.innerWidth)

  const customBreakpoint = 1024

  return (
    <>{windowSize > customBreakpoint ? <DesktopFooter /> : <MobileFooter />}</>
  )
}
