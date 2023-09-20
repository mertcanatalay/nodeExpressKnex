import md5 from 'md5';
import { v4 as uuidv4 } from 'uuid';
import response from '../../response.js';

const register = async (req, res) => {
    try {
        var name = req.body.name;
        var surname = req.body.surname;
        var phone = req.body.phone;
        var email = req.body.email;
        var password = req.body.password;
        var passwordEncoded = md5(password);
        var userInfo = await req.db('Users').where("Email", email).select().first().catch(console.error);

        if (userInfo?.Email != email) {
            let userCreate = await req.db("Users").insert({
                Id: uuidv4(),
                Name: name,
                Surname: surname,
                Email: email,
                Password: passwordEncoded,
                Phone: phone,
            }).catch(console.error);

            response.success = true;
            response.message = "SUCCESS";
            return res.json(response)
        }
        else {
            response.success = false;
            response.message = "REGISTER_FAILD";
            return res.json(response)
        }

    } catch (error) {
        console.log(error)
    }
}

export default register;