import type { FC } from "react";
import { Link } from "react-router-dom";
import type { Show } from "../Models/shows";
import parse from "html-react-parser";

interface ShowCardProps {
  show: Show;
}

const ShowCard: FC<ShowCardProps> = ({ show }) => {
  const placeholderImage = "http://images.unsplash.com/vector-1769004080350-422140cb8920?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col bg-surface shadow shadow-brand m-1 border border-border-base rounded-xl w-full max-w-xs h-full overflow-hidden hover:scale-102 transition-transform duration-300">
      <img
        src={show.image?.medium || placeholderImage}
        alt={show.name}
        className="border-border-base border-b w-full h-80 object-cover"
      />
      <div className="flex flex-col flex-1 justify-between space-y-4 p-5">
        <div className="space-y-1">
          <h2 className="font-bold text-text-primary text-xl line-clamp-1" title={show.name}>{show.name}</h2>
          <div className="text-text-muted text-sm line-clamp-3">
            {parse(show.summary || "No summary available")}
          </div>
        </div>
        <Link
          to={`/show/${show.id}`}
          className="flex justify-center items-center px-4 py-2.5 rounded-lg w-full font-semibold tracking-wide transition-colors bg-accent-bg text-accent-text hover:bg-accent-border"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
