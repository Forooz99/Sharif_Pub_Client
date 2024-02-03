import * as React from 'react';
import "./Volume.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import VolumeCards from "./VolumeCards";

function VolumesContainer() {
    // Define the volume data for each row
    const volumesData = [
        { number: 1, title: 'Volume 1', journalName: 'Journal 1', description: 'Description 1', releaseDate: '2022-01-01', img: 'image1.jpg' },
        { number: 2, title: 'Volume 2', journalName: 'Journal 2', description: 'Description 2', releaseDate: '2022-02-01', img: 'image2.jpg' },
        // Add more volume data as needed
    ];

    return (
        <Container maxWidth = 'lg' className = 'Container'>
            <Grid
                container
                justify="center"
                direction="row"
                spacing={4}
                style={{ marginTop: 15 }}>
                {volumesData.map((volume) => (
                    <Grid item xs={6} key={volume.number}>
                        <VolumeCards {...volume} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default VolumesContainer;