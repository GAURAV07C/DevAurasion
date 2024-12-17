
import AboutHeader from '@/components/about/AboutHeader'
import AboutVision from '@/components/about/AboutVision'
import Mentors from '@/components/LandingPage/Mentors'
import Team from '@/components/LandingPage/Team'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
      <AboutHeader />
      <AboutVision />
      <div className='mt-56'>
      <Team />
      </div>
      <Mentors />
      </div>
      
    </div>
  )
}

export default page
