import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forgot Password | Platform',
    description: 'Reset your password to regain access to your account.',
};

export default function ForgotPasswordPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-[2.8rem] font-bold text-neutral-900">
                    Forgot Password
                </h1>
                <p className="mt-2 text-[1.4rem] text-neutral-500">
                    Enter your email and we&apos;ll send you a reset link.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[1.3rem] font-medium text-neutral-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="rounded-lg border border-neutral-200 px-4 py-3 text-[1.4rem] outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                </div>
                <button
                    type="button"
                    className="mt-2 rounded-lg bg-accent px-6 py-3 text-[1.4rem] font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                    Send Reset Link
                </button>
            </div>
        </div>
    );
}
