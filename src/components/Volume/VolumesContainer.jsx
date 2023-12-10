import * as React from 'react';
import "./Volume.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function VolumesContainer() {

    return (
        <Container maxWidth = 'lg' className = 'Container'>
            <Grid
                container
                justify="center"
                direction="row"
                spacing={4}
                style={{ marginTop: 15 }}>


            </Grid>
        </Container>
    );
};

export default VolumesContainer;