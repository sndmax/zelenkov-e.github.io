import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    URL
  } from "../constants/infoConstants";



// track - выбранный эл списка 
// по клику на кот в деталях отображается подробн инфо
export default function setTrack(track){
    // alert(track.author)
    return{
        type: 'SET_TRACK',
        payload: track
    }
}


export function getNews() {

// console.log('bye')
return{
    type: GET_NEWS_SUCCESS,
    payloadNews: 'bye'
}
    // return (dispatch) => {
    //   dispatch({
    //     type: GET_NEWS_REQUEST
    //   })
  
  
    //  axios.get(URL)
    //     .then(
    //         (res) =>{
    //             return  dispatch({
    //               type: GET_NEWS_SUCCESS,
    //               payloadElement: res.data
             
    //           })
  
    //         }
         
    //     )
    // }
  }