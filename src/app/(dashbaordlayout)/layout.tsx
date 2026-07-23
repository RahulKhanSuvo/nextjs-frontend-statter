import { getCurrentUser } from '@/features/auth/action';
import DashboardNavbar from '@/features/dashboard/components/DashboardNavbar';
import DashboardSideBarContent from '@/features/dashboard/components/DashboardSideBarContent';
import { getNavItemsByRole } from '@/features/dashboard/data/navItem';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    return null;
  }
  const navItems = getNavItemsByRole(userInfo.role);
  return (
    <div className="flex h-screen">
      <DashboardSideBarContent userInfo={userInfo} navItems={navItems} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardNavbar userInfo={userInfo} navItems={navItems} />
        <main>{children}</main>
      </div>
    </div>
  );
}
