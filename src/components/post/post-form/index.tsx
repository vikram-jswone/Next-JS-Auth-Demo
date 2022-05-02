import { Button, Input } from "@/components/ui";
import { CreatePostPayload } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface PostFormProps {
  initialValues: CreatePostPayload;
  resolver: (values: CreatePostPayload) => Promise<void>;
}

export const PostForm: React.FC<PostFormProps> = React.memo(
  ({ initialValues, resolver }) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(initialValues);

    useEffect(() => {
      setForm(initialValues);
    }, [initialValues]);

    const handleSubmit = useCallback(
      async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          setLoading(true);
          await resolver(initialValues);
        } catch (err) {
          toast("Something went wrong... Please try again", { type: "error" });
        } finally {
          setLoading(false);
        }
      },
      [resolver]
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    return (
      <form
        className="flex-col flex space-y-3"
        onSubmit={handleSubmit}
      >
        <Input
          className=""
          placeholder="Title"
          required
          value={form.title}
          onChange={handleChange}
          name="title"
        />
        <Input
          className=""
          placeholder="Description"
          required
          value={form.body}
          onChange={handleChange}
          name="body"
        />
        <Button disabled={loading}>{loading ? "Loading..." : "Save"}</Button>
      </form>
    );
  }
);
