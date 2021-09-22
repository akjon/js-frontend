import { Editor, EditorContent } from "@tiptap/react";
import React from 'react'
import Button from "./Button";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = new Editor({
    extensions: [StarterKit, EditorContent],
    autofocus: false,
    content: "This is the editor",
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}

export default Tiptap;
