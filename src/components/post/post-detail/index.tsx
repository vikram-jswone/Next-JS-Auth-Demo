import { Button } from "@/components/ui";
import { Post } from "@/types";
import { PostCard } from "../post-card";
import { PostDeleteAction } from "../post-delete-action";
import { PostEditActionButton } from "../post-edit-action";

interface PostDetailProps {
  post: Post;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto rounded-md justify-center items-center">
      <PostCard post={post} />
      <div className="flex mt-4 space-x-4">
        <PostEditActionButton post={post} />
        <PostDeleteAction post={post} />
      </div>
    </div>
  );
};
