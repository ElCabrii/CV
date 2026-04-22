'use client';

import { useEffect, useState } from 'react';
import { HiOutlineBolt, HiOutlineLightBulb } from 'react-icons/hi2';

interface ThemeToggleProps {
    pTitle: string;
}

export default function ThemeToggle({ pTitle }: ThemeToggleProps) {
    const [lIsLightTheme, setIsLightTheme] = useState<boolean>(false);

    useEffect(() => {
        const lSavedTheme: string | null = localStorage.getItem('theme');
        if (lSavedTheme === 'light') {
            setIsLightTheme(true);
            document.body.classList.add('light-theme');
        }
    }, []);

    const toggleTheme = (): void => {
        const lNewTheme: boolean = !lIsLightTheme;
        setIsLightTheme(lNewTheme);

        if (lNewTheme) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <div className="controls">
            <button
                id="theme-toggle"
                className="btn-control"
                title={pTitle}
                onClick={toggleTheme}
            >
                {lIsLightTheme ? (
                    <HiOutlineBolt className="control-icon" aria-hidden="true" focusable="false" />
                ) : (
                    <HiOutlineLightBulb className="control-icon" aria-hidden="true" focusable="false" />
                )}
            </button>
        </div>
    );
}
