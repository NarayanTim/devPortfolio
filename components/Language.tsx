import React from 'react'
import { techSkills } from '@/data'
import SkillsCard from './SkillsCard'

const Language = () => {
    return (
        <>
        
        {
                techSkills.map((data, index) => (
                    <SkillsCard key={index} icon={data.icon} title={data.title}/>
                ))
        }
        
        </>
    )
}

export default Language