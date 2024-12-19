"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import Swal from "sweetalert2";

interface VideoStoryField {
  id?: number; // ID of the video story field
  title: string; // Title of the video story field
  video_url: string | null; // Video URL or ID
}

const VideoStorySection: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [field, setField] = useState<VideoStoryField>({
    title: "Youtube Video ID",
    video_url: null,
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchVideoStory = async () => {
    if(hasFetched) return;
    try {
      setLoading(true);
      const response = await fetch("/api/video-story");

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      setHasFetched(true);
      if (!data || typeof data !== "object") {
        throw new Error("Unexpected API response format.");
      }

      setField(data);
    } catch (error) {
      console.error("Error fetching video story:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSubmitting(true);
      const response = await fetch("/api/video-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ video_url: field.video_url }), // Send video_url directly
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire("Success", "Video story updated successfully.", "success");
      } else {
        Swal.fire("Error", data.error || "Failed to update video story.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred while saving the video story.", "error");
      console.error("Error saving video story:", error);
    } finally {
      setSubmitting(false);
    }
  };
  

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated" && session?.user.role === "ADMIN") {
      fetchVideoStory();
    }
  }, [status, router, session]);

  if (status === "loading" || loading) return <LoadingSpinner />;
  if (status === "unauthenticated" || session?.user.role !== "ADMIN") return null;

  return (
    <DashboardLayout>
      <div className="p-4">
        <h2 className="text-xl mb-4">Video Story</h2>
        <div className="flex flex-col">
          <label htmlFor="video-url" className="mb-1">
            {field.title}
          </label>
          <input
            id="video-url"
            type="text"
            value={field.video_url || ""}
            onChange={(e) =>
              setField({
                ...field,
                video_url: e.target.value ? e.target.value : null,
              })
            }
            placeholder="Enter Youtube Video ID"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
          />
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

export default VideoStorySection;
