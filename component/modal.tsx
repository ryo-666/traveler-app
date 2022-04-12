import React, { FC, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



interface Props {
    item: any;
    index: number;
    onClick?: () => void;
}

const Modal:FC<Props>  = (props: Props) => {
  // useEffect(() => {
  //   console.log(props)
  // }, [])

  return (
    <>
        <div className='modal-outer'>
        <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              height="140"
              image={props.item[props.index].hotel[0].hotelBasicInfo.roomImageUrl}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.item[props.index].hotel[0].hotelBasicInfo.hotelName}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
                {props.item[props.index].hotel[0].hotelBasicInfo.hotelSpecial}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
                ■アクセス<br />
                {props.item[props.index].hotel[0].hotelBasicInfo.access}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■駐車場情報<br />
                {props.item[props.index].hotel[0].hotelBasicInfo.parkingInformation}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■電話番号　<br />
                {props.item[props.index].hotel[0].hotelBasicInfo.telephoneNo}
              </Typography>
              <div className="spacer"></div>
            </CardContent>
            <p className='backbtn' onClick={() => { props.onClick(); }}>
              <a>戻る</a>
            </p>
          </Card>
        </div>
        <style jsx>
          {`
            .modal-outer {
              background-color: rgba(0,0,0,0.4);
              border-color: rgb(33, 33, 33);
              width: 100%;
              height: 100%;
              position: fixed;
              left: 0;
              top: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .backbtn {
              padding: 0 18px;
              text-align: right;
              cursor: pointer;
            }

            .backbtn:hover {
              opacity: 0.6;
            }

            .backbtn a {
              box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
              padding: 5px 15px;
              border-radius: 5px;
            }
          `}
        </style>
    </>
  )
}

export default Modal