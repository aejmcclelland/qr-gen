// app/login/page.tsx
import { Suspense } from 'react';
import LoginForm from '@/components/auth/Login-Form';

export default function LoginPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-base-200 p-4'>
			<div className='card w-full  max-w-md bg-base-100 items-center shadow-xl p-8'>
				<h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
				<Suspense
					fallback={<div className='flex justify-center'>Loading...</div>}>
					<LoginForm />
				</Suspense>
			</div>
		</div>
	);
}
