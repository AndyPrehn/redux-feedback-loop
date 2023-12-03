import { useHistory } from 'react-router-dom';
import { Button, Paper, Typography, Grid, Card, CardContent } from "@mui/material";

function Home() {

    const history = useHistory();

    return (

        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <Paper elevation={5}>
                <Card>
                    <CardContent style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Submit a new feedback form 😁</Typography>
                        <Button variant="outlined"
                            style={{ backgroundColor: 'white', color: '#900021', borderColor: '#900021' }}
                            onClick={e => history.push('/name')}
                            endIcon>Start survey</Button>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>

    )

}

export default Home;