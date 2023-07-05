import axios from "axios"
import { BASE_URL } from "./Const";

const config = {
    "content-type" : "application/json" ,
    "accept" : "application/json"
}


export const callAPI = async (resource) => {
 const  {data} = await axios.get(`${BASE_URL}/${resource}`,config)   
 return data ;
}
