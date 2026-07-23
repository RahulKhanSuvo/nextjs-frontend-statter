'use client';
import { useForm } from '@tanstack/react-form';
import { loginZodSchema } from '../auth.validation';
import { FormInput } from '@/components/shared/FormInput';
import { Mail, Lock } from 'lucide-react';
import { AppSubmitButton } from '@/components/shared/AppSubmitButton';
import { loginAction } from '../action';
import { toast } from 'sonner';

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: loginZodSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const result = await loginAction(value);

        if (!result.success) {
          toast.error(result.message);
          return;
        }
        console.log(result);
        toast.success('Login successful');
      } catch (error) {
        toast.error(error instanceof Error ? error.message : String(error));
      }
    },
  });
  return (
    <form
      method="POST"
      action="#"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="w-full h-full"
    >
      <form.Field name="email">
        {(field) => (
          <FormInput
            field={field}
            label="Email"
            type="email"
            placeholder="Enter your email"
            startIcon={<Mail className="size-4" />}
          />
        )}
      </form.Field>
      <form.Field name="password">
        {(field) => (
          <FormInput
            field={field}
            label="Password"
            type="password"
            placeholder="Enter your password"
            startIcon={<Lock className="size-4" />}
          />
        )}
      </form.Field>
      <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
        {([canSubmit, isSubmitting]) => (
          <AppSubmitButton isPending={isSubmitting} disabled={!canSubmit}>
            Login
          </AppSubmitButton>
        )}
      </form.Subscribe>
    </form>
  );
}
export default LoginForm;
