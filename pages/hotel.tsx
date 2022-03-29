import React, { FC, useState, useEffect} from 'react';
import fetch from "node-fetch";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from 'moment'
import 'moment/locale/ja'
moment.locale('ja')
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



interface Props {

}

const Hotel:FC<Props> = (props:Props) => {
  // console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelName);
  // console.log(props.hotel);
  console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.latitude);
  console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.longitude);


  const [keywords, setKeywords] = useState("北海道");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLlongitude] = useState(null);

  useEffect(() => {
    setLatitude(props.hotel.hotels[0].hotel[0].hotelBasicInfo.latitude)
    console.log(latitude)
    setLlongitude(props.hotel.hotels[0].hotel[0].hotelBasicInfo.longitude)
    console.log(longitude)

  },[])

  const handleChange = (e) => {
    setKeywords(() => e.target.value)
    console.log(keywords)
  }

  const getInformation = async() => {
    const keyword = keywords;
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_SEARCH_API}&keyword=${keyword}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}`)
    );
    const data = await res.json();
    console.log(data)
    return data;
  }

  const getVacantinformation = async() => {
    const changeFormatDate1 = moment(date1).format('YYYY-MM-DD')
    const checkinDate = changeFormatDate1;
    const changeFormatDate2 = moment(date2).format('YYYY-MM-DD')
    const checkoutDate = changeFormatDate2;
    const latitudeName = latitude;
    const longitudeName = longitude;

    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_VACANT_API}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&latitude=${latitudeName}&longitude=${longitudeName}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}`)
    )
    const data = await res.json();
    console.log(data)
    return data;
  }

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <>
        <div className="main-contants">
         <input type="text" value={keywords} onChange={handleChange} />
          <p onClick={() => getInformation()}>検索</p>
          {/* <p onClick={() => getVacantinformation()}>空室ボタン</p> */}
        </div>
        <ul>
          <li>
          <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              height="140"
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
              ■駐車場情報<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.parkingInformation}
              </Typography>
              <div className="spacer"></div>
              <Typography variant="body2" color="text.secondary">
              ■電話番号　<br />
                {props.hotel.hotels[0].hotel[0].hotelBasicInfo.telephoneNo}
              </Typography>
              <div className="spacer"></div>
            </CardContent>
          </Card>
          </li>
        </ul>
        <div className="paging">
          <Stack spacing={2} >
            <Pagination count={10} />
          </Stack>
        </div>
        <style jsx>
          {`
            ul {
              list-style: none;
              display: flex;
              flex-wrap: wrap;
            }

            li {
              list-style: none;
              margin: 0 20px 20px 0;
            }

            .pad {
              box-shadow: none;
            }

            .main-contants {
              margin: 0 auto;
              width: fit-content;
              display: flex;
              align-items: center;
            }

            .main-contants input {
              margin-right: 10px;
            }

            .spacer {
              margin-bottom: 15px;
            }

            .paging {
              margin: 0 auto;
              width: fit-content;
            }
          `}
        </style>
    </>
  )
}

export const getStaticProps = async () => {
    const keyword = "北海道"
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_SEARCH_API}&keyword=${keyword}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}`)
    );
    const hotel = await res.json();
    console.log(hotel.data)
    return {
      props: {
        hotel,
      },
    };

}

export default Hotel;