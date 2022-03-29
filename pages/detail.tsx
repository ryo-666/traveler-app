import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

interface Props {

}

const Detail:FC<Props> = (props: Props) => {
  console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelName);

  return (
    <>
      <div className="box">
      <Card sx={{ maxWidth: 550 }}>
            <CardMedia
              component="img"
              height="200"
              image={props.hotel.hotels[1].hotel[0].hotelBasicInfo.roomImageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelName}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelSpecial}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
                ■アクセス<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.access}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
                ■最寄り駅<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.nearestStation}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■駐車場情報<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.parkingInformation}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■電話番号　<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.telephoneNo}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■Fax　<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.faxNo}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■レビュー　<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.reviewAverage}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■ホテル情報　<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelInformationUrl}
              </Typography>
              <div className="spacer"></div>
            </CardContent>
          </Card>
      </div>
      <style jsx>
          {`
            .box {
              padding-top: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .spacer {
              margin-bottom: 15px;
            }
          `}
      </style>
    </>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_API}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}`)
    );
    const hotel = await res.json();
    console.log(hotel.data)
    return {
      props: {
        hotel,
      },
    };

}

export default Detail