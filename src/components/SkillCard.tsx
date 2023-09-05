import React from 'react';
import { Skill } from '../models/Skill';

type SkillCardProps = {
    skill: Skill
}

export function SkillCard(props:SkillCardProps) {
    const { skill } = props;

    return (
        <div className="basis-1/3 sm:basis-1/6 md:basis-1/8 lg:basis-1/12 grow sm:grow-0 not-prose">
            <img className="aspect-square w-full" src={skill.image} />
            <div className="bg-gray-800 w-full p-1 text-center prose"><p className='invert'>{skill.name}</p><p className='invert'>{skill.years}+ years</p></div>
        </div>
    );
}