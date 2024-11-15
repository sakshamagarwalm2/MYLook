import React from 'react'
import { AuroraBackground } from './AuroBackground'

const HomeSkill = () => {
  return (
    <div className='w-full h-screen'>
        <div className="w-full h-full absolute">
        <AuroraBackground/>
        </div>
        <div className="w-full h-full relative flex flex-col justify-around  items-center text-white">
        skill
        </div>
    </div>
  )
}

export default HomeSkill