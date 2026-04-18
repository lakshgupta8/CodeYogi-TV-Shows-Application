import axios from "axios";
import type { Show, Cast } from "./Models/shows";

const baseUrl = "https://api.tvmaze.com";

export const fetchShows = async (keywordOrId: string | number): Promise<Show[]> => {
    try {
        let shows: Show[] = [];

        if (typeof keywordOrId === "string") {
            const response = await axios.get<{ show: Show }[]>(
                `${baseUrl}/search/shows?q=${keywordOrId}`
            );
            shows = response.data.map((item: { show: Show }) => item.show);
        } else {
            // Single show detail fallback
            const response = await axios.get<Show>(
                `${baseUrl}/shows/${keywordOrId}`
            );
            if (response.data) shows = [response.data];
        }

        const promises = shows.map(async (show) => {
            try {
                const castResponse = await axios.get<Cast[]>(
                    `${baseUrl}/shows/${show.id}/cast`
                );
                show.cast = castResponse.data;
            } catch (e) {
                show.cast = [];
            }
            return show;
        });

        return Promise.all(promises);
    } catch (error) {
        console.log(error);
        return [];
    }
};

