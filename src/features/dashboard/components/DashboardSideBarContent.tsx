'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserInfo } from '@/types/auth.type';
import Link from 'next/link';
import { NavItem } from '../dashboard.type';
import { usePathname } from 'next/navigation';
import { getIconComponent } from '@/lib/iconMapper';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type DashboardSideBarContentProps = {
  userInfo: UserInfo;
  navItems: NavItem[];
};

const DashboardSideBarContent = ({ userInfo, navItems }: DashboardSideBarContentProps) => {
  const pathname = usePathname();
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <div className="rounded-lg bg-primary p-1.5 text-white">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          MediCare
        </Link>
      </div>

      <ScrollArea className="flex-1 px-4 py-4">
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

      <div className="border-t p-4">
        <button className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg">
          <LogOut className="size-5" />
          Logout
        </button>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-muted/50 p-4">
          <Avatar className="size-10">
            <AvatarImage src={userInfo.image || ''} alt={userInfo.name} />
            <AvatarFallback>{userInfo.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-semibold">{userInfo.name}</p>
            <p className="truncate text-xs text-muted-foreground">{userInfo.status}</p>
            <Link href="/profile" className="text-xs font-semibold text-primary">
              View Profile {'>'}
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default DashboardSideBarContent;
