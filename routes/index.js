let express = require('express');
let router = express.Router();
let itGoJson = []
let index = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Creating a resource
//router.post('/resources', (req, res) => {
    router.post('/resources', (req, res) => {
    // Validate request body
    if (!req.body.userName || !req.body.id || !req.body.currComment) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if userName is a string
    if (typeof req.body.userName !== 'string') {
        return res.status(400).json({ message: 'userName must be a string' });
    }

    // Check if id is a valid date
    if (!Date.parse(req.body.id)) {
        return res.status(400).json({ message: 'id must be a valid date' });
    }

    // Check if currComment is a string
    if (typeof req.body.currComment !== 'string') {
        return res.status(400).json({ message: 'currComment must be a string' });
    }

    // If all validation checks pass, create resource
    const name = req.body.userName;
    const date = req.body.id;
    let resource = {
        commentField: req.body.currComment,
        username: name,
        id: date,
        postId: index,
    };
    index++;
    itGoJson.push(resource);
    res.json(itGoJson);
});


// Getting a single resource
// for example /resources/123 where 123 is some identifier to search for a resource
router.delete("/del/:id", (req, res) => {
    const resourceId = Number(req.params.id);

    // Find the index of the resource in the itGoJson array
    const index = itGoJson.findIndex(w => w.postId === resourceId);

    // If the resource is not found, return a 404 response
    if (index === -1) {
        return res.status(404).json({msg: `Resource not found. id ${resourceId}`});
    }
    // Remove the resource from the array
    itGoJson.splice(index, 1);

    // Return a success response
    res.status(200).json({msg: "Success"});
});

router.get('/resources/:id', (req,
                              res) => {
    const resourceId = req.params.id;
    // Lookup the resource and if not found, return 404
    //         res.status(404).send('Resource not found.');
    // Else, return the resource object -  make sure to convert to JSON response
    // we return some fixed value for demonstration purpose

    const resource = itGoJson.filter(w => w.id === resourceId);
    //res.json(resource);
    res.status(200).json(resource)
});
module.exports = router;
