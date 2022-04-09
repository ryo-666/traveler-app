import React, { FC, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Props {
    item: any;
    onClick?: () => void;
}

const DetailMedia:FC<Props> = (props: Props) => {

    // useEffect(() => {
    //     console.log(props);
    // })
  return (
    <>
        <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              height="140"
              image={props.item.hotel[0].hotelBasicInfo.roomImageUrl}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.item.hotel[0].hotelBasicInfo.hotelName}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
                {props.item.hotel[0].hotelBasicInfo.hotelSpecial}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
                ■アクセス<br />
                {props.item.hotel[0].hotelBasicInfo.access}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■駐車場情報<br />
                {props.item.hotel[0].hotelBasicInfo.parkingInformation}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■電話番号　<br />
                {props.item.hotel[0].hotelBasicInfo.telephoneNo}
              </Typography>
              <div className="spacer"></div>
            </CardContent>
          </Card>
    </>
  )
}

export default DetailMedia