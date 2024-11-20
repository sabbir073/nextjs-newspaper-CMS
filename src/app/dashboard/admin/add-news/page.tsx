/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AnimateHeight from "react-animate-height";
import "easymde/dist/easymde.min.css";
import Select, { SingleValue, ActionMeta } from "react-select";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the spinner
import { Field, Form, Formik } from "formik";
import "easymde/dist/easymde.min.css";

const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type NewsFormValues = {
  news_title: string;
  highlight: string;
  reporter_name: string;
  tag: string;
  featured_image: File | null;
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  meta_image: File | null;
  featured_image_url: string;
  meta_image_url: string;
};
type OptionType = { value: string; label: string };

export default function AdminDashboard() {
  const { data: session, status } = useSession(); // Get session data and status
  const router = useRouter();
  const [active, setActive] = useState<number>();
  const [selectedPublishStatus, setSelectedPublishStatus] =
    useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [editorValue, setEditorValue] = useState<string>("");

  const [categories, setCategories] = useState<
    { cat_id: string; categoryName: string }[]
  >([
    {
      cat_id: "1",
      categoryName: "অর্থনীতি",
    },
  ]);
  const onChangeEditor = useCallback((editorValue: string) => {
    setEditorValue(editorValue);
  }, []);

  const handleCheckboxChange = (categoryName: any) => {
    // Toggle selection
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== categoryName)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const handleSelectChange = (
    newValue: SingleValue<OptionType>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    actionMeta: ActionMeta<OptionType>
  ) => {
    if (newValue) {
      setSelectedPublishStatus(newValue.value); // set only the value to the state
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to login if the user is not authenticated
      router.replace("/login");
      return;
    } else if (status === "authenticated" && session?.user.role !== "ADMIN") {
      // Redirect to the appropriate role-based dashboard
      router.replace(`/dashboard/${session?.user.role.toLowerCase()}`);
    }
  }, [session, status, router]);

  // Guard rendering: Show loading spinner while the session is loading
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  // Guard rendering: Prevent showing the dashboard content if unauthenticated
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") {
    return null;
  }

  const initialValues: NewsFormValues = {
    news_title: "",
    highlight: "",
    reporter_name: "",
    tag: "",
    featured_image: null,
    meta_title: "",
    meta_description: "",
    focus_keyword: "",
    meta_image: null,
    featured_image_url: "",
    meta_image_url: "",
  };

  const publishStatusOptions = [
    { value: "Published", label: "Published" },
    { value: "Draft", label: "Draft" },
  ];

  const togglePara = (value: number) => {
    setActive((oldValue) => (oldValue === value ? 0 : value));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAddNews = async (values: any, { resetForm }: any) => {};

  return (
    <DashboardLayout>
      {/* <p>Welcome, {session?.user.email}</p> */}

      <div className="w-full px-2 ">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) =>
            handleAddNews(values, { resetForm })
          }
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div className="grid xl:grid-cols-4  gap-x-6 w-full ">
                <div className="xl:col-span-3 lg:col-span-2 md:col-span-2">
                  <div className="flex flex-col">
                    <h6 className="text-base py-2 text-gray-900">
                      {" "}
                      Add a news
                    </h6>

                    <label htmlFor="title" className="pb-2">
                      Title
                    </label>
                    <Field
                      name="news_title"
                      type="text"
                      id="news_title"
                      placeholder="Enter News Title"
                      className="form-input h-12 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                    />
                    {errors.news_title && touched.news_title && (
                      <p className="text-red-500">{errors.news_title}</p>
                    )}

                    <label htmlFor="title" className="pb-2">
                      Description
                    </label>
                    <SimpleMdeReact
                      className=" appearance-none block w-full  text-gray-700 border border-gray-200 rounded-md  bg-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={editorValue}
                      onChange={onChangeEditor}
                    />
                  </div>
                </div>
                <div className="md:col-span-2 xl:col-span-1 border  border-[#e6e6e6] rounded-md  bg-white xl:mt-8  h-fit pb-8">
                  <div>
                    <div className="rounded-t-md bg-white ">
                      <div
                        className={`flex justify-between cursor-pointer p-4  font-normal  hover:bg-[#EBEBEB] ${
                          active === 1 && "bg-[#EBEBEB] myAccordianHeading"
                        }`}
                        onClick={() => togglePara(1)}
                      >
                        <span>General</span>
                        <div className="flex ltr:ml-auto rtl:mr-auto">
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
                      </div>
                      <AnimateHeight
                        duration={50}
                        height={active === 1 ? "auto" : 0}
                      >
                        <div className="p-4 pt-2  font-normal text-white-dark">
                          <div className="mb-3 flex flex-col">
                            <label htmlFor="highlight">Highlight Text</label>
                            <Field
                              name="highlight"
                              type="text"
                              id="highlight"
                              placeholder="Enter highlight text"
                              className="form-input h-12 mb-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                          </div>
                          <div className="mb-3 flex flex-col">
                            <label htmlFor="reporter">Reporter Name</label>
                            <Field
                              name="reporter_name"
                              type="text"
                              id="reporter"
                              placeholder="Enter reporter name"
                              className="form-input h-12 mb-2  appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                          </div>
                          <div className="mb-3  flex flex-col">
                            <label htmlFor="fullName">Publish Status</label>
                            <Select
                              name="publish_status"
                              className=" mySelect"
                              placeholder="Choose..."
                              options={publishStatusOptions}
                              onChange={handleSelectChange}
                              isSearchable={false}
                            />
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>
                    <div className="border-y border-[#ebedf2] bg-white ">
                      <div
                        className={`flex justify-between cursor-pointer p-4  font-normal hover:bg-[#EBEBEB] ${
                          active === 2 && "bg-[#EBEBEB] myAccordianHeading"
                        }`}
                        onClick={() => togglePara(2)}
                      >
                        <span>Tags</span>
                        <div className="flex ltr:ml-auto rtl:mr-auto">
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
                      </div>
                      <AnimateHeight
                        duration={50}
                        height={active === 2 ? "auto" : 0}
                      >
                        <div className="p-4 pt-2 flex flex-col   text-white-dark">
                          <span>ADD NEW TAG</span>

                          <Field
                            name="tag"
                            type="text"
                            id="tags"
                            placeholder="Enter tag name"
                            className="form-input h-12 mb-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          />
                          <span className="text-[13px]">
                            Separate with the comma
                          </span>
                        </div>
                      </AnimateHeight>
                    </div>

                    <div className="border-b border-[#ebedf2] bg-white ">
                      <div
                        className={`flex justify-between cursor-pointer p-4  font-normal hover:bg-[#EBEBEB]  ${
                          active === 3 && "bg-[#EBEBEB] myAccordianHeading"
                        }`}
                        onClick={() => togglePara(3)}
                      >
                        <span>Categories</span>
                        <div className="flex ltr:ml-auto rtl:mr-auto">
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
                      </div>
                      <AnimateHeight
                        duration={50}
                        height={active === 3 ? "auto" : 0}
                      >
                        <div className="p-4 pt-2  font-normal text-white-dark">
                          {categories.map((category) => (
                            <label
                              key={category.cat_id}
                              htmlFor={category.categoryName}
                              className="flex items-center gap-[6px]"
                            >
                              <input
                                type="checkbox"
                                id={category.cat_id}
                                className="h-4 w-4"
                                checked={selectedCategories.includes(
                                  category.categoryName
                                )}
                                onChange={() =>
                                  handleCheckboxChange(category.categoryName)
                                }
                              />
                              <span>{category.categoryName}</span>
                            </label>
                          ))}
                        </div>
                      </AnimateHeight>
                    </div>

                    <div className="border-b border-[#ebedf2] bg-white ">
                      <div
                        className={`flex justify-between cursor-pointer p-4  font-normal hover:bg-[#EBEBEB]  ${
                          active === 4 && "bg-[#EBEBEB] myAccordianHeading"
                        }`}
                        onClick={() => togglePara(4)}
                      >
                        <span>Featured Image</span>
                        <div className="flex ltr:ml-auto rtl:mr-auto">
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
                      </div>
                      <AnimateHeight
                        duration={50}
                        height={active === 4 ? "auto" : 0}
                      >
                        <div className="p-4 pt-2  font-normal text-white-dark">
                          <div className="flex justify-between items-center gap-2 mb-3">
                            <span>File</span>
                          </div>

                          <input
                            name="featured_image"
                            type="file"
                            id="featured_image"
                            className="form-input h-12 mb-2"
                            onChange={(event: any) => {
                              setFieldValue(
                                "featured_image",
                                event.currentTarget.files[0]
                              );
                            }}
                          />

                          {errors.featured_image && touched.featured_image && (
                            <p className="text-red-500">
                              {errors.featured_image}
                            </p>
                          )}
                        </div>
                      </AnimateHeight>
                    </div>

                    <div className="border-b border-[#ebedf2] bg-white ">
                      <div
                        className={`flex justify-between cursor-pointer p-4  font-normal hover:bg-[#EBEBEB]  ${
                          active === 5 && "bg-[#EBEBEB] myAccordianHeading"
                        }`}
                        onClick={() => togglePara(5)}
                      >
                        <span>SEO</span>
                        <div className="flex ltr:ml-auto rtl:mr-auto">
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
                      </div>
                      <AnimateHeight
                        duration={50}
                        height={active === 5 ? "auto" : 0}
                      >
                        <div className="p-4 pt-2  font-normal">
                          <div className="mb-2 flex flex-col">
                            <label htmlFor="metaTitle">Meta Title</label>
                            <Field
                              name="meta_title"
                              type="text"
                              id="metaTitle"
                              placeholder="Enter Meta Title"
                              className="form-input h-12 mb-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                          </div>
                          <div className="mb-2">
                            <label htmlFor="metaDescription">
                              Meta Description
                            </label>
                            <Field
                              name="meta_description"
                              type="text"
                              id="metaDescription"
                              placeholder="Enter Meta Description"
                              className="form-input h-12 mb-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                          </div>

                          <div className="mb-2">
                            <div className="flex justify-between items-center">
                              <label htmlFor="meta_image">Meta Image</label>
                            </div>
                            {
                              <input
                                name="meta_image"
                                type="file"
                                id="meta_image"
                                className="form-input h-12 mb-2"
                                onChange={(event: any) => {
                                  setFieldValue(
                                    "meta_image",
                                    event.currentTarget.files[0]
                                  );
                                }}
                              />
                            }
                            {errors.meta_image && touched.meta_image && (
                              <p className="text-red-500">
                                {errors.meta_image}
                              </p>
                            )}
                          </div>

                          <div className="mb-2">
                            <label htmlFor="focusKeyword">Focus Keyword</label>
                            <Field
                              name="focus_keyword"
                              type="text"
                              id="focusKeyword"
                              placeholder="Enter Focus Keyword"
                              className="form-input h-12 mb-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary !mt-6">
                Publish
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  );
}
