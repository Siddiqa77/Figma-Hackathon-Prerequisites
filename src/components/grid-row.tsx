import React, { ReactNode } from 'react'

const Gridrow = ({children}:{children:ReactNode}) => {
  return (
    <div className='grid grid-cols-4 wrapper justify-items-center '>
        {children}
    </div>
  )
}

export default Gridrow