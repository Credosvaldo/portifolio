import styles from '../css/ContactForm.module.css'


function ContactForm({form}) {
    
    return (
        <div className={`${styles.contactFormSpace} col-md-3 col-sm-6 col-12 `}>
            <div className={`${styles.contactForm}`}>
                <h1>
                    <a href={form.link} target='blanck'>{form.icon}</a>
                </h1>
            </div>
        </div>
    )
}

export default ContactForm