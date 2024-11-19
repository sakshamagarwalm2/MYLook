
import { Typography } from '@mui/material'
import TimeLine from './TimeLine'


const TimeLink = () => {


  return (
    <div className='w-full h-auto text-center bg-light pb-4 text-black pt-5 rounded-t-none rounded-b-3xl border-b-8 bg-grid-small-black/[0.2] border-b-stone-300'>
      <div className=' mt-5 mb-8'>
      <Typography variant='font-extrabold text-5xl md:text-7xl h-full' style={{ fontWeight: '900' }}>TIME-LINK_</Typography>
      </div>
      <TimeLine/>
    </div>
  )
}

export default TimeLink