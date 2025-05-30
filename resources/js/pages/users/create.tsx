import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Create',
        href: '/users',
    },
];

export default function Create() {

    const { data, setData, errors, post } = useForm({
        name: '',
        email: '',
        password: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(route('users.store'), {
            onSuccess: () => {
                setData({ name: '', email: '', password: '' }); // Reset form after successful submission
            },
            onError: (errors) => {
                console.error('Form submission errors:', errors);
            },
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Users Create' />
            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <form onSubmit={submit} className='space-y-6 mt-4 max-w-md mx-auto'>
                    <div className='grid gap-2'>
                        <label htmlFor='name' className='text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50'>
                            Name:
                        </label>
                        <input
                            type='text'
                            id='name'
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            name='name'
                            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your name'
                            required
                        />
                        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor='email' className='text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50'>
                            Email:
                        </label>
                        <input
                            type='email'
                            id='email'
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            name='email'
                            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your email'
                            required
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor='password' className='text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50'>
                            Password:
                        </label>
                        <input
                            type='password'
                            id='password'
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            name='password'
                            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your password'
                            required
                        />
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                    </div>
                    <button
                        type='submit'
                        className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition'
                    >
                        Create User
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
