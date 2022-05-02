import { Button } from "@/components/ui";
import { Post } from "@/types";
import React, { useCallback, useState } from "react";
import { EditPostModal } from "../edit-post-modal";

export interface PostEditActionButtonProps {
  post: Post;
}

export const PostEditActionButton: React.FC<PostEditActionButtonProps> =
  React.memo(({ post }) => {
    const [open, setOpen] = useState(false);

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    const onOpen = useCallback(() => {
      setOpen(true);
    }, []);

    return (
      <>
        <Button onClick={onOpen}>Edit</Button>
        <EditPostModal
          open={open}
          onClose={onClose}
          id={post.id}
          initialValues={{
            body: post.body,
            title: post.title,
            userId: post.userId,
          }}
        />
      </>
    );
  });
