import { Button } from "@/components/ui";
import React, { useCallback, useState } from "react";
import { CreatePostModal } from "../create-post-modal";

export const PostCreateActionButton = React.memo(() => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Create</Button>
      <CreatePostModal open={open} onClose={onClose} />
    </>
  );
});
