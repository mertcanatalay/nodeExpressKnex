import response from "../../response.js";

const userList = async (req, res) => {
    try {
        let users = await req.db("Users").where("Status", null).select().catch(console.error);

        response.data = users;
        response.message = "SUCCESS";
        response.success = true;
        res.json(response)
        //console.log(req.tokenPayload);

    } catch (error) {
        console.log(error)
    }

}

export default userList;