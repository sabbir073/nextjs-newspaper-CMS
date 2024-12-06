"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  display_name: string | null;
  created_at: string;
  updated_at: string;
}

export default function AdminManageUsers() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [usersData, setUsersData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState("");

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users");
      const data = await response.json();
      if (data.success) {
        setUsersData(data.users);
      } else {
        console.error("Error fetching users:", data.error);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch searched users
  const fetchSearchData = async (searchQuery: string) => {
    try {
      setLoadingSearch(true);
      const response = await fetch(`/api/users?search=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      if (data.success) {
        setUsersData(data.users);
      } else {
        console.error("Error fetching search data:", data.error);
      }
    } catch (error) {
      console.error("Error fetching search data:", error);
    } finally {
      setLoadingSearch(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated" && session?.user.role === "ADMIN") {
      fetchUsers();
    }
  }, [status, router, session]);

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value) {
      fetchSearchData(value);
    } else {
      fetchUsers();
    }
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`/api/users/${id}`, { method: "DELETE" });
        const data = await response.json();

        if (data.success) {
          setUsersData((prevData) => prevData.filter((user) => user.id !== id));
          Swal.fire("Deleted!", "The user has been deleted.", "success");
        } else {
          Swal.fire("Error", data.error || "Failed to delete the user.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred while deleting the user.", "error");
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleAddUser = () => {
    router.push("/dashboard/admin/users/add"); // Redirect to Add User page
  };

  const handleEdit = (id: number) => {
    router.push(`/dashboard/admin/users/edit/${id}`); // Redirect to Edit User page
  };

  if (status === "loading" || loading) return <LoadingSpinner />;
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") return null;

  const columns = [
    { name: "ID", selector: (row: User) => row.id, sortable: true, grow: 0 },
    { name: "Name", selector: (row: User) => row.name, sortable: true },
    { name: "Email", selector: (row: User) => row.email, sortable: true },
    { name: "Role", selector: (row: User) => row.role, sortable: true },
    { name: "Display Name", selector: (row: User) => row.display_name || "N/A", sortable: true },
    {
      name: "Created At",
      selector: (row: User) =>
        new Date(row.created_at).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      sortable: true,
    },
    {
      name: "Updated At",
      selector: (row: User) =>
        new Date(row.updated_at).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row: User) => (
        <div className="flex space-x-3 text-lg">
          <FontAwesomeIcon icon={faEdit} className="text-blue-600 cursor-pointer" title="Edit" onClick={() => handleEdit(row.id)} />
          <FontAwesomeIcon icon={faTrash} className="text-red-600 cursor-pointer" title="Delete" onClick={() => handleDelete(row.id)} />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      grow: 0,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "rgb(134 239 172 / var(--tw-bg-opacity))",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Manage Users</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAddUser}
              className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
            >
              Add User
            </button>
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
        </div>
        {loadingSearch && <p className="text-gray-600 mb-4">Searching...</p>}
        <DataTable
          columns={columns}
          data={usersData}
          pagination
          highlightOnHover
          pointerOnHover={false}
          responsive
          striped
          customStyles={customStyles}
        />
      </div>
    </DashboardLayout>
  );
}
