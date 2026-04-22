import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';

interface HeaderProps {
    pName: string;
    pProfileImage?: string;
    pJobTitle: string;
    pEmail: string;
    pPhone: string;
    pLocation: string;
    pLinkedIn: string;
    pGitHub: string;
}

function ContactItem({
    icon: Icon,
    children,
}: Readonly<{
    icon: IconType;
    children: React.ReactNode;
}>) {
    return (
        <span>
            <Icon className="contact-icon" aria-hidden="true" focusable="false" />
            {children}
        </span>
    );
}

export default function Header({
    pName,
    pProfileImage,
    pJobTitle,
    pEmail,
    pPhone,
    pLocation,
    pLinkedIn,
    pGitHub,
}: HeaderProps) {
    return (
        <div className="header">
            {pProfileImage && (
                <div className="profile-image-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={pProfileImage}
                        alt={pName}
                        width={150}
                        height={150}
                        className="profile-image"
                    />
                </div>
            )}
            <h1>{pName}</h1>
            <p className="job-title">{pJobTitle}</p>
            <div className="contact-info">
                <ContactItem icon={HiOutlineEnvelope}>
                    <a href={`mailto:${pEmail}`}>{pEmail}</a>
                </ContactItem>
                <ContactItem icon={HiOutlinePhone}>
                    <a href={`tel:${pPhone}`}>{pPhone}</a>
                </ContactItem>
                <ContactItem icon={HiOutlineMapPin}>{pLocation}</ContactItem>
                <ContactItem icon={FaLinkedin}>
                    <a href={pLinkedIn} target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/gabrieldebure
                    </a>
                </ContactItem>
                <ContactItem icon={FaGithub}>
                    <a href={pGitHub} target="_blank" rel="noopener noreferrer">
                        github.com/ElCabrii
                    </a>
                </ContactItem>
            </div>
        </div>
    );
}
