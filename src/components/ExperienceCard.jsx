function ExperienceCard({ icon, duration, title, company, description }) {
    return (
        <div className="experience-card">
            <div>
                <div>
                    <img src={icon} alt ={`${company} logo`} />
                </div>
                <p>{duration}</p>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{company}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard