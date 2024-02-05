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
import { SiMysql } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'


function Skills() {

    const skills = [
        {
            name: "Spring Boot",
            description: 'O Java Spring Boot (Spring Boot) é uma ferramenta que facilita e agiliza o desenvolvimento de aplicativos da web e de microsserviços com o Spring Framework por meio de três principais recursos: Autoconfiguração. Uma abordagem opinativa à configuração. A capacidade de criar aplicativos independentes.',
            svg: <SiSpring size={"100%"} />,
        },

        {
            name: "React",
            description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
            svg: <SiReact size={"100%"} />,
        },

        {
            name: "MySQL",
            description: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.',
            svg: <SiMysql size={"100%"} />,
        },

        {
            name: "Git",
            description: 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.',
            svg: <SiGit size={"100%"} />,
        },

        {
            name: "Github",
            description: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.',
            svg: <SiGithub size={"100%"} />,
        },

        {
            name: "C++",
            description: 'C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores.',
            svg: <SiCplusplus size={"100%"} />,
        }

        // {
        //     name: "HTML",
        //     description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.',
        //     svg: <SiHtml5 size={"100%"} />,
        // },

        // {
        //     name: "CSS",
        //     description: 'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.',
        //     svg: <SiCss3 size={"100%"} />,
        // },

        // {
        //     name: "JavaScript",
        //     description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
        //     svg: <SiJavascript size={"100%"} />,
        // }, 

        // {
        //     name: "JavaScript",
        //     description: '',
        //     svg: <SiJavascript size={"5em"} />,
        // }, 
        

    ]
    
    const [skill, setSkill ] = useState(0)

    return (
        <div id="skills">
            <Titulo text={"Habilidades"} />

            <div className={`row`}>

                <div className='col-md-6 col-12 row' >
                    {
                        skills.map((skill, index) => <Skill key={index} skillId={index} svg={skill.svg} setCurrentSkill={setSkill} />)
                    }
                </div>

                <div className='col-md-6 col-12'>
                    <SkillDescription skill={skills[skill]} />
                </div>

            </div>

        </div>
    )
}

export default Skills


