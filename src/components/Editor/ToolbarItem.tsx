const ToolbarItem = ({
  icon,
  title,
  action,
  isActive = null,
}: {
  icon?: string;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
}) => {
  return (
    <button
      className={`cursor-pointer ${
        isActive && isActive() ? "bg-slate-600" : ""
      }`}
      onClick={action}
      title={title}
    >
      {icon}
    </button>
  );
};

export default ToolbarItem;
