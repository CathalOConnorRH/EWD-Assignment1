import React, { useEffect, useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieReviews, getTVShowReviews, submitReview } from "../../api/tmdb-api";
import { excerpt } from "../../util.js";

import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../contexts/authContext";

const styles = {
    table: {
        minWidth: 550,
    },
};

export default function MovieReviews(props) {
    const movie = props.movie;
    const type = props.type;
    const [reviews, setReviews] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [Content, setContent] = useState('');
    let navigate = useNavigate();
    const context = useContext(AuthContext);

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
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >Add Review</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Add Review
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            submitReview(context.email, Content, movie.id);
                        }}
                    >
                        <Stack spacing={1}>
                            <FormControl>
                                <FormLabel>Review Content:</FormLabel>
                                <Input autoFocus value={Content} onChange={e => setContent(e.target.value)} />
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
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
                                    to={`/reviews/${props.type}/${r.id}`}
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
