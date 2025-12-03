'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const lPathname: string = usePathname();

    const lNavItems: Array<{ pHref: string; pLabel: string }> = [
        { pHref: '/', pLabel: 'CV' },
        { pHref: '/projects', pLabel: 'Personal projects' },
        { pHref: '/studies', pLabel: 'Studies' },
        { pHref: '/interests', pLabel: 'Interests' },
    ];

    return (
        <nav className="navigation">
            <ul>
                {lNavItems.map((lItem: { pHref: string; pLabel: string }) => {
                    const lIsActive: boolean = lPathname === lItem.pHref;
                    return (
                        <li key={lItem.pHref}>
                            <Link
                                href={lItem.pHref}
                                className={lIsActive ? 'active' : ''}
                            >
                                {lItem.pLabel}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
