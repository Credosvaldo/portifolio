import styles from '../css/Skills.module.css'

import { useState } from 'react'

import Titulo from '../layout/Titulo'
import Skill from "../layout/Skill"
import SkillDescription from '../layout/SkillDescription'

import { SiSpring } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiReact } from 'react-icons/si'


function Skills() {

    const skills = [
        {
            name: "Spring Boot",
            description: "O spring isso ipring aquilo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae unde aut sed excepturi? Exercitationem deleniti aperiam iure dolore. Repudiandae ad sed deserunt consectetur sunt, delectus error voluptatem culpa quasi fugi",
            svg: <SiSpring size={"5em"} />,
        },

        {
            name: "React",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae unde aut sed excepturi? Exercitationem deleniti aperiam iure dolore. Repudiandae ad sed deserunt consectetur sunt, delectus error voluptatem culpa quasi fugi",
            svg: <SiReact size={"5em"} />,
        },

        {
            name: "Github",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae unde aut sed excepturi? Exercitationem deleniti aperiam iure dolore. Repudiandae ad sed deserunt consectetur sunt, delectus error voluptatem culpa quasi fugi",
            svg: <SiGithub size={"5em"} />,
        },

        {
            name: "HTML",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae unde aut sed excepturi? Exercitationem deleniti aperiam iure dolore. Repudiandae ad sed deserunt consectetur sunt, delectus error voluptatem culpa quasi fugi",
            svg: <SiHtml5 size={"5em"} />,
        },

        {
            name: "CSS",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae unde aut sed excepturi? Exercitationem deleniti aperiam iure dolore. Repudiandae ad sed deserunt consectetur sunt, delectus error voluptatem culpa quasi fugi",
            svg: <SiCss3 size={"5em"} />,
        },

        {
            name: "JavaScript",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae unde aut sed excepturi? Exercitationem deleniti aperiam iure dolore. Repudiandae ad sed deserunt consectetur sunt, delectus error voluptatem culpa quasi fugi",
            svg: <SiJavascript size={"5em"} />,
        }, 
        

    ]
    
    const [skill, setSkill ] = useState(0)

    return (
        <div id="skills">
            <Titulo text={"Habilidades"} />

            <div className={`row`}>

                <div className='col-6 row' >
                    {
                        skills.map((skill, index) => <Skill key={index} skillId={index} svg={skill.svg} setCurrentSkill={setSkill} />)
                    }
                </div>

                <div className='col-6'>
                    <SkillDescription skill={skills[skill]} />
                </div>

            </div>

        </div>
    )
}

export default Skills


