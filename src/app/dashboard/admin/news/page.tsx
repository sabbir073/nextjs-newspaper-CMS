// app/dashboard/admin/AdminSeeNews.tsx
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import DataTable from "react-data-table-component";
import debounce from "lodash.debounce";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface News {
  id: number;
  title: string;
  reporter_name: string | null;
  publish_status: string;
  categories: { title: string }[];
  created_at: string;
  updated_at: string;
  created_by: { name: string };
}

export default function AdminSeeNews() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState("");

  // Fetch initial data without search query
  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/news");
      const data = await response.json();
      if (data.success) {
        setNewsData(data.news);
      } else {
        console.error("Error fetching initial data:", data.error);
      }
    } catch (error) {
      console.error("Error fetching initial data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch search data with search query
  const fetchSearchData = async (searchQuery: string) => {
    try {
      setLoadingSearch(true);
      const response = await fetch(`/api/news?search=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      if (data.success) {
        setNewsData(data.news);
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
      fetchInitialData();
    }
  }, [status, router, session]);

  const handleSearch = debounce((value: string) => {
    setSearch(value);
    if (value) {
      fetchSearchData(value);
    } else {
      fetchInitialData();
    }
  }, 500);

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
        const response = await fetch(`/api/news/${id}`, { method: "DELETE" });
        const data = await response.json();

        if (data.success) {
          setNewsData((prevData) => prevData.filter((news) => news.id !== id));
          Swal.fire("Deleted!", "The news has been deleted.", "success");
        } else {
          Swal.fire("Error", data.error || "Failed to delete the news.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred while deleting the news.", "error");
        console.error("Error deleting news:", error);
      }
    }
  };

  const handleView = (id: number) => {
    window.open(`/news/details/${id}`, '_blank'); // Open the news view page in a new tab
  };

  const handleEdit = (id: number) => {
    router.push(`/dashboard/admin/news/update/${id}`); // Redirect to the news edit page
  };

  if (status === "loading" || loading) return <LoadingSpinner />;
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") return null;

  const columns = [
    { name: "ID", selector: (row: News) => row.id, sortable: true, grow: 0 },
    { name: "Title", selector: (row: News) => row.title, sortable: true },
    { name: "Reporter", selector: (row: News) => row.reporter_name || "N/A", sortable: true, grow: 0 },
    { name: "Status", selector: (row: News) => row.publish_status, sortable: true },
    {
      name: "Categories",
      selector: (row: News) =>
        row.categories.length > 0 ? row.categories.map((cat) => cat.title).join(", ") : "N/A",
      sortable: false,
    },
    {
      name: "Created At",
      selector: (row: News) =>
        new Date(row.created_at).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      sortable: true,
    },
    { name: "Created By", selector: (row: News) => row.created_by.name, sortable: false },
    {
      name: "Actions",
      cell: (row: News) => (
        <div className="flex space-x-3 text-lg">
          <FontAwesomeIcon icon={faEye} className="text-green-600 cursor-pointer" title="View" onClick={() => handleView(row.id)} />
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
          <h2 className="text-2xl font-semibold text-gray-800">News List</h2>
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        {loadingSearch && <p className="text-gray-600 mb-4">Searching...</p>}
        <DataTable
          columns={columns}
          data={newsData}
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
