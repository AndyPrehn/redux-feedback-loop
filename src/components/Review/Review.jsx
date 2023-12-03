import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useEffect, useState } from "react";
import { Button, CardContent, Card, Paper, Grid, Typography } from "@mui/material";

function Review() {

    const history = useHistory();
    const dispatch = useDispatch();

    // Link local variables to global reducers
    const name = useSelector(store => store.name);
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    // Handle submit function with /feedback POST request to database
    const handleSubmit = e => {

   
        axios.post('/feedback', {
            name: name,
            feeling: Number(feeling),
            understanding: Number(understanding),
            support: Number(support),
            comments: comments
        })
            .then(response => {

                setTimeout(() => history.push('/'), 5000);
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });



    };


    return (
        <>
            <Grid item xs={12} md={6}>
                            <div>
                                <Typography variant="h5" marginBottom={'1rem'}><b>Name:</b> {name}</Typography>
                                <Typography variant="h5" marginBottom={'1rem'}><b>Feeling:</b> {feeling}</Typography>
                                <Typography variant="h5" marginBottom={'1rem'}><b>Understanding:</b> {understanding}</Typography>
                                <Typography variant="h5" marginBottom={'1rem'}><b>Support:</b> {support}</Typography>
                                <Typography variant="h5" marginBottom={'1rem'}><b>Comments:</b> {comments}</Typography>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <BackButton route={'/comments'} />
                                <Button variant="outlined"
                                    onClick={handleSubmit} startIcon>Submit feedback</Button>
                            </div>
            </Grid>
        </>
    )

}

export default Review;