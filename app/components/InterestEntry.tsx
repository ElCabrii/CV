interface InterestEntryProps {
    pTitle: string;
    pDescription: string;
}

export default function InterestEntry({ pTitle, pDescription }: InterestEntryProps) {
    return (
        <div className="job-entry">
            <h3>{pTitle}</h3>
            <p className="description">{pDescription}</p>
        </div>
    );
}
