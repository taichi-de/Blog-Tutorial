import { SanityDocument } from "@sanity/client";
import { draftMode } from "next/headers";
import Post from "@/app/components/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import PreviewProvider from "@/app/components/PreviewProvider";
import PreviewPost from "@/app/components/PreviewPost";

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <Post post={post} />;
}
