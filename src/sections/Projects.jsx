import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li><ProjectCard title="Project 1" description="REACT | JAVASCRIPT" image="/vite.svg" url="https://example.com/project1" /></li>
                <li><ProjectCard title="Project 2" description="REACT | JAVASCRIPT" image="/vite.svg" url="https://example.com/project2" /></li>
                <li><ProjectCard title="Project 3" description="REACT | JAVASCRIPT" image="/vite.svg" url="https://example.com/project3" /></li>
            </ul>
        </section>
    )
}

export default Projects