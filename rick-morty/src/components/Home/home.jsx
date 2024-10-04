// import React, { useContext } from 'react'
import { Context } from '../../context/context'
import Card from "../Card/card"
import Navbar from '../Navbar/navbar'

const Home = () => {

  return (
    <Context>
      <Navbar />
      <Card />
    </Context>
  )
}

export default Home;