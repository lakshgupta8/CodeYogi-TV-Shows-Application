import { memo } from "react";

const GenrePill = ({ name }: { name: string }) => {
  return (
    <span className="bg-surface-raised px-3 py-1 border border-border-active rounded-full font-medium text-text-secondary text-sm tracking-widest">
      {name}
    </span>
  );
};

export default memo(GenrePill);
