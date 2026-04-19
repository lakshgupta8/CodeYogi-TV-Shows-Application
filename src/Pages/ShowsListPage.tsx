import { type FC } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { queryChangeAction } from "../Actions/shows";
import { connect, type ConnectedProps } from "react-redux";
import type { State } from "../store";
import { showsSelector, querySelector, showsLoadingSelector } from "../Selectors/shows";
import LoadingSpinner from "../Components/LoadingSpinner";

type ShowListPageProps = ReduxProps

const ShowListPage: FC<ShowListPageProps> = ({
  shows,
  query,
  loading,
  queryChange
}) => {
  return (
    <div className="flex flex-col space-y-10 mt-4 min-h-[60vh]">
      <div className="flex flex-col items-center space-y-6 pt-8 text-center">
        <h1 className="font-black text-text-primary text-5xl sm:text-7xl tracking-tighter">
          TV<span className="text-brand">SHOWS</span>
        </h1>
        <p className="px-4 max-w-2xl text-text-muted text-lg leading-relaxed">
          Search through thousands of shows, explore cast details,
          and find your next obsession.
        </p>
      </div>

      <div className="flex justify-center mx-auto px-4 w-full max-w-2xl">
        <SearchBar
          onChange={(e) => queryChange(e.target.value)}
          value={query}
        />
        {loading && <LoadingSpinner />}
      </div>

      {shows.length === 0 ? (
        <div className="flex flex-col justify-center items-center space-y-4 pt-10">
          <div className="mb-2 rounded-full w-16 md:w-24 h-1 bg-accent-bg/50"></div>
          <p className="text-border-active font-medium italic">
            {query.length > 0 ? "No shows found matching your query..." : "Begin typing to discover shows."}
          </p>
        </div>
      ) : (
        <div className="justify-items-center gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 animate-fade-in">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  shows: showsSelector(state),
  query: querySelector(state),
  loading: showsLoadingSelector(state),
});

const mapDispatchToProps = {
  queryChange: queryChangeAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

const ShowListPageWithRedux = connector(ShowListPage);

export default ShowListPageWithRedux;
