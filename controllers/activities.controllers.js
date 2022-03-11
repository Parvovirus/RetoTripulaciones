const mongoose = require("mongoose");
const activityModel = require("../models/activity.model");


const activity = {

    getActivities: async (req, res) => {
        const activities = await activityModel.find();
        res.json(activities);
    },

    getOneActivity: async (req, res) => {
        const { idActivity } = req.body;
        const oneActivity = await activityModel.findOne({ idActivity });
        res.json(oneActivity)
    },

};

module.exports = activity;