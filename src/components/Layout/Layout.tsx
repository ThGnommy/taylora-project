import React from 'react'
import Header from '../Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen">
      <Header />
      {children}
    </main>
  )
}
