function CertificateCard({ title, issuedBy, url }) {
    return (
        <div className="certificate-card">
            <h3>{title}</h3>
            <p>Issued by: {issuedBy}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
    )
}

export default CertificateCard