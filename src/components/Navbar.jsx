function Navebar() {
    function scrollToSection(sectionId) {
        console.log(`Scrolling to section: ${sectionId}`);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Section with id "${sectionId}" not found.`);
        }
    }

    return (
        <nav>
            <a href="#home">Logo</a>
            <ul>
                <li onClick={() => scrollToSection('about')}><span>About</span></li>
                <li onClick={() => scrollToSection('certificates')}><span>Certificates</span></li>
                <li onClick={() => scrollToSection('skills')}><span>Skills</span></li>
                <li onClick={() => scrollToSection('experience')}><span>Experience</span></li>
                <li onClick={() => scrollToSection('projects')}><span>Projects</span></li>
                <li onClick={() => scrollToSection('contact')}><span>Contact</span></li>
                <li><button>Resume</button></li>
            </ul>
        </nav>
    )
}

export default Navebar