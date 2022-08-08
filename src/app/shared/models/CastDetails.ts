export interface CastDetails{
    id:          number;
    name:        string;
    gender:      string;
    tmdbUrl:     string;
    profilePath: string;
    movies:      Movie[];
}

export interface Movie {
    id:          number;
    title:       string;
    posterUrl:   string;
    releaseDate: string;
}
