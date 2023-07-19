import axios from "axios";

let apiUrl="http://localhost:4000/"

const itinerariesActions={  //es un objeto que tiene adentro dif metodos-->getAllCities, getOneCity
  
    itinerariesPerCity: (id)=>{
        return async (dispatch, getstate)=>{
            try{
            const res=await axios.get(apiUrl+`api/cityItineraries/${id}`)
            dispatch({type:"ITINERARIES_PER_CITY", payload:res.data.response})
            console.log(res.data.response)
        }catch(error){
            console.log(error)
        }
        }
    },

   /*  likelike: (id)=>{
        const token = localStorage.getItem("token") //esto entra por passport
        return async ()=>{
            try{
                let response=await axios.put(apiUrl+`api/cityItineraries/like/${id}`, {}, //body vacio para q me tome header
                {headers:{
                    Autorization : "Bearer "+token
                }})
                console.log(response)
                return response //es lo q tengo q guardar en carditineraris para modificar elcorazon
            }catch(error){
                console.log(error)
            }
        }
    }
 */
}
export default itinerariesActions