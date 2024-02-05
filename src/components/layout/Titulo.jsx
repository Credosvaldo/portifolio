import styles from '../css/Titulo.module.css'

function Titulo({text}) {
    
    return (
        <h1 className={styles.titulo}>{text}</h1>
    )
}

export default Titulo