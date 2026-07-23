import { NavItem } from '../dashboard.type';
import { UserRole } from '@/lib/authUtil';

export const getCommonNavItems = (): NavItem[] => {
  return [
    {
      title: 'Home',
      href: '/',
      icon: 'Home',
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
    ...getCommonNavItems(),
    {
      title: 'Dashboard',
      href: 'doctor/dashboard',
      icon: 'LayoutGrid',
    },
    {
      title: 'Appointments',
      href: 'doctor/dashboard/appointments',
      icon: 'ClipboardClock',
    },
    {
      title: 'Schedule',
      href: 'doctor/dashboard/schedule',
      icon: 'Calendar1',
    },
    {
      title: 'Patients',
      href: 'doctor/dashboard/patients',
      icon: 'Users',
    },
    {
      title: 'Reviews',
      href: 'doctor/dashboard/reviews',
      icon: 'Star',
    },
  ];
};
export const getPatientNavItems = (): NavItem[] => {
  return [
    ...getCommonNavItems(),
    {
      title: 'Appointments',
      href: 'patient/appointments',
      icon: 'ClipboardClock',
    },
  ];
};
export const getAdminNavItems = (): NavItem[] => {
  return [
    ...getCommonNavItems(),
    {
      title: 'Dashboard',
      href: 'admin/dashboard',
      icon: 'LayoutGrid',
    },
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
      return getDoctorNavItems();
    case 'PATIENT':
      return getPatientNavItems();
    case 'SUPER_ADMIN':
      return getAdminNavItems();
    default:
      return getCommonNavItems();
  }
};
