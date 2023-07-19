const Activities = require('../models/activity')

const activityController = { 

    getAllActivities: async (req,res) => { 
        let activities 
        let error = null 
        try { 
            activities = await Activities.find() 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activities}, 
            success: error ? false:true, 
            error: error 
        })
    },

    uploadActivity: async (req,res) => {
        const {itineraryId,name,photo} = req.body.data
        new Activities ({itineraryId,name,photo}).save()
        .then(response => res.json({response}))
    },

    deleteActivity: async (req,res) => {
        const id = req.params.id
        await Activities.findOneAndDelete({_id:id})
    },

    modifyActivity: async (req,res) => {
        const id = req.params.id
        const acts = req.body
        await Activities.findOneAndUpdate({_id:id},acts)
    },

    oneActivity: async (req,res) => { 
        let itId = req.params.id 
        let activity 
        let error = null 
        try { 
            activity = await Activities.findOne({itineraryId:itId}) 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activity}, 
            success: error ? false:true, 
            error: error 
        })
    },

    findActFromTin: async (req,res) => { 
        let itineraryId = req.params.id
        //console.log(itineraryId)
        let activities 
        let error = null 
        try { 
            activities = await Activities.find({itinerary:itineraryId}) 
            //console.log(activities)
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activities}, 
            success: error ? false:true, 
            error: error 
        })
    }

}

module.exports = activityController