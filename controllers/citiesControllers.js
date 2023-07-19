const Cities = require("../models/city")

const citiesControllers = {
    getCities: async (req, res) =>{
        let cities
        let error = null
        try{
            cities = await Cities.find()
            
        } catch (err) { error = err}
        res.json({
            response: error ? "ERROR" : { cities },
            success: error ? false : true,
            error: error,
        })
    },
    
    getOneCity: async (req, res) =>{
        const id = req.params.id
        let city
        let error = null
        try{
            city = await Cities.findOne({_id:id})
            
        } catch (err) { error = err}
        res.json({
            response: error ? "ERROR" : city,
            success: error ? false : true,
            error: error
        })
    },

    addCity: async (req, res) =>{
        const {name,country,image}=req.body.data
        let city
        let error = null
        try{
            city = await new Cities({
                name:name,
                country:country,
                image:image
            }).save()

        }catch(err){error = err}
        res.json({
            response: error ? "ERROR" : city,
            success: error ? false : true,
            error: error
        })
    },

    modifyCity: async (req, res) => {
        const id = req.params.id
        const city = req.body.data
        let citydb 
        let error = null
        try{
            citydb = await Cities.findOneAndUpdate({ _id:id}, city, { new:true })

        
    }catch(err){error = err}
    res.json({
        response: error ? "ERROR" : citydb,
        success: error ? false : true,
        error: error

        
    })

  },
  
 /*  likelike:async(req, res)=>{
    const id = req.params.id //llega por parametro desde axios. (actions?) tiene q ser el id del itinerario
    const user = req.user.id //llega pór respuesta desde passport
    await Cities.findOne({_id: id}) //busca un lugar especifico por id
        .then(city=>{ //podria ser cuanlquier nombre es el elemnt de citie
            if(city.likes.includes(user)){//si el usuario existe en el array de like
                city.findOneAndUpdate({_id: id}, {$pull:{likes:user}}, {new:true}) //{_id: id} actualiza el intinerario
                //pull le va a quitar el id del usuario del array de like(surge del modelo  ), y el new trae axctualizado el cambio
                 //pull son metodos de bd de mongose como push
                .then((response)=> res.json({success:true, response: response.like}))
                    .catch((error)=> console.log(error))
            }else{
                city.findOneAndUpdate({_id: id}, {$push:{likes:user}}, {new:true})
                .then((response)=> res.json({success:true, response: response.like}))
                .catch((error)=> console.log(error)) 
            }
        })
        .catch((error)=>res.json({success:false, response:error}))
            
}, */

  removeCity: async (req, res)=>{
    const id = req.params.id
    let city
    let error=null
    try{
        city = await Cities.findOneAndDelete({ _id:id})


}catch(err){error = err}
res.json({
    response: error ? "ERROR" : city,
    success: error ? false : true,
    error: error
 
})
  }
}
module.exports = citiesControllers