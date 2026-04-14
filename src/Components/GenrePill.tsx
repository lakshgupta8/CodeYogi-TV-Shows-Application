import { memo } from "react";

const GenrePill = ({ name }: { name: string }) => {
  return (
    <span className="bg-stone-900 px-3 py-1 border border-stone-700 rounded-full font-medium text-stone-300 text-sm tracking-wider">
      {name}
    </span>
  );
};

export default memo(GenrePill);
