import { useEffect, type FC } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { fetchShowList } from "../api";
import type { Show } from "../Models/shows";
import { queryChangeAction, showsLoadedAction } from "../Actions/shows";
import { connect } from "react-redux";
import type { State } from "../store";
import { showsSelector, querySelector } from "../Selectors/shows";

interface ShowListPageProps {
  showsLoaded: (shows: Show[]) => void;
  shows: Show[];
  query: string;
}

const ShowListPage: FC<ShowListPageProps> = ({ showsLoaded, shows, query }) => {
  useEffect(() => {
    fetchShowList(query).then((data: Show[]) => {
      showsLoaded(data);
    });
  }, [query]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <div className="mt-2">
      <SearchBar
        onChange={handleQueryChange}
        value={query}
      />
      <div className="flex flex-wrap justify-center">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  shows: showsSelector(state),
  query: querySelector(state),
});

const mapDispatchToProps = {
  showsLoaded: showsLoadedAction,
  queryChange: queryChangeAction,
};

const ShowListPageWithRedux = connect(mapStateToProps, mapDispatchToProps)(ShowListPage);

export default ShowListPageWithRedux;
