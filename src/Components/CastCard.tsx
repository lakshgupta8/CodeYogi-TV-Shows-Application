import { memo } from "react";

const CastCard = ({
  avatarLink,
  name,
}: {
  avatarLink: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col items-center bg-neutral-900 border border-neutral-800 rounded-lg p-3 m-2 shadow-lg w-28 hover:scale-105 transition-transform duration-300">
      <img className="w-20 h-20 rounded-full object-cover mb-3" src={avatarLink} alt={name} />
      <p className="text-stone-300 font-medium text-sm text-center leading-tight">{name}</p>
    </div>
  );
};

export default memo(CastCard);