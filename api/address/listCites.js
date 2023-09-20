import response from "../../response.js";

const listCities = async (req, res) => {
    try {
        let cities = await req.db("Cities").select().catch(console.error);

        response.data = cities;
        response.message = "SUCCESS";
        response.success = true;
        res.json(response)

    } catch (error) {
        console.log(error)
    }

}

export default listCities;