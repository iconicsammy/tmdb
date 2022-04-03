
export interface AuthResponse {
    success?: boolean;
    expires_at?: string;
    request_token?: string;
    status_message?: string;
    status_code?: number;
}

export interface CreateSession {
    success?: boolean;
    session_id?: string;
}

export interface TrendingMedia {
    id: number;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    name: string;
    poster_path: string;
    vote_count: number;
    origin_country: string[];
    vote_average: number;
    first_air_date: string;
    overview: string;
    original_name: string;
    popularity: number;
    media_type: string;
}

export interface TrendingMediaResults {
    total_pages: number;
    total_results: number;
    page: number;
    results: TrendingMedia[]
}

export interface AccountDetails {
    id : number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    username: string;
    include_adult: boolean;
    avatar: Object;
}


export interface UserDetails {
    accountId : number;
    sessionId: string;
    username: string;
}



export interface Genre {
    id: number;
    name: string;

}

export interface Company {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface Season {
    air_date: null;
    episode_count: number;
    id: number;
    _id?: string;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    episodes?: Episode[];
}

export interface MediaPeople {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    job?: string;
    department?: string;
    original_name?: string;
    known_for_department?: string;
    popularity?: number;
    profile_path?: string;
    character?: string;
    order?: number;
    adult?: boolean;

}

export interface Episode {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
    crew?: MediaPeople[];
    guest_stars?: MediaPeople[];
}

export interface Network{
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface MediaLanguage {
    english_name: string;
    iso_639_1: string;
    name: string
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface TVShowInfo {
    adult: boolean;
    backdrop_path: string;
    created_by: MediaPeople[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: false;
    languages: string[];
    last_air_date: string;
    name: string;
    next_episode_to_air: string;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
    production_companies: Company[];
    seasons: Season[];
    last_episode_to_air?: Episode;
    networks: Network[];
    spoken_languages: MediaLanguage[]
    production_countries :ProductionCountry[];
}

export interface MediaID {
    tvId?: string;
    seasonNumber?: string;
    episodeNumber?: string;
}