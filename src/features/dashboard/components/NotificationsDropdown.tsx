import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, Calendar, MessageCircleCode, Settings2Icon } from 'lucide-react';

interface NotificationsDropdownProps {
  id: string;
  title: string;
  messages: string;
  type: 'appointment' | 'reminder' | 'system' | 'message';
  timestamp: string;
  read: boolean;
}

const mockNotifications: NotificationsDropdownProps[] = [
  {
    id: '1',
    title: 'Appointment Reminder',
    messages: 'You have an appointment scheduled for tomorrow.',
    type: 'appointment',
    timestamp: '2024-01-01T10:00:00Z',
    read: false,
  },
  {
    id: '2',
    title: 'Reminder',
    messages: '',
    type: 'reminder',
    timestamp: '',
    read: false,
  },
  {
    id: '3',
    title: 'System Update',
    messages: 'A new version of the system is available.',
    type: 'system',
    timestamp: '2024-01-01T09:00:00Z',
    read: false,
  },
  {
    id: '4',
    title: 'Message',
    messages: '',
    type: 'message',
    timestamp: '',
    read: false,
  },
];

const getNotificationIcon = (type: NotificationsDropdownProps['type']) => {
  switch (type) {
    case 'appointment':
      return <Calendar className="size-4" />;
    case 'reminder':
      return <Bell className="size-4" />;
    case 'system':
      return <Settings2Icon className="size-4" />;
    case 'message':
      return <MessageCircleCode className="size-4" />;
  }
};

const NotificationsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bell className="size-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80 p-0">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-4 py-3 text-sm font-semibold">
            Notifications
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <ScrollArea className="h-80">
            <div className="p-1">
              {mockNotifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex items-start gap-3 py-3">
                  {getNotificationIcon(notification.type)}

                  <div className="flex flex-col">
                    <span className="font-medium">{notification.title}</span>

                    {notification.messages && (
                      <span className="text-sm text-muted-foreground">{notification.messages}</span>
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </ScrollArea>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;
