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
import LoadingSpinner from "../Components/LoadingSpinner";

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
    return <LoadingSpinner className="mx-auto" />;
  }

  return (
    <div className="flex flex-col space-y-8 mt-6 pb-10 animate-fade-in">
      <div>
        <button className="flex items-center bg-neutral-800 hover:bg-neutral-700 px-4 py-2 border border-neutral-700 rounded-lg font-semibold text-stone-300 text-sm tracking-wide transition-colors">
          <Link to="/" className="flex items-center gap-2">
            <span>&larr;</span> Back to Results
          </Link>
        </button>
      </div>

      <div className="flex md:flex-row flex-col items-start gap-8">
        <img
          src={show.image?.medium || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={show.name}
          className="shadow-2xl mx-auto md:mx-0 border border-neutral-800 rounded-xl w-full max-w-[280px] h-auto object-cover"
        />

        <div className="flex flex-col flex-1 space-y-6">
          <div className="space-y-4">
            <h2 className="font-extrabold text-white text-4xl tracking-tight">{show.name}</h2>

            <div className="flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <GenrePill name={genre} key={genre} />
              ))}
            </div>

            <p className="inline-flex items-center gap-2 bg-amber-900 shadow-sm px-3 py-1 border border-amber-800 rounded-md font-bold text-amber-100">
              <span>★</span> {show.rating.average ? `${show.rating.average} / 10` : 'N/A'}
            </p>
          </div>

          <div className="prose-invert max-w-none text-stone-300 prose-a:text-amber-500 text-lg leading-relaxed prose">
            {parse(show.summary || "No summary available.")}
          </div>
        </div>
      </div>

      <div className="pt-8 border-neutral-800 border-t">
        <h4 className="mb-6 font-bold text-stone-100 text-2xl tracking-wide">Top Cast</h4>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
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
