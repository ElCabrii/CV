'use client';

import type { Locale } from '../lib/locale';

interface LanguageToggleProps {
    pLocale: Locale;
    pTitle: string;
}

export default function LanguageToggle({ pLocale, pTitle }: LanguageToggleProps) {
    const lNextLocale: Locale = pLocale === 'fr' ? 'en' : 'fr';

    const switchLanguage = (): void => {
        document.cookie = `locale=${lNextLocale}; path=/; max-age=31536000; samesite=lax`;
        window.location.reload();
    };

    return (
        <div className="controls controls-left">
            <button
                id="language-toggle"
                className="btn-control"
                title={pTitle}
                onClick={switchLanguage}
                aria-label={pTitle}
            >
                {pLocale.toUpperCase()}
            </button>
        </div>
    );
}
