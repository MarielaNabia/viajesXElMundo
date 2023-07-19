import axios from "axios";

let apiUrl="http://localhost:4000/"


const activitiesActions={  //es un objeto que tiene adentro dif metodos-->getAllCities, getOneCity

    activities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(apiUrl+`api/activities`)
            dispatch({type:'ACTIVITIES', payload:res.data.response.activities})
        }
    },
  
    activitiesPerItinerary: (id)=>{
        return async (dispatch, getstate)=>{
            try{
            const res=await axios.get(apiUrl+`api/activities/${id}`)
            dispatch({type:"ACTIVITIES_PER_ITINERARY", payload:res.data.response})
            console.log(res.data.response)
        }catch(error){
            console.log(error)
        }
        }
    },

    newActivity: (itinerary,activity,actPhoto)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post(apiUrl+'api/activities',{itinerary,activity,actPhoto})
            dispatch({type:'NEW_ACTIVITY', payload:answer.data.response.activities})
        }
    },
    deleteActivity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(apiUrl+`api/activities/${id}`)
                dispatch({type:'DEL_ACTIVITY', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    },

}
export default activitiesActions