function SkillCard({ title, icons}) {
    const images = [];
    for (let i = 0; i < icons.length; i++) {
        images.push(<img key={i} src={icons[i]} alt={`${title} icon ${i + 1}`} />);
    }

    return (
        <div className="skill-card">
            <div>
                <h3>{title}</h3>
                <div>
                    {images}
                </div>
            </div>
        </div>
    )
}

export default SkillCard