import { FaRegFilePdf } from 'react-icons/fa6';

interface DownloadCvButtonProps {
    pUrl: string;
    pTitle: string;
}

export default function DownloadCvButton({ pUrl, pTitle }: DownloadCvButtonProps) {
    return (
        <div className="controls controls-bottom-right">
            <a
                href={pUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-control btn-download-cv"
                title={pTitle}
                aria-label={pTitle}
            >
                <FaRegFilePdf className="control-icon" aria-hidden="true" focusable="false" />
            </a>
        </div>
    );
}
