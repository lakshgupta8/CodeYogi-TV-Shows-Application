import { type FC, memo } from 'react';
import type { Cast } from '../Models/shows';

export interface CastListProps {
    cast: Cast[];
    onClose: () => void;
}

const CastList: FC<CastListProps> = ({ cast, onClose }) => {
    return (
        <>
            <div className="z-40 fixed inset-0" onClick={onClose}></div>
            <div className="top-full right-0 z-50 absolute flex flex-col bg-surface-panel mt-4 border border-border-hover/50 rounded-xl w-64 max-h-80 text-text-primary animate-fade-in">
                <div className="flex justify-between items-center bg-surface-overlay/50 p-3 border-border-hover/50 border-b">
                    <span className="font-bold text-text-muted text-xs tracking-widest">FULL CAST ({cast.length})</span>
                    <button onClick={onClose} className="text-text-primary transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-1 overflow-y-auto custom-scrollbar">
                    {cast.map((c) => (
                        <div key={c.person.id} className="flex items-center gap-3 hover:bg-surface-hover/30 p-2 rounded-lg transition-colors">
                            <img
                                src={c.person.image?.medium || "https://images.unsplash.com/vector-1769004080143-f1664190076a?q=80&w=880&auto=format&fit=crop"}
                                alt={c.person.name}
                                className="border-2 border-border-active rounded-full w-10 h-10 object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm truncate">{c.person.name}</span>
                                <span className="text-text-muted text-xs italic">as {c.character.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default memo(CastList);