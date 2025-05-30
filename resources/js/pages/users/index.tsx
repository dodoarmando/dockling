import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { UserPlus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Management',
        href: '/users',
    },
];

type User = {
    id: number;
    name: string;
    email: string;
};

interface IndexProps {
    users: User[];
}

export default function Index({ users }: IndexProps) {

    function handleDelete(userId: number) {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(route('users.destroy', userId));
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Users' />
            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Users</h1>
                        <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>Manage your user accounts</p>
                    </div>
                    <Link 
                        href={route('users.create')} 
                        className='inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-200 transform hover:scale-105'>
                        <UserPlus/>
                        Create User
                    </Link>
                </div>
                <div className='overflow-x-auto'>
                    <table className='mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>ID</th>
                                <th scope='col' className='px-6 py-3'>Name</th>
                                <th scope='col' className='px-6 py-3'>Email</th>
                                <th scope='col' className='px-6 py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(({ id, name, email }) => 
                                <tr key={id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                                    <td className='px-6 py-2 font-medium text-gray-900 dark:text-white'>{id}</td>
                                    <td className='px-6 py-2 text-gray-600 dark:text-gray-300'>{name}</td>
                                    <td className='px-6 py-2 text-gray-600 dark:text-gray-300'>{email}</td>
                                    <td className='px-6 py-2'>
                                        <Link
                                            href={route('users.show', id)}
                                            className='cursor-pointer mr-1 px-3 py-2 text-xs font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
                                            Show
                                        </Link>
                                        <Link
                                            href={route('users.edit', id)}
                                            className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(id)}
                                            className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-1'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
