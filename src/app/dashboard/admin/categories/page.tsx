"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Category {
  id: number;
  title: string;
  slug: string;
}

const Categories: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [newCategorySlug, setNewCategorySlug] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/category");
      const categories = await response.json();
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategoryTitle.trim()) {
      Swal.fire("Error", "Category title cannot be empty.", "error");
      return;
    }

    if (!newCategorySlug.trim()) {
      Swal.fire("Error", "Category slug cannot be empty.", "error");
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        title: newCategoryTitle,
        slug: newCategorySlug,
      };

      const response = await fetch("/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setCategories((prev) => [...prev, data.category]);
        setNewCategoryTitle("");
        setNewCategorySlug("");
        Swal.fire("Success", "Category added successfully.", "success");
      } else {
        Swal.fire("Error", data.message || "Failed to add category.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred while adding category.", "error");
      console.error("Error adding category:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditCategory = async (id: number, currentTitle: string, currentSlug: string) => {
    let updatedSlug = currentSlug;
  
    const { value: formValues } = await Swal.fire({
      title: "Edit Category",
      html:
        `<input id="title" class="swal2-input" placeholder="Title" value="${currentTitle}" oninput="document.getElementById('slug').value = this.value.toLowerCase().replace(/\\s+/g, '-')">` +
        `<input id="slug" class="swal2-input" placeholder="Slug" value="${currentSlug}">`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const title = (document.getElementById("title") as HTMLInputElement)?.value.trim();
        const slug = (document.getElementById("slug") as HTMLInputElement)?.value.trim();
  
        if (!title || !slug) {
          Swal.showValidationMessage("Both title and slug are required.");
          return null;
        }
  
        updatedSlug = slug; // Allow manual editing of slug
        return { title, slug };
      },
    });
  
    if (formValues) {
      const { title: newTitle, slug: newSlug } = formValues;
  
      try {
        const response = await fetch(`/api/category`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, title: newTitle, slug: newSlug }),
        });
  
        const data = await response.json();
  
        if (data.success) {
          setCategories((prev) =>
            prev.map((category) =>
              category.id === id
                ? { ...category, title: newTitle, slug: updatedSlug }
                : category
            )
          );
          Swal.fire("Success", "Category updated successfully.", "success");
        } else {
          Swal.fire("Error", data.message || "Failed to update category.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred while updating the category.", "error");
        console.error("Error updating category:", error);
      }
    }
  };
  
  
  

  const handleDeleteCategory = async (id: number) => {
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
        const response = await fetch(`/api/category?id=${id}`, { method: "DELETE" });
        const data = await response.json();

        if (data.success) {
          setCategories((prev) => prev.filter((category) => category.id !== id));
          Swal.fire("Deleted!", "The category has been deleted.", "success");
        } else {
          Swal.fire("Error", data.message || "Failed to delete category.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred while deleting the category.", "error");
        console.error("Error deleting category:", error);
      }
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated" && session?.user.role === "ADMIN") {
      fetchCategories();
    }
  }, [status, router, session]);

  if (status === "loading" || loading) return <LoadingSpinner />;
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") return null;

  const columns = [
    { name: "ID", selector: (row: Category) => row.id, sortable: true, grow: 0 },
    { name: "Title", selector: (row: Category) => row.title, sortable: true },
    { name: "Slug", selector: (row: Category) => row.slug, sortable: true },
    {
      name: "Actions",
      cell: (row: Category) => (
        <div className="flex space-x-2 text-xl">
          <FontAwesomeIcon
            icon={faEdit}
            className="text-blue-600 cursor-pointer"
            title="Edit"
            onClick={() => handleEditCategory(row.id, row.title, row.slug)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-600 cursor-pointer"
            title="Delete"
            onClick={() => handleDeleteCategory(row.id)}
          />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      grow: 0,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        fontSize: "16px", // Increase font size for table rows
      },
    },
    headCells: {
      style: {
        fontSize: "18px", // Increase font size for header cells
        fontWeight: "100", // Optional: Make header font bold
      },
    },
    cells: {
      style: {
        fontSize: "18px", // Increase font size for individual cells
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-light mb-4">Add New Category</h2>
          <input
            type="text"
            value={newCategoryTitle}
            onChange={(e) => {
              setNewCategoryTitle(e.target.value);
              setNewCategorySlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
            }}
            placeholder="Write category title"
            className="border border-gray-300 rounded px-4 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="text"
            value={newCategorySlug}
            onChange={(e) => setNewCategorySlug(e.target.value)}
            placeholder="Edit category slug"
            className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            onClick={handleAddCategory}
            disabled={submitting}
            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
              submitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Adding..." : "Add Category"}
          </button>
        </div>
        <div>
          <h2 className="text-xl mb-4">Category List</h2>
          <DataTable
            columns={columns}
            data={categories}
            pagination
            highlightOnHover
            responsive
            striped
            customStyles={customStyles}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Categories;
