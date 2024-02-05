import styles from '../css/Start.module.css'

import startImage from '../imgs/startImage.png'

function Start() {

    return (
        <div className={styles.start}>
            <div>
                <p>Olá mundo, eu sou:</p>
                <h1>Pedro Henrique</h1>
                <p>DESENVOLVEDOR FULL STACK</p>
            </div>

            <div>
                <img src={startImage} alt="Ilustração" />
            </div>

        </div>
    )
}

export default Start