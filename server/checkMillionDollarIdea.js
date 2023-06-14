const checkMillionDollarIdea = (req, res, next) => {
    const idea = req.body;
    let cost;

    if (idea.numWeeks && typeof Number(idea.numWeeks) === 'number' && idea.weeklyRevenue && typeof Number(idea.weeklyRevenue) === 'number') {
        cost = idea.numWeeks * idea.weeklyRevenue;
    }

    if(!cost || cost < 1000000) {
        res.status(400).send();
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
