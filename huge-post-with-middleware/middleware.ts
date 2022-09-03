// /middleware.ts
import { NextResponse, NextRequest } from 'next/server';

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const middleware = async (req: NextRequest) => {
    const res = NextResponse.next();
    const { pathname, origin } = req.nextUrl;
    if (pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico')) {
        return NextResponse.next();
    }

    return res;
};

export const config = {
    matcher: '/:path*',
};
