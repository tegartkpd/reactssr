import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      This is our Homess
      <button><Link to='/user'> Click </Link></button>
    </div>
  )
}

export default Home
