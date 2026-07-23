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
