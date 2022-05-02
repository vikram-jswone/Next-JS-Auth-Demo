import { Modal, ModalProps } from "@/components/ui";
import { CloseIcon } from "@/icons";
import { PostService } from "@/service";
import { CreatePostPayload } from "@/types";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { PostForm } from "../post-form";

export interface CreatePostModalProps extends Omit<ModalProps, "children"> {}

export const CreatePostModal: React.FC<CreatePostModalProps> = React.memo(
  ({ onClose, open }) => {
    const createPost = useCallback(
      async (payload: CreatePostPayload) => {
        await PostService.createPost(payload);
        toast("Post created successfully", { type: "success" });
        onClose();
      },
      [onClose]
    );

    return (
      <Modal open={open} onClose={onClose}>
        <div className="bg-white max-w-xl w-full p-4 rounded-md mx-auto ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-left text-blue-500">
              Create Post
            </h2>
            <button onClick={onClose}>
              <CloseIcon className="h-5 w-5 fill-current text-black" />
            </button>
          </div>
          <PostForm
            initialValues={{
              body: "",
              title: "",
              userId: 1, // Hardcoded as of now
            }}
            resolver={createPost}
          />
        </div>
      </Modal>
    );
  }
);
