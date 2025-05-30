import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Show',
        href: '/users',
    },
];


type EditProps = {
    user: {
        id: number;
        name: string;
        email: string;
    };
};

export default function Show({ user }: EditProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Users Show' />
            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>User Details</h1>
                    <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6'>
                        <p className='text-sm text-gray-600 dark:text-gray-300'><strong>ID:</strong> {user.id}</p>
                        <p className='text-sm text-gray-600 dark:text-gray-300'><strong>Name:</strong> {user.name}</p>
                        <p className='text-sm text-gray-600 dark:text-gray-300'><strong>Email:</strong> {user.email}</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
