import styles from '../css/Project.module.css'

import { Link } from 'react-router-dom'


function Project({ image, link }) {

    return (
            <a className={styles.box} href={link} target='blank'>
                {
                    image ?
                    <div className={styles.project}>
                        <img src={image} alt="Imagem" />
                    </div>
                    :
                    <div className={styles.shortly}>
                        <h1>Em breve</h1>
                    </div>

                }
            </a>


    )
}

export default Project