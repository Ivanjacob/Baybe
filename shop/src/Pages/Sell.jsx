import React from 'react'
import GrowSpinner from '../Components/Modals/GrowSpinner'

const Sell = () => {
  return (
    <div className='spinner-center'>
        <GrowSpinner size='small' />
        <GrowSpinner size='large' />
        <GrowSpinner size='larger' />
    </div>
  )
}

export default Sell
