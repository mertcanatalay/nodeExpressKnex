import jwt from "jsonwebtoken";
import response from "../response.js";

// const createToken = async (req, res, next) => {
//     try {
//         //const email = req.email
//         //console.log(req.email,"eddes")
//         const token = await jwt.sign({
//             //email: email,
//             ad: "mert",
//             exp: Math.floor(Date.now() / 1000) + 60,
//             issuer: 'wwww.mert.com'
//         }, 'secretKey')
//         response.data = token
//         next()
//     } catch (error) {
//         console.log(error)
//     }
//     console.log(response)

// };


const authenticatieToken = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            if (token == null) return res.status(401).json({ message: "Unauthorized." });
        }
        else {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, tokenPayload) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json(err);
                }
                //req.tokenPayload = tokenPayload;
                next();
            });
        }

    } catch (error) {
        console.log(error)
    }




};

export default authenticatieToken;