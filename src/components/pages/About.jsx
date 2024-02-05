import styles from '../css/About.module.css'

import Titulo from '../layout/Titulo'

import foto from '../imgs/foto.png'

function About() {

    const hoje = new Date();
    const dataNasc = new Date('2004-04-08');
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    
    if (hoje.getMonth() < dataNasc.getMonth() || 
        (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
        
    return (
        <div id="about" className={styles.about}>
            <Titulo text={"Sobre mim"} />

            <div className='d-flex flex-wrap align-items-center justify-content-center'>
                <div className={`col-md-6`}>
                    <img src={foto} alt="Foto" />
                </div>
                <div className='col-md-6 mb-5'>
                    Comecei meus estudos sobre programação quando tinha apenas 11 anos de idade em cursos de programação para jovens e crianças, hoje com {idade} sou estudante de Engenharia de Software na PUC Minas onde fui nomeado destaque acadêmico além de já ter trabalhado como monitor. Possuo conhecimentos em React, Spring Boot e banco de dados. Amo a área a muito tempo estando sempre animado para encarar um novo desafio e tenho grande facilidade em trabalhos em equipe.
                </div>
            </div>
        </div>
    )
}

export default About