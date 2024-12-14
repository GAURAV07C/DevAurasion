import React from 'react'
import TeamSection from '../common/TeamSection'
import { teams } from '@/data/team'
const Team = () => {
  return (
    <TeamSection
      title="Introducing Our Team"
      description="Get to Know the Passionate Professionals Who Bring Our Vision to Life and Make Your Goals Their Mission"
      people={teams}
    />
  )
}

export default Team
