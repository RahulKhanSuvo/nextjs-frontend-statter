import Image from 'next/image';

import { Container } from '@/components/common/Container';
import LoginForm from '@/features/auth/components/LoginForm';
import loginImage from '@/assets/auth/login.png';

const LoginPage = () => {
  return (
    <section className="bg-[#fafcfd]">
      <Container className="min-h-screen">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative hidden lg:block">
            <Image src={loginImage} alt="Login" fill priority className="object-cover" />
            <div className="absolute top-0 flex items-start justify-start p-10 ">
              <div className="max-w-md">
                <h1 className="mb-4 text-4xl font-bold">Welcome Back</h1>
                <p className="text-lg">
                  Sign in to continue managing your appointments and healthcare records.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h1>Login</h1>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
