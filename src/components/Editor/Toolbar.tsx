import { Editor } from "@tiptap/core";
import ToolbarItem from "./ToolbarItem";
import { emitToolbarItems } from "../../constants/ToolbarItems";

const Toolbar = ({ editor }: { editor: Editor }) => {
  const toolbarItems = emitToolbarItems({ editor });

  return (
    <div className="flex flex-wrap space-x-2 mb-4 ">
      {toolbarItems.map((item, index) => (
        <div key={index}>
          {item.type === "divider" ? (
            <div className="divider" />
          ) : (
            <ToolbarItem {...item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
