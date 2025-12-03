interface HeaderProps {
    pName: string;
    pJobTitle: string;
    pEmail: string;
    pPhone: string;
    pLocation: string;
    pLinkedIn: string;
    pGitHub: string;
}

export default function Header({
    pName,
    pJobTitle,
    pEmail,
    pPhone,
    pLocation,
    pLinkedIn,
    pGitHub,
}: HeaderProps) {
    return (
        <div className="header">
            <h1>{pName}</h1>
            <p className="job-title">{pJobTitle}</p>
            <div className="contact-info">
                <span>
                    <i className="icon-envelope"></i>{' '}
                    <a href={`mailto:${pEmail}`}>{pEmail}</a>
                </span>
                <span>
                    <i className="icon-phone"></i>{' '}
                    <a href={`tel:${pPhone}`}>{pPhone}</a>
                </span>
                <span>
                    <i className="icon-location-pin"></i> {pLocation}
                </span>
                <span>
                    <i className="icon-social-linkedin"></i>{' '}
                    <a href={pLinkedIn} target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/gabrieldebure
                    </a>
                </span>
                <span>
                    <i className="icon-social-github"></i>{' '}
                    <a href={pGitHub} target="_blank" rel="noopener noreferrer">
                        github.com/ElCabrii
                    </a>
                </span>
            </div>
        </div>
    );
}
