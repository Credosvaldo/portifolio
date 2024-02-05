import styles from '../css/Start.module.css'

import startImage from '../imgs/startImage.png'

import WritingAnimation from '../layout/WritingAnimation'

function Start() {

    return (
        <div className={styles.start}>
            <div>
                <p>Olá mundo, eu sou:</p>
                <WritingAnimation text={"Pedro Henrique"} timeByLetter={150} />
                <p>DESENVOLVEDOR FULL STACK</p>
            </div>

            <div>
                <img src={startImage} alt="Ilustração" />
            </div>

        </div>
    )
}

export default Start