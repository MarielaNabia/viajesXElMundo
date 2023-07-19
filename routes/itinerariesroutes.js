const itinerariesRouter = require(`express`).Router();

const itinerariesControllers = require(`../controllers/itinerariescontrollers`);

const {getAllItineraries, getOneItinerary, uploadItinerary, deleteItinerary, modifyItinerary, getCityItineraries} = itinerariesControllers; //, likelike 

itinerariesRouter.route(`/itineraries`)
.get(getAllItineraries)
.post(uploadItinerary)

itinerariesRouter.route(`/itineraries/:id`)
.delete(deleteItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

itinerariesRouter.route("/cityItineraries/:id")
.get(getCityItineraries)

//like route
/* Router.route("/cityItineraries/like/:id")
.put(passport.authenticate("jwt", {session:false},likelike)) */

module.exports = itinerariesRouter;