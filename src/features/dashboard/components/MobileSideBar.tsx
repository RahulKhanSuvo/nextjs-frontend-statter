'use client';
import { ScrollArea } from '@/components/ui/scroll-area';

import { getIconComponent } from '@/lib/iconMapper';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '../dashboard.type';
import { UserInfo } from '@/types/auth.type';

interface MobileSideBarProps {
  userInfo: UserInfo;
  navItems: NavItem[];
  // dashboardHome: string;
}

const MobileSideBar = ({ userInfo, navItems }: MobileSideBarProps) => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col">
      <div>
        <span>Ph HealthCare</span>
      </div>
      <h2 className="px-3 text-sm font-semibold">Menu</h2>
      {/*navigation area*/}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = getIconComponent(item.icon);

            return (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  <Icon className="size-5" />
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
        </nav>
      </ScrollArea>
      {/*user info*/}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full size-8 bg-primary-foreground flex items-center justify-center">
            <span>{userInfo.name.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <p>{userInfo.name}</p>
            <p>{userInfo.role.toLocaleLowerCase().replace('_', ' ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileSideBar;
