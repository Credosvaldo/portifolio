import styles from '../css/Projetos.module.css'

import Titulo from '../layout/Titulo'
import Project from '../layout/Project'


import projectImage from '../imgs/projetos/gradeInteligente.jpg'

function Projetos() {

    return (
        <div id='projects'>
            <Titulo text={"Projetos"} />

            <div>
                <Project image={projectImage} link={"http://www.gradeinteligente.com/"} />

            </div>
        </div>
    )
}

export default Projetos