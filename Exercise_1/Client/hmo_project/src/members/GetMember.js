import * as React from 'react';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useLocation } from "react-router-dom";

const GetMember = () => {
    let location = useLocation();
    let member = location.state;

    let img;
    if (member != undefined)
        img = member.img ? member.img : "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740"
    else
        img = "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740"
    
        return (
        <div>
       
            <Card sx={{ display: 'flex', direction: "rtl" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {member.lastName} {member.firstName}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {member.address.street} {member.address.houseNumber} {member.address.city}<br />
                            תאריך לידה {new Date(member.dateOfBirth).toISOString().split('T')[0]}<br />
                            מספר זהות {member.id}<br />
                            טלפון {member.phone} פלאפון {member.cellphone} <br />
                            {member.vaccinations[0] && <>{ member.vaccinations.map((one) => (<div key={one._id}> <p> תאריך החיסון: {new Date(one.date).toISOString().split('T')[0]}</p><p> יצרן: {one.producer}</p></div>)) }</>}
                            {member.dateOfPositiveReply != null && <>תאריך תשובה חיובית {new Date(member.dateOfPositiveReply).toISOString().split('T')[0]}<br /></>}
                            {member.recoveryDate != null && <> תאריך החלמה{new Date(member.recoveryDate).toISOString().split('T')[0]}</>}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
                </Box>
                <CardMedia component="img" sx={{ width: 310, marginRight:"50%" }} image={img} alt="" />
            </Card>
          
        </div>);
}

export default GetMember;