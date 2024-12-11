"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import Swal from "sweetalert2";

interface FeaturedField {
  id?: number; // ID of the featured section field
  title: string; // Title of the featured section field
  news_id: number | null; // Linked news ID
}

const FeaturedSection: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Initialize with 9 default fields
  const [fields, setFields] = useState<FeaturedField[]>(
    Array.from({ length: 9 }, (_, index) => ({
      title: `Featured News ${index + 1}`,
      news_id: null,
    }))
  );
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const fetchFeaturedSection = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/featured-section");
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (!Array.isArray(data)) {
        throw new Error("Unexpected API response format.");
      }
  
      // Update fields with API response
      setFields(data);
    } catch (error) {
      console.error("Error fetching featured section:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleSave = async () => {
    try {
      setSubmitting(true);
      const response = await fetch("/api/featured-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire("Success", "Featured section updated successfully.", "success");
      } else {
        Swal.fire("Error", data.error || "Failed to update featured section.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred while saving the featured section.", "error");
      console.error("Error saving featured section:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated" && session?.user.role === "ADMIN") {
      fetchFeaturedSection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, router, session]);

  if (status === "loading" || loading) return <LoadingSpinner />;
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") return null;

  return (
    <DashboardLayout>
      <div className="p-4">
        <h2 className="text-xl mb-4">Featured Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={`field-${index}`} className="mb-1">
                {field.title}
              </label>
              <input
                id={`field-${index}`}
                type="number"
                value={field.news_id || ""}
                onChange={(e) => {
                  const updatedFields = [...fields];
                  updatedFields[index] = {
                    ...updatedFields[index],
                    news_id: e.target.value ? parseInt(e.target.value, 10) : null,
                  };
                  setFields(updatedFields);
                }}
                placeholder="Enter News ID"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSave}
          disabled={submitting}
          className={`mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {submitting ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </DashboardLayout>
  );
};

export default FeaturedSection;
