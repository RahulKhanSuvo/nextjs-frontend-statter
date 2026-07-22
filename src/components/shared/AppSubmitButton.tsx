import type { ComponentProps, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type AppSubmitButtonProps = ComponentProps<typeof Button> & {
  isPending?: boolean;
  pendingLabel?: ReactNode;
};

export function AppSubmitButton({
  isPending = false,
  pendingLabel = 'Submitting...',
  children,
  className,
  disabled,
  ...props
}: AppSubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={disabled || isPending}
      aria-busy={isPending}
      className={cn('w-full', className)}
      {...props}
    >
      {isPending ? (
        <span className="flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          {pendingLabel}
        </span>
      ) : (
        children
      )}
    </Button>
  );
}
