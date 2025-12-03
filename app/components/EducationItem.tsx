interface EducationItemProps {
    pTitle: string;
    pInstitution: string;
    pYear: string;
    pSecondaryInfo?: string;
}

export default function EducationItem({
    pTitle,
    pInstitution,
    pYear,
    pSecondaryInfo,
}: EducationItemProps) {
    return (
        <div className="education-item">
            <h3>{pTitle}</h3>
            {pSecondaryInfo && <p className="institution">{pSecondaryInfo}</p>}
            <p className="institution">{pInstitution}</p>
            <p className="year">{pYear}</p>
        </div>
    );
}
