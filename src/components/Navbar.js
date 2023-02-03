import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const amount = useSelector(state => state.amount);  // takes amount from the current state  
  return (
    <div>
        <button className="btn btn-primary mt-4" disabled={true}> { amount } </button>
    </div>
  )
}

export default Navbar
