import React, { FC, useState } from 'react';
import fetch from "node-fetch";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import moment from 'moment'
import 'moment/locale/ja'
moment.locale('ja')
import MomentUtils from '@date-io/moment'


interface Props {

}

const Hotel:FC<Props> = (props:Props) => {
  // console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelName);
  console.log(props.hotel);
  console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.latitude);
  console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.longitude);


  const [date1, setDate1] = useState<Date | null>(new Date())
  const [date2, setDate2] = useState<Date | null>(new Date())
  const [keywords, setKeywords] = useState("大阪");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLlongitude] = useState(null);

  const changeDateHandler1 = (newDate: Date | null): void => {
    setDate1(newDate)
  }
  const changeDateHandler2 = (newDate: Date | null): void => {
    setDate2(newDate)
  }

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
    const checkinDate = date1;
    const checkoutDate = date2;
    const latitudeName = props.hotel.hotels[0].hotel[0].hotelBasicInfo.latitude;
    const longitudeName = props.hotel.hotels[0].hotel[0].hotelBasicInfo.longitude;

    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_VACANT_API}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&latitude=${latitudeName}&longitude=${longitudeName}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}`)
    )
    const data = await res.json();
    console.log(data)
    return data;
  }

  return (
    <div>
        <div>
         <input type="text" value={keywords} onChange={handleChange} />
          <p onClick={() => getInformation()}>push</p>
          <p onClick={() => getVacantinformation()}>空室ボタン</p>
        </div>
        <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={date1} onChange={changeDateHandler1} />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={date2} onChange={changeDateHandler2} />
        </MuiPickersUtilsProvider>
        </div>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src={props.hotel.hotels[0].hotel[0].hotelBasicInfo.roomImageUrl} /> */}
        </ListItemAvatar>
        <ListItemText
          // primary={props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* {props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelSpecial} */}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Travis Howard" src={props.hotel.hotels[1].hotel[0].hotelBasicInfo.roomImageUrl} /> */}
        </ListItemAvatar>
        <ListItemText
          // primary={props.hotel.hotels[1].hotel[0].hotelBasicInfo.hotelName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {/* {props.hotel.hotels[1].hotel[0].hotelBasicInfo.hotelSpecial} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Cindy Baker" src={props.hotel.hotels[2].hotel[0].hotelBasicInfo.roomImageUrl} /> */}
        </ListItemAvatar>
        <ListItemText
          // primary={props.hotel.hotels[2].hotel[0].hotelBasicInfo.hotelName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {/* {props.hotel.hotels[2].hotel[0].hotelBasicInfo.hotelSpecial} */}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </div>
  )
}

export const getStaticProps = async () => {
    const keyword = "大阪"
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