import Button from "./Button";
import { Editor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = new Editor({
    extensions: [StarterKit, EditorContent],
    autofocus: true,
    content: "This is the editor",
  });

  return (
    <>
      <Button
        text={"Save"}
        onClick={() => {
          let jsonContent = editor.getJSON().content;
          console.info(JSON.stringify(jsonContent, null, 2));
        }}
      />
      <hr />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
