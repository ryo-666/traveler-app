import React, { FC, useState, useEffect} from 'react';
import fetch from "node-fetch";
import MediaList from '../component/MediaList';
import { connect } from 'react-redux';
import Header from '../component/header';
import Footer from '../component/footer';
import Modal from '../component/modal';


const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
  };
};



const Hotel= ({ dispatch, keyword }) => {
  const [keywords, setKeywords] = useState("北海道");
  const [hoteldata, setHotelData] = useState(null);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(null)

  const searchRoom = async(e: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const url = `${process.env.NEXT_PUBLIC_SUB_SEARCH_API}&keyword=${keywords}&applicationId=${process.env.NEXT_PUBLIC_APPLICATIONID}&hits=10`
      const res = await fetch(url);
      const resData = await res.json();
      // console.log(resData);
      const hotelsdata = resData.hotels;
      setHotelData(hotelsdata)
      // console.log(hotelsdata)
      // console.log(hoteldata[0].hotel[0].hotelBasicInfo.access)
      
    } catch (error) {
      console.log(error);
    }
  }

  const openModal = (value) => {
    setIndex(value)
    setModal(true);
  }


  useEffect(() => {
    searchRoom(null)
  }, [])

  return (
    <>
        <Header />
        <div className="main">
              <form onSubmit={searchRoom} className="form">
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
                            <MediaList item={item} index={index} onClick={() => openModal(index)} />
                        </a>
                    </li>
                ))}
              </ul>
        </div>
        {modal && 
          <Modal item={hoteldata} index={index} onClick={() => setModal(false)}/>
        }
        <Footer />
        <style jsx>
          {`
            .main {
              padding-top: 70px;
              padding-bottom: 100px;

            }

            a {
              color: inherit;
              text-decoration: none;
            }

            ul {
              list-style: none;
              margin: 0 auto;
              width: fit-content;
              padding: 0;
            }

            li {
              list-style: none;
              margin: 0;
              border-top: 1px solid #cdcdcd;
              cursor: pointer;
            }

            li:hover {
              opacity: 0.8;
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
          `}
        </style>
    </>
  )
}

export default connect(mapStateToProps) (Hotel);