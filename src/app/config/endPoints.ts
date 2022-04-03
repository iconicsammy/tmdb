import { environment } from "environments/environment";

const baseApi = environment.baseApi;

export const endPoints = {
    auth: `${baseApi}authentication/token/new?api_key=`,
    trendingMedias:  `${baseApi}trending/`,
    createSession: `${baseApi}authentication/session/new`,
    getAccountDetails: `${baseApi}account`,
    search: `${baseApi}search/`,
    imagesURL : 'https://image.tmdb.org/t/p/w185',
    getTVShowDetails: `${baseApi}tv/`,
    getTVSeasonDetails: `${baseApi}tv/`,
    getTVEpisodeDetails: `${baseApi}tv/`,
    getFavoriteTVShows:  `${baseApi}account/`
}