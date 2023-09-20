import response from "../../response.js";

const userDelete = async (req, res) => {
    try {
        var id = req.body.id;
        let users = await req.db("Users").where("Id", id).select().first().catch(console.error);

        if (users) {
            await req.db("Users").where("Id", id).update({
                Status: 1
            }).catch(console.error);

            response.message = "SUCCESS_DELETE";
            response.success = true;
            res.json(response)
        }
        else {
            response.message = "FAILED_DELETE";
            response.success = false;
            res.json(response)
        }

    } catch (error) {
        console.log(error)
    }

}

export default userDelete;