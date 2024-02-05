import styles from '../css/header.module.css'
import logo from '../imgs/logo.png'

function Header() {

    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            
            <div>
                <ul>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#about">Sobre</a></li>
                    {/* <li><a href="#certifications">Certificados</a></li> */}
                    <li><a href="#contact">Contato</a></li>
                </ul>

            </div>

        </header>
    )
}

export default Header

/*
    Projetos
    Sobre
    Habilidades
    Certificadosq   
    Contato

*/