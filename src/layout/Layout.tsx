import { JSX } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ( {  children } : { children : JSX.Element } ) => {
    return (
      <div className="flex flex-col min-h-screen bg-linear-to-bl from-lila-600 to-lila-100" >
          <Header/>
           <main className='flex-grow flex ' >{children}</main>
          <Footer/>
      </div>
    )
  }
  
  export default Layout