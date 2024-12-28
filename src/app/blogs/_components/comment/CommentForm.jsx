"use Client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useState } from "react";

function CommentForm({ postId, parentId }) {
  const [text, setText] = useState();
  const createCommentWithData = createComment.bind(null, postId, parentId);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md w-full">
          <form action={createCommentWithData} className="space-y-7">
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
