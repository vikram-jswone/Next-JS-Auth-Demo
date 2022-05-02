import { Modal, ModalProps } from "@/components/ui";
import { CloseIcon } from "@/icons";
import { PostService } from "@/service";
import { PostId, UpdatePostPayload } from "@/types";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { PostForm } from "../post-form";

export interface EditPostModalProps extends Omit<ModalProps, "children"> {
  initialValues: UpdatePostPayload;
  id: PostId;
}

export const EditPostModal: React.FC<EditPostModalProps> = React.memo(
  ({ onClose, open, initialValues, id }) => {
    const router = useRouter();
    const editPost = useCallback(
      async (paylod: UpdatePostPayload) => {
        await PostService.updatePostById(id, paylod);
        toast("Post updated successfully", { type: "success" });
        onClose();
        router.push("/");
      },
      [id, onClose, router]
    );

    return (
      <Modal open={open} onClose={onClose}>
        <div className="bg-white max-w-xl w-full p-4 rounded-md mx-auto ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-left text-blue-500">
              Edit Post
            </h2>
            <button onClick={onClose}>
              <CloseIcon className="h-5 w-5 fill-current text-black" />
            </button>
          </div>

          <PostForm initialValues={initialValues} resolver={editPost} />
        </div>
      </Modal>
    );
  }
);
