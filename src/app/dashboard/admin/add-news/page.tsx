/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import Swal from "sweetalert2";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Field, Form, Formik } from "formik";

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // ReactQuill theme
import DOMPurify from "dompurify"; // For sanitization

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers (h1 - h6)
    ["bold", "italic", "underline", "strike"], // Text styles
    [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    [{ indent: "-1" }, { indent: "+1" }], // Indent/Outdent
    [{ direction: "rtl" }], // Right-to-left text direction
    [{ color: [] }, { background: [] }], // Text color and background color
    [{ align: [] }], // Text alignment
    ["link", "image", "video", "blockquote", "code-block"], // Media and block types
    ["clean"], // Remove formatting
  ],
};


const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "script",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
  "video",
  "blockquote",
  "code-block",
  "table",
  "background",
  "color",
];

type NewsFormValues = {
  title: string;
  description: string;
  video_url: string;
  highlight_text: string;
  reporter_name: string;
  publish_status: string;
  tag: string;
  categories: string[];
  featured_image: File | null;
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  meta_image: File | null;
};

export default function AddNewsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [active, setActive] = useState<number>();
  const [editorValue, setEditorValue] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<{ id: string; title: string }[]>([]);
  const [submitting, setSubmitting] = useState(false);



  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/category");
        const data = await response.json();
        if (response.ok) {
          setCategories(data); // Use `data` directly since your API returns the categories array
        } else {
          console.error("Failed to fetch categories:", data.error);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
      return;
    } else if (status === "authenticated" && session?.user.role !== "ADMIN") {
      router.replace(`/dashboard/${session?.user.role.toLowerCase()}`);
    }
  }, [session, status, router]);

  const initialValues: NewsFormValues = {
    title: "",
    description: "",
    video_url: "",
    highlight_text: "",
    reporter_name: "",
    publish_status: "DRAFT",
    tag: "",
    categories: [],
    featured_image: null,
    meta_title: "",
    meta_description: "",
    focus_keyword: "",
    meta_image: null,
  };

  const publishStatusOptions = [
    { value: "PUBLISHED", label: "Published" },
    { value: "DRAFT", label: "Draft" },
  ];

  const togglePara = (value: number) => {
    setActive((oldValue) => (oldValue === value ? 0 : value));
  };

  const handleSubmit = async (values: NewsFormValues, { resetForm, setFieldValue }: { resetForm: () => void; setFieldValue: (field: string, value: any) => void }) => {
    setSubmitting(true);
  
    try {
      let featuredImageName = "";
      let metaImageName = "";
  
      if (values.featured_image) {
        const formData = new FormData();
        formData.append("file", values.featured_image);
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
  
        if (!response.ok) throw new Error(data.message || "Failed to upload image.");
        featuredImageName = data.fileName;
      }
  
      if (values.meta_image) {
        const formData = new FormData();
        formData.append("file", values.meta_image);
  
        console.log("Uploading meta image...");
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
  
        if (!response.ok) throw new Error(data.message || "Failed to upload meta image.");
        metaImageName = data.fileName;
      } else {
        metaImageName = featuredImageName;
      }
  
      const payload = {
        title: values.title,
        description: DOMPurify.sanitize(editorValue) || null, // Sanitize HTML
        video_url: values.video_url || null,
        highlight_text: values.highlight_text || null,
        reporter_name: values.reporter_name || null,
        publish_status: values.publish_status,
        tag: values.tag || null,
        categories: selectedCategories.map((id) => parseInt(id, 10)),
        featured_image: featuredImageName || null,
        meta_title: values.meta_title || null,
        meta_description: values.meta_description || null,
        focus_keyword: values.focus_keyword || null,
        meta_image: metaImageName || null,
        created_by_id: Number(session?.user.id),
      };
  
      const newsResponse = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const newsData = await newsResponse.json();
  
      if (newsResponse.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "News added successfully!",
        });
  
        // Reset Formik fields
      resetForm();
      setEditorValue(""); // Clear the editor content
      setSelectedCategories([]); // Clear selected categories

      // Explicitly reset specific fields
      setFieldValue("publish_status", "DRAFT");
      setFieldValue("featured_image", null);
      setFieldValue("meta_image", null);

      // Clear file inputs manually
      const featuredImageInput = document.getElementById("featured_image") as HTMLInputElement;
      const metaImageInput = document.getElementById("meta_image") as HTMLInputElement;
      if (featuredImageInput) featuredImageInput.value = "";
      if (metaImageInput) metaImageInput.value = "";

      // Reset `categories` inputs manually
      const categoryInputs = document.querySelectorAll(".form-checkbox") as NodeListOf<HTMLInputElement>;
      categoryInputs.forEach((input) => {
        input.checked = false; // Uncheck category checkboxes
      });

      // Reset `publish_status` input manually
      const publishStatusSelect = document.getElementById("publish_status") as HTMLSelectElement;
      if (publishStatusSelect) {
        publishStatusSelect.value = "DRAFT";
      }
      } else {
        throw new Error(newsData.message || "Failed to add news.");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while processing the request.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  
  
  

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "unauthenticated" || session?.user.role !== "ADMIN") {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="w-full px-2">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form>
              <div className="grid xl:grid-cols-4 gap-x-6 w-full">
                <div className="xl:col-span-3 lg:col-span-2 md:col-span-2">
                  <div className="flex flex-col">
                    <h6 className="text-base py-2 text-gray-900 text-xl">Add News</h6>

                    {/* Title */}
                    <label htmlFor="title" className="pb-2">
                      Title
                    </label>
                    <Field
                      name="title"
                      type="text"
                      id="title"
                      placeholder="Enter News Title"
                      required
                      className="form-input h-12 block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500"
                    />

                    {/* Description */}
                    <label htmlFor="description" className="pb-2">
                      Description
                    </label>
                    <ReactQuill
                      value={editorValue}
                      onChange={setEditorValue} // Handle Quill value
                      modules={modules}
                      formats={formats}
                      className="quill-editor h-[300px] bg-white text-gray-700 border rounded-md mb-3"
                    />
                    {/* video url */}
                    <label htmlFor="video_url" className="pb-2">
                      Youtube Video URL
                    </label>
                    <Field
                      name="video_url"
                      type="text"
                      id="video_url"
                      placeholder="Enter Youtube Video URL"
                      className="form-input h-12 block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 xl:col-span-1 border border-[#e6e6e6] rounded-md bg-white xl:mt-8 h-fit pb-8">
                  <div>
                    {/* General */}
                    <div
                      className={`flex justify-between cursor-pointer p-4 hover:bg-[#EBEBEB] ${
                        active === 1 && "bg-[#EBEBEB]"
                      }`}
                      onClick={() => togglePara(1)}
                    >
                      <span>General</span>
                      <svg
                        className={`h-5 w-5 ${
                          active === 1 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9L12 15L5 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <AnimateHeight duration={50} height={active === 1 ? "auto" : 0}>
                      <div className="p-4 pt-2">
                        <label htmlFor="highlight_text">Highlight Text</label>
                        <Field
                          name="highlight_text"
                          type="text"
                          id="highlight_text"
                          placeholder="Enter highlight text"
                          className="form-input h-12 mb-2 block w-full bg-gray-100 border rounded py-3 px-4"
                        />

                        <label htmlFor="reporter_name">Reporter Name</label>
                        <Field
                          name="reporter_name"
                          type="text"
                          id="reporter_name"
                          placeholder="Enter reporter name"
                          className="form-input h-12 mb-2 block w-full bg-gray-100 border rounded py-3 px-4"
                        />

                        <label htmlFor="publish_status">Publish Status</label>
                        <select
                          name="publish_status"
                          id="publish_status"
                          className="form-select block w-full bg-gray-100 border rounded py-2 px-4"
                          defaultValue="DRAFT" // Default to "DRAFT" in uppercase
                          onChange={(e) => setFieldValue("publish_status", e.target.value.toUpperCase())} // Ensure uppercase value
                        >
                          {publishStatusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </AnimateHeight>

                    {/* Tags */}
                    <div
                      className={`flex justify-between cursor-pointer p-4 hover:bg-[#EBEBEB] ${
                        active === 2 && "bg-[#EBEBEB]"
                      }`}
                      onClick={() => togglePara(2)}
                    >
                      <span>Tags</span>
                      <svg
                        className={`h-5 w-5 ${
                          active === 2 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9L12 15L5 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <AnimateHeight duration={50} height={active === 2 ? "auto" : 0}>
                      <div className="p-4">
                        <Field
                          name="tag"
                          type="text"
                          id="tag"
                          placeholder="separated by comma"
                          className="form-input h-12 block w-full bg-gray-100 border rounded py-3 px-4"
                        />
                      </div>
                    </AnimateHeight>

                    {/* Categories */}
                    <div
                      className={`flex justify-between cursor-pointer p-4 hover:bg-[#EBEBEB] ${
                        active === 3 && "bg-[#EBEBEB]"
                      }`}
                      onClick={() => togglePara(3)}
                    >
                      <span>Categories</span>
                      <svg
                        className={`h-5 w-5 ${
                          active === 3 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9L12 15L5 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <AnimateHeight duration={50} height={active === 3 ? "auto" : 0}>
                      <div className="p-4">
                        {categories.length > 0 ? (
                          categories.map((category) => (
                            <label
                              key={category.id}
                              htmlFor={`category_${category.id}`}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id={`category_${category.id}`}
                                className="form-checkbox"
                                value={category.id}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedCategories((prev) => [...prev, category.id]);
                                  } else {
                                    setSelectedCategories((prev) =>
                                      prev.filter((id) => id !== category.id)
                                    );
                                  }
                                }}
                              />
                              <span className="text-xl">{category.title}</span>
                            </label>
                          ))
                        ) : (
                          <p>No categories available</p>
                        )}
                      </div>
                    </AnimateHeight>

                    {/* Featured Image */}
                    <div
                      className={`flex justify-between cursor-pointer p-4 hover:bg-[#EBEBEB] ${
                        active === 4 && "bg-[#EBEBEB]"
                      }`}
                      onClick={() => togglePara(4)}
                    >
                      <span>Featured Image</span>
                      <svg
                        className={`h-5 w-5 ${
                          active === 4 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9L12 15L5 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <AnimateHeight duration={50} height={active === 4 ? "auto" : 0}>
                      <div className="p-4">
                        <input
                          name="featured_image"
                          type="file"
                          id="featured_image"
                          className="block w-full border rounded mt-2"
                          onChange={(event) =>
                            setFieldValue(
                              "featured_image",
                              event.target.files?.[0] || null
                            )
                          }
                        />
                      </div>
                    </AnimateHeight>

                    {/* SEO */}
                    <div
                      className={`flex justify-between cursor-pointer p-4 hover:bg-[#EBEBEB] ${
                        active === 5 && "bg-[#EBEBEB]"
                      }`}
                      onClick={() => togglePara(5)}
                    >
                      <span>SEO</span>
                      <svg
                        className={`h-5 w-5 ${
                          active === 5 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9L12 15L5 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <AnimateHeight duration={50} height={active === 5 ? "auto" : 0}>
                      <div className="p-4">
                        <label htmlFor="meta_title">Meta Title</label>
                        <Field
                          name="meta_title"
                          type="text"
                          id="meta_title"
                          placeholder="Enter meta title"
                          className="form-input h-12 mb-2 block w-full bg-gray-100 border rounded py-3 px-4"
                        />

                        <label htmlFor="meta_description">Meta Description</label>
                        <Field
                          name="meta_description"
                          type="text"
                          id="meta_description"
                          placeholder="Enter meta description"
                          className="form-input h-12 mb-2 block w-full bg-gray-100 border rounded py-3 px-4"
                        />

                        <label htmlFor="focus_keyword">Focus Keyword</label>
                        <Field
                          name="focus_keyword"
                          type="text"
                          id="focus_keyword"
                          placeholder="Enter focus keyword"
                          className="form-input h-12 mb-2 block w-full bg-gray-100 border rounded py-3 px-4"
                        />

                        <label htmlFor="meta_image">Meta Image</label>
                        <input
                          name="meta_image"
                          type="file"
                          id="meta_image"
                          className="block w-full border rounded mt-2"
                          onChange={(event) =>
                            setFieldValue(
                              "meta_image",
                              event.target.files?.[0] || null
                            )
                          }
                        />
                      </div>
                    </AnimateHeight>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary !mt-6"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Publish"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  );
}