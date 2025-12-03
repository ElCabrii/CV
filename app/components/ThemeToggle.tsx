'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [lIsLightTheme, setIsLightTheme] = useState<boolean>(false);

    useEffect(() => {
        // Check for saved theme preference
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
                title="Toggle Theme"
                onClick={toggleTheme}
            >
                <i className={lIsLightTheme ? 'icon-energy' : 'icon-bulb'}></i>
            </button>
        </div>
    );
}
