import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { FooterSocial } from '../FooterSocial'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FooterSocial />
    </>
  )
}

export default RootLayout