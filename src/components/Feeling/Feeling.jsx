import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import { Button, FormControlLabel, Radio, RadioGroup, Grid, Paper, Card, CardContent, Typography } from "@mui/material";

function Feeling() {

    const history = useHistory();

    const storedFeeling = useSelector(state => state.feeling);

    // Add feeling dispatch
    const [newFeeling, setNewFeeling] = useState(storedFeeling || null);

    // Dispatch
    const dispatch = useDispatch();

    // Function to handle click of 'Next' button
    const handleClick = (e) => {
        

        if (newFeeling === null) {
            swal({
                text: 'Please select a feeling level!',
                icon: 'warning'
            });
        } else {
            e.preventDefault();
            const action = { type: 'FEELING', payload: newFeeling };
            dispatch(action);
            console.log(action.payload);
            history.push(`/understanding`);
        }

    };

    const unclick = e => {
        if (newFeeling) {
            setNewFeeling(null);
        }
    };


    return (
        <>
            <Grid item xs={12} sm={10} md={6} style={{ alignContent: 'center', alignItems: 'center' }}>
                <Paper elevation={5}>
                    <Card>
                        <CardContent>
                            <Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }} variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>How are you feeling today?</Typography>
                            <RadioGroup
                                name='newFeeling'
                                value={newFeeling}
                                onChange={e => setNewFeeling(e.target.value)}
                                defaultValue={newFeeling}
                                row
                                style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}
                            >
                                <FormControlLabel value={1} control={<Radio onClick={unclick} />} label='1' />
                                <FormControlLabel value={2} control={<Radio onClick={unclick} />} label='2' />
                                <FormControlLabel value={3} control={<Radio onClick={unclick} />} label='3' />
                                <FormControlLabel value={4} control={<Radio onClick={unclick} />} label='4' />
                                <FormControlLabel value={5} control={<Radio onClick={unclick} />} label='5' />
                            </RadioGroup>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <BackButton route={'/name'} />
                                <Button variant="outlined"
                                    style={{ backgroundColor: 'white', color: '#900021', borderColor: '#900021' }}
                                    onClick={handleClick}
                                    endIcon>Next</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid >
        </>
    )

}

export default Feeling;