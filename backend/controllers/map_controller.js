const mapService = require('../service/maps.service');
const { validationResult } = require('express-validator');


module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found' });
    }
}

module.exports.getDistanceAndTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {origin, destination } = req.query;

    try {
        const distanceAndTime = await mapService.getDistance(origin, destination);
        res.status(200).json(distanceAndTime);
    } catch (error) {
        res.status(404).json({ message: 'Distance and time not found' });
    }
}

module.exports.getAutoSuggestions = async (req, res, next) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    
    const { input } = req.query;

    try {
        const autoSuggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(autoSuggestions);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while fetching auto suggestions' }); 
        
    }
}