interface ProjectEntryProps {
    pTitle: string;
    pDescription: string;
}

export default function ProjectEntry({ pTitle, pDescription }: ProjectEntryProps) {
    return (
        <div className="job-entry">
            <h3>{pTitle}</h3>
            <p className="description">{pDescription}</p>
        </div>
    );
}
