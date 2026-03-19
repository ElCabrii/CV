import { cookies, headers } from 'next/headers';

export type Locale = 'en' | 'fr';

function isSupportedLocale(pLocale: string): pLocale is Locale {
    return pLocale === 'en' || pLocale === 'fr';
}

export function resolveLocaleFromAcceptLanguage(pAcceptLanguage: string | null): Locale {
    if (!pAcceptLanguage) {
        return 'en';
    }

    const lCandidates = pAcceptLanguage
        .split(',')
        .map((lPart) => lPart.split(';')[0]?.trim().toLowerCase())
        .filter((lPart): lPart is string => Boolean(lPart));

    for (const lCandidate of lCandidates) {
        const lBaseLocale = lCandidate.split('-')[0];
        if (lBaseLocale && isSupportedLocale(lBaseLocale)) {
            return lBaseLocale;
        }
    }

    return 'en';
}

export async function getRequestLocale(): Promise<Locale> {
    const lCookies = await cookies();
    const lCookieLocale = lCookies.get('locale')?.value?.toLowerCase();
    if (lCookieLocale && isSupportedLocale(lCookieLocale)) {
        return lCookieLocale;
    }

    const lHeaders = await headers();
    const lAcceptLanguage = lHeaders.get('accept-language');

    return resolveLocaleFromAcceptLanguage(lAcceptLanguage);
}
