import { Editor } from "@tiptap/core";

export const emitToolbarItems = ({ editor }: { editor: Editor }) => {
  return [
    // working
    {
      icon: "bold",
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    // working
    {
      icon: "italic",
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    // working
    {
      icon: "strikethrough",
      title: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    // working
    {
      icon: "inline-code",
      title: "Code",
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
    // working
    {
      icon: "mark-pen-line",
      title: "Highlight",
      action: () =>
        editor.chain().focus().toggleHighlight({ color: "#ffc078" }).run(),
      isActive: () => editor.isActive("highlight"),
    },
    // working
    {
      type: "divider",
    },
    // working
    {
      icon: "h-1",
      title: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    // working
    {
      icon: "h-2",
      title: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    // working
    {
      icon: "paragraph",
      title: "Paragraph",
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive("paragraph"),
    },
    // working
    {
      icon: "list-unordered",
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    // working
    {
      icon: "list-ordered",
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    // working
    {
      icon: "Task-List",
      title: "Task List",
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive("taskList"),
    },
    // working
    {
      icon: "code-block",
      title: "Code Block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    // working
    {
      icon: "blockquote",
      title: "Blockquote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    // working - divider
    {
      icon: "separator",
      title: "Horizontal Rule",
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    // working - hard break
    {
      icon: "add-break",
      title: "Hard Break",
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    // working - clear formatting
    {
      icon: "clear-formatting",
      title: "Clear Format",
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    // working
    {
      icon: "undo",
      title: "Undo",
      action: () => editor.chain().focus().undo().run(),
    },
    // working
    {
      icon: "redo",
      title: "Redo",
      action: () => editor.chain().focus().redo().run(),
    },
  ];
};
