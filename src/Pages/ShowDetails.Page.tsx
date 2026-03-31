import { type FC } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { type WithRouterProps } from "../HOCs/withRouter";
import { Link } from "react-router-dom";

const ShowDetailPage: FC<WithRouterProps> = ({ params }) => {
  console.log(params);
  return (
    <div className="mt-2">
      <button className="bg-gray-700 px-4 py-2 rounded-md text-white"><Link to="/">Back</Link></button>
      <h2 className="font-semibold text-4xl tracking-wide">The Witcher</h2>
      <div className="flex space-x-3 bg-gray-300 my-2 p-2 rounded-sm">
        <GenrePill name="Action" />
        <GenrePill name="Fiction" />
        <GenrePill name="Thriller" />
        <GenrePill name="Violence" />
      </div>
      <div className="flex mt-2">
        <img
          src="https://static.tvmaze.com/uploads/images/medium_portrait/423/1058422.jpg"
          alt=""
          className="rounded-t-md w-full h-72 object-center object-cover"
        />
        <div className="ml-2">
          <p>
            Based on the best-selling fantasy series, The Witcher is an epic
            tale of fate and family. Geralt of Rivia, a solitary monster hunter,
            struggles to find his place in a world where people often prove more
            wicked than beasts. But when destiny hurtles him toward a powerful
            sorceress, and a young princess with a dangerous secret, the three
            must learn to navigate the increasingly volatile Continent together.
          </p>
          <p className="mt-2 px-2 py-1 border border-gray-700 rounded-md max-w-max font-bold text-lg">
            Rating: <span className="text-gray-700">9.5/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="font-semibold text-2xl tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ShowDetailPage);
