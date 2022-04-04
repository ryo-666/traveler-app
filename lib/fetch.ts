import fetch from 'node-fetch'
import store from '../store';


export const getAllPostIds = async () => {
    const res = await fetch(`https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=日本&applicationId=${process.env.NEXT_PUBLIC_APPLICATIONID}`)
    const resData = await res.json();
    const hotelsdata = resData.hotels;

    return hotelsdata.map((item) => {
        return {
            params: {
                id: String(item.hotel[0].hotelBasicInfo.hotelNo)
            }
        }
    })
}

export const getPostData = async (id: string) => {
    const res = await fetch(`https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426?format=json&hotelNo=${id}&applicationId=${process.env.NEXT_PUBLIC_APPLICATIONID}`)
    const post = await res.json();
    return post;
}