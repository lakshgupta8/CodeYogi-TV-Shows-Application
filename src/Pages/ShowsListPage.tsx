import { type FC } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import type { Show } from "../Models/shows";
import { queryChangeAction } from "../Actions/shows";
import { connect } from "react-redux";
import type { State } from "../store";
import { showsSelector, querySelector } from "../Selectors/shows";

interface ShowListPageProps {
  shows: Show[];
  query: string;
  queryChange: (query: string) => void;
}

const ShowListPage: FC<ShowListPageProps> = ({
  shows,
  query,
  queryChange
}) => {
  return (
    <div className="mt-2">
      <SearchBar
        onChange={(e) => queryChange(e.target.value)}
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
  queryChange: queryChangeAction,
};

const ShowListPageWithRedux = connect(mapStateToProps, mapDispatchToProps)(ShowListPage);

export default ShowListPageWithRedux;
