import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import '../../css/scrollbar.css'
import { useState, useEffect } from 'react';
import { Atom } from 'react-loading-indicators';
import Loading from '@/components/loading';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
}

const daftarUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'jhone@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
    { id: 2, name: 'Jane Smith', email: 'smit@test.com' },
]


export default function Dashboard() {

    const [daftarUsers, setDaftarUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setTimeout(() => {
            try {
                const data: User[] = [
                    { id: 1, name: 'John Doe', email: 'jhone@test.com' },
                    { id: 2, name: 'Jane Smith', email: 'jane@test.com' },
                    { id: 3, name: 'Alice Johnson', email: 'alic@gmail.com' },
                    { id: 4, name: 'Bob Brown', email: 'bob@test.com' },
                ];
                setDaftarUsers(data);
            } catch (error) {
                setError('Failed to load users');
            } finally {
                setLoading(false);
            }
        }, 1000)
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {loading ? (
                <Loading/>
            ) : error ? (
                <div className="flex items-center justify-center h-full w-full">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        {/* Placeholder Cards */}
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                    </div>

                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                        {/* User List Card */}
                        <div className="no-scrollbar aspect-video overflow-auto hidden-scrollbar rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-2">
                            {daftarUsers.length > 0 ? (
                                daftarUsers.map(userInfo => (
                                    <div
                                        key={userInfo.id}
                                        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow mb-2"
                                    >
                                        <h3 className="text-lg font-semibold">{userInfo.name}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{userInfo.email}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-gray-500">No users found</p>
                                </div>
                            )}
                        </div>

                        {/* Another card */}
                        <div className="flex items-center justify-center h-full w-full flex-2">
                            <PlaceholderPattern className="w-full h-full rounded-xl border border-sidebar-border/70 dark:border-sidebar-border" />
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );

}
