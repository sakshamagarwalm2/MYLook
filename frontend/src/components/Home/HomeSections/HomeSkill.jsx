import React from 'react'
import { AuroraBackground } from './AuroBackground'
import { IconCloudDemo } from './Skills/IconSlug'

const HomeSkill = () => {
  return (
    <div className='w-full h-screen'>
        <div className="w-full h-full absolute">
        <AuroraBackground/>
        </div>
        <div className="w-full h-full relative flex flex-col justify-around  items-center text-white">
        <div className="w-full orditron text-4xl relative pt-5 text-center h-40">Skills.</div>
        <IconCloudDemo/>
        </div>
    </div>
  )
}

export default HomeSkill