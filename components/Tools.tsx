import React from 'react'
import SkillsCard from './SkillsCard'
import { tools } from '@/data'


const Tools = () => {
    return (
        <>
        
            {
                    tools.map((data, index) => (
                        <SkillsCard key={index} icon={data.icon} title={data.title}/>
                    ))
            }
        
        
        </>
    )
}

export default Tools