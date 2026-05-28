import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Insights (Blog) | KC Shinde & Associates",
  description:
    "Finance insights, GST updates, compliance guidance, and business advisory articles.",
};

export default function BlogPage() {
  return <BlogClient />;
}

