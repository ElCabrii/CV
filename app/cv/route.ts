import { NextResponse } from 'next/server';
import { access } from 'node:fs/promises';
import path from 'node:path';
import { getRequestLocale } from '../lib/locale';

const CV_BY_LOCALE = {
    fr: '/CV_Gabriel-DE_BURE_FR.pdf',
    en: '/CV_Gabriel-DE_BURE_EN.pdf',
} as const;

async function fileExists(pRelativePublicPath: string): Promise<boolean> {
    const lFsPath = path.join(process.cwd(), 'public', pRelativePublicPath.replace(/^\//, ''));
    try {
        await access(lFsPath);
        return true;
    } catch {
        return false;
    }
}

export async function GET(pRequest: Request): Promise<NextResponse> {
    const lLocale = await getRequestLocale();
    const lLocalizedCv = CV_BY_LOCALE[lLocale];

    if (await fileExists(lLocalizedCv)) {
        return NextResponse.redirect(new URL(lLocalizedCv, pRequest.url));
    }

    return NextResponse.redirect(new URL(CV_BY_LOCALE.fr, pRequest.url));
}
