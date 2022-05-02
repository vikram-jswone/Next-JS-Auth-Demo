import { Post } from "@/types";
import { PostCard } from "@/components/post/post-card";
import Link from "next/link";

export interface PostListingProps {
  posts: Post[];
}
export const PostListing: React.FC<PostListingProps> = ({ posts }) => {
  return (
    <div
      id="posts-listing"
      className="md:max-w-4xl space-y-4 mx-auto flex flex-1 flex-col pb-4"
    >
      {posts.map((post) => (
        <Link href={`/detail/${post.id}`} key={post.id}>
          <a title={`Click here to view ${post.title}`} className="block">
            <PostCard post={post} />
          </a>
        </Link>
      ))}
    </div>
  );
};
