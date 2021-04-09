import axios from 'axios';

export default function callApi(){
    return axios({
        method:"GET",
        url:'https://606efb3f0c054f0017658138.mockapi.io/api/products',
    }).catch(err=>{
        console.log(err);
    })
}