import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';

function CardItem(props) {
    const theme = useTheme();
    const cardStyle = {width:"50%",margin:"auto" ,display:"flex",justifyContent:"space-between"}
    const imgStyle = {alignItems:"end",width:"18em"}
    const textStyle = {color:"gray"}
    const cardsStyle = {margin:"50px"}
    const starStyle = {margin:"5px"}
    return (
      <>
      <div style={cardsStyle} >
      <Card style = {cardStyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
      <h1>{props.name}</h1>
      <h2>{props.date}</h2>
      <StarIcon style={starStyle}/>
      <StarIcon style={starStyle}/>
      <StarIcon style={starStyle}/>
      <StarIcon style={starStyle}/>
        </CardContent>
        <h4 style={textStyle}>{props.type}</h4>
      <p>{props.desc}</p> 
      <h6 style={textStyle}>{props.id}</h6>
        </Box>
      <img src={props.src} style={imgStyle} />
    </Card>
      </div>
      </>
    );
  }
  
  export default CardItem;
  