export type UserRole = 'SUPER_ADMIN' | 'DOCTOR' | 'PATIENT';
export const authRouter = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
];
export const isAuthRoute = (pathname: string): boolean => {
  return authRouter.some((router: string) => router === pathname);
};
export type RouteConfig = {
  exact: string[];
  pattern: RegExp[];
};
export const patientProtectedRoutes: RouteConfig = {
  exact: ['/payment/success'],
  pattern: [/^\/dashboard/],
};
export const commonProtectedRoutes: RouteConfig = {
  exact: ['/my-profile', '/change-password'],
  pattern: [],
};
export const doctorProtectedRoutes: RouteConfig = {
  exact: ['/appointments', '/patients', '/prescriptions', '/medical-records'],
  pattern: [/^\/doctor\/dashboard/],
};
export const adminProtectRoute: RouteConfig = {
  exact: [],
  pattern: [/^\/admin\/dashboard/],
};
export const isRouteMatch = (pathname: string, routes: RouteConfig) => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.pattern.some((predicate: RegExp) => predicate.test(pathname));
};

export const getRouteOwner = (
  pathname: string,
): 'SUPER_ADMIN' | 'DOCTOR' | 'PATIENT' | 'COMMON' | null => {
  if (isRouteMatch(pathname, commonProtectedRoutes)) {
    return 'COMMON';
  }
  if (isRouteMatch(pathname, patientProtectedRoutes)) {
    return 'PATIENT';
  }
  if (isRouteMatch(pathname, doctorProtectedRoutes)) {
    return 'DOCTOR';
  }
  if (isRouteMatch(pathname, adminProtectRoute)) {
    return 'SUPER_ADMIN';
  }
  return null;
};
export const getDefaultRoute = (role: UserRole): string => {
  switch (role) {
    case 'SUPER_ADMIN':
      return '/admin/dashboard';
    case 'DOCTOR':
      return '/doctor/dashboard';
    case 'PATIENT':
      return '/dashboard';
    default:
      return '/';
  }
};
