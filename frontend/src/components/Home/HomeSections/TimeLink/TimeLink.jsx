import React from 'react'
import TimeLine from './TimeLine'
import { Typography } from '@mui/material'

const TimeLink = () => {
  return (
    <div className='w-full h-screen text-center bg-light text-black pt-5 rounded-t-none rounded-b-3xl border-b-8 bg-grid-small-black/[0.2] border-b-stone-300'>
      <div className='md:h-40 h-10'>
      <Typography variant='font-extrabold text-xl md:text-5xl h-full'>TIME-LINK</Typography>
      </div>
      <TimeLine timelines={[1,2,3,4]}/>
    </div>
  )
}

export default TimeLink