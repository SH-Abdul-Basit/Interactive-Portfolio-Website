import SkillCard from "../components/SkillCard"

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills">
                <SkillCard title="Languages" icons={["/vite.svg", "/vite.svg", "/vite.svg"]} />
                <SkillCard title="Frameworks" icons={["/vite.svg", "/vite.svg", "/vite.svg"]} />
                <SkillCard title="Tools" icons={["/vite.svg", "/vite.svg", "/vite.svg"]} />
                <SkillCard title="Databases" icons={["/vite.svg", "/vite.svg", "/vite.svg"]} />
                <SkillCard title="Other" icons={["/vite.svg", "/vite.svg", "/vite.svg"]} />
            </div>
        </section>
    )
}

export default Skills