const jwt = require('jsonwebtoken');

module.exports = async (request, response, next) => {
    try{
        // get the token from authorization header
        const token = await request.headers.authorization.split(" ")[1];
        // check if the token matches the supposed origin i.e., "RANDOM-TOKEN".
        const decodeToken =  jwt.verify(token,"RANDOM-TOKEN");
        const user = decodeToken;

        // pass user i.e., verified user to the request header
        request.user = user;

        // pass down functionality to the endpoint
        next();

    }
    catch (error){
        response.status(401).json({
            error: new Error("Invalid request"),
        });
    }
}