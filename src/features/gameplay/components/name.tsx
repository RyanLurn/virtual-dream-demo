import { memo } from "react";

const Name = memo(function Name({ name }: { name: string }) {
  return (
    <div className="w-30 font-semibold text-center ml-5 text-2xl py-2 px-4 bg-sidebar text-sidebar-foreground rounded-t-md">
      {name}
    </div>
  );
});

export default Name;
