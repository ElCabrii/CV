interface JobEntryProps {
    pPosition: string;
    pCompany: string;
    pDate: string;
    pResponsibilities: string[];
}

export default function JobEntry({
    pPosition,
    pCompany,
    pDate,
    pResponsibilities,
}: JobEntryProps) {
    return (
        <div className="job-entry">
            <div className="job-header">
                <span className="position">{pPosition}</span>
                <span className="date">{pDate}</span>
            </div>
            <p className="company">{pCompany}</p>
            <ul>
                {pResponsibilities.map((lResponsibility: string, lIndex: number) => (
                    <li key={lIndex} dangerouslySetInnerHTML={{ __html: lResponsibility }} />
                ))}
            </ul>
        </div>
    );
}
