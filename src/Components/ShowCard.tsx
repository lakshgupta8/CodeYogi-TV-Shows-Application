import type { FC } from "react";
import { Link } from "react-router-dom";
import type { Show } from "../Models/shows";
import parse from "html-react-parser";

interface ShowCardProps {
  show: Show;
}

const placeholderImage = "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ShowCard: FC<ShowCardProps> = ({ show }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 shadow-xl m-1 rounded-xl w-full max-w-xs overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      <img
        src={show.image?.medium || placeholderImage}
        alt={show.name}
        className="w-full h-80 object-cover border-b border-neutral-800"
      />
      <div className="flex flex-col flex-1 justify-between p-5 space-y-4">
        <div className="space-y-2">
          <h2 className="font-bold text-xl text-stone-100 line-clamp-1" title={show.name}>{show.name}</h2>
          <div className="text-stone-400 text-sm line-clamp-3 prose prose-invert">
            {parse(show.summary || "No summary available")}
          </div>
        </div>
        <Link
          to={`/show/${show.id}`}
          className="flex justify-center items-center py-2.5 px-4 bg-amber-900 hover:bg-amber-800 text-amber-50 rounded-lg w-full font-semibold tracking-wide transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
