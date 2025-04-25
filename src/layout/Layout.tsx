import { JSX } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ( {  children } : { children : JSX.Element } ) => {
    return (
      <div className="flex flex-col min-h-screen bg-linear-to-bl from-lila-600 to-lila-100 " >
          <Header/>
          <section className='flex-grow flex justify-center' >
           <main className=' sm:max-w-full md:max-w-full lg:max-w-7xl w-full ' >{children}</main>            
          </section>
          <Footer/>
      </div>
    )
  }
  
  export default Layout