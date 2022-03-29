import React, { FC, useState, useEffect} from 'react';
import fetch from "node-fetch";
import MediaList from '../component/MediaList';

interface Props {

}

const Hotel:FC<Props> = (props:Props) => {
  // console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.hotelName);
  // console.log(props.hotel);
  console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.latitude);
  console.log(props.hotel.hotels[0].hotel[0].hotelBasicInfo.longitude);

  const [data, setData] = useState(null);
  const [keywords, setKeywords] = useState("北海道");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLlongitude] = useState(null);
  
  const handleChange = (e) => {
    setKeywords(() => e.target.value)
    console.log(keywords)
  }

  const getInformation = async() => {
    const keyword = keywords;
    const res = await fetch(
      new URL(`${process.env.NEXT_PUBLIC_SEARCH_API}&keyword=${keyword}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}&hits=10`)
    );
    const hotel = await res.json();
    setData(() => {
      hotel
    })
    console.log(hotel)
    return {
      props: {
        hotel,
      },
    };
  }

  // const getVacantinformation = async() => {
  //   const changeFormatDate1 = moment(date1).format('YYYY-MM-DD')
  //   const checkinDate = changeFormatDate1;
  //   const changeFormatDate2 = moment(date2).format('YYYY-MM-DD')
  //   const checkoutDate = changeFormatDate2;
  //   const latitudeName = latitude;
  //   const longitudeName = longitude;

  //   const res = await fetch(
  //     new URL(`${process.env.NEXT_PUBLIC_VACANT_API}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&latitude=${latitudeName}&longitude=${longitudeName}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}&hits=10`)
  //   )
  //   const data = await res.json();
  //   console.log(data)
  //   return data;
  // }

  return (
    <>
        <div className="main-contants">
         <input type="text" value={keywords} onChange={handleChange} />
          <p onClick={() => getInformation()}>検索</p>
          {/* <p onClick={() => getVacantinformation()}>空室ボタン</p> */}
        </div>
        <ul>
          {props.hotel.hotels.map((item, index) => (
            <li key={index}>
              <MediaList item={item}/>
            </li>
          ))}
        </ul>
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
      new URL(`${process.env.NEXT_PUBLIC_SEARCH_API}&keyword=${keyword}&applicationId=${process.env.NEXT_PUBLIC_ApplicationId}&hits=10`)
    );
    const hotel = await res.json();
    console.log(hotel)
    return {
      props: {
        hotel,
      },
    };

}

export default Hotel;