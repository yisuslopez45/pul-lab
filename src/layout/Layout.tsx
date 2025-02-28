import { JSX } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ( {  children } : { children : JSX.Element } ) => {
    return (
      <div className="flex flex-col min-h-screen" >
          <Header/>
           <main className='flex-grow flex  ' >{children}</main>
          <Footer/>
      </div>
    )
  }
  
  export default Layout