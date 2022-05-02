import { Button } from "@/components/ui";
import { PostService } from "@/service";
import { Post } from "@/types";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

export interface PostDeleteActionProps {
  post: Post;
}

export const PostDeleteAction: React.FC<PostDeleteActionProps> = React.memo(
  ({ post }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handlePostDelete = useCallback(async () => {
      try {
        setLoading(true);
        await PostService.deletePostById(post.id);
        toast("Post deleted successfully", { type: "success" });
        router.back();
      } catch (err) {
        toast("Error while deleting post", { type: "error" });
      } finally {
        setLoading(false);
      }
    }, [post, router]);
    return (
      <Button color="secondary" disabled={loading} onClick={handlePostDelete}>
        {loading ? "Deleting..." : "Delete"}
      </Button>
    );
  }
);
