import Loading from '@/components/loading';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Roles',
    href: '/roles',
  },
];

interface Role {
  id: number;
  name: string;
  value: number;
}

export default function Roles() {
  const [daftarRoles, setDaftarRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const data: Role[] = [
          { id: 1, name: 'Admin', value: 2 },
          { id: 2, name: 'Editor', value: 10 },
          { id: 3, name: 'Viewer', value: 200 },
        ];
        setDaftarRoles(data);
      } catch (error) {
        console.error('Failed to load roles', error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Roles" />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex h-full flex-col gap-4 rounded-xl p-4 overflow-x-auto">
          <PlaceholderPattern className="w-full h-64 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {daftarRoles.map((role) => (
              <div
                key={role.id}
                className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="absolute top-0 left-0 p-4 bg-white bg-opacity-75 dark:bg-gray-800 rounded-tl-xl">
                  <h3 className="text-lg font-semibold">{role.name}</h3>
                </div>
                <div className="flex items-center justify-center h-full">
                  <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    {role.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AppLayout>
  );
}
