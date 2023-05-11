export const getMovies = () => {
    return fetch(
        `/api/movies`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
        .then(res => res.json())
        .then(json => json.results);
};

export const getMovie = (id) => {
    return fetch(
        `/api/movies/${id}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const getGenres = () => {
    return fetch(
        `/api/genres/`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
        .then(res => res.json())
        .then(json => json.genres);
};

export const getMovieImages = (id) => {
    return fetch(
        `/api/movies/${id}/images`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then((json) => json.posters);
};

export const getMovieCredits = (id) => {
    return fetch(
        `/api/movies/${id}/credits`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then(json => json.cast);

}

export const getSimilarMovies = (id) => {
    return fetch(
        `/api/movies/${id}/similar`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then(json => json.results);

}

export const getTVShows = () => {
    return fetch(
        `/api/tvshows`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
        .then(res => res.json())
        .then(json => json.results);
};

export const getTVShow = (id) => {
    return fetch(
        `/api/tvshows/${id}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then(res => res.json());
};

export const getTVShowImages = (id) => {
    return fetch(
        `/api/tvshows/${id}/images`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then((json) => json.posters);
};

export const getTVShowCredits = (id) => {
    return fetch(
        `/api/tvshows/${id}/credits`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then(json => json.cast);

}

export const getPerson = (id) => {
    return fetch(
        `/api/person/${id}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json());

}

export const getPersonImages = (id) => {
    return fetch(
        `/api/person/${id}/images`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then((json) => json.profiles);
};

export const getSimilarTVShows = (id) => {
    return fetch(
        `/api/tvshows/${id}/similar`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then(json => json.results);

}

export const getMovieReviews = (id) => {
    return fetch(
        `/api/movies/${id}/reviews`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then((json) => {
            return json.results;
        });
};

export const getTVShowReviews = (id) => {
    return fetch(
        `/api/tvshows/${id}/reviews`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then((json) => {
            return json.results;
        });
};

export const getUpcomingMovies = () => {
    return fetch(
        `/api/movies/upcoming`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then(res => res.json())
        .then(json => json.results);
};

export const getPopularTVShows = () => {
    return fetch(
        `/api/tvshows/popular`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
        .then(res => res.json())
        .then(json => json.results);
};
