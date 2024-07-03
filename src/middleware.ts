import { verifyRequestOrigin } from "lucia";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';

// Create next-intl middleware
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id'],

  // Used when no locale matches
  defaultLocale: 'id'
});

// Custom middleware logic
export async function middleware(request: NextRequest): Promise<NextResponse> {
  // Apply next-intl middleware
  const intlResponse = intlMiddleware(request);
  if (intlResponse) {
    return intlResponse;
  }

  // Custom logic
  if (request.method === "GET") {
    return NextResponse.next();
  }

  const originHeader = request.headers.get("Origin");
  const hostHeader = request.headers.get("Host");

  if (
    !originHeader ||
    !hostHeader ||
    !verifyRequestOrigin(originHeader, [hostHeader])
  ) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  return NextResponse.next();
}

// Config for the matcher
export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|sitemap.xml|robots.txt).*)",
    "/",
    "/(en|id)/:path*"
  ]
};
