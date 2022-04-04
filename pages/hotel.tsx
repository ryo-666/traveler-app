import React, { FC, useState, useEffect} from 'react';
import fetch from "node-fetch";
import MediaList from '../component/MediaList';
import Link from 'next/link';
import { connect } from 'react-redux';
import store from '../store';
import DetailMedia from '../component/detailMedia';


const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
  };
};



const Hotel= ({ dispatch, keyword }) => {
  const [keywords, setKeywords] = useState("北海道");
  const [hoteldata, setHotelData] = useState(null)
  const [isDetail, setIsDetail] = useState(false);
  // const hotelNo = hoteldata[0].hotel[0].hotelBasicInfo.hotelNo 

  const searchRoom = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const keyword = keywords;
    dispatch({ type: "setKeyword", value: keywords })
    // console.log(keyword);
    // console.log(store.getState().keyword)
    try {
      const url = `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${keywords}&applicationId=${process.env.NEXT_PUBLIC_APPLICATIONID}&hits=10`
      const res = await fetch(url);
      const resData = await res.json();
      // console.log(resData);
      const hotelsdata = resData.hotels;
      setHotelData(hotelsdata)
      // console.log(hotelsdata)
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <div className="">
              <form onSubmit={searchRoom}>
                <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
                <button type="submit">検索</button>
              </form>
              <ul>
                {hoteldata &&
                  hoteldata.map((item, index) => (
                    <li key={index}>
                        <a>
                          <MediaList item={item}/>
                        </a>
                    </li>
                ))}
              </ul>
        </div>
        <style jsx>
          {`
            a {
              color: inherit;
              text-decoration: none;
            }

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

export default connect(mapStateToProps) (Hotel);