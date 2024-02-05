import styles from '../css/Skill.module.css'

function Skill({skillId, svg, setCurrentSkill}) {

    function handleMouseOver() {
        setCurrentSkill(skillId)
    }

    return (

        <div className={`${styles.skillSpace} col-4`}>
            <div className={styles.skill} onMouseOver={handleMouseOver}>
                {svg}
            </div>
        </div>

    )
}

export default Skill