import { useState, type ReactNode } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { AnyFieldApi } from '@tanstack/react-form';
import { cn } from '@/lib/utils';

type FormInputProps = {
  field: AnyFieldApi;
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  startIcon?: ReactNode;
};

export function FormInput({ field, label, type = 'text', placeholder, startIcon }: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const error = field.state.meta.errors[0];

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

      <div className="relative">
        {startIcon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {startIcon}
          </div>
        )}

        <Input
          id={field.name}
          name={field.name}
          type={inputType}
          placeholder={placeholder}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          className={cn(startIcon && 'pl-10', isPassword && 'pr-10')}
        />

        {isPassword && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </Button>
        )}
      </div>

      <FieldError>{error && (typeof error === 'string' ? error : error.message)}</FieldError>
    </Field>
  );
}
