import Titulo from '../layout/Titulo'

import { SiGmail, SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

import ContactForm from '../layout/ContactForm'

function Contact() {

    const contactForms = [
        {
            icon: <SiGmail size={"5vw"} />,
            link: "mailto:pedrohenriquepr08@gmail.com"
        },
        {
            icon: <SiWhatsapp size={"5vw"} />,
            link: "https://api.whatsapp.com/send?phone=31984537619"
        },
        {
            icon: <SiLinkedin size={"5vw"} />,
            link: "https://www.linkedin.com/in/pedro-henrique-pires-rodrigues-564039255/"
        },
        {
            icon: <SiGithub size={"5vw"} />,
            link: "https://github.com/Credosvaldo"
        },
        
    ]
    
    return (
        <div id="contact">
            <Titulo text={"Contatos"} />

            <div className='d-flex justify-content-between'>
                {
                    contactForms.map((contact, index) => <ContactForm key={index} form={contact} /> )
                }
            </div>


        </div>
    )
}

export default Contact