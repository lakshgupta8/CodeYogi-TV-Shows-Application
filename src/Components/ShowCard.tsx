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
    <div className="shadow-md m-1 p-2 rounded-md max-w-xs">
      <img
        src={show.image?.medium || placeholderImage}
        alt={show.name}
        className="rounded-t-md w-full h-72 object-center object-contain"
      />
      <div className="flex flex-col justify-between space-y-8 p-6">
        <div className="space-y-2">
          <h2 className="font-semibold tracking-wide texts-3xl">{show.name}</h2>
          {parse(show.summary || "")}
        </div>
        <Link
          to={`/show/${show.id}`}
          className="flex justify-center items-center p-3 rounded-md w-full font-semibold tracking-wide"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
