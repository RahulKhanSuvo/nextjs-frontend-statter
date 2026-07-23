import { NavItem } from '../dashboard.type';
import { getDefaultRoute, UserRole } from '@/lib/authUtil';

export const getCommonNavItems = (role: UserRole): NavItem[] => {
  const defaultDashboard = getDefaultRoute(role);
  return [
    {
      title: 'Home',
      href: '/',
      icon: 'Home',
    },
    {
      title: 'Dashboard',
      href: defaultDashboard,
      icon: 'PanelsTopLeft',
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: 'User',
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: 'Settings',
    },
  ];
};
export const getDoctorNavItems = (): NavItem[] => {
  return [
    {
      title: 'Appointments',
      href: '/doctor/dashboard/appointments',
      icon: 'ClipboardClock',
    },
    {
      title: 'Schedule',
      href: '/doctor/dashboard/schedule',
      icon: 'Calendar1',
    },
    {
      title: 'Patients',
      href: '/doctor/dashboard/patients',
      icon: 'Users',
    },
    {
      title: 'Reviews',
      href: '/doctor/dashboard/reviews',
      icon: 'Star',
    },
  ];
};
export const getPatientNavItems = (): NavItem[] => {
  return [
    {
      title: 'Appointments',
      href: 'patient/appointments',
      icon: 'ClipboardClock',
    },
  ];
};
export const getAdminNavItems = (): NavItem[] => {
  return [
    {
      title: 'Patients',
      href: 'admin/patients',
      icon: 'Users',
    },
    {
      title: 'Doctors',
      href: 'admin/doctors',
      icon: 'User',
    },
  ];
};
export const getNavItemsByRole = (role: UserRole): NavItem[] => {
  switch (role) {
    case 'DOCTOR':
      return [...getCommonNavItems(role), ...getDoctorNavItems()];
    case 'PATIENT':
      return [...getCommonNavItems(role), ...getPatientNavItems()];
    case 'SUPER_ADMIN':
      return [...getCommonNavItems(role), ...getAdminNavItems()];
    default:
      return getCommonNavItems(role);
  }
};
