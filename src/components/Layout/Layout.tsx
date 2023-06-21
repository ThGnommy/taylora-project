import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Header />
      <div className="flex justify-center w-full py-11 overflow-hidden">
        {children}
      </div>
      <Footer />
    </main>
  )
}
