import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Editor: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight.configure({ multicolor: true })],
    content: "<p>Write your blogpost here...</p>",
  });

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
      {editor && <Toolbar editor={editor} />}
      <EditorContent
        editor={editor}
        className="custom min-h-[300px] p-4 border border-gray-200 rounded bg-white"
      />
    </div>
  );
};

export default Editor;
