"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnRequest from "@/utils/setCookieOnRequest";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(postId, parentId, formData) {
  const cookieStore = cookies();
  const options = setCookieOnRequest(cookieStore);

  const rawDataForm = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawDataForm, options);
    // console.log({ message });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
  revalidatePath("/blogs/[slug]");
}
