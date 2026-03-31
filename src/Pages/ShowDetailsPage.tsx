import { useEffect, type FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import type { State } from "../store";
import { loadShowDetailAction } from "../Actions/shows";
import { showsMapSelector } from "../Selectors/shows";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { type WithRouterProps } from "../HOCs/withRouter";
import type { Show } from "../Models/shows";

type ShowDetailPageProps = {
  show: Show;
  loadShowDetail: (showId: number) => void;
} & WithRouterProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  show,
  params,
  loadShowDetail,
}) => {
  const showId = +params.showId;

  useEffect(() => {
    loadShowDetail(showId);
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-2">
      <button className="bg-gray-700 px-4 py-2 rounded-md text-white">
        <Link to="/">Back</Link>
      </button>
      <h2 className="font-semibold text-4xl tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 bg-gray-300 my-2 p-2 rounded-sm">
        {show.genres.map((genre) => (
          <GenrePill name={genre} key={genre} />
        ))}
      </div>
      <div className="flex mt-2">
        <img
          src={show.image?.medium || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt=""
          className="rounded-t-md w-[210px] h-[295px] object-center object-cover"
        />
        <div className="ml-2">
          <div>{parse(show.summary || "")}</div>
          <p className="mt-2 px-2 py-1 border border-gray-700 rounded-md max-w-max font-bold text-lg">
            Rating: <span className="text-gray-700">{show.rating.average}/10</span>
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

const mapStateToProps = (state: State, ownProps: any) => {
  const showId: number = +ownProps.params.showId;
  return {
    show: showsMapSelector(state)[showId],
  };
};

const mapDispatchToProps = {
  loadShowDetail: loadShowDetailAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowDetailPage)
);
