import styles from '../css/About.module.css'

import Titulo from '../layout/Titulo'

import foto from '../imgs/foto.png'

function About() {
    
    return (
        <div id="about" className={styles.about}>
            <Titulo text={"Sobre mim"} />

            <div className='d-flex flex-wrap align-items-center justify-content-center'>
                <div className={`col-md-6`}>
                    <img src={foto} alt="Foto" />
                </div>
                <div className='col-md-6 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt voluptatibus rem? Hic, cumque atque corrupti necessitatibus illum aspernatur labore sit veniam reiciendis ducimus ipsa explicabo fugiat voluptate doloremque numquam!
                </div>
            </div>
        </div>
    )
}

export default About