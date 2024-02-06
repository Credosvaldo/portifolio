import styles from '../css/ContactForm.module.css'


function ContactForm({form}) {
    
    return (
        <a href={form.link} target='blanck' className={`${styles.contactFormSpace}  `}>
            <div className={`${styles.contactForm}`}>
                <h1>
                    <span>{form.icon}</span>
                </h1>
            </div>
        </a>
    )
}

export default ContactForm