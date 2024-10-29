import { Editor } from "@tiptap/core";

import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaHighlighter } from "react-icons/fa";
import { FaHeading } from "react-icons/fa";
import { ImParagraphLeft } from "react-icons/im";
import { FaList } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { BiCodeBlock } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa";
import { RiSeparator } from "react-icons/ri";
import { TbClearFormatting } from "react-icons/tb";
import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";

export const emitToolbarItems = ({ editor }: { editor: Editor }) => {
  return [
    // working
    {
      icon: FaBold,
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    // working
    {
      icon: FaItalic,
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    // working
    {
      icon: FaStrikethrough,
      title: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      type: "divider",
    },
    // working
    {
      icon: FaCode,
      title: "Code",
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
    // working
    {
      icon: BiCodeBlock,
      title: "Code Block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      type: "divider",
    },
    // working
    {
      icon: FaHighlighter,
      title: "Highlight",
      action: () =>
        editor.chain().focus().toggleHighlight({ color: "#ffc078" }).run(),
      isActive: () => editor.isActive("highlight"),
    },
    {
      type: "divider",
    },
    // working
    {
      icon: FaHeading,
      title: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    // working
    // {
    //   icon: "h-2",
    //   title: "Heading 2",
    //   action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    //   isActive: () => editor.isActive("heading", { level: 2 }),
    // },
    // working
    {
      icon: ImParagraphLeft,
      title: "Paragraph",
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive("paragraph"),
    },
    {
      type: "divider",
    },
    // working
    {
      icon: FaList,
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    // working
    {
      icon: FaListOl,
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    // working
    {
      icon: FaListCheck,
      title: "Task List",
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive("taskList"),
    },
    {
      type: "divider",
    },
    // working
    {
      icon: FaQuoteRight,
      title: "Blockquote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    // working - divider
    {
      icon: RiSeparator,
      title: "Horizontal Rule",
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    // working - clear formatting
    {
      icon: TbClearFormatting,
      title: "Clear Format",
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      type: "divider",
    },
    // working
    {
      icon: FaUndo,
      title: "Undo",
      action: () => editor.chain().focus().undo().run(),
    },
    // working
    {
      icon: FaRedo,
      title: "Redo",
      action: () => editor.chain().focus().redo().run(),
    },
  ];
};
