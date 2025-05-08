import React from 'react'
import SkillsCard from './SkillsCard'
import { frameworks } from '@/data'

const Framework = () => {
    return (
        <>

            {
                frameworks.map((data, index) => (
                    <SkillsCard key={index} icon={data.icon} title={data.title}/>
                ))
            }
        
        </>
    )
}

export default Framework