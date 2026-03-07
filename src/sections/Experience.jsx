import ExperienceCard from "../components/ExperienceCard";

function Experience() {
    return (
        <section id="experiences">
            <h2>Experiences</h2>
            <ul>
                <li><ExperienceCard icon ="/vite.svg" duration="2025 Sep - 2029 June" title= "BSc in Software Engineering" company="University of Engineering and Technology, Pakistan" description="Currently pursuing Software Engineering at UET Taxila, focusing on software development principles and modern technologies. The program blends theoretical knowledge with practical experience, preparing me to tackle real-world challenges in the tech industry." /></li>
            </ul>
        </section>
    )
}

export default Experience