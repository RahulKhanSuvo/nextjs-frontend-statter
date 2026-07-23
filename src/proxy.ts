import { NextRequest, NextResponse } from 'next/server';
import { getDefaultRoute, isAuthRoute, UserRole } from './lib/authUtil';
import { getCurrentUser } from './features/auth/action';

export async function proxy(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    const user = await getCurrentUser();
    console.log('user from proxy', user);
    const isAuth = isAuthRoute(pathname);
    if (isAuth) {
      return NextResponse.redirect(new URL(getDefaultRoute(user?.role as UserRole), request.url));
    }
    console.log('isAuthRoute', isAuth);
  } catch (error) {
    console.error('Proxy Error:', error);
    return NextResponse.next();
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
  ],
};
