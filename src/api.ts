import axios from "axios";
import type { Show } from "./Models/shows";

export const fetchShowList = (keyword: string): Promise<Show[]> => {
    return axios.get<{ show: Show }[]>(
        `https://api.tvmaze.com/search/shows?q=${keyword}`
    ).then(
        response => response.data.map((item: { show: Show }) => item.show)
    ).catch(
        error => {
            console.log(error);
            return [];
        }
    )
}
