import * as React from 'react';
import { useState, useEffect } from 'react';
import "./Volume.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import VolumeCards from "./VolumeCards";
import axios from 'axios';

function VolumesContainer() {
    // Define the volume data for each row
    // const volumesData = [
    // { number: 43, title: 'سنت و مدرنیته : میراث و نوآوری', journalName: 'بارقه',
    //     description: 'Description 1', releaseDate: '2022-01-01',
    //     img : process.env.PUBLIC_URL + "/data/bareghe43.jpeg", fileUrl : process.env.PUBLIC_URL + "/data/bareghe43.pdf" },
    // { number: 1, title: 'Lovely Bits Get Together', journalName: 'بایت',
    //     description: 'Description 2', releaseDate: '2022-02-01',
    //     img: process.env.PUBLIC_URL + "/data/byte1.jpeg" , fileUrl : process.env.PUBLIC_URL + "/data/byte1.pdf"  },
    // { number: 16, title: 'ویژه نامه ورودی ها', journalName: 'رایانش',
    //     description: 'دانشگاه آزادی! دانشگاه آزامش! تاثیرپذیرتر از آنچه فکر میکنید', releaseDate: '2022-01-01',
    //     img : process.env.PUBLIC_URL + "/data/Rayanesh16.jpeg", fileUrl : process.env.PUBLIC_URL + "/data/Rayanesh16.pdf" },
    // { number: 14, title: 'چهارده!', journalName: 'رایانش',
    //     description: 'قرنطینه، دل‌تنگی، مرثیه، گراف، دوستی، تغییر، سفر، بالش،‌ پتو، پایتون، تمرین، رویداد، بازی، رایانش، تمدید ...', releaseDate: '2022-01-01',
    //     img : process.env.PUBLIC_URL + "/data/Rayanesh14.jpeg", fileUrl : process.env.PUBLIC_URL + "/data/Rayanesh14.pdf" },
    // { number: 15, title: 'اولین شماره قرن', journalName: 'رایانش',
    //     description: 'به هنگام رفتن، به وقت دلتنگی', releaseDate: '2022-01-01',
    //     img : process.env.PUBLIC_URL + "/data/rayanesh15.jpeg", fileUrl : process.env.PUBLIC_URL + "/data/Rayanesh15.pdf" },
    //
    // ];
    const [volumesData, setVolumesData] = useState([]);
    useEffect(() => {
        fetchVolumes();
    }, []);



    const fetchVolumes = async () => {
        try {
            const response = await axios.get('/api/volumes');
            setVolumesData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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