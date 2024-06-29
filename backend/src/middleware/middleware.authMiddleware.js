const jwt = require('jsonwebtoken');
const projectModel = require('../models/project.model');

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
      console.log(process.env.JWT_SECRET);
      const decoded = jwt.verify(token,  process.env.JWT_SECRET);
      req.userId = decoded.user._id;
      next();
    } catch (error) {
      console.error(error)
      res.status(401).json({ error: 'Invalid token' });
    }
};

async function verifyOwner(req, res, next) {
  try {
    const projectId= req.params.projectId;
    const tokenOwnerId = req.userId;
    const projectObj = await projectModel.findOne({
        _id : projectId
    }, {
        ownerId: 1
    });

    if(projectObj?.ownerId != tokenOwnerId) {
        return res.status(401).send({
            "result" : "Project Is not Owned by this user"
        })    
    }
    next();
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Something went wrong' });
  }
}

module.exports = {
  verifyOwner,
  verifyToken
};