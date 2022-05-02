import { Post } from "@/types";
import React from "react";

export interface PostCardProps {
  post: Post;
}
export const PostCard: React.FC<PostCardProps> = React.memo(({ post }) => {
  return (
    <div className="post-card border p-4 rounded-md hover:border-blue-300">
      <div className="post-card-header">
        <h2 className="post-card-title text-2xl font-bold capitalize text-blue-500">
          {post.title}
        </h2>
      </div>
      <div className="post-card-body text-gray-400 capitalize text-sm">
        <p>{post.body}</p>
      </div>
    </div>
  );
});
