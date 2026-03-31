import { memo } from "react";

const GenrePill = ({ name }: { name: string }) => {
  return (
    <span className="px-3 py-1 bg-stone-900 border border-stone-700 text-stone-300 text-sm font-medium rounded-full lowercase tracking-wider">
      {name}
    </span>
  );
};

export default memo(GenrePill);
