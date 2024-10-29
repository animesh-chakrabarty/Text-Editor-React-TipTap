import { Button } from "../ui/button";

const ToolbarItem = ({
  icon: Icon,
  title,
  action,
  isActive = null,
}: {
  icon?: JSX.ElementType;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
}) => {
  return (
    <Button
      variant={"outline"}
      className={`cursor-pointer mb-2 px-3 py-1 ${
        isActive && isActive() ? "bg-gray-300" : ""
      }`}
      onClick={action}
      title={title}
    >
      {Icon && <Icon />}
    </Button>
  );
};

export default ToolbarItem;
