import md5 from "md5";
import response from "../../response.js";
//import createToken from "../../middlewares/authMiddleware.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        if (req.body && req.body.email) {
            var email = req.body.email;
            var password = req.body.password;
            var passwordEncoded = md5(password);
            var userInfo = await req.db('Users').where("Email", email).select().first().catch(console.error);
            //res.json(userInfo)

            if (email == userInfo.Email && passwordEncoded == userInfo.Password) {

                const accessToken = jwt.sign({
                    email: email,
                    issuer: 'wwww.mert.com'
                }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' }
                )
                response.data = accessToken;
                response.success = true;
                response.message = "LOGIN_SUCCESS";
                return res.json({ response, userInfo })

            }
            else {
                response.data = null;
                response.success = false;
                response.message = "LOGIN_FAILED";
                return res.json(response);
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export default login;