// student card component

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

export default function StudentCard({ name, email, phone, address, city, course, startDate, completedDate, semester, handleInputChange }) {

    return (
        <div>
            <div className='container mx-auto mt-10'>
                <Card sx={{ minWidth: 275, maxWidth: 350 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                            <span className='font-bold text-black'>Name:- </span> {name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>Email:- </span>{email}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>Phone:- </span>{phone}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>City:- </span> {city}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>Address:- </span>{address}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>Course:- </span>{course}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>Start Date:- </span>{startDate}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>Complete Date:- </span>{completedDate}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span className='font-bold text-black'>Semester:- </span> {semester}
                        </Typography>
                        {/* <Button variant="contained" color="primary">Edit</Button> */}
                    </CardContent>
                </Card>
            </div>


        </div>
    )
}
