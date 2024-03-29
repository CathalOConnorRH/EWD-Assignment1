import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieReviews, getTVShowReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util.js";

const styles = {
    table: {
        minWidth: 550,
    },
};

export default function MovieReviews(props) {
    const movie = props.movie;
    const type = props.type;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (props.type === "movies") {
            getMovieReviews(movie.id).then((reviews) => {
                setReviews(reviews);
            });
        } else if (props.type === "tvshows") {
            getTVShowReviews(movie.id).then((reviews) => {
                setReviews(reviews);
            });
        }
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={styles.table} aria-label="reviews table">
                <TableHead>
                    <TableRow>
                        <TableCell >Author</TableCell>
                        <TableCell align="center">Excerpt</TableCell>
                        <TableCell align="right">More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reviews.map((r) => (
                        <TableRow key={r.id}>
                            <TableCell component="th" scope="row">
                                {r.author}
                            </TableCell>
                            <TableCell >{excerpt(r.content)}</TableCell>
                            <TableCell >
                                <Link
                                    to={`/${props.type}/reviews/${r.id}`}
                                    state={{
                                        review: r,
                                        movie: movie,
                                        props: props,
                                    }}
                                >
                                    Full Review
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
