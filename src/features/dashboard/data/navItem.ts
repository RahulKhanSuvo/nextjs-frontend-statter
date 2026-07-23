import {
  Calendar1,
  ClipboardClock,
  Home,
  LayoutGrid,
  Settings,
  Star,
  User,
  Users,
} from 'lucide-react';
import { NavItem } from '../dashboard.type';

export const getCommonNavItems = (): NavItem[] => {
  return [
    {
      title: 'Home',
      href: '/',
      icon: Home,
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: User,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: Settings,
    },
  ];
};
export const getDoctorNavItems = (): NavItem[] => {
  return [
    ...getCommonNavItems(),
    {
      title: 'Dashboard',
      href: 'doctor/dashboard',
      icon: LayoutGrid,
    },
    {
      title: 'Appointments',
      href: 'doctor/dashboard/appointments',
      icon: ClipboardClock,
    },
    {
      title: 'Schedule',
      href: 'doctor/dashboard/schedule',
      icon: Calendar1,
    },
    {
      title: 'Patients',
      href: 'doctor/dashboard/patients',
      icon: Users,
    },
    {
      title: 'Reviews',
      href: 'doctor/dashboard/reviews',
      icon: Star,
    },
  ];
};
export const getPatientNavItems = (): NavItem[] => {
  return [
    ...getCommonNavItems(),
    {
      title: 'Appointments',
      href: 'patient/appointments',
      icon: ClipboardClock,
    },
  ];
};
export const getAdminNavItems = (): NavItem[] => {
  return [
    ...getCommonNavItems(),
    {
      title: 'Dashboard',
      href: 'admin/dashboard',
      icon: LayoutGrid,
    },
    {
      title: 'Patients',
      href: 'admin/patients',
      icon: Users,
    },
    {
      title: 'Doctors',
      href: 'admin/doctors',
      icon: User,
    },
  ];
};
export const getNavItemsByRole = (role: string): NavItem[] => {
  switch (role) {
    case 'doctor':
      return getDoctorNavItems();
    case 'patient':
      return getPatientNavItems();
    case 'admin':
      return getAdminNavItems();
    default:
      return getCommonNavItems();
  }
};
