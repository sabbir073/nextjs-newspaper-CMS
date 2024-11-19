"use client";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import DashboardLayout from "@/components/layouts/DashboardLayout";

const validationSchema = Yup.object().shape({
  newsId1: Yup.string().required("newsId1 is required"),
  newsId2: Yup.string().required("newsId2 is required"),
  newsId3: Yup.string().required("newsId3 is required"),
  newsId4: Yup.string().required("newsId4 is required"),
  newsId5: Yup.string().required("newsId5 is required"),
  newsId6: Yup.string().required("newsId6 is required"),
  newsId7: Yup.string().required("newsId7 is required"),
  newsId8: Yup.string().required("newsId8 is required"),
  newsId9: Yup.string().required("newsId9 is required"),
  newsId10: Yup.string().required("newsId10 is required"),
  newsId11: Yup.string().required("newsId11 is required"),
  newsId12: Yup.string().required("newsId12 is required"),
});

const FeaturedNews = () => {
  // Form submit handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any, { resetForm }: any) => {};

  return (
    <DashboardLayout>
      <div className="mt-5">
        <div className="">
          <h6 className=" font-normal mb-8">Featured News</h6>
          <Formik
            initialValues={{
              newsId1: "",
              newsId2: "",
              newsId3: "",
              newsId4: "",
              newsId5: "",
              newsId6: "",
              newsId7: "",
              newsId8: "",
              newsId9: "",
              newsId10: "",
              newsId11: "",
              newsId12: "",
            }}
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, { resetForm })
            }
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-x-6 xl:gap-x-6 ">
                  <div className="mb-4 flex flex-col ">
                    <label htmlFor="newsId1" className="mb-2">
                      News ID 1
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId1"
                      name="newsId1"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId1 && touched.newsId1 && (
                      <p className="text-red-500 mt-1">{errors.newsId1}</p>
                    )}
                  </div>
                  <div className="mb-4 flex flex-col ">
                    <label htmlFor="newsId2" className="mb-2">
                      News ID 2
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId2"
                      name="newsId2"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId2 && touched.newsId2 && (
                      <p className="text-red-500 mt-1">{errors.newsId2}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId3" className="mb-2">
                      News ID 3
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId3"
                      name="newsId3"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId3 && touched.newsId3 && (
                      <p className="text-red-500 mt-1">{errors.newsId3}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId4" className="mb-2">
                      News ID 4
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId4"
                      name="newsId4"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId4 && touched.newsId4 && (
                      <p className="text-red-500 mt-1">{errors.newsId4}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId5" className="mb-2">
                      News ID 5
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId5"
                      name="newsId5"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId5 && touched.newsId5 && (
                      <p className="text-red-500 mt-1">{errors.newsId5}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId6" className="mb-2">
                      News ID 6
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId6"
                      name="newsId6"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId6 && touched.newsId6 && (
                      <p className="text-red-500 mt-1">{errors.newsId6}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId7" className="mb-2">
                      News ID 7
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId7"
                      name="newsId7"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId7 && touched.newsId7 && (
                      <p className="text-red-500 mt-1">{errors.newsId7}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId8" className="mb-2">
                      News ID 8
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId8"
                      name="newsId8"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId8 && touched.newsId8 && (
                      <p className="text-red-500 mt-1">{errors.newsId8}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId9" className="mb-2">
                      News ID 9
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId9"
                      name="newsId9"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId9 && touched.newsId9 && (
                      <p className="text-red-500 mt-1">{errors.newsId9}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId10" className="mb-2">
                      News ID 10
                    </label>
                    <Field
                      className="form-input h-10 bg-white px-4"
                      type="text"
                      id="newsId10"
                      name="newsId10"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId10 && touched.newsId10 && (
                      <p className="text-red-500 mt-1">{errors.newsId10}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId11" className="mb-2">
                      News ID 11
                    </label>
                    <Field
                      className="form-input h-11 bg-white px-4"
                      type="text"
                      id="newsId11"
                      name="newsId11"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId11 && touched.newsId11 && (
                      <p className="text-red-500 mt-1">{errors.newsId11}</p>
                    )}
                  </div>

                  <div className="mb-4 flex flex-col">
                    <label htmlFor="newsId12" className="mb-2">
                      News ID 12
                    </label>
                    <Field
                      className="form-input h-12 bg-white px-4"
                      type="text"
                      id="newsId12"
                      name="newsId12"
                      placeholder="Enter News ID"
                    />
                    {errors.newsId12 && touched.newsId12 && (
                      <p className="text-red-500 mt-1">{errors.newsId12}</p>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary !mt-6">
                  Publish Now
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FeaturedNews;
