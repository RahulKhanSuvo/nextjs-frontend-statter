import { NextRequest, NextResponse } from 'next/server';
import { getDefaultRoute, getRouteOwner, isAuthRoute, UserRole } from './lib/authUtil';
import { getCurrentUser } from './features/auth/action';

export async function proxy(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    const user = await getCurrentUser();
    const isAuth = isAuthRoute(pathname);
    const routeOwner = getRouteOwner(pathname);
    console.log('user from proxy', user);
    console.log('routeOwner', routeOwner);
    console.log('isAuthRoute', isAuth);

    if (isAuth && pathname !== '/verify-email' && pathname !== '/reset-password') {
      return NextResponse.redirect(new URL(getDefaultRoute(user?.role as UserRole), request.url));
    }
    if (routeOwner === 'COMMON') {
      return NextResponse.next();
    }
    if (routeOwner === 'DOCTOR' || routeOwner === 'PATIENT' || routeOwner === 'SUPER_ADMIN') {
      if (routeOwner !== (user?.role as UserRole)) {
        return NextResponse.redirect(new URL(getDefaultRoute(user?.role as UserRole), request.url));
      }
    }
    return NextResponse.next();
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
