import { useEffect, useState } from 'react'
import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export const Footer = () => {
  const [windowSize] = useState<number>(window.innerWidth)

  const customBreakpoint = 1024

  useEffect(() => {
    console.log(windowSize)
  }, [windowSize])

  return (
    <>{windowSize > customBreakpoint ? <DesktopFooter /> : <MobileFooter />}</>
  )
}
