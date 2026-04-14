import axios from "axios";
import type { Show, Cast } from "./Models/shows";

const baseUrl = "https://api.tvmaze.com";

export const fetchShowList = (keyword: string): Promise<Show[]> => {
    return axios.get<{ show: Show }[]>(
        `${baseUrl}/search/shows?q=${keyword}`
    ).then(
        response => response.data.map((item: { show: Show }) => item.show)
    ).catch(
        error => {
            console.log(error);
            return [];
        }
    );
};

export const fetchShowDetail = (id: number): Promise<Show> => {
    return axios.get<Show>(
        `${baseUrl}/shows/${id}`
    ).then(
        response => response.data
    ).catch(
        error => {
            console.log(error);
            return {} as Show;
        }
    );
};

export const fetchShowCast = (id: number): Promise<Cast[]> => {
    return axios.get<Cast[]>(
        `${baseUrl}/shows/${id}/cast`
    ).then(
        response => response.data
    ).catch(
        error => {
            console.log(error);
            return [];
        }
    );
}
