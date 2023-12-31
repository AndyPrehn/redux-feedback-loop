import BackButton from '../BackButton/BackButton';
import { Button, TextField, Grid, Paper, Card, CardContent, Typography } from "@mui/material";
import NextButton from '../NextButton/NextButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Comments() {

    const history = useHistory();

    const storedComments = useSelector(state => state.comments);

    // Comments dispactch
    const dispatch = useDispatch();
    const [newComments, setNewComments] = useState(storedComments || '');

    // Function to handle click of 'Next' button
    const handleClick = (e) => {

        e.preventDefault();
        const action = { type: 'COMMENTS', payload: newComments };
        dispatch(action);
        history.push('/review');

    };

    return (
        <Grid item xs={12} md={6}>
            <Paper elevation={5}>
                <Card>
                    <CardContent>
                        <Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }} variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>Any comments you want to leave?</Typography>
                        <TextField type="text"
                            label='Comments'
                            multiline
                            rows={6}
                            onChange={e => setNewComments(e.target.value)}
                            defaultValue={newComments}
                            sx={{ width: '100%' }}
                            style={{ justifyContent: 'center', height: '100%', marginBottom: '5%' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <BackButton route={'/support'} />
                            <Button variant="outlined"
                                style={{ backgroundColor: 'white', color: '#900021', borderColor: '#900021' }}
                                onClick={handleClick}
                                endIcon>Next</Button>
                        </div>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
    )

}

export default Comments;