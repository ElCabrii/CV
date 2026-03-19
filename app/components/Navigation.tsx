'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationItem = {
    pHref: string;
    pLabel: string;
};

interface NavigationProps {
    pItems: NavigationItem[];
}

export default function Navigation({ pItems }: NavigationProps) {
    const lPathname: string = usePathname();

    return (
        <nav className="navigation">
            <ul>
                {pItems.map((lItem: NavigationItem) => {
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
