import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/types/auth.type';

const UserDropdown = ({ userInfo }: { userInfo: UserInfo }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="size-6 rounded-full border flex  items-center">
        <Avatar className="size-10">
          <AvatarImage src={userInfo.image || ''} alt={userInfo.name} />
          <AvatarFallback>{userInfo.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <span>{userInfo.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>{userInfo.role}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
