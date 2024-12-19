// app/dashboard/admin/AdminEditUser.tsx

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ROLE_TYPES = ["ADMIN", "VENDOR", "USER"] as const;

type RoleType = typeof ROLE_TYPES[number];

interface FormDataType {
  name: string;
  email: string;
  password?: string; // Mark as optional since it may not always be present
  role: RoleType;
  display_name?: string;
}
  

export default function AdminEditUser() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();

  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
    role: "" as RoleType,
    display_name: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if(hasFetched) return;
    // Fetch user data to populate form
    async function fetchUser() {
      try {
        const response = await fetch(`/api/users/${params.id}`);
        const data = await response.json();
        if (data.success) {
          setFormData({
            name: data.user.name || "",
            email: data.user.email || "",
            password: "", // Password field left empty
            role: data.user.role || "",
            display_name: data.user.display_name || "",
          });
          setHasFetched(true);
        } else {
          Swal.fire("Error", "User not found.", "error");
          router.push("/dashboard/admin/users");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        Swal.fire("Error", "An error occurred while fetching user data.", "error");
      } finally {
        setLoading(false);
      }
    }

    if (params.id) fetchUser();
  }, [params.id, router]);

  if (status === "loading" || loading) return <LoadingSpinner />;
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    const submissionData: Partial<FormDataType> = { ...formData };

    // Include password only if it's not empty
    if (formData.password) {
      submissionData["password"] = formData.password;
    }

    try {
      const response = await fetch(`/api/users/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        Swal.fire("Success", "User updated successfully!", "success");
        router.push("/dashboard/admin/users");
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "An error occurred while updating the user.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-center py-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Edit User</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Enter name", required: true },
              { label: "Email", name: "email", type: "email", placeholder: "Enter email", required: true },
              {
                label: "Password",
                name: "password",
                type: "password",
                placeholder: "Enter new password (leave blank to keep unchanged)",
                showToggle: true, // Toggle visibility for password field
              },
              {
                label: "Role",
                name: "role",
                type: "select",
                options: ROLE_TYPES.map((role) => ({ value: role, label: role })),
                required: true,
              },
              { label: "Display Name", name: "display_name", type: "text", placeholder: "Enter display name" },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 font-medium mb-2">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name as keyof typeof formData] as string}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full border border-red-200 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="relative">
                    <input
                      type={field.type === "password" && field.showToggle && passwordVisible ? "text" : field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full border border-red-200 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    {field.showToggle && (
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        className="absolute right-3 top-3 cursor-pointer text-gray-500"
                        onClick={() => setPasswordVisible((prev) => !prev)}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className={`font-semibold rounded-md px-6 py-3 ${
                  submitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                }`}
              >
                {submitting ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
