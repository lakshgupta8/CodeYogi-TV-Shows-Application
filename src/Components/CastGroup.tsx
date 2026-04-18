import { type FC, memo, useState } from 'react';
import CastImage from './CastImage';
import CastList from './CastList';
import type { Cast } from '../Models/shows';

export interface CastGroupProps {
    cast: Cast[];
    displayCount?: number;
}

const CastGroup: FC<CastGroupProps> = ({ cast, displayCount = 5 }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    if (cast.length === 0) {
        return <p className="text-text-muted">No cast information available.</p>;
    }

    const itemsToShow = cast.slice(0, displayCount);
    const remainingCount = cast.length - displayCount;

    return (
        <div className="relative flex items-center ml-3">
            {itemsToShow.map((c) => (
                <CastImage
                    key={c.person.id}
                    avatarLink={c.person.image?.medium || "https://images.unsplash.com/vector-1769004080143-f1664190076a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    name={c.person.name}
                    characterName={c.character.name}
                />
            ))}
            {remainingCount > 0 && (
                <button
                    onClick={() => setIsListOpen(true)}
                    className="z-0 flex justify-center items-center bg-surface-raised hover:bg-surface-hover -ml-3 border-4 border-surface rounded-full w-12 h-12 transition-all hover:-translate-y-1 cursor-pointer"
                >
                    <span className="font-bold text-text-secondary text-sm">+{remainingCount}</span>
                </button>
            )}

            {isListOpen && (
                <CastList
                    cast={cast}
                    onClose={() => setIsListOpen(false)}
                />
            )}
        </div>
    );
};

export default memo(CastGroup);