import styles from '../css/Projetos.module.css'

import Titulo from '../layout/Titulo'
import Project from '../layout/Project'


import projectImage from '../imgs/projetos/gradeInteligente.jpg'

function Projetos() {

    return (
        <div id='projects' data-aos="fade-left">
            <Titulo text={"Projetos"} />

            <div className={styles.projetos}>
                <Project image={projectImage} link={"http://www.gradeinteligente.com/"} />
                <Project />
      
            </div>
        </div>
    )
}

export default Projetos