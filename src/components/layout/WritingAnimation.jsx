import styles from '../css/WritingAnimation.module.css'

import { useState, useEffect } from "react"


function WritingAnimation({ text, timeByLetter }) {

    const [animationText, setAnimationText] = useState("")

    console.log(animationText)

    useEffect(() => {
        console.log('Tamanho:')
        console.log(animationText.length)

        setTimeout(() => {
            if(animationText.length < text.length)
            {
                setAnimationText(animationText + text[animationText.length])
            }
            
        }, timeByLetter);


        

    }, [animationText])


    return (
        <div className={styles.animationText}>
            <h1>{animationText}</h1>

        </div>
    )
}

export default WritingAnimation