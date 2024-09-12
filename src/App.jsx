import React from 'react'
import Navbar from './components/Navbar'
import Champion from './components/Champion'
import Digi_Analytics from './components/Digi_Analytics'
import Newsletter from './components/Newsletter'
import Subscription from './components/Subscription'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Champion />
        <Digi_Analytics />
        <Newsletter />
        <Subscription />
        <Footer />
      </div>
        
    </>
  )
}

export default App
