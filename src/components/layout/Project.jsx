import styles from '../css/Project.module.css'

import { Link } from 'react-router-dom'


function Project({image, link}) {

    return (
        <div className={styles.project}>
            <a href={link} target='blank'>
                <img src={image} alt="Imagem" />
            </a>
        </div>

        
    )
}

export default Project