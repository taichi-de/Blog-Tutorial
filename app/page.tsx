import RightSidebar from "../components/RightSidebar";
import { SanityDocument } from "next-sanity";
import Posts from "@/components/Posts";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <div className="grid grid-cols-12 gap-4 py-4 px-0 md:p-8 lg:w-4/5 w-full h-full text-left mx-auto">
      <div className="lg:col-span-8 col-span-12 bg-main pt-4 px-2 rounded-sm">
        <div className="grid md:grid-cols-2 gap-4 m-4">
          <Posts posts={posts} />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:block h-full">
        <RightSidebar />
      </div>
    </div>
  );
}
