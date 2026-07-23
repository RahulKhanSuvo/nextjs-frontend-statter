'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserInfo } from '@/types/auth.type';
import Link from 'next/link';
import { NavItem } from '../dashboard.type';
import { usePathname } from 'next/navigation';
import { getIconComponent } from '@/lib/iconMapper';
import { cn } from '@/lib/utils';

type DashboardSideBarContentProps = {
  userInfo: UserInfo;
  navItems: NavItem[];
};

const DashboardSideBarContent = ({ userInfo, navItems }: DashboardSideBarContentProps) => {
  const pathname = usePathname();
  return (
    <aside className="w-64  flex-col border-r bg-card overflow-y-auto h-full ">
      <div className="flex sticky top-0">
        <Link href="/">
          <h1>MedConnect</h1>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3 py-4">
        <nav>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = getIconComponent(item.icon);
            return (
              <Link
                href={item.href}
                key={item.title}
                className={cn('flex items-center gap-3', isActive ? 'bg-primary text-white' : '')}
              >
                <Icon />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <div>
        <div>{userInfo.name}</div>
      </div>
    </aside>
  );
};
export default DashboardSideBarContent;
