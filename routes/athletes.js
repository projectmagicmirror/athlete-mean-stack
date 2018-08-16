var express 	= require('express');
var router	 	= express.Router();
var mongojs 	= require('mongojs');
var dbLoc		= require('../config/db');
var db 			= mongojs(dbLoc.url, ['athletes']);

//Get All Profiles
router.get('/athletes', function (req, res, next){
	db.athletes.find(function(err, athletes){
		if(err){
			res.send(err);
		} else {
			res.json(athletes);
		}
	});
});

//Get One Profile
router.get('/athlete/:id', function(req, res, next){
	db.athletes.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, athletes){
		if(err){
			res.send(err);
		} else {
			res.json(athletes);
		}
	})
})

//Save a profile
router.post('/athlete', function(req, res, next){
    var athlete = req.body;

    console.log(athlete);

    //Validation
    if( !athlete.name || !athlete.sport || !athlete.association || !athlete.dateOfBirth || !athlete.team || !athlete.gender || !athlete.about || !(athlete.isAlcoholic + '')){
    	res.status(400);
    	res.json({
    		"error": "Bad Data"
    	});
    } else {
        db.athletes.save(athlete, function(err, athletes){
            if(err){
                res.send(err);
            }
            res.json(athletes);
        });
    }
})

// //Delete profile
// router.delete('/athlete/:id', function(req, res, next){
// 	db.athletes.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, athlete){
// 		if(err){
// 			res.send(err);
// 		} else{
// 			res.json(athlete);
// 		}
// 	});
// })

//Update Profile
router.put('/athlete/:id', function(req, res, next){
	var athlete = req.body;
	var updateAthlete = {};

	//Validation step
	if(athlete.name)			{ updateAthlete.name = athlete.name; }
	if(athlete.isAlcoholic)		{ updateAthlete.isAlcoholic = athlete.isAlcoholic; }
	if(athlete.sport)			{ updateAthlete.sport = athlete.sport; }
	if(athlete.association)		{ updateAthlete.association = athlete.association; }
	if(athlete.dateOfBirth)		{ updateAthlete.dateOfBirth = athlete.dateOfBirth; }
	if(athlete.team)			{ updateAthlete.team = athlete.team; }
	if(athlete.gender)			{ updateAthlete.gender = athlete.gender; }
	if(athlete.about)			{ updateAthlete.about = athlete.about; }

	if(!updateAthlete){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});

	} else {
		db.athletes.update({_id: mongojs.ObjectId(req.params.id)}, updateAthlete, {}, function(err, athlete){
			if(err){
				res.send(err);
			} else {
				res.json(athlete);
			}
		});
	}
})

module.exports = router;