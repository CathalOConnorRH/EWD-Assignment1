import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";

const MovieReviewPage = (props) => {
    const { state: { movie, review } } = useLocation()

    return (
        <PageTemplate movie={movie} props={props}>
            <MovieReview review={review} props={props} />
        </PageTemplate>
    );
};

export default MovieReviewPage;
