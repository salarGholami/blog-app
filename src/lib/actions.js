"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnRequest from "@/utils/setCookieOnRequest";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId, parentId, formData) {
export async function createComment(prevState, { formData, postId, parentId }) {
  const cookieStore = cookies();
  const options = setCookieOnRequest(cookieStore);

  const rawDataForm = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawDataForm, options);
    revalidatePath("/blogs/[slug]");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
