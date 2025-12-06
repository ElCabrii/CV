interface ProjectEntryProps {
    pTitle: string;
    pDescription: string;
    pTags?: string[];
    pUrl?: string;
    pUrlText?: string;
}

export default function ProjectEntry({ pTitle, pDescription, pTags, pUrl, pUrlText = "Visit Project" }: ProjectEntryProps) {
    return (
        <div className="job-entry">
            <h3>{pTitle}</h3>
            <p className="description">{pDescription}</p>
            {pTags && (
                <div className="skill-list" style={{ marginTop: '10px' }}>
                    {pTags.map((lTag, lIndex) => (
                        <span key={lIndex} className="skill-tag">
                            {lTag}
                        </span>
                    ))}
                </div>
            )}
            {pUrl && (
                <a href={pUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                    {pUrlText} ➞
                </a>
            )}
        </div>
    );
}
