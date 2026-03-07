import CertificateCard from "../components/CertificateCard"

function Certifications() {
    return (
        <section id="certifications">
            <h2>Certifications</h2>
            <ul>
                <li><CertificateCard title="Certification 1" issuedBy="Issuing Organization 1" url="https://example.com/cert1" /></li>
                <li><CertificateCard title="Certification 2" issuedBy="Issuing Organization 2" url="https://example.com/cert2" /></li>
                <li><CertificateCard title="Certification 3" issuedBy="Issuing Organization 3" url="https://example.com/cert3" /></li>
            </ul>
        </section>
    )
}

export default Certifications