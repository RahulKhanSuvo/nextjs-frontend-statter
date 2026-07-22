'use client';
import { useForm } from '@tanstack/react-form';
import { loginZodSchema } from '../auth.validation';
import { FormInput } from '@/components/shared/FormInput';
import { Mail, Lock } from 'lucide-react';
import { AppSubmitButton } from '@/components/shared/AppSubmitButton';

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
      console.log(value);
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
      className="w-full border h-full"
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
      <AppSubmitButton size={'lg'}>Login</AppSubmitButton>
    </form>
  );
}
export default LoginForm;
