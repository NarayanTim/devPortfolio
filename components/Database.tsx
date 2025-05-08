import React from 'react'
import { dataBase } from '@/data'
import SkillsCard from './SkillsCard'

const Database = () => {
    return (
        <>
            {
                dataBase.map((data, index) => (
                    <SkillsCard key={index} icon={data.icon} title={data.title}/>
                ))
            }
        </>
    )
}

export default Database