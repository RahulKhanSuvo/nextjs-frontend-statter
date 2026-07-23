import { getCurrentUser } from '@/features/auth/action';
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
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
