import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";

const App = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies/">Movies</Link>
                </li>
                <li>
                    <Link to="/tvshows/">TV Shows</Link>
                </li>
                <li>
                    <Link to="/movies/movieFavourites">Movie Favourites</Link>
                </li>
                <li>
                    <Link to="/tvshows/tvFavourites">TV Favourites</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/movies/movieFavourites" element={<FavouriteMoviesPage type="movies" />} />
                <Route path="/tvshows/tvFavourites" element={<FavouriteMoviesPage type="tvshows" />} />
                <Route path="/movies/:id" element={<MoviePage type="movies"/>} />
                <Route path="/tvshows/:id" element={<MoviePage type="tvshows"/>} />
                <Route path="/movies/" element={<HomePage type="movies" />} />
                <Route path="/tvshows/" element={<HomePage type="tvshows" />} />
                <Route path="/person/:id" element={<MoviePage type="actor" />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
