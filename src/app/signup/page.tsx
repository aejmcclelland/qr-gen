// app/signup/page.tsx
import { Suspense } from 'react';
import SignupForm from '@/components/auth/Signup-Form';

export default function SignupPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-base-200 p-4'>
			<div className='card w-full  max-w-md bg-base-100 shadow-xl p-8'>
				<h2 className='text-2xl font-bold text-center mb-6'>
					Create an account
				</h2>
				<Suspense
					fallback={<div className='flex justify-center'>Loading...</div>}>
					<SignupForm />
				</Suspense>
			</div>
		</div>
	);
}
