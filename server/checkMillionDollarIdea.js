//Middleware to check idea's value
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

//Export to use in /ideas routes
module.exports = checkMillionDollarIdea;
