import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface Props {
    item: any;
    index: number;
    onClick?: (value: number) => void;
}

const MediaList:FC<Props> = (props: Props) => {

  // console.log(props);
  return (
    <List onClick={() => props.onClick(props.index)} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.item.hotel[0].hotelBasicInfo.roomImageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary=""
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.item.hotel[0].hotelBasicInfo.hotelName}<br />
              </Typography>
              {props.item.hotel[0].hotelBasicInfo.hotelSpecial}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
  )
}

export default MediaList