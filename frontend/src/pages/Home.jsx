import React from 'react'
import '../Style/home.css'
import Background from '../component/Background'
import About from './About'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div className='home'>
      <div className=''>
        <Background/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home