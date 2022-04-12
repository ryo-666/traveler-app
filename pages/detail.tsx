import React, { FC, useEffect, useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import DetailMedia from '../component/detailMedia';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {

}

const Detail:FC<Props> = (props: Props) => {
  const [keywords, setKeywords] = useState("北海道");
  const [hoteldata, setHotelData] = useState(null)
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState(null);
  

  const getInfo = async(e: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const url = `${process.env.NEXT_PUBLIC_SUB_SEARCH_API}&keyword=${keywords}&applicationId=${process.env.NEXT_PUBLIC_APPLICATIONID}&hits=10&page=${page}`
      const res = await fetch(url);
      const resData = await res.json();
      const hotelsdata = resData.hotels;
      const pinfo = resData.pagingInfo;
      setHotelData(hotelsdata)
      setPageInfo(pinfo)

      
    } catch (error) {
      console.log(error);
    }
  }

  const changePage = (page) => {
    setPage(page)
    getInfo(null)
  }

  useEffect(() => {
    getInfo(null)
  },[])

  return (
    <>
      <Header />
      <div className='main'>
        <form onSubmit={getInfo} className="form">
          <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 200 200"><g transform="translate(-14.472 -263.847)"><path d="M144.663,286.184a76.265,76.265,0,1,0-14.4,119.046L183.534,458.5a18.1,18.1,0,1,0,25.591-25.591l-53.269-53.268a76.265,76.265,0,0,0-11.195-93.456ZM124.12,306.728a47.211,47.211,0,1,1-66.767,0,47.212,47.212,0,0,1,66.767,0Z" transform="translate(0 0)"/></g></svg>
          </button>
        </form>
        <ul>
          {hoteldata &&
            hoteldata.map((item, index) => (
              <li key={index}>
                  <a>
                      <DetailMedia item={item}/>
                  </a>
              </li>
          ))}
        </ul>
        <div className='pager'>
          <Stack spacing={2}>
            <Pagination page={page} count={10} color="primary" onChange={(e, page) => changePage(page)} />
          </Stack>
        </div>
      </div>
      <Footer />
      <style jsx>
          {`
            .box {
              padding-top: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .main {
              padding-top: 70px;
              padding-bottom: 100px;
            }

            .spacer {
              margin-bottom: 15px;
            }

            a {
              color: inherit;
              text-decoration: none;
            }

            ul {
              list-style: none;
              max-width: 1500px;
              margin: 0 auto;
              padding: 0;
            }

            @media screen and (min-width: 768px) {
              ul {
                display: flex;
                flex-wrap: wrap;
                width: 90%
              }
            }

            li {
              list-style: none;
              margin: 0 20px 20px 20px;
            }

            @media screen and (min-width: 768px) {
              li {
                margin: 0 2% 20px 0;
                width: 32%;
              }

              li:nth-child(3n) {
                margin-right: 0;
              }
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

            .form {
              margin: 30px auto;
              width: fit-content;
              position: relative;
            }

            .form input {
              padding: 10px 20px;
              border: 1px solid gray;
              border-radius: 25px;
              font-size: 15px
            }

            .form button {
              background-color: transparent;
              border: none;
              position: absolute;
              right: 8px;
              bottom: 5px;
              cursor: pointer;
              z-index: 3;
            }

            body {
                margin: 0;
            }

            .pager {
              width: fit-content;
              margin: 50px auto 0;
            }
          `}
      </style>
    </>
  )
}


export default Detail