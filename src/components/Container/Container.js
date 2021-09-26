import React, { useEffect, useState } from 'react'
import School from '../School/School'
import Box from '../Cart/Box'
import './container.css'

const Container = () => {
  const [schools, setSchools] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('./universities.JSON')
      .then((res) => res.json())
      .then((data) => setSchools(data))
  }, [])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  }
  return (
    <div className='container'>
      <div className='school-cards'>
        {schools.map((school) => (
          <School
            key={school.name}
            sc={school}
            handle={handleAddToCart}
            // img = {school.img}
            // name = {school.name}
            // established = {school.established}
            // students={school.students}
            // location={school.location}
          ></School>
        ))}
      </div>
      <div className='cart'>
        <Box added={cart}></Box>
      </div>
    </div>
  )
}

export default Container
