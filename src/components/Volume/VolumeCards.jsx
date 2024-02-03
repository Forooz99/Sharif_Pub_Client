import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';




const VolumeCards = ({
                         number,
                         title = '',
                         journalName = '',
                         description = '',
                         releaseDate,
                         img,
                         fileUrl,
                     }) => {
                        const downloadFile = () => {
                            window.open(fileUrl, '_blank');
                        };
    return (
        <Card className = 'Card' sx={{ display: 'flex' }}>
            <CardContent sx={{flex: '1 1 auto', display: 'flex', flexDirection: 'column'}}>
                <div className="Title">
                    {title}، شماره‌ی {number}
                </div>
                <div className="ReleaseDate">
                    {releaseDate}
                </div>
                <div className="Description">
                    {description}
                </div>
                <div className="JournalName">
                    <Chip label={journalName} component="a" href="" clickable/>
                </div>
                <div className="DownloadButton">
                    <Button variant="outlined" endIcon={<FontAwesomeIcon className='Icon' icon={faFileArrowDown}onClick={downloadFile}/>}>
                        دریافت فایل
                    </Button>
                </div>
            </CardContent>
            <CardMedia
                className='Image'
                sx={{
                    width: 220,
                    aspectRatio: '16/9',
                    flex: '0 0 auto',
                    order: { xs: 1, sm: 2 },
                    borderRadius: '4px',
                    overflow: 'hidden',
                }}
                image={img}
            />
        </Card>
    );
};

export default VolumeCards;