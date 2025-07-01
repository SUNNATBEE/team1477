import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Zapas from './components/zapas'
import Tovar from './components/Tovar'
import Product from './components/Product'
import Restoran from './components/Restoran'
import Form from './components/Form'
import Swiper from './components/Swiper'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
    <Header/> { /* Doni / */}
    <Hero/>  { /* Doni / */}
    <Zapas/>  { /* Doni / */}
    <Tovar/>  { /* Boisxon / */}
    <Product/>  { /* Boisxon / */}
    <Restoran/> { /* Hayot / */}
    <Form/> { /* Said / */}
    <Swiper/> { /* Said / */}
    <Footer/> { /* Qudrat / */}
    </div>
  )
}

export default App