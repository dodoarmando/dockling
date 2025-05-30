import AppLayout from "@/layouts/app-layout";
import { Head, Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { type User, columns } from "./columns";
import { type BreadcrumbItem } from "@/types";
import { DataTable } from "@/components/data-table";

interface IndexProps {
    users: User[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "User Management",
        href: "/users",
    },
];

export default function Index({ users }: IndexProps) {
    function handleDelete(userId: number) {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("users.destroy", userId));
        }
    }

    const columnsWithActions = [
        ...columns,
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }: any) => (
                <div className="flex gap-1">
                    <Link href={route("users.show", row.original.id)}>
                        <Button size="sm" variant="outline">
                            Show
                        </Button>
                    </Link>
                    <Link href={route("users.edit", row.original.id)}>
                        <Button size="sm">Edit</Button>
                    </Link>
                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(row.original.id)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Manage your user accounts
                        </p>
                    </div>
                    <Link href={route("users.create")}>
                        <Button className="flex items-center gap-2">
                            <UserPlus className="w-4 h-4" />
                            Create User
                        </Button>
                    </Link>
                </div>
                <DataTable columns={columnsWithActions} data={users} />
            </div>
        </AppLayout>
    );
}
