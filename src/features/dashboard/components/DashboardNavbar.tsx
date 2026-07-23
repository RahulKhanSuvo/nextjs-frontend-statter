'use client';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import NotificationsDropdown from './NotificationsDropdown';
import UserDropdown from './UserDropdown';
import { UserInfo } from '@/types/auth.type';
import MobileSideBar from './MobileSideBar';
import { NavItem } from '../dashboard.type';

const DashboardNavbar = ({ userInfo, navItems }: { userInfo: UserInfo; navItems: NavItem[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMoblie, setMobile] = useState<boolean>(false);
  useEffect(() => {
    const checkSmallScreen = () => {
      setMobile(window.innerWidth < 768);
    };
    checkSmallScreen();
    window.addEventListener('resize', checkSmallScreen);
    return () => {
      window.removeEventListener('resize', checkSmallScreen);
    };
  }, []);
  return (
    <header className="flex h-20 items-center justify-between border-b bg-background px-6">
      <div />
      <div className="flex items-center gap-4">
        {/*moble menu toggle*/}
        <Sheet open={isMobileMenuOpen && isMoblie} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="left">
            <MobileSideBar userInfo={userInfo} navItems={navItems} />
          </SheetContent>
        </Sheet>
        {/*search component*/}
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search patients, appointments..."
            className="h-10 w-full rounded-lg border bg-background pl-10 pr-4"
          />
        </div>
        {/*notifications*/}
        <NotificationsDropdown />
        {/*user dropdown*/}
        <UserDropdown userInfo={userInfo} />
      </div>
    </header>
  );
};
export default DashboardNavbar;
