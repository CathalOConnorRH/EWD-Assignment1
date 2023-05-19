import React from "react";
import { useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import Register from "./pages/Register";
import { AuthContext } from "./contexts/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import UpcomingMovies from "./pages/upcomingMovies";
import PopularTVShows from "./pages/popularTVShows"
import AuthContextProvider from "./contexts/authContext";
import SignUp from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./privateRoute";

const App = () => {
    const context = useContext(AuthContext);

    return (
        <BrowserRouter>
            <SiteHeader />
            <AuthContextProvider>
                <Routes>
                    <Route path="/movies/movieFavourites" element={<PrivateRoute><FavouriteMoviesPage type="movies" /> </PrivateRoute>} />
                    <Route path="/tvshows/tvFavourites" element={<PrivateRoute><FavouriteMoviesPage type="tvshows" /></PrivateRoute>} />
                    <Route path="/movies/:id" element={<PrivateRoute><MoviePage type="movies" /></PrivateRoute>} />
                    <Route path="/tvshows/:id" element={<PrivateRoute><MoviePage type="tvshows" /></PrivateRoute>} />
                    <Route path="/movies/" element={<PrivateRoute><HomePage type="movies" /></PrivateRoute>} />
                    <Route path="/movies/upcoming" element={<PrivateRoute><UpcomingMovies type="movies" /></PrivateRoute>} />
                    <Route path="/tvshows/" element={<PrivateRoute><HomePage type="tvshows" /></PrivateRoute>} />
                    <Route path="/tvshows/popular" element={<PrivateRoute><PopularTVShows type="tvshows" /></PrivateRoute>} />
                    <Route path="/person/:id" element={<PrivateRoute><MoviePage type="actor" /></PrivateRoute>} />
                    <Route path="/movies/reviews/:id" element={<PrivateRoute><MovieReviewPage type="movies" /></PrivateRoute>} />
                    <Route path="/tvshows/reviews/:id" element={<PrivateRoute><MovieReviewPage type="tvshows" /></PrivateRoute>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<PrivateRoute><HomePage type="movies" /></PrivateRoute>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
