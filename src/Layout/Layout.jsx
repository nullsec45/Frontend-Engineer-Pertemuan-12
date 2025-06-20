import React from 'react'
import { Navbar,Footer, Container } from '../components'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <main>
          <Container>
          {children}
          </Container>
        </main>
        <Footer />
    </>
  )
}

export default Layout
