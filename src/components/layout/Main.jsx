import styles from '../css/Main.module.css'

import Start from '../pages/Start'
import Projetos from '../pages/Projetos'
import Skills from '../pages/Skills'
import About from '../pages/About'
import Certificate from '../pages/Certificate'
import Contact from '../pages/Contact'

import ScrollReveal from 'scrollreveal'

import { useEffect } from 'react'

function Main() {


    useEffect(() => {
        ScrollReveal().reveal('.scrollReveal > *', {
            reset: true,
            duration: 800,
        })

    }, [])

    return (
        <main className={`${styles.main} scrollReveal`}>,
            <Start />
            <Projetos />
            <Skills />
            <About />
            {/* <Certificate /> */}
            <Contact />
        </main>
    )
}

export default Main