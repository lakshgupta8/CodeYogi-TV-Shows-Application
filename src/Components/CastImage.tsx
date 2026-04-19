import { memo, type FC } from "react";

interface CastImageProps {
  avatarLink: string;
  name?: string;
  characterName?: string;
  showTooltip?: boolean;
}

const CastImage: FC<CastImageProps> = ({
  avatarLink,
  name,
  characterName,
}) => {
  return (
    <div className="group hover:z-20 relative -ml-3 transition-all hover:-translate-y-1">
      <img
        className="border-4 border-surface rounded-full w-12 h-12 object-cover group-hover:scale-110 transition-all cursor-pointer"
        src={avatarLink}
        alt={name}
      />

      <div className="bottom-full left-1/2 z-30 absolute bg-surface opacity-0 group-hover:opacity-100 mb-3 px-3 py-2 border border-border-hover rounded-lg whitespace-nowrap transition-opacity -translate-x-1/2 pointer-events-none">
        <p className="mb-1 font-bold text-text-primary text-sm leading-none">{name}</p>
        <p className="text-text-muted text-xs leading-none">as {characterName}</p>

        <div className="top-full left-1/2 absolute border-8 border-transparent border-t-surface -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default memo(CastImage);