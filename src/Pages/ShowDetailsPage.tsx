import { useEffect, type FC } from "react";
import { connect, type ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import type { State } from "../store";
import { loadShowDetailAction } from "../Actions/shows";
import { showsMapSelector } from "../Selectors/shows";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { type WithRouterProps } from "../hocs/withRouter";
import LoadingSpinner from "../Components/LoadingSpinner";

type ShowDetailPageProps = ReduxProps & WithRouterProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  show,
  params,
  showLoading,
  loadShowDetail,
}) => {
  const showId = +params.showId;

  useEffect(() => {
    loadShowDetail(showId);
  }, [showId]);

  const isLoading = showLoading[showId];

  return (
    <div className="flex flex-col space-y-8 mt-6 pb-10 animate-fade-in">
      <div>
        <button className="flex items-center bg-neutral-800 hover:bg-neutral-700 px-4 py-2 border border-neutral-700 rounded-lg font-semibold text-stone-300 text-sm tracking-wide transition-colors">
          <Link to="/" className="flex items-center gap-2">
            <span>&larr;</span> Back to Results
          </Link>
        </button>
      </div>

      {isLoading && <div className="flex justify-center items-center">
        <LoadingSpinner className="mx-auto" />
      </div>}

      {!isLoading && show && <>
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

            <div className="max-w-none text-stone-300 text-lg leading-relaxed">
              {parse(show.summary || "No summary available.")}
            </div>
          </div>
        </div>

        <div className="pt-8 border-neutral-800 border-t">
          <h4 className="mb-6 font-bold text-stone-100 text-2xl tracking-wide">Cast</h4>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            {show.cast && show.cast.length > 0 ? (
              show.cast.map((c) => (
                <CastCard
                  key={c.person.id}
                  avatarLink={c.person.image?.medium || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"}
                  name={c.person.name}
                />
              ))
            ) : (
              <p className="text-stone-400">No cast information available.</p>
            )}
          </div>
        </div>
      </>}

      {!isLoading && !show && (
        <div className="py-20 text-center">
          <h2 className="font-bold text-stone-100 text-2xl">Show not found</h2>
          <p className="mt-2 text-stone-400">The show you're looking for doesn't exist or there was an error loading it.</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: any) => {
  const showId: number = +ownProps.params.showId;
  return {
    show: showsMapSelector(state)[showId],
    showLoading: state.shows.show_loading,
  };
};

const mapDispatchToProps = {
  loadShowDetail: loadShowDetailAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

const ShowDetailPageWithRedux = connector(ShowDetailPage);

export default withRouter(ShowDetailPageWithRedux);
