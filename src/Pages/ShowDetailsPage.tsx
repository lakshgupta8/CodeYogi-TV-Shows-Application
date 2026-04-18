import { useEffect, type FC } from "react";
import { connect, type ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import type { State } from "../store";
import { loadShowDetailAction } from "../Actions/shows";
import { showsMapSelector } from "../Selectors/shows";
import CastGroup from "../Components/CastGroup";
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
        <button className="flex items-center bg-surface-raised hover:bg-surface-hover px-4 py-2 border border-border-hover rounded-lg font-semibold text-text-secondary text-sm tracking-wide transition-colors">
          <Link to="/" className="flex items-center gap-2">
            <span>&larr;</span> Back to Results
          </Link>
        </button>
      </div>

      {isLoading && <div className="flex justify-center items-center">
        <LoadingSpinner />
      </div>}

      {!isLoading && show &&
        <div className="flex md:flex-row flex-col items-start gap-8">
          <img
            src={show.image?.medium || "http://images.unsplash.com/vector-1769004080350-422140cb8920?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={show.name}
            className="shadow-md mx-auto md:mx-0 border border-border-base rounded-xl w-full max-w-[280px] h-auto object-cover shadow-accent-bg"
          />

          <div className="flex flex-col flex-1 space-y-6">
            <div className="space-y-4">
              <h2 className="font-extrabold text-text-primary text-4xl tracking-tight">{show.name}</h2>

              <div className="flex flex-wrap gap-2">
                {show.genres.map((genre) => (
                  <GenrePill name={genre} key={genre} />
                ))}
              </div>

              <div className="flex items-center gap-6">
                <p className="inline-flex items-center px-3 py- rounded-md font-bold bg-accent-bg text-accent-text">
                  ★ {show.rating.average ? `${show.rating.average} / 10` : 'N/A'}
                </p>
                {show.cast && (
                  <div className="flex flex-col gap-1">
                    <span className="ml-1 font-semibold text-text-muted text-xs tracking-wider">CAST</span>
                    <CastGroup cast={show.cast} />
                  </div>
                )}
              </div>
            </div>

            <div className="text-text-secondary text-lg leading-relaxed">
              {parse(show.summary || "No summary available.")}
            </div>
          </div>
        </div>
      }

      {!isLoading && !show && (
        <div className="py-20 text-center">
          <h2 className="font-bold text-text-primary text-2xl">Show not found</h2>
          <p className="mt-2 text-text-muted">The show you're looking for doesn't exist or there was an error loading it.</p>
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
