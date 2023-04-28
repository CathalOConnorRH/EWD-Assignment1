export const getMovies = () => {
    return fetch(
        //`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
        `/api/movies`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
        }}
    )
        .then(res => res.json())
        .then(json => json.results);
};

export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `/api/movies/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
        }}
    ).then(res => res.json());
};

export const getGenres = () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    )
        .then(res => res.json())
        .then(json => json.genres);
};

export const getMovieImages = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => json.posters);
};

export const getMovieCredits = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then(json => json.cast);

}

export const getSimilarMovies = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then(json => json.results);

}

export const getTVShows = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
        .then(res => res.json())
        .then(json => json.results);
};

export const getTVShow = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
        .then(res => res.json());
};

export const getTVShowImages = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => json.posters);
};

export const getTVShowCredits = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then(json => json.cast);

}

export const getPerson = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json());

}

export const getPersonImages = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => json.profiles);
};

export const getSimilarTVShows = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then(json => json.results);

}

export const getMovieReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => {
            return json.results;
        });
};

export const getTVShowReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => {
            return json.results;
        });
};

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
        .then(res => res.json())
        .then(json => json.results);
};

export const getPopularTVShows = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
        .then(res => res.json())
        .then(json => json.results);
};
