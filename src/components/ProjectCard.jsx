function ProjectCard({ url, image, title, description }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={image} alt={`${title} screenshot`} />
            <p>{description}</p>
            <h3>{title}</h3>
        </a>
    )
}

export default ProjectCard