import React from 'react'
import ScrollVelocity from '../../../shared/components/Scrollingtext'

const Scrolling = () => {
  return (
    <div>
       <div className='text-gray-300 pb-10 pt-7'>
        <ScrollVelocity
          texts={['NEXA MARKETING', 'GROW YOUR BUSINESS WITH NEXA']}
          velocity={100}
          className='custom-scroll-text'
        />
      </div>
    </div>
  )
}

export default Scrolling
