//import styles from 'skil'

function SkillDescription({skill}) {
    console.log(skill)

    return (
        <div>
            <h1>{skill.name}</h1>
            <p>{skill.description}</p>
        </div>
    )
}

export default SkillDescription