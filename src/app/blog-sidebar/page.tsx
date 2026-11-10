import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import BlogSidebar from "@/components/BlogSidebar";
import PostCard, { posts } from "@/components/PostCard";
import Footer from "@/components/Footer";
import { container } from "@/components/ui";
import BlogSidebarView from "@/components/BlogSidebarView";

const ordered = [...posts.slice(0, 4), posts[5], posts[4]];

export default function BlogSidebarPage() {
  return <BlogSidebarView page={1} />;
}