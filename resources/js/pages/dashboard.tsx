import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import '../../css/scrollbar.css'
import { useState, useEffect } from 'react';
import Loading from '@/components/loading';
import BarChartWithCategoryAxis from '@/components/ui-data/Bar';

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

interface Props {
    data: User[];
}

const populasi = [
    { x: 2000, y: 100000000 },
    { x: 2005, y: 120000000 },
    { x: 2010, y: 140000000 },
    { x: 2015, y: 170000000 },
    { x: 2020, y: 200000000 },
    { x: 2025, y: 230000000 },
]

export default function Dashboard({ data }: Props) {

    const [daftarUsers, setDaftarUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDaftarUsers(data);
            setLoading(false);
        }, 1000); // Simulate a delay for loading

        return () => clearTimeout(timer);
    }, [data]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {loading ? (
                <Loading />
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
                            <BarChartWithCategoryAxis
                                    dataName="Population Growth"
                                    labels_y="Population"
                                    labels_x="Year"
                                    data={populasi}
                                />
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );

}
