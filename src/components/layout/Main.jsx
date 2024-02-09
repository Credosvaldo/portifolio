import styles from '../css/Main.module.css'

import Start from '../pages/Start'
import Projetos from '../pages/Projetos'
import Skills from '../pages/Skills'
import About from '../pages/About'
import Certificate from '../pages/Certificate'
import Contact from '../pages/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import { useEffect } from 'react'

function Main() {


    useEffect(() => {
        AOS.init({
            duration: 2000,
            mirror: true,
            easing: 'ease-out-back'
        });
    }, [])

    return (
        <main className={`${styles.main} scrollReveal`}>
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