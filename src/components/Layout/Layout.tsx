import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
